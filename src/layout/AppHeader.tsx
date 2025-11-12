// import { useEffect, useRef, useState } from "react";

// import { Link } from "react-router";
// import { useSidebar } from "../context/SidebarContext";
// import { ThemeToggleButton } from "../components/common/ThemeToggleButton";
// import NotificationDropdown from "../components/header/NotificationDropdown";
// import UserDropdown from "../components/header/UserDropdown";
// import Button from "../components/ui/button/Button";
// import { UploadIcon } from "../icons";
// // import { useModal } from "../hooks/useModal";
// import { Modal } from "../components/ui/modal";
// import Radio from "../components/form/input/Radio";
// import Label from "../components/form/Label";
// import DropzoneThumbnailComponent from "../components/form/form-elements/DropZoneThumbnail";
// import DropzoneVideoComponent from "../components/form/form-elements/DropZoneVideo";
// import Switch from "../components/form/switch/Switch"
// import TextArea from "../components/form/input/TextArea";
// import { saveVideoMetadata } from '../services/api'

// import { useVideoEdit } from "../context/VideoEditContext";

// // import Input from "../components/form/input/InputField";
// // import FileInputExample from "../../components/form/form-elements/FileInputExample";
// // import TextArea from "../input/TextArea";


// const AppHeader: React.FC = () => {
//   // const { isOpen, openModal, closeModal } = useModal();  // Get modal state
//   const [isApplicationMenuOpen, setApplicationMenuOpen] = useState(false);

//   const { isMobileOpen, toggleSidebar, toggleMobileSidebar } = useSidebar();

//   // ✅ ADD THIS LINE - Use context modal control
//   const { openModal } = useVideoEdit();

//   const handleToggle = () => {
//     if (window.innerWidth >= 1024) {
//       toggleSidebar();
//     } else {
//       toggleMobileSidebar();
//     }
//   };

//   const toggleApplicationMenu = () => {
//     setApplicationMenuOpen(!isApplicationMenuOpen);
//   };

//   const inputRef = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     const handleKeyDown = (event: KeyboardEvent) => {
//       if ((event.metaKey || event.ctrlKey) && event.key === "k") {
//         event.preventDefault();
//         inputRef.current?.focus();
//       }
//     };

//     document.addEventListener("keydown", handleKeyDown);

//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, 
//   []);

//   // ✅ FIX THIS FUNCTION - Change openVideoModal to openModal
//   const handleUploadClick = () => {
//     openModal(null); // Pass null to open in CREATE mode
//   };

//   return (
//     <header className="sticky top-0 flex w-full bg-white border-gray-200 z-99999 dark:border-gray-800 dark:bg-gray-900 lg:border-b">
//       <div className="flex flex-col items-center justify-between grow lg:flex-row lg:px-6">
//         <div className="flex items-center justify-between w-full gap-2 px-3 py-3 border-b border-gray-200 dark:border-gray-800 sm:gap-4 lg:justify-normal lg:border-b-0 lg:px-0 lg:py-4">
//           <button
//             className="items-center justify-center w-10 h-10 text-gray-500 border-gray-200 rounded-lg z-99999 dark:border-gray-800 lg:flex dark:text-gray-400 lg:h-11 lg:w-11 lg:border"
//             onClick={handleToggle}
//             aria-label="Toggle Sidebar"
//           >
//             {isMobileOpen ? (
//               <svg
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M6.21967 7.28131C5.92678 6.98841 5.92678 6.51354 6.21967 6.22065C6.51256 5.92775 6.98744 5.92775 7.28033 6.22065L11.999 10.9393L16.7176 6.22078C17.0105 5.92789 17.4854 5.92788 17.7782 6.22078C18.0711 6.51367 18.0711 6.98855 17.7782 7.28144L13.0597 12L17.7782 16.7186C18.0711 17.0115 18.0711 17.4863 17.7782 17.7792C17.4854 18.0721 17.0105 18.0721 16.7176 17.7792L11.999 13.0607L7.28033 17.7794C6.98744 18.0722 6.51256 18.0722 6.21967 17.7794C5.92678 17.4865 5.92678 17.0116 6.21967 16.7187L10.9384 12L6.21967 7.28131Z"
//                   fill="currentColor"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 width="16"
//                 height="12"
//                 viewBox="0 0 16 12"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M0.583252 1C0.583252 0.585788 0.919038 0.25 1.33325 0.25H14.6666C15.0808 0.25 15.4166 0.585786 15.4166 1C15.4166 1.41421 15.0808 1.75 14.6666 1.75L1.33325 1.75C0.919038 1.75 0.583252 1.41422 0.583252 1ZM0.583252 11C0.583252 10.5858 0.919038 10.25 1.33325 10.25L14.6666 10.25C15.0808 10.25 15.4166 10.5858 15.4166 11C15.4166 11.4142 15.0808 11.75 14.6666 11.75L1.33325 11.75C0.919038 11.75 0.583252 11.4142 0.583252 11ZM1.33325 5.25C0.919038 5.25 0.583252 5.58579 0.583252 6C0.583252 6.41421 0.919038 6.75 1.33325 6.75L7.99992 6.75C8.41413 6.75 8.74992 6.41421 8.74992 6C8.74992 5.58579 8.41413 5.25 7.99992 5.25L1.33325 5.25Z"
//                   fill="currentColor"
//                 />
//               </svg>
//             )}
//             {/* Cross Icon */}
//           </button>

//           <Link to="/" className="lg:hidden">
//             <img
//               className="dark:hidden"
//               src="./images/logo/logo.svg"
//               alt="Logo"
//             />
//             <img
//               className="hidden dark:block"
//               src="./images/logo/logo-dark.svg"
//               alt="Logo"
//             />
//           </Link>

//           <button
//             onClick={toggleApplicationMenu}
//             className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg z-99999 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 lg:hidden"
//           >
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M5.99902 10.4951C6.82745 10.4951 7.49902 11.1667 7.49902 11.9951V12.0051C7.49902 12.8335 6.82745 13.5051 5.99902 13.5051C5.1706 13.5051 4.49902 12.8335 4.49902 12.0051V11.9951C4.49902 11.1667 5.1706 10.4951 5.99902 10.4951ZM17.999 10.4951C18.8275 10.4951 19.499 11.1667 19.499 11.9951V12.0051C19.499 12.8335 18.8275 13.5051 17.999 13.5051C17.1706 13.5051 16.499 12.8335 16.499 12.0051V11.9951C16.499 11.1667 17.1706 10.4951 17.999 10.4951ZM13.499 11.9951C13.499 11.1667 12.8275 10.4951 11.999 10.4951C11.1706 10.4951 10.499 11.1667 10.499 11.9951V12.0051C10.499 12.8335 11.1706 13.5051 11.999 13.5051C12.8275 13.5051 13.499 12.8335 13.499 12.0051V11.9951Z"
//                 fill="currentColor"
//               />
//             </svg>
//           </button>
//         </div>
//         <div
//           className={`${
//             isApplicationMenuOpen ? "flex" : "hidden"
//           } items-center justify-between w-full gap-4 px-5 py-4 lg:flex shadow-theme-md lg:justify-end lg:px-0 lg:shadow-none`}
//         >
//           <div className="flex items-center gap-2 2xsm:gap-3">
//             {/* <!-- Dark Mode Toggler --> */}
//             <ThemeToggleButton />
//             {/* <!-- Dark Mode Toggler --> */}
//             <NotificationDropdown />
//             {/* <!-- Notification Menu Area --> */}
//           </div>
//           {/* <!-- User Area --> */}
//           <UserDropdown />
//           {/* <Button
//               size="sm"
//               variant="primary"
//               startIcon={<UploadIcon className="size-5" />}
//               onClick={openModal}
//             >
//               Upload
//           </Button> */}

//           {/* ✅ CHANGE onClick to handleUploadClick */}
//           <Button size="sm" variant="primary" startIcon={<UploadIcon className="size-5" />} onClick={handleUploadClick}>
//             Upload
//           </Button>

//         </div>
//       </div>
//       {/* Pass the modal state and functions to UploadModel */}
//       {/* <UploadModel isOpen={isOpen} openModal={openModal} closeModal={closeModal} fileName={fileName}  /> */}
//       <UploadModel
//         // isOpen={isOpen}
//         // openModal={openModal}
//         // closeModal={closeModal}
//         // fileName={fileName}
//         // handleFileUpload={handleFileUpload}  // Pass the function here
//       />
//     </header>
//   );
// };

// export default AppHeader;

// // interface UploadModelProps {
// //   isOpen: boolean;
// //   openModal: () => void;
// //   closeModal: () => void;
// // }

// function UploadModel(
//   // { isOpen, closeModal }: UploadModelProps
// ) {
//   const { isOpen, closeModal, videoData } = useVideoEdit(); // Get context data
//  const [isEditMode, setIsEditMode] = useState(false);

//   const [originalFileName, setOriginalFileName] = useState('');
//   const [videoTitle, setVideoTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [videoS3Key, setVideoS3Key] = useState<string | null>(null); // Store S3 key for video
//   const [thumbnail, setThumbnail] = useState<string | null>(null);
//   const [selectedValue, setSelectedValue] = useState<string>("option2");
//   const [videoFile, setVideoFile] = useState<File | null>(null);
//   const [videoId, setVideoId] = useState<number | null>(null);
//   const [videoStatus, setvideoStatus] = useState<string>('Public');
//   const [isSaving, setIsSaving] = useState(false);

//   const CLOUDFRONT_URL = "https://d1f96o9nypo8e0.cloudfront.net/";

//   // useEffect(() => {
//   //   if (videoData) {
//   //     // EDIT MODE - Pre-fill existing data
//   //     setIsEditMode(true);
//   //     setVideoId(videoData.id);
//   //     setVideoTitle(videoData.title);
//   //     setDescription(videoData.description || '');
//   //     setVideoS3Key(videoData.s3_key);
//   //     setThumbnail(videoData.thumbnail ? `${CLOUDFRONT_URL}${videoData.thumbnail}` : null);
//   //     setOriginalFileName(videoData.filename);
//   //     setvideoStatus(videoData.status === 'PRIVATE' ? 'Private' : 'Public');
//   //     setSelectedValue(videoData.eighteenPlus ? "option1" : "option2");
//   //   }
//   // }, [videoData]);



//   // ✅ ADD ELSE BLOCK HERE - Reset form when videoData is null
//   useEffect(() => {
//     if (videoData) {
//       // EDIT MODE - Pre-fill existing data
//       setIsEditMode(true);
//       setVideoId(videoData.id);
//       setVideoTitle(videoData.title);
//       setDescription(videoData.description || '');
//       setVideoS3Key(videoData.s3_key);
//       setThumbnail(videoData.thumbnail ? `${CLOUDFRONT_URL}${videoData.thumbnail}` : null);
//       setOriginalFileName(videoData.filename);
//       setvideoStatus(videoData.status === 'PRIVATE' ? 'Private' : 'Public');
//       setSelectedValue(videoData.eighteenPlus ? "option1" : "option2");
//     } else {
//       // ✅ THIS WAS MISSING - CREATE MODE: Reset form to defaults
//       setIsEditMode(false);
//       setOriginalFileName('');
//       setVideoTitle('');
//       setDescription('');
//       setVideoS3Key(null);
//       setThumbnail(null);
//       setSelectedValue("option2");
//       setVideoFile(null);
//       setVideoId(null);
//       setvideoStatus('Public');
//     }
//   }, [videoData]);

//   const handleSave = async () => {
//     if (!videoId) {
//       console.warn("No video ID available");
//       return;
//     }

//     setIsSaving(true);
//     try {
//       const payload = {
//         orginial_file_titile: originalFileName,
//         video_title: videoTitle,
//         description: description,
//         eighteenPlus: selectedValue === "option1",
//         video_id: videoId,
//       };

//       console.log("Saving payload:", payload);
      
//       // Call your API function here
//       const response = await saveVideoMetadata(payload);
//       if (response) {
//         console.log("✅ Video metadata saved successfully");
//         // handleCloseModal(); // Use handleCloseModal to reset all data
//       }

//       // Placeholder - replace with actual API call
//       // alert("Video metadata saved successfully!");
//       // handleCloseModal(); // Reset all data before closing
//     } catch (err) {
//       console.error("❌ Error saving video metadata:", err);
//       alert("Error saving video metadata");
//     } finally {
//       setIsSaving(false);
//     }
//   };

//   const handleCloseModal = () => {
//     setOriginalFileName('');
//     setVideoTitle('');
//     setDescription('');
//     setThumbnail(null);
//     setSelectedValue("option2");
//     setVideoFile(null);
//     setVideoS3Key(null);
//     setVideoId(null);
//     setVideoId(null)
//     closeModal();
//   };

//   const handleRadioChange = (value: string) => {
//     setSelectedValue(value);
//   };

//   const handleFileNameChange = (name: string) => {
//     // Remove video extension from title
//     const videoExtensions = /\.(mp4|webm|avi|mov|mkv|flv|ogg|quicktime)$/i;
//     const titleWithoutExtension = name.replace(videoExtensions, '');
//     setVideoTitle(titleWithoutExtension);
//     setOriginalFileName(titleWithoutExtension); // Store original file name with extension
//   };

//   const handleVideoFileChange = (file: File, vId: number) => {
//     setVideoFile(file);
//     setVideoId(vId);
//     console.log("VideoId set to:", vId);
//   };

//     // Explicitly typing the parameter to avoid the 'any' issue
//   const handleSwitchChange = () => {
//     setvideoStatus((prevStatus: string) =>
//       prevStatus === 'Public' ? 'Private' : 'Public'
//     );
//   };

//   return (
//     <Modal
//       isOpen={isOpen}
//       onClose={handleCloseModal}
//       className="w-full h-[95%] mt-2 mx-5 sm:h-[95%] sm:mt-2 max-w-[960px] lg:mx-5 lg:my-0"
//     >   
//       <div className="no-scrollbar relative w-full h-full sm:rounded-xl rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11 overflow-y-auto">
//         <div className="px-2 pr-14">
//           <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
//             {videoData ? "Edit Video" : "Upload Video"}
//           </h4>
//           <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
//              {videoData ? "Update your video details" : "Upload and configure your new video"}
//           </p>                  
//         </div>
//         <form className="flex flex-col">
//           <div className="custom-scrollbar h-full md:h-full overflow-y-auto px-2 pb-3">
//             <div>
              
//               {/* <div>
//                 <Label>Video</Label>
//                 <DropzoneVideoComponent 
//                   onFileNameChange={handleFileNameChange} 
//                   onThumbnailGenerated={setThumbnail}
//                   onVideoFileChange={handleVideoFileChange}
//                   onVideoUpdated={setVideoFile}
//                   video_Id={videoId}
//                 />
//               </div> */}

//                {/* Show video upload in CREATE mode */}
//               {/* {!isEditMode && ( */}
//                 <div>
//                   <Label>Video</Label>
//                   <DropzoneVideoComponent 
//                     onFileNameChange={handleFileNameChange} 
//                     onThumbnailGenerated={setThumbnail}
//                     onVideoFileChange={handleVideoFileChange}
//                     onVideoUpdated={setVideoFile}
//                     video_Id={videoId}
//                     isEdit = {isEditMode}
//                     videoUrl = {videoS3Key}
//                   />
//                 </div>
//               {/* )} */}

//               {/* Show existing video player in EDIT mode */}
//               {/* {isEditMode && videoS3Key && (
//                 <div>
//                   <Label>Video</Label>
//                   <div className="border border-gray-300 rounded-xl overflow-hidden bg-black">
//                     <video
//                       src={`${CLOUDFRONT_URL}${videoS3Key}`}
//                       controls
//                       className="w-full h-[400px] object-contain"
//                     />
//                   </div>
//                   <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
//                     <span className="font-semibold">File:</span> {originalFileName}
//                   </p>
//                 </div>
//               )} */}

//               <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2 mt-7">

//                 <div>
//                   <Label>Thumbnail</Label>

//                   {/* {isEditMode ? (
//                     // EDIT MODE: Show existing thumbnail, no upload
//                     <div className="border border-gray-300 rounded-xl overflow-hidden">
//                       <img 
//                         src={thumbnail || "/default-thumbnail.jpg"} 
//                         alt="Current thumbnail" 
//                         className="w-full h-[200px] object-cover"
//                       />
//                     </div>
//                   ) : ( */}
//                     {/* // CREATE MODE: Show upload component */}
//                     <DropzoneThumbnailComponent 
//                       filePreview={thumbnail}
//                       videoFile={videoFile}
//                       videoId={videoId}
//                       isEdit = {isEditMode}
//                       thumbnailUrl = {videoS3Key}
//                     />
//                   {/* )} */}

//                   {/* <DropzoneThumbnailComponent 
//                     filePreview={thumbnail}
//                     videoFile={videoFile}
//                     videoId={videoId}
//                   /> */}
//                 </div>

//                 <div>
//                   <div>
//                     <Label>Title</Label>
//                     <TextArea
//                       value={videoTitle}
//                       rows={3}
//                       placeholder="Please enter a video title."
//                       onChange={(value) => setVideoTitle(value)}
//                     />
//                   </div>
//                   <div className="mt-5">
//                     <Label>Description</Label>
//                     <TextArea
//                       value={description}
//                       placeholder="Please enter a video description."
//                       rows={6}
//                       onChange={(value) => setDescription(value)}
//                     />
//                   </div>

//                   <div className="mt-5">
//                     <Label>Do you want to restrict your video to an adult audience?</Label>
//                     <Radio
//                       className="mt-4"
//                       id="radio1"
//                       name="group1"
//                       value="option1"
//                       checked={selectedValue === "option1"}
//                       onChange={handleRadioChange}
//                       label="Yes, restrict my video to viewers over 18"
//                     />
//                     <Radio
//                       className="mt-4"
//                       id="radio2"
//                       name="group1"
//                       value="option2"
//                       checked={selectedValue === "option2"}
//                       onChange={handleRadioChange}
//                       label="No, don't restrict my video to viewers over 18 only"
//                     />
//                   </div>

//                   <div className="mt-5">
//                     <Switch
//                       label = {videoStatus} 
//                       defaultChecked={videoStatus === 'Public'}
//                       onChange={handleSwitchChange}
//                     />
//                   </div>

//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
//             <Button size="sm" variant="outline" onClick={handleCloseModal}>
//               Close
//             </Button>
//             <Button 
//               size="sm" 
//               onClick={handleSave}
//               disabled={isSaving || !videoId}
//             >
//               {/* {isSaving ? "Saving..." : "Save Changes"} */}
//               {isSaving ? "Saving..." : isEditMode ? "Update Video" : "Save Changes"}
//             </Button>
//           </div>
//         </form>
//       </div>
//     </Modal> 
//   );
// }





import { useEffect, useRef, useState } from "react";

import { Link } from "react-router";
import { useSidebar } from "../context/SidebarContext";
import { ThemeToggleButton } from "../components/common/ThemeToggleButton";
import NotificationDropdown from "../components/header/NotificationDropdown";
import UserDropdown from "../components/header/UserDropdown";
import Button from "../components/ui/button/Button";
import { UploadIcon } from "../icons";
import { Modal } from "../components/ui/modal";
import Radio from "../components/form/input/Radio";
import Label from "../components/form/Label";
import DropzoneThumbnailComponent from "../components/form/form-elements/DropZoneThumbnail";
import DropzoneVideoComponent from "../components/form/form-elements/DropZoneVideo";
import Switch from "../components/form/switch/Switch"
import TextArea from "../components/form/input/TextArea";
import { saveVideoMetadata, saveThumbnailImagePath, thumbnailuploadToS3 } from '../services/api'

import { useVideoEdit } from "../context/VideoEditContext";

const AppHeader: React.FC = () => {
  const [isApplicationMenuOpen, setApplicationMenuOpen] = useState(false);
  const { isMobileOpen, toggleSidebar, toggleMobileSidebar } = useSidebar();
  const { openModal } = useVideoEdit();

  const handleToggle = () => {
    if (window.innerWidth >= 1024) {
      toggleSidebar();
    } else {
      toggleMobileSidebar();
    }
  };

  const toggleApplicationMenu = () => {
    setApplicationMenuOpen(!isApplicationMenuOpen);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleUploadClick = () => {
    openModal(null);
  };

  return (
    <header className="sticky top-0 flex w-full bg-white border-gray-200 z-99999 dark:border-gray-800 dark:bg-gray-900 lg:border-b">
      <div className="flex flex-col items-center justify-between grow lg:flex-row lg:px-6">
        <div className="flex items-center justify-between w-full gap-2 px-3 py-3 border-b border-gray-200 dark:border-gray-800 sm:gap-4 lg:justify-normal lg:border-b-0 lg:px-0 lg:py-4">
          <button
            className="items-center justify-center w-10 h-10 text-gray-500 border-gray-200 rounded-lg z-99999 dark:border-gray-800 lg:flex dark:text-gray-400 lg:h-11 lg:w-11 lg:border"
            onClick={handleToggle}
            aria-label="Toggle Sidebar"
          >
            {isMobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.21967 7.28131C5.92678 6.98841 5.92678 6.51354 6.21967 6.22065C6.51256 5.92775 6.98744 5.92775 7.28033 6.22065L11.999 10.9393L16.7176 6.22078C17.0105 5.92789 17.4854 5.92788 17.7782 6.22078C18.0711 6.51367 18.0711 6.98855 17.7782 7.28144L13.0597 12L17.7782 16.7186C18.0711 17.0115 18.0711 17.4863 17.7782 17.7792C17.4854 18.0721 17.0105 18.0721 16.7176 17.7792L11.999 13.0607L7.28033 17.7794C6.98744 18.0722 6.51256 18.0722 6.21967 17.7794C5.92678 17.4865 5.92678 17.0116 6.21967 16.7187L10.9384 12L6.21967 7.28131Z" fill="currentColor" />
              </svg>
            ) : (
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.583252 1C0.583252 0.585788 0.919038 0.25 1.33325 0.25H14.6666C15.0808 0.25 15.4166 0.585786 15.4166 1C15.4166 1.41421 15.0808 1.75 14.6666 1.75L1.33325 1.75C0.919038 1.75 0.583252 1.41422 0.583252 1ZM0.583252 11C0.583252 10.5858 0.919038 10.25 1.33325 10.25L14.6666 10.25C15.0808 10.25 15.4166 10.5858 15.4166 11C15.4166 11.4142 15.0808 11.75 14.6666 11.75L1.33325 11.75C0.919038 11.75 0.583252 11.4142 0.583252 11ZM1.33325 5.25C0.919038 5.25 0.583252 5.58579 0.583252 6C0.583252 6.41421 0.919038 6.75 1.33325 6.75L7.99992 6.75C8.41413 6.75 8.74992 6.41421 8.74992 6C8.74992 5.58579 8.41413 5.25 7.99992 5.25L1.33325 5.25Z" fill="currentColor" />
              </svg>
            )}
          </button>

          <Link to="/" className="lg:hidden">
            <img className="dark:hidden" src="./images/logo/logo.svg" alt="Logo" />
            <img className="hidden dark:block" src="./images/logo/logo-dark.svg" alt="Logo" />
          </Link>

          <button
            onClick={toggleApplicationMenu}
            className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg z-99999 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 lg:hidden"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M5.99902 10.4951C6.82745 10.4951 7.49902 11.1667 7.49902 11.9951V12.0051C7.49902 12.8335 6.82745 13.5051 5.99902 13.5051C5.1706 13.5051 4.49902 12.8335 4.49902 12.0051V11.9951C4.49902 11.1667 5.1706 10.4951 5.99902 10.4951ZM17.999 10.4951C18.8275 10.4951 19.499 11.1667 19.499 11.9951V12.0051C19.499 12.8335 18.8275 13.5051 17.999 13.5051C17.1706 13.5051 16.499 12.8335 16.499 12.0051V11.9951C16.499 11.1667 17.1706 10.4951 17.999 10.4951ZM13.499 11.9951C13.499 11.1667 12.8275 10.4951 11.999 10.4951C11.1706 10.4951 10.499 11.1667 10.499 11.9951V12.0051C10.499 12.8335 11.1706 13.5051 11.999 13.5051C12.8275 13.5051 13.499 12.8335 13.499 12.0051V11.9951Z" fill="currentColor" />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isApplicationMenuOpen ? "flex" : "hidden"
          } items-center justify-between w-full gap-4 px-5 py-4 lg:flex shadow-theme-md lg:justify-end lg:px-0 lg:shadow-none`}
        >
          <div className="flex items-center gap-2 2xsm:gap-3">
            <ThemeToggleButton />
            <NotificationDropdown />
          </div>
          <UserDropdown />
          <Button size="sm" variant="primary" startIcon={<UploadIcon className="size-5" />} onClick={handleUploadClick}>
            Upload
          </Button>
        </div>
      </div>
      <UploadModel />
    </header>
  );
};

export default AppHeader;

function UploadModel() {
  const { isOpen, closeModal, videoData } = useVideoEdit();
  const [isEditMode, setIsEditMode] = useState(false);
  const [originalFileName, setOriginalFileName] = useState('');
  const [videoTitle, setVideoTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videoS3Key, setVideoS3Key] = useState<string | null>(null);
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [selectedValue, setSelectedValue] = useState<string>("option2");
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoId, setVideoId] = useState<number | null>(null);
  const [videoStatus, setvideoStatus] = useState<string>('Public');
  const [isSaving, setIsSaving] = useState(false);

  const CLOUDFRONT_URL = "https://d1f96o9nypo8e0.cloudfront.net/";

  useEffect(() => {
    if (videoData) {
      setIsEditMode(true);
      setVideoId(videoData.id);
      setVideoTitle(videoData.title);
      setDescription(videoData.description || '');
      setVideoS3Key(videoData.s3_key);
      setThumbnail(videoData.thumbnail ? `${CLOUDFRONT_URL}${videoData.thumbnail}` : null);
      setOriginalFileName(videoData.filename);
      setvideoStatus(videoData.status === 'PRIVATE' ? 'Private' : 'Public');
      setSelectedValue(videoData.eighteenPlus ? "option1" : "option2");
    } else {
      setIsEditMode(false);
      setOriginalFileName('');
      setVideoTitle('');
      setDescription('');
      setVideoS3Key(null);
      setThumbnail(null);
      setSelectedValue("option2");
      setVideoFile(null);
      setVideoId(null);
      setvideoStatus('Public');
    }
  }, [videoData]);

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

  const handleSave = async () => {
    
    if (!videoId) {
      console.warn("No video ID available");
      return;
    }

    setIsSaving(true);
    try {
      // ✅ If in EDIT mode and thumbnail was changed, upload it NOW
      if (isEditMode && thumbnail) {
        const originalThumbnail = videoData?.thumbnail;
        const originalFullUrl = `${CLOUDFRONT_URL}${originalThumbnail}`;
        
        // Check if thumbnail changed and is a base64 string (new one)
        if (thumbnail !== originalFullUrl && thumbnail.startsWith('data:')) {
          console.log("✅ Uploading modified thumbnail...");
          const file = base64ToFile(thumbnail, `thumbnail-${generateTimestamp()}.jpg`);
          const url = await saveThumbnailImagePath(file.name, file.type, videoId);
          await thumbnailuploadToS3(url?.url, file);
          console.log("✅ Thumbnail uploaded successfully");
        }
      }

      const payload = {
        orginial_file_titile: originalFileName,
        video_title: videoTitle,
        description: description,
        eighteenPlus: selectedValue === "option1",
        video_id: videoId,
      };

      console.log("Saving payload:", payload);
      const response = await saveVideoMetadata(payload);
      if (response) {
        console.log("✅ Video metadata saved successfully");
        handleCloseModal();
      }
    } catch (err) {
      console.error("❌ Error saving video metadata:", err);
      alert("Error saving video metadata");
    } finally {
      setIsSaving(false);
    }
  };

  const handleCloseModal = () => {
    setOriginalFileName('');
    setVideoTitle('');
    setDescription('');
    setThumbnail(null);
    setSelectedValue("option2");
    setVideoFile(null);
    setVideoS3Key(null);
    setVideoId(null);
    closeModal();
  };

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };

  const handleFileNameChange = (name: string) => {
    const videoExtensions = /\.(mp4|webm|avi|mov|mkv|flv|ogg|quicktime)$/i;
    const titleWithoutExtension = name.replace(videoExtensions, '');
    setVideoTitle(titleWithoutExtension);
    setOriginalFileName(titleWithoutExtension);
  };

  const handleVideoFileChange = (file: File, vId: number) => {
    setVideoFile(file);
    setVideoId(vId);
    console.log("VideoId set to:", vId);
  };

  const handleSwitchChange = () => {
    setvideoStatus((prevStatus: string) =>
      prevStatus === 'Public' ? 'Private' : 'Public'
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleCloseModal}
      className="w-full h-[95%] mt-2 mx-5 sm:h-[95%] sm:mt-2 max-w-[960px] lg:mx-5 lg:my-0"
    >   
      <div className="no-scrollbar relative w-full h-full sm:rounded-xl rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11 overflow-y-auto">
        <div className="px-2 pr-14">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
            {videoData ? "Edit Video" : "Upload Video"}
          </h4>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
             {videoData ? "Update your video details" : "Upload and configure your new video"}
          </p>                  
        </div>
        <form className="flex flex-col">
          <div className="custom-scrollbar h-full md:h-full overflow-y-auto px-2 pb-3">
            <div>
              <div>
                <Label>Video</Label>
                <DropzoneVideoComponent 
                  onFileNameChange={handleFileNameChange} 
                  onThumbnailGenerated={setThumbnail}
                  onVideoFileChange={handleVideoFileChange}
                  onVideoUpdated={setVideoFile}
                  video_Id={videoId}
                  isEdit={isEditMode}
                  videoUrl={videoS3Key}
                />
              </div>

              <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2 mt-7">
                <div>
                  <Label>Thumbnail</Label>
                  <DropzoneThumbnailComponent 
                    filePreview={thumbnail}
                    videoFile={videoFile}
                    videoId={videoId}
                    isEdit={isEditMode}
                    thumbnailUrl={videoData?.thumbnail}
                  />
                </div>

                <div>
                  <div>
                    <Label>Title</Label>
                    <TextArea
                      value={videoTitle}
                      rows={3}
                      placeholder="Please enter a video title."
                      onChange={(value) => setVideoTitle(value)}
                    />
                  </div>
                  <div className="mt-5">
                    <Label>Description</Label>
                    <TextArea
                      value={description}
                      placeholder="Please enter a video description."
                      rows={6}
                      onChange={(value) => setDescription(value)}
                    />
                  </div>

                  <div className="mt-5">
                    <Label>Do you want to restrict your video to an adult audience?</Label>
                    <Radio
                      className="mt-4"
                      id="radio1"
                      name="group1"
                      value="option1"
                      checked={selectedValue === "option1"}
                      onChange={handleRadioChange}
                      label="Yes, restrict my video to viewers over 18"
                    />
                    <Radio
                      className="mt-4"
                      id="radio2"
                      name="group1"
                      value="option2"
                      checked={selectedValue === "option2"}
                      onChange={handleRadioChange}
                      label="No, don't restrict my video to viewers over 18 only"
                    />
                  </div>

                  <div className="mt-5">
                    <Switch
                      label={videoStatus} 
                      defaultChecked={videoStatus === 'Public'}
                      onChange={handleSwitchChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
            <Button size="sm" variant="outline" onClick={handleCloseModal}>
              Close
            </Button>
            <Button 
              size="sm" 
              onClick={handleSave}
              disabled={isSaving || !videoId}
            >
              {isSaving ? "Saving..." : isEditMode ? "Update Video" : "Save Changes"}
            </Button>
          </div>
        </form>
      </div>
    </Modal> 
  );
}