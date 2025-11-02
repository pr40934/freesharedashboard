/* eslint-disable no-control-regex */
import { use, useState, useEffect } from "react";
import VideoComponentCard from "../../common/VideoComponentCard";
import { useDropzone } from "react-dropzone";
import UploadPreviewModal from "./UploadPreviewModal";
import { getPresignedUrls, completeMultipartUpload } from "../../../services/api";

interface DropZoneProps {
  onFileNameChange: (fileName: string) => void;
  onThumbnailGenerated?: (thumbnail: string) => void;
  onVideoFileChange?: (file: File, videoId: number) => void;
  onVideoUpdated?: (file: File | null) => void; // New prop to pass video file to thumbnail
  video_Id : number | null
  isEdit : boolean
  videoUrl : URL | string | null
}

const DropzoneVideoComponent: React.FC<DropZoneProps> = ({ 
  onFileNameChange, 
  onThumbnailGenerated,
  onVideoFileChange,
  video_Id,
  isEdit,
  videoUrl
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [uploadedVideo, setUploadedVideo] = useState<string | URL | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showDeleteModal, setShowDeleteModal] = useState(false);


  const generateTimestamp = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const milliseconds = now.getMilliseconds().toString().padStart(3, '0');

    return `${year}-${month}-${day}-tm-${hours}-${minutes}-${seconds}-${milliseconds}`;
  };

  const sanitizeFileName = (originalFileName: string) => {
    const fileNameParts = originalFileName.split('.');
    const baseName = fileNameParts.slice(0, -1).join('.');
    const fileExtension = fileNameParts[fileNameParts.length - 1];
    
    const sanitizedName = baseName
      .replace(/\s+/g, '-') // spaces → -
      .replace(/_/g, '-') // underscores → -
      .replace(/[!#$%&'()*+,/:;<=>?@[\\\]^`{|}~#"']/g, '-') // all special chars (incl " and ')
      .replace(/[\x00-\x1F\x7F]/g, '-') // control chars
      .replace(/[^\x00-\x7F]+/g, '-') // non-ASCII
      .replace(/\/\/+/g, '-') // double slashes
      .replace(/\.\.+/g, '-') // double dots
      .replace(/-+/g, '-') // multiple dashes
      .replace(/^[-.]+|[-.]+$/g, ''); // trim leading/trailing - or .
    return `${sanitizedName}.${fileExtension}`;
  };

  const onDrop = async (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const originalFile = acceptedFiles[0];
      onFileNameChange(originalFile.name);
      const timestamp = generateTimestamp();
      const newFileName = sanitizeFileName(originalFile.name);
      const finalFileName = `${newFileName.replace(/\.[^/.]+$/, '')}-${timestamp}.${newFileName.split('.').pop()}`;
      const newFile = new File([originalFile], finalFileName, { type: originalFile.type });
      setFile(newFile);
      setIsPreviewOpen(true);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    try {
      setUploadedVideo(URL.createObjectURL(file));
      setFile(null);
      setIsPreviewOpen(false);
      setUploadProgress(0);

      const response = await getPresignedUrls(file, video_Id);
      if (!response) return;

      const { uploadId, parts, videoId } = response;
      
      // Pass video file and videoId to parent IMMEDIATELY
      if (videoId) {
        onVideoFileChange?.(file, videoId);
      }

      const thumbnail = await generateThumbnail(file);
      if (onThumbnailGenerated) {
        onThumbnailGenerated(thumbnail);
      }

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
        setUploadProgress(Math.round(((i + 1) / totalChunks) * 100));
      }

      console.log('while completing multi :: ', videoId)

      await completeMultipartUpload({ filename: file.name, uploadId, parts: uploadedParts, uploadedVideoId: videoId });

    } catch (err) {
      console.error("Upload failed:", err);
    }
  };

  useEffect(() => {
    if(isEdit === true){
      console.log('==================================')
      console.log('isEdit :: ',isEdit)
      console.log('==================================')
      setUploadedVideo(`https://d1f96o9nypo8e0.cloudfront.net/${videoUrl}`);
    }
    else{
      console.log('==================================')
      console.log(' else isEdit :: ',isEdit)
      setUploadedVideo(null);
      console.log('==================================')
    }
  }, [isEdit, videoUrl]);


  const handleCancel = () => {
    setFile(null);
    setIsPreviewOpen(false);
  };

  const confirmDelete = () => {
    setUploadedVideo(null);
    setShowDeleteModal(false);
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

  const generateThumbnail = async (videoFile: File, frameCount = 10): Promise<string> => {
    return new Promise<string>((resolve) => {
      const video = document.createElement("video");
      video.src = URL.createObjectURL(videoFile);
      video.crossOrigin = "anonymous";

      video.addEventListener("loadeddata", () => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d")!;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        const frames = Array.from({ length: frameCount }, (_, i) =>
          (video.duration / frameCount) * i
        );

        video.currentTime = frames[0];
        video.addEventListener("seeked", function capture() {
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
          const thumbnailDataUrl = canvas.toDataURL("image/jpeg");
          resolve(thumbnailDataUrl);
          video.removeEventListener("seeked", capture);
        });
      });
    });
  };

  return (
    <VideoComponentCard title="Dropzone">
      {!uploadedVideo ? (
      <div
        {...getRootProps()}
        className={`transition border border-gray-300 border-dashed cursor-pointer dark:hover:border-brand-500 dark:border-gray-700 rounded-xl hover:border-brand-500 p-7 lg:p-10 ${
          isDragActive
            ? "border-brand-500 bg-gray-100 dark:bg-gray-800"
            : "border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-900"
        }`}
        id="demo-upload"
      >
        <input {...getInputProps()} />

        <div className="dz-message flex flex-col items-center m-0!">
            <>
              <div className="mb-[22px] flex justify-center">
                <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-400">
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

              <h4 className="mb-3 font-semibold text-gray-800 text-theme-xl dark:text-white/90">
                {isDragActive ? "Drop Files Here" : "Drag & Drop Files Here"}
              </h4>

              <span className="text-center mb-5 block w-full max-w-[290px] text-sm text-gray-700 dark:text-gray-400">
                Drag and drop your MP4, WebM, AVI, MOV, MKV, FLV, or OGG video files here or browse
              </span>

              <span className="font-medium underline text-theme-sm text-brand-500">
                Browse File
              </span>
            </>
          
        </div>
      </div>
      ) 
      : 
      (
        <div className="w-[100%] flex justify-center">
          <div className="relative w-full max-w-[500px] flex align-center justify-center">
            <video
              src={uploadedVideo}
              controls
              className="h-[400px] w-full rounded-lg bg-black"
            />
            {uploadProgress > 0 && uploadProgress < 100 && (
              <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
            )}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowDeleteModal(true);
              }}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl w-[350px] text-center">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Delete Video?</h3>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              Are you sure you want to delete this video?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-md"
              >
                No
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-500 text-white rounded-md"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}

      <UploadPreviewModal file={file} isOpen={isPreviewOpen} onUpload={handleUpload} onCancel={handleCancel} />
    </VideoComponentCard>
  );
};

export default DropzoneVideoComponent;