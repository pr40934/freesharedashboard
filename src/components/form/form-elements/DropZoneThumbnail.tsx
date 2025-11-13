// // import { useState, useEffect, useRef } from "react";
// // import ComponentCard from "../../common/ComponentCard";
// // import { useDropzone } from "react-dropzone";
// // import { saveThumbnailImagePath, thumbnailuploadToS3 } from "../../../services/api";

// // interface DropzoneThumbnailProps {
// //   filePreview: string | null;
// //   ThumbnailId?: (id: string) => void;
// //   videoFile?: File | null;
// //   videoId?: number | null;
// // }

// // const DropzoneThumbnailComponent: React.FC<DropzoneThumbnailProps> = ({ 
// //   filePreview, 
// //   ThumbnailId,
// //   videoFile,
// //   videoId
// // }) => {
// //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
// //   const [presignedUrl, setPresignedUrl] = useState<string | null>(null);
// //   const [currentThumbnail, setCurrentThumbnail] = useState<string | null>(filePreview || null);
// //   const [showReplacePreview, setShowReplacePreview] = useState(false);
// //   const [replacePreview, setReplacePreview] = useState<string | null>(null);
// //   const fileInputRef = useRef<HTMLInputElement>(null);

// //   const generateTimestamp = () => {
// //     const now = new Date();
// //     const year = now.getFullYear();
// //     const month = (now.getMonth() + 1).toString().padStart(2, '0');
// //     const day = now.getDate().toString().padStart(2, '0');
// //     const hours = now.getHours().toString().padStart(2, '0');
// //     const minutes = now.getMinutes().toString().padStart(2, '0');
// //     const seconds = now.getSeconds().toString().padStart(2, '0');
// //     const milliseconds = now.getMilliseconds().toString().padStart(3, '0');

// //     return `${year}-${month}-${day}-tm-${hours}-${minutes}-${seconds}-${milliseconds}`;
// //   };

// //   function base64ToFile(base64String: string, filename: string): File {
// //     const arr = base64String.split(",");
// //     const mime = arr[0].match(/:(.*?);/)![1];
// //     const bstr = atob(arr[1]);
// //     const u8arr = new Uint8Array(bstr.length);
// //     for (let i = 0; i < bstr.length; i++) u8arr[i] = bstr.charCodeAt(i);
// //     return new File([u8arr], filename, { type: mime });
// //   }

// //   useEffect(() => {
// //     setCurrentThumbnail(filePreview);
// //   }, [filePreview]);

// //   useEffect(() => {
// //     const uploadPreviewThumbnail = async () => {
// //       if (!filePreview) return;
// //       const file = base64ToFile(filePreview, `thumbnail-${generateTimestamp()}.jpg`);
// //       try {
// //         const url = await saveThumbnailImagePath(file.name, file.type, videoId);
// //         ThumbnailId?.(url?.thumbnail_id);
// //         setPresignedUrl(url?.url);
// //         await thumbnailuploadToS3(url?.url, file);
// //         console.log("✅ Thumbnail uploaded:", file.name);
// //       } catch (err) {
// //         console.error("Thumbnail upload failed:", err);
// //       }
// //     };
// //     uploadPreviewThumbnail();
// //   }, [filePreview, videoId]);

// //   const onDrop = async (acceptedFiles: File[]) => {
// //     const file = acceptedFiles[0];
// //     if (!file) return;
// //     try {
// //       const url = await saveThumbnailImagePath(file.name, file.type, videoId);
// //       setPresignedUrl(url);
// //       await thumbnailuploadToS3(url, file);
// //     } catch (err) {
// //       console.error("❌ Error uploading dropped thumbnail:", err);
// //     }
// //   };

// //   const { getRootProps, getInputProps, isDragActive } = useDropzone({
// //     onDrop,
// //     accept: {
// //       "image/png": [],
// //       "image/jpeg": [],
// //       "image/webp": [],
// //       "image/svg+xml": [],
// //     },
// //   });

// //   const handleReplaceClick = () => {
// //     fileInputRef.current?.click();
// //   };

// //   const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     e.preventDefault();
// //     const file = e.target.files?.[0];
// //     if (!file) return;

// //     const reader = new FileReader();
// //     reader.onload = (event) => {
// //       const base64 = event.target?.result as string;
// //       setReplacePreview(base64);
// //       setShowReplacePreview(true);
// //     };
// //     reader.readAsDataURL(file);
    
// //     // Reset input value so same file can be selected again
// //     e.target.value = '';
// //   };

// //   const handleConfirmReplace = async () => {
// //     if (!replacePreview) return;
    
// //     const file = base64ToFile(replacePreview, `thumbnail-${generateTimestamp()}.jpg`);
// //     try {
// //       const url = await saveThumbnailImagePath(file.name, file.type, videoId);
// //       ThumbnailId?.(url?.thumbnail_id);
// //       setPresignedUrl(url?.url);
// //       await thumbnailuploadToS3(url?.url, file);
// //       setCurrentThumbnail(replacePreview);
// //       setShowReplacePreview(false);
// //       setReplacePreview(null);
// //       console.log("✅ Thumbnail replaced:", file.name);
// //     } catch (err) {
// //       console.error("❌ Error replacing thumbnail:", err);
// //     }
// //   };

// //   const handleGenerateThumbnail = async () => {
// //     if (!videoFile) {
// //       console.warn("No video file available");
// //       return;
// //     }

// //     try {
// //       const thumbnail = await generateThumbnailFromVideo(videoFile);
// //       setReplacePreview(thumbnail);
// //       setShowReplacePreview(true);
// //     } catch (err) {
// //       console.error("❌ Error generating thumbnail:", err);
// //     }
// //   };

// //   const generateThumbnailFromVideo = async (videoFile: File, frameCount = 10): Promise<string> => {
// //     return new Promise<string>((resolve, reject) => {
// //       const video = document.createElement("video");
// //       video.src = URL.createObjectURL(videoFile);
// //       video.crossOrigin = "anonymous";

// //       video.addEventListener("loadeddata", () => {
// //         const canvas = document.createElement("canvas");
// //         const context = canvas.getContext("2d");
// //         if (!context) {
// //           reject(new Error("Could not get canvas context"));
// //           return;
// //         }

// //         canvas.width = video.videoWidth;
// //         canvas.height = video.videoHeight;

// //         const frames = Array.from({ length: frameCount }, (_, i) =>
// //           (video.duration / frameCount) * i
// //         );

// //         video.currentTime = frames[0];
// //         video.addEventListener("seeked", function capture() {
// //           context.drawImage(video, 0, 0, canvas.width, canvas.height);
// //           const thumbnailDataUrl = canvas.toDataURL("image/jpeg");
// //           resolve(thumbnailDataUrl);
// //           video.removeEventListener("seeked", capture);
// //           URL.revokeObjectURL(video.src);
// //         });
// //       });

// //       video.addEventListener("error", () => {
// //         reject(new Error("Could not load video"));
// //       });
// //     });
// //   };

// //   return (
// //     <ComponentCard title="Thumbnail Upload">
// //       {currentThumbnail ? (
// //         <div className="transition border border-gray-300 border-dashed cursor-pointer dark:hover:border-brand-500 dark:border-gray-700 rounded-xl hover:border-brand-500">
// //             <div className="relative">
// //               <img src={currentThumbnail} alt="Thumbnail preview" className="w-full object-contain h-[300px]" />
// //               <div className="absolute bottom-3 left-0 right-0 flex gap-2 justify-center">
// //                 <button
// //                   type="button"
// //                   onClick={(e) => {
// //                     e.preventDefault();
// //                     e.stopPropagation();
// //                     handleReplaceClick();
// //                   }}
// //                   className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600"
// //                 >
// //                   Replace
// //                 </button>
// //                 {videoFile && (
// //                   <button
// //                     type="button"
// //                     onClick={(e) => {
// //                       e.preventDefault();
// //                       e.stopPropagation();
// //                       handleGenerateThumbnail();
// //                     }}
// //                     className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600"
// //                   >
// //                     Generate
// //                   </button>
// //                 )}
// //               </div>
// //             </div>
          
// //         </div>
// //       ) 
// //       : 
// //       (
// //         <div className="transition border border-gray-300 border-dashed cursor-pointer dark:hover:border-brand-500 dark:border-gray-700 rounded-xl hover:border-brand-500">
// //           <div
// //             {...getRootProps()}
// //             className={`dropzone rounded-xl border-dashed border-gray-300 p-7 lg:p-10 ${
// //               isDragActive
// //                 ? "border-brand-500 bg-gray-100 dark:bg-gray-800"
// //                 : "border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-900"
// //             }`}
// //           >
// //             <input {...getInputProps()} />
// //             <div className="dz-message flex flex-col items-center m-0!">
// //               <h4 className="mb-3 font-semibold text-gray-800 text-theme-xl dark:text-white/90">
// //                 {isDragActive ? "Drop Files Here" : "Drag & Drop Files Here"}
// //               </h4>
// //               <span className="text-center mb-5 block w-full max-w-[290px] text-sm text-gray-700 dark:text-gray-400">
// //                 Drag and drop your PNG, JPG, WebP, SVG images here or browse
// //               </span>
// //               <span className="font-medium underline text-theme-sm text-brand-500">Browse File</span>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       <input
// //         ref={fileInputRef}
// //         type="file"
// //         accept="image/png,image/jpeg,image/webp,image/svg+xml"
// //         onChange={handleFileSelect}
// //         className="hidden"
// //       />

// //       {showReplacePreview && (
// //         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
// //           <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl w-[400px]">
// //             <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Preview</h3>
// //             <img src={replacePreview} alt="Replace preview" className="w-full h-[250px] object-contain mb-6 rounded-lg" />
// //             <div className="flex justify-end gap-3">
// //               <button
// //                 type="button"
// //                 onClick={(e) => {
// //                   e.preventDefault();
// //                   e.stopPropagation();
// //                   setShowReplacePreview(false);
// //                   setReplacePreview(null);
// //                 }}
// //                 className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600"
// //               >
// //                 Cancel
// //               </button>
// //               <button
// //                 type="button"
// //                 onClick={(e) => {
// //                   e.preventDefault();
// //                   e.stopPropagation();
// //                   handleConfirmReplace();
// //                 }}
// //                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
// //               >
// //                 Replace
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </ComponentCard>
// //   );
// // };

// // export default DropzoneThumbnailComponent;



// import { useState, useEffect, useRef } from "react";
// import ComponentCard from "../../common/ComponentCard";
// import { useDropzone } from "react-dropzone";
// import { saveThumbnailImagePath, thumbnailuploadToS3 } from "../../../services/api";

// interface DropzoneThumbnailProps {
//   filePreview: string | null;
//   ThumbnailId?: (id: string) => void;
//   videoFile?: File | null;
//   videoId?: number | null;
//   isEdit : boolean
//   thumbnailUrl : URL | string | null
// }

// const DropzoneThumbnailComponent: React.FC<DropzoneThumbnailProps> = ({ 
//   filePreview, 
//   ThumbnailId,
//   videoFile,
//   videoId,
//   isEdit,
//   thumbnailUrl
// }) => {
//   const [presignedUrl, setPresignedUrl] = useState<string | null>(null);
//   const [currentThumbnail, setCurrentThumbnail] = useState<string | null>(null);
//   const [showReplacePreview, setShowReplacePreview] = useState(false);
//   const [replacePreview, setReplacePreview] = useState<string | null>(null);
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const generateTimestamp = () => {
//     const now = new Date();
//     const year = now.getFullYear();
//     const month = (now.getMonth() + 1).toString().padStart(2, '0');
//     const day = now.getDate().toString().padStart(2, '0');
//     const hours = now.getHours().toString().padStart(2, '0');
//     const minutes = now.getMinutes().toString().padStart(2, '0');
//     const seconds = now.getSeconds().toString().padStart(2, '0');
//     const milliseconds = now.getMilliseconds().toString().padStart(3, '0');

//     return `${year}-${month}-${day}-tm-${hours}-${minutes}-${seconds}-${milliseconds}`;
//   };

//   // function base64ToFile(base64String: string, filename: string): File {
//   //   const arr = base64String.split(",");
//   //   const mime = arr[0].match(/:(.*?);/)![1];
//   //   const bstr = atob(arr[1]);
//   //   const u8arr = new Uint8Array(bstr.length);
//   //   for (let i = 0; i < bstr.length; i++) u8arr[i] = bstr.charCodeAt(i);
//   //   return new File([u8arr], filename, { type: mime });
//   // }

  

//   function base64ToFile(base64String: string, filename: string): File {
//   try {
//     // Handle case where base64String might already be just the base64 part
//     let base64Data = base64String;
//     let mime = "image/jpeg";

//     // Check if it's a data URL (contains comma)
//     if (base64String.includes(",")) {
//       const arr = base64String.split(",");
      
//       // Extract MIME type from data URL
//       const mimeMatch = arr[0].match(/:(.*?);/);
//       mime = mimeMatch?.[1] || "image/jpeg";
      
//       // Get the actual base64 data after the comma
//       base64Data = arr[1] || "";
//     }

//     // Validate base64 string exists
//     if (!base64Data || base64Data.trim() === "") {
//       throw new Error("Base64 data is empty");
//     }

//     // Decode base64 to binary string
//     const bstr = atob(base64Data);
//     const u8arr = new Uint8Array(bstr.length);
    
//     for (let i = 0; i < bstr.length; i++) {
//       u8arr[i] = bstr.charCodeAt(i);
//     }

//     return new File([u8arr], filename, { type: mime });
//   } catch (error) {
//     console.error("Error converting base64 to file:", error);
//     // Return empty file as fallback
//     return new File([], filename, { type: "image/jpeg" });
//   }
// }


//   // Update currentThumbnail when filePreview changes
//   useEffect(() => {
//     if (filePreview) {
//       setCurrentThumbnail(filePreview);
//     } else {
//       setCurrentThumbnail(null);
//     }
//   }, [filePreview]);

//   // Upload thumbnail when it's generated
//   useEffect(() => {
//     const uploadPreviewThumbnail = async () => {
//       if (isEdit !== true) {

//         if (!filePreview) return;
//         const file = base64ToFile(filePreview, `thumbnail-${generateTimestamp()}.jpg`);
//         try {
//           console.log('Uploading thumbnail:', file.name);
//           const url = await saveThumbnailImagePath(file.name, file.type, videoId);
//           ThumbnailId?.(url?.thumbnail_id);
//           setPresignedUrl(url?.url);
//           await thumbnailuploadToS3(url?.url, file);
//           console.log("✅ Thumbnail uploaded:", file.name);
//         } catch (err) {
//           console.error("Thumbnail upload failed:", err);
//         }
//       }
//     };
//     uploadPreviewThumbnail();
//   }, [filePreview, videoId]);

//   const onDrop = async (acceptedFiles: File[]) => {
//     const file = acceptedFiles[0];
//     if (!file) return;
//     try {
//       const url = await saveThumbnailImagePath(file.name, file.type, videoId);
//       setPresignedUrl(url);
//       await thumbnailuploadToS3(url, file);
//     } catch (err) {
//       console.error("❌ Error uploading dropped thumbnail:", err);
//     }
//   };

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: {
//       "image/png": [],
//       "image/jpeg": [],
//       "image/webp": [],
//       "image/svg+xml": [],
//     },
//   });

//   const handleReplaceClick = () => {
//     fileInputRef.current?.click();
//   };

//   const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
//     e.preventDefault();
//     const file = e.target.files?.[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onload = (event) => {
//       const base64 = event.target?.result as string;
//       setReplacePreview(base64);
//       setShowReplacePreview(true);
//     };
//     reader.readAsDataURL(file);
//     e.target.value = '';
//   };

//   const handleConfirmReplace = async () => {
//     if (!replacePreview) return;
    
//     const file = base64ToFile(replacePreview, `thumbnail-${generateTimestamp()}.jpg`);
//     try {
//       const url = await saveThumbnailImagePath(file.name, file.type, videoId);
//       ThumbnailId?.(url?.thumbnail_id);
//       setPresignedUrl(url?.url);
//       await thumbnailuploadToS3(url?.url, file);
//       setCurrentThumbnail(replacePreview);
//       setShowReplacePreview(false);
//       setReplacePreview(null);
//       console.log("✅ Thumbnail replaced:", file.name);
//     } catch (err) {
//       console.error("❌ Error replacing thumbnail:", err);
//     }
//   };

//   const handleGenerateThumbnail = async () => {
//     if (!videoFile) {
//       console.warn("No video file available");
//       return;
//     }

//     try {
//       const thumbnail = await generateThumbnailFromVideo(videoFile);
//       setReplacePreview(thumbnail);
//       setShowReplacePreview(true);
//     } catch (err) {
//       console.error("❌ Error generating thumbnail:", err);
//     }
//   };

//   const generateThumbnailFromVideo = async (videoFile: File, frameCount = 10): Promise<string> => {
//     return new Promise<string>((resolve, reject) => {
//       const video = document.createElement("video");
//       video.src = URL.createObjectURL(videoFile);
//       video.crossOrigin = "anonymous";

//       video.addEventListener("loadeddata", () => {
//         const canvas = document.createElement("canvas");
//         const context = canvas.getContext("2d");
//         if (!context) {
//           reject(new Error("Could not get canvas context"));
//           return;
//         }

//         canvas.width = video.videoWidth;
//         canvas.height = video.videoHeight;

//         const frames = Array.from({ length: frameCount }, (_, i) =>
//           (video.duration / frameCount) * i
//         );

//         video.currentTime = frames[0];
//         video.addEventListener("seeked", function capture() {
//           context.drawImage(video, 0, 0, canvas.width, canvas.height);
//           const thumbnailDataUrl = canvas.toDataURL("image/jpeg");
//           resolve(thumbnailDataUrl);
//           video.removeEventListener("seeked", capture);
//           URL.revokeObjectURL(video.src);
//         });
//       });

//       video.addEventListener("error", () => {
//         reject(new Error("Could not load video"));
//       });
//     });
//   };


//   useEffect(() => {
//     if(isEdit === true){
//       setReplacePreview(`https://d1f96o9nypo8e0.cloudfront.net/${thumbnailUrl}`);
//     }
//     else{
//       setReplacePreview(null);
//     }
//   }, [isEdit, thumbnailUrl]);

//   return (
//     <ComponentCard title="Thumbnail Upload">
//       <div className="transition border border-gray-300 border-dashed cursor-pointer dark:hover:border-brand-500 dark:border-gray-700 rounded-xl hover:border-brand-500">
//         {currentThumbnail ? (
//           <div className="relative">
//             <img 
//               src={currentThumbnail} 
//               alt="Thumbnail preview" 
//               className="w-full object-contain h-[300px]" 
//             />
//             <div className="absolute bottom-3 left-0 right-0 flex gap-2 justify-center">
//               <button
//                 type="button"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   e.stopPropagation();
//                   handleReplaceClick();
//                 }}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600"
//               >
//                 Replace
//               </button>
//               {videoFile && (
//                 <button
//                   type="button"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     e.stopPropagation();
//                     handleGenerateThumbnail();
//                   }}
//                   className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600"
//                 >
//                   Generate
//                 </button>
//               )}
//             </div>
//           </div>
//         ) : (
//           <div
//             {...getRootProps()}
//             className={`dropzone rounded-xl border-dashed border-gray-300 p-7 lg:p-10 ${
//               isDragActive
//                 ? "border-brand-500 bg-gray-100 dark:bg-gray-800"
//                 : "border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-900"
//             }`}
//           >
//             <input {...getInputProps()} />
//             <div className="dz-message flex flex-col items-center m-0!">
//               <h4 className="mb-3 font-semibold text-gray-800 text-theme-xl dark:text-white/90">
//                 {isDragActive ? "Drop Files Here" : "Drag & Drop Files Here"}
//               </h4>
//               <span className="text-center mb-5 block w-full max-w-[290px] text-sm text-gray-700 dark:text-gray-400">
//                 Drag and drop your PNG, JPG, WebP, SVG images here or browse
//               </span>
//               <span className="font-medium underline text-theme-sm text-brand-500">Browse File</span>
//             </div>
//           </div>
//         )}
//       </div>

//       <input
//         ref={fileInputRef}
//         type="file"
//         accept="image/png,image/jpeg,image/webp,image/svg+xml"
//         onChange={handleFileSelect}
//         className="hidden"
//       />

//       {showReplacePreview && (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//           <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl w-[400px]">
//             <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Preview</h3>
//             <img src={replacePreview} alt="Replace preview" className="w-full h-[250px] object-contain mb-6 rounded-lg" />
//             <div className="flex justify-end gap-3">
//               <button
//                 type="button"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   e.stopPropagation();
//                   setShowReplacePreview(false);
//                   setReplacePreview(null);
//                 }}
//                 className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="button"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   e.stopPropagation();
//                   handleConfirmReplace();
//                 }}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//               >
//                 Replace
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </ComponentCard>
//   );
// };

// export default DropzoneThumbnailComponent;





import { useState, useEffect, useRef } from "react";
import ComponentCard from "../../common/ComponentCard";
import { useDropzone } from "react-dropzone";
import { saveThumbnailImagePath, thumbnailuploadToS3 } from "../../../services/api";
import {CDN_DOMAIN} from '../../../services/api';

interface DropzoneThumbnailProps {
  filePreview: string | null;
  ThumbnailId?: (id: string) => void;
  videoFile?: File | null;
  videoId?: number | null;
  isEdit: boolean;
  thumbnailUrl: string | null;
}

const DropzoneThumbnailComponent: React.FC<DropzoneThumbnailProps> = ({ 
  filePreview, 
  ThumbnailId,
  videoFile,
  videoId,
  isEdit,
  thumbnailUrl
}) => {
  // const [presignedUrl, setPresignedUrl] = useState<string | null>(null);
  const [currentThumbnail, setCurrentThumbnail] = useState<string | null>(null);
  const [showReplacePreview, setShowReplacePreview] = useState(false);
  const [replacePreview, setReplacePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const CLOUDFRONT_URL = CDN_DOMAIN;

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

  function base64ToFile(base64String: string, filename: string): File {
    try {
      let base64Data = base64String;
      let mime = "image/jpeg";

      if (base64String.includes(",")) {
        const arr = base64String.split(",");
        const mimeMatch = arr[0].match(/:(.*?);/);
        mime = mimeMatch?.[1] || "image/jpeg";
        base64Data = arr[1] || "";
      }

      if (!base64Data || base64Data.trim() === "") {
        throw new Error("Base64 data is empty");
      }

      const bstr = atob(base64Data);
      const u8arr = new Uint8Array(bstr.length);
      
      for (let i = 0; i < bstr.length; i++) {
        u8arr[i] = bstr.charCodeAt(i);
      }

      return new File([u8arr], filename, { type: mime });
    } catch (error) {
      console.error("Error converting base64 to file:", error);
      return new File([], filename, { type: "image/jpeg" });
    }
  }

  // ✅ Priority: filePreview (newly generated) > thumbnailUrl (existing in edit mode)
  useEffect(() => {
    if (filePreview) {
      // Newly generated or replaced thumbnail
      setCurrentThumbnail(filePreview);
    } else if (isEdit && thumbnailUrl) {
      // Existing thumbnail in edit mode
      const fullUrl = `${CLOUDFRONT_URL}${thumbnailUrl}`;
      setCurrentThumbnail(fullUrl);
    } else {
      setCurrentThumbnail(null);
    }
  }, [filePreview, isEdit, thumbnailUrl]);

  // ✅ AUTO-UPLOAD thumbnail in CREATE mode only
  useEffect(() => {
    const uploadPreviewThumbnail = async () => {
      // Skip auto-upload in EDIT mode
      if (isEdit) {
        console.log("✅ Edit mode: Thumbnail generated (will upload on save)");
        return;
      }

      // CREATE mode: Auto-upload immediately
      if (!filePreview) return;
      
      const file = base64ToFile(filePreview, `thumbnail-${generateTimestamp()}.jpg`);
      try {
        console.log('Uploading thumbnail:', file.name);
        const url = await saveThumbnailImagePath(file.name, file.type, videoId);
        ThumbnailId?.(url?.thumbnail_id);
        // setPresignedUrl(url?.url);
        await thumbnailuploadToS3(url?.url, file);
        console.log("✅ Thumbnail uploaded:", file.name);
      } catch (err) {
        console.error("Thumbnail upload failed:", err);
      }
    };
    uploadPreviewThumbnail();
  }, [filePreview, videoId, isEdit]);

  const onDrop = async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;
    try {
      const url = await saveThumbnailImagePath(file.name, file.type, videoId);
      // setPresignedUrl(url?.url);
      await thumbnailuploadToS3(url?.url, file);
      console.log("✅ Thumbnail uploaded via dropzone");
    } catch (err) {
      console.error("❌ Error uploading dropped thumbnail:", err);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/png": [],
      "image/jpeg": [],
      "image/webp": [],
      "image/svg+xml": [],
    },
  });

  const handleReplaceClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target?.result as string;
      setReplacePreview(base64);
      setShowReplacePreview(true);
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  // ✅ Different behavior for CREATE vs EDIT mode
  const handleConfirmReplace = async () => {
    if (!replacePreview) return;
    
    const file = base64ToFile(replacePreview, `thumbnail-${generateTimestamp()}.jpg`);
    
    // if (isEdit) {
    //   // ✅ EDIT MODE: Just update preview, DON'T upload yet
    //   setCurrentThumbnail(replacePreview);
    //   setShowReplacePreview(false);
    //   setReplacePreview(null);
    //   console.log("✅ Thumbnail preview updated (will upload on save)");
    //   return;
    // }
     
    // ✅ CREATE MODE: Upload immediately
    try {
      console.log('===========================')
      console.log('Excuitiung in edit mood')
      console.log('===========================')
      const url = await saveThumbnailImagePath(file.name, file.type, videoId);
      setShowReplacePreview(false);
      ThumbnailId?.(url?.thumbnail_id);
      // setPresignedUrl(url?.url);
      await thumbnailuploadToS3(url?.url, file);
      setCurrentThumbnail(replacePreview);
      setReplacePreview(null);
      console.log("✅ Thumbnail uploaded:", file.name);
    } catch (err) {
      console.error("❌ Error uploading thumbnail:", err);
    }
  };

  return (
    <ComponentCard title="Thumbnail Upload">
      <div className="transition border border-gray-300 border-dashed cursor-pointer dark:hover:border-brand-500 dark:border-gray-700 rounded-xl hover:border-brand-500">
        {currentThumbnail ? (
          <div className="relative">
            <img 
              src={currentThumbnail} 
              alt="Thumbnail preview" 
              className="w-full object-contain h-[300px]" 
            />
            <div className="absolute bottom-3 left-0 right-0 flex gap-2 justify-center">
              {/* ✅ EDIT MODE: Show only Replace button */}
              {isEdit ? (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleReplaceClick();
                  }}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600"
                >
                  Replace
                </button>
              ) : (
                // ✅ CREATE MODE: Show Replace + Generate
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleReplaceClick();
                    }}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600"
                  >
                    Replace
                  </button>
                  {videoFile && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        // Generate button regenerates from video
                        // Parent component would handle this
                      }}
                      className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600"
                    >
                      Generate
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        ) : (
          <div
            {...getRootProps()}
            className={`dropzone rounded-xl border-dashed border-gray-300 p-7 lg:p-10 ${
              isDragActive
                ? "border-brand-500 bg-gray-100 dark:bg-gray-800"
                : "border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-900"
            }`}
          >
            <input {...getInputProps()} />
            <div className="dz-message flex flex-col items-center m-0!">
              <h4 className="mb-3 font-semibold text-gray-800 text-theme-xl dark:text-white/90">
                {isDragActive ? "Drop Files Here" : "Drag & Drop Files Here"}
              </h4>
              <span className="text-center mb-5 block w-full max-w-[290px] text-sm text-gray-700 dark:text-gray-400">
                Drag and drop your PNG, JPG, WebP, SVG images here or browse
              </span>
              <span className="font-medium underline text-theme-sm text-brand-500">Browse File</span>
            </div>
          </div>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp,image/svg+xml"
        onChange={handleFileSelect}
        className="hidden"
      />

      {showReplacePreview && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl w-[400px]">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Preview</h3>
            <img src={replacePreview || ''} alt="Replace preview" className="w-full h-[250px] object-contain mb-6 rounded-lg" />
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setShowReplacePreview(false);
                  setReplacePreview(null);
                }}
                className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleConfirmReplace();
                }}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Replace
              </button>
            </div>
          </div>
        </div>
      )}
    </ComponentCard>
  );
};

export default DropzoneThumbnailComponent;