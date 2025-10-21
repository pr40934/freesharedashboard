import { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import { useDropzone } from "react-dropzone"; 
import UploadPreviewModal from "./UploadPreviewModal"; 
import { getPresignedUrls, completeMultipartUpload } from "../../../services/api"; 

const DropzoneVideoComponent: React.FC = () => {

  const [file, setFile] = useState<File | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
      setIsPreviewOpen(true);
    }
  };

const handleUpload = async (e: React.FormEvent) => {
  e.preventDefault(); // prevent page refresh
  if (!file) return;
  console.log("Uploading:", file.name);

  try {
    const response = await getPresignedUrls(file);
    if (!response) {
      console.error("No presigned URLs returned");
      return;
    }

    const { uploadId, parts } = response;
    const chunkSize = 5 * 1024 * 1024;
    const totalChunks = Math.ceil(file.size / chunkSize);

    const uploadedParts: { ETag: string; PartNumber: number }[] = [];

    for (let i = 0; i < totalChunks; i++) {
      const start = i * chunkSize;
      const end = Math.min(start + chunkSize, file.size);
      const chunk = file.slice(start, end);

      const res = await fetch(parts[i].url, {
        method: "PUT",
        headers: { "Content-Type": file.type },
        body: chunk,
      });

      const etag = res.headers.get("ETag");
      if (!etag) throw new Error(`No ETag returned for part ${i + 1}`);
      uploadedParts.push({ ETag: etag.replace(/"/g, ""), PartNumber: i + 1 });

      console.log(`Uploaded part ${i + 1}/${totalChunks}`);
    }

    // ✅ Use frontend API function for completing multipart upload
    await completeMultipartUpload({
      filename: file.name,
      uploadId,
      parts: uploadedParts,
    });

    console.log("✅ Upload complete!");
    setFile(null);
    setIsPreviewOpen(false);
  } catch (err) {
    console.error("❌ Upload failed:", err);
  }
};



  const handleCancel = () => {
    setFile(null);
    setIsPreviewOpen(false);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "video/mp4": [],
      "video/webm": [],
      "video/avi": [],
      "video/mov": [],
      "video/x-matroska": [],
      "video/quicktime": [],
      "video/x-flv": [],
      "video/ogg": [],
    },
  });
  return (
    <ComponentCard title="Dropzone">
      <div className="transition border border-gray-300 border-dashed cursor-pointer dark:hover:border-brand-500 dark:border-gray-700 rounded-xl hover:border-brand-500">
        <form
          {...getRootProps()}
          className={`dropzone rounded-xl   border-dashed border-gray-300 p-7 lg:p-10
        ${
          isDragActive
            ? "border-brand-500 bg-gray-100 dark:bg-gray-800"
            : "border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-900"
        }
      `}
          id="demo-upload"
        >
          {/* Hidden Input */}
          <input {...getInputProps()} />

          <div className="dz-message flex flex-col items-center m-0!">
            {/* Icon Container */}
            <div className="mb-[22px] flex justify-center">
              <div className="flex h-[68px] w-[68px]  items-center justify-center rounded-full bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-400">
                <svg
                  className="fill-current"
                  width="29"
                  height="28"
                  viewBox="0 0 29 28"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.5019 3.91699C14.2852 3.91699 14.0899 4.00891 13.953 4.15589L8.57363 9.53186C8.28065 9.82466 8.2805 10.2995 8.5733 10.5925C8.8661 10.8855 9.34097 10.8857 9.63396 10.5929L13.7519 6.47752V18.667C13.7519 19.0812 14.0877 19.417 14.5019 19.417C14.9161 19.417 15.2519 19.0812 15.2519 18.667V6.48234L19.3653 10.5929C19.6583 10.8857 20.1332 10.8855 20.426 10.5925C20.7188 10.2995 20.7186 9.82463 20.4256 9.53184L15.0838 4.19378C14.9463 4.02488 14.7367 3.91699 14.5019 3.91699ZM5.91626 18.667C5.91626 18.2528 5.58047 17.917 5.16626 17.917C4.75205 17.917 4.41626 18.2528 4.41626 18.667V21.8337C4.41626 23.0763 5.42362 24.0837 6.66626 24.0837H22.3339C23.5766 24.0837 24.5839 23.0763 24.5839 21.8337V18.667C24.5839 18.2528 24.2482 17.917 23.8339 17.917C23.4197 17.917 23.0839 18.2528 23.0839 18.667V21.8337C23.0839 22.2479 22.7482 22.5837 22.3339 22.5837H6.66626C6.25205 22.5837 5.91626 22.2479 5.91626 21.8337V18.667Z"
                  />
                </svg>
              </div>
            </div>

            {/* Text Content */}
            <h4 className="mb-3 font-semibold text-gray-800 text-theme-xl dark:text-white/90">
              {isDragActive ? "Drop Files Here" : "Drag & Drop Files Here"}
            </h4>

            <span className=" text-center mb-5 block w-full max-w-[290px] text-sm text-gray-700 dark:text-gray-400">
              Drag and drop your MP4, WebM, AVI, MOV, MKV, FLV, or OGG video files here or browse
            </span>

            <span className="font-medium underline text-theme-sm text-brand-500">
              Browse File
            </span>
          </div>
        </form>
      </div>

      <UploadPreviewModal
        file={file}
        isOpen={isPreviewOpen}
        onUpload={handleUpload}
        onCancel={handleCancel}
      /> 

    </ComponentCard>
  );
};

export default DropzoneVideoComponent;
