// // import React from "react";

// // interface VideoCardProps {
// //   imageUrl: string;
// //   status: string;
// //   likes: number;
// //   dislikes: number;
// //   views: number;
// //   comments: number;
// //   onLike?: () => void;
// //   onDislike?: () => void;
// //   onComment?: () => void;
// // }

// // const VideoCard: React.FC<VideoCardProps> = ({
// //   imageUrl,
// //   status,
// //   likes,
// //   dislikes,
// //   views,
// //   comments,
// //   onLike,
// //   onDislike,
// //   onComment,
// // }) => {
// //   return (
// //     <div className="col-span-7">
// //       <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-3
// //        dark:border-gray-800 dark:bg-white/[0.03] 
// //        sm:px-3 sm:pt-3
// //        flex items-center
// //         space-x-6">
// //         <div className="flex items-center justify-between">

// //             {/* Left side image */}
// //             <div className="w-40 flex-shrink-0 rounded-lg overflow-hidden">
// //             <img
// //                 src={imageUrl}
// //                 alt="Video thumbnail"
// //                 className="w-full h-auto object-cover"
// //             />
// //             </div>

// //             {/* Right side content */}
// //             <div className="flex-1 flex flex-col justify-between h-full">
// //             {/* Status */}
// //             <div>
// //                 <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800 dark:bg-green-800 dark:text-green-100">
// //                 Status: {status}
// //                 </span>
// //             </div>

// //             {/* Buttons: Likes, Dislikes, Views, Comments */}
// //             <div className="mt-4 flex space-x-6 text-gray-600 dark:text-gray-400">
// //                 {/* Likes */}
// //                 <button
// //                 type="button"
// //                 onClick={onLike}
// //                 className="flex items-center space-x-1 hover:text-blue-500 focus:outline-none"
// //                 aria-label="Like"
// //                 >
// //                 <svg
// //                     className="w-5 h-5"
// //                     fill="currentColor"
// //                     viewBox="0 0 20 20"
// //                     aria-hidden="true"
// //                 >
// //                     <path d="M2 10a2 2 0 012-2h3V5a3 3 0 116 0v3h2a2 2 0 110 4h-2v3a3 3 0 11-6 0v-3H4a2 2 0 01-2-2z" />
// //                 </svg>
// //                 <span>{likes}</span>
// //                 </button>

// //                 {/* Dislikes */}
// //                 <button
// //                 type="button"
// //                 onClick={onDislike}
// //                 className="flex items-center space-x-1 hover:text-red-500 focus:outline-none"
// //                 aria-label="Dislike"
// //                 >
// //                 <svg
// //                     className="w-5 h-5"
// //                     fill="currentColor"
// //                     viewBox="0 0 20 20"
// //                     aria-hidden="true"
// //                 >
// //                     <path d="M18 10a2 2 0 00-2-2h-3V5a3 3 0 10-6 0v3H5a2 2 0 100 4h3v3a3 3 0 106 0v-3h3a2 2 0 002-2z" />
// //                 </svg>
// //                 <span>{dislikes}</span>
// //                 </button>

// //                 {/* Views */}
// //                 <div
// //                 className="flex items-center space-x-1"
// //                 aria-label="Views"
// //                 role="img"
// //                 >
// //                 <svg
// //                     className="w-5 h-5"
// //                     fill="none"
// //                     stroke="currentColor"
// //                     strokeWidth={2}
// //                     viewBox="0 0 24 24"
// //                     aria-hidden="true"
// //                 >
// //                     <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
// //                     />
// //                     <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
// //                     />
// //                 </svg>
// //                 <span>{views}</span>
// //                 </div>

// //                 {/* Comments */}
// //                 <button
// //                 type="button"
// //                 onClick={onComment}
// //                 className="flex items-center space-x-1 hover:text-purple-500 focus:outline-none"
// //                 aria-label="Comments"
// //                 >
// //                 <svg
// //                     className="w-5 h-5"
// //                     fill="none"
// //                     stroke="currentColor"
// //                     strokeWidth={2}
// //                     viewBox="0 0 24 24"
// //                     aria-hidden="true"
// //                 >
// //                     <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     d="M17 8h2a2 2 0 012 2v7a2 2 0 01-2 2h-6l-4 4v-4H7a2 2 0 01-2-2v-1"
// //                     />
// //                 </svg>
// //                 <span>{comments}</span>
// //                 </button>
// //             </div>
// //             </div>

// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default VideoCard;



// import React from "react";

// interface VideoCardProps {
//   imageUrl: string;
//   status: string;
//   likes: number;
//   dislikes: number;
//   views: number;
//   comments: number;
//   onLike?: () => void;
//   onDislike?: () => void;
//   onComment?: () => void;
// }

// const VideoCard: React.FC<VideoCardProps> = ({
//   imageUrl,
//   status,
//   likes,
//   dislikes,
//   views,
//   comments,
//   onLike,
//   onDislike,
//   onComment,
// }) => {
//   return (
//     <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 py-5
//       dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:py-6
//       flex space-x-6"
//       style={{ minHeight: 120 }}
//     >
//       {/* Left side: image */}
//       <div className="h-[200px] w-auto flex-shrink-0 rounded-lg overflow-hidden">
//         <img
//           src={imageUrl}
//           alt="Video thumbnail"
//           className="w-full h-full object-cover"
//           loading="lazy"
//         />
//       </div>

//       {/* Right side: content */}
//       <div className="flex flex-col flex-1">
//         {/* Status */}
//         <div className="">
//           <span className="inline-block rounded-xl bg-green-100 px-3 py-1 text-lg  text-green-800 dark:bg-green-800 dark:text-green-100">
//             {status}
//           </span>
//         </div>

//         {/* Interaction buttons */}
//         <div className="flex space-x-8 text-gray-600 dark:text-gray-400 mt-4">
//           {/* Like */}
//           <button
//             type="button"
//             onClick={onLike}
//             className="flex items-center space-x-1 hover:text-blue-500 focus:outline-none"
//             aria-label="Like"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-thumbs-up-icon lucide-thumbs-up"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/></svg>
//             <span>{likes}</span>
//           </button>

//           {/* Dislike */}
//           <button
//             type="button"
//             onClick={onDislike}
//             className="flex items-center space-x-1 hover:text-red-500 focus:outline-none"
//             aria-label="Dislike"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-thumbs-down-icon lucide-thumbs-down"><path d="M17 14V2"/><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"/></svg>
//             <span>{dislikes}</span>
//           </button>
//         </div>

//         <div className="flex space-x-8 text-gray-600 dark:text-gray-400 mt-4">
//           {/* Views */}
//           <div
//             className="flex items-center space-x-1"
//             aria-label="Views"
//             role="img"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
//             <span>{views}</span>
//           </div>
//         </div>

//         <div className="flex space-x-8 text-gray-600 dark:text-gray-400 mt-4">
//           {/* Comments */}
//           <button
//             type="button"
//             onClick={onComment}
//             className="flex items-center space-x-1 focus:outline-none"
//             aria-label="Comments"
//           >
//            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-circle-icon lucide-message-circle"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/></svg>
//             <span>{comments}</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoCard;


// import Chart from "react-apexcharts";
// import { ApexOptions } from "apexcharts";
// import { useState } from "react";
// import { Dropdown } from "../ui/dropdown/Dropdown";
// import { DropdownItem } from "../ui/dropdown/DropdownItem";
// import { MoreDotIcon } from "../../icons";

// export default function MonthlyTarget() {
//   const series = [75.55];
//   const options: ApexOptions = {
//     colors: ["#465FFF"],
//     chart: {
//       fontFamily: "Outfit, sans-serif",
//       type: "radialBar",
//       height: 330,
//       sparkline: {
//         enabled: true,
//       },
//     },
//     plotOptions: {
//       radialBar: {
//         startAngle: -85,
//         endAngle: 85,
//         hollow: {
//           size: "80%",
//         },
//         track: {
//           background: "#E4E7EC",
//           strokeWidth: "100%",
//           margin: 5, // margin is in pixels
//         },
//         dataLabels: {
//           name: {
//             show: false,
//           },
//           value: {
//             fontSize: "36px",
//             fontWeight: "600",
//             offsetY: -40,
//             color: "#1D2939",
//             formatter: function (val) {
//               return val + "%";
//             },
//           },
//         },
//       },
//     },
//     fill: {
//       type: "solid",
//       colors: ["#465FFF"],
//     },
//     stroke: {
//       lineCap: "round",
//     },
//     labels: ["Progress"],
//   };
//   const [isOpen, setIsOpen] = useState(false);
//   const [isEditOpen, setIsEditOpen] = useState(false);

//   function toggleDropdown() {
//     setIsOpen(!isOpen);
//     setIsEditOpen(false);
//   }

//   function closeDropdown() {
//     setIsOpen(false);
//   }

//   function toggleEditDropdown() {
//     setIsEditOpen(!isEditOpen);
//     setIsOpen(false);
//   }

//   function closeEditDropdown() {
//     setIsEditOpen(false);
//   }
//   return (
//     <div className="rounded-2xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-white/[0.03]">
//       <div className="px-5 pt-5 bg-white shadow-default rounded-2xl pb-6 dark:bg-gray-900 sm:px-6 sm:pt-6">
//         <div className="flex justify-between">
//           <div>
//             <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
//               Monthly Target
//             </h3>
//             <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
//               Target you’ve set for each month
//             </p>
//           </div>
          
//           <div className="flex align-center">
//             <div className="relative inline-block">
//               <button className="dropdown-toggle" onClick={toggleDropdown}>
//                 <MoreDotIcon className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 size-6" />
//               </button>
//               <Dropdown
//                 isOpen={isOpen}
//                 onClose={closeDropdown}
//                 className="w-40 p-2"
//               >
//                 <DropdownItem
//                   onItemClick={closeDropdown}
//                   className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
//                 >
//                   View More
//                 </DropdownItem>
//                 <DropdownItem
//                   onItemClick={closeDropdown}
//                   className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
//                 >
//                   Delete
//                 </DropdownItem>
//               </Dropdown>
//             </div>
//             <div className="relative inline-block pl-[20px] pt-[2.5px]">
//               <button className="dropdown-toggle" onClick={toggleEditDropdown}>
//                 <svg height='1em' width='1em' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#98a2b3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-share2-icon lucide-share-2 hover:text-gray-700"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
//               </button>
//               <Dropdown
//                 isOpen={isEditOpen}
//                 onClose={closeEditDropdown}
//                 className="w-40 p-2"
//               >
//                 <DropdownItem
//                   onItemClick={closeEditDropdown}
//                   className="flex justify-between w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
//                 >
//                   Copy <span ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-link-icon lucide-link h-[15px]"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg></span>

//                 </DropdownItem>
//                 <DropdownItem
//                   onItemClick={closeEditDropdown}
//                   className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
//                 >
//                   Copy  
//                   <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></span>
//                 </DropdownItem>
//                 {/* <DropdownItem
//                   onItemClick={closeEditDropdown}
//                   className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
//                 >
//                   Edit
//                 </DropdownItem> */}
//                 {/* <DropdownItem
//                   onItemClick={closeEditDropdown}
//                   className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
//                 >
//                   Delete
//                 </DropdownItem> */}
//               </Dropdown>
//             </div>
//           </div>

//         </div>
//         <div className="relative pt-5">
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="48"
//               height="48"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="#ffffff"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="lucide lucide-play-icon"
//             >
//               <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/>
//             </svg>
//           </div>
//           <div className="max-h-[330px] overflow-hidden" id="chartDarkStyle">
//             <img
//               src="./public/marita-kavelashvili-ugnrXk1129g-unsplash.jpg"
//               alt="Video thumbnail"
//               className="w-full h-full object-cover rounded-2xl"
//               loading="lazy"
//             />
//           </div>
//         </div>

//         {/* <p className="mx-auto mt-10 w-full max-w-[380px] text-center text-sm text-gray-500 sm:text-base">
//           You earn $3287 today, it's higher than last month. Keep up your good
//           work!
//         </p> */}
//       </div>

//       <div className="flex items-center justify-center gap-5 px-6 py-3.5 sm:gap-8 sm:py-5">
//         <div>
//           <p className="mb-1 text-center text-gray-500 text-theme-xs dark:text-gray-400 sm:text-sm">
//             Views
//           </p>
//           <p className="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
//             20K
//             {/* <svg
//               width="16"
//               height="16"
//               viewBox="0 0 16 16"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M7.26816 13.6632C7.4056 13.8192 7.60686 13.9176 7.8311 13.9176C7.83148 13.9176 7.83187 13.9176 7.83226 13.9176C8.02445 13.9178 8.21671 13.8447 8.36339 13.6981L12.3635 9.70076C12.6565 9.40797 12.6567 8.9331 12.3639 8.6401C12.0711 8.34711 11.5962 8.34694 11.3032 8.63973L8.5811 11.36L8.5811 2.5C8.5811 2.08579 8.24531 1.75 7.8311 1.75C7.41688 1.75 7.0811 2.08579 7.0811 2.5L7.0811 11.3556L4.36354 8.63975C4.07055 8.34695 3.59568 8.3471 3.30288 8.64009C3.01008 8.93307 3.01023 9.40794 3.30321 9.70075L7.26816 13.6632Z"
//                 fill="#D92D20"
//               />
//             </svg> */}
//           </p>
//         </div>

//         <div className="w-px bg-gray-200 h-7 dark:bg-gray-800"></div>

//         <div>
//           <p className="mb-1 text-center text-gray-500 text-theme-xs dark:text-gray-400 sm:text-sm">
//             Likes
//           </p>
//           <p className="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
//             20K
//             {/* <svg
//               width="16"
//               height="16"
//               viewBox="0 0 16 16"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M7.60141 2.33683C7.73885 2.18084 7.9401 2.08243 8.16435 2.08243C8.16475 2.08243 8.16516 2.08243 8.16556 2.08243C8.35773 2.08219 8.54998 2.15535 8.69664 2.30191L12.6968 6.29924C12.9898 6.59203 12.9899 7.0669 12.6971 7.3599C12.4044 7.6529 11.9295 7.65306 11.6365 7.36027L8.91435 4.64004L8.91435 13.5C8.91435 13.9142 8.57856 14.25 8.16435 14.25C7.75013 14.25 7.41435 13.9142 7.41435 13.5L7.41435 4.64442L4.69679 7.36025C4.4038 7.65305 3.92893 7.6529 3.63613 7.35992C3.34333 7.06693 3.34348 6.59206 3.63646 6.29926L7.60141 2.33683Z"
//                 fill="#039855"
//               />
//             </svg> */}
//           </p>
//         </div>

//         <div className="w-px bg-gray-200 h-7 dark:bg-gray-800"></div>

//         <div>
//           <p className="mb-1 text-center text-gray-500 text-theme-xs dark:text-gray-400 sm:text-sm">
//             Dislikes
//           </p>
//           <p className="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
//             20
//           </p>
//         </div>
            
//         <div className="w-px bg-gray-200 h-7 dark:bg-gray-800"></div>

//         <div>
//           <p className="mb-1 text-center text-gray-500 text-theme-xs dark:text-gray-400 sm:text-sm">
//             Comments
//           </p>
//           <p className="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
//             2000
//           </p>
//         {/* <div>
//           <p className="mb-1 text-center text-gray-500 text-theme-xs dark:text-gray-400 sm:text-sm">
//             Share
//           </p>
//           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-share2-icon lucide-share-2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
//         </div> */}

//         </div>
            
//         {/* <div className="w-px bg-gray-200 h-7 dark:bg-gray-800"></div> */}

//         {/* <div>
//           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-share2-icon lucide-share-2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
//         </div> */}
//       </div>
//     </div>
//   );
// }


// ========================================
// ========================================
// ========================================

// import { useState, useEffect } from "react";
// import axios from "axios";

// interface Video {
//   id: number;
//   filename: string;
//   title: string;
//   thumbnail: string | null;
//   description: string;
//   created_at: string;
//   status: string;
//   views?: number;
//   likes?: number;
//   dislikes?: number;
//   comments?: number;
// }

// export const useUserVideos = (userId: number) => {
//   const [videos, setVideos] = useState<Video[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(
//           `http://localhost:8000/api/user-videos/${userId}/`
//         );
//         setVideos(response.data.videos);
//         setError(null);
//       } catch (err) {
//         setError("Failed to fetch videos");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (userId) {
//       fetchVideos();
//     }
//   }, [userId]);

//   return { videos, loading, error };
// };


// // ========== VideoCardComponent.tsx ==========

// // import { useState } from "react";
// import { Dropdown } from "../ui/dropdown/Dropdown";
// import { DropdownItem } from "../ui/dropdown/DropdownItem";
// import { MoreDotIcon } from "../../icons";

// interface Video {
//   id: number;
//   filename: string;
//   title: string;
//   thumbnail: string | null;
//   description: string;
//   created_at: string;
//   status: string;
//   views?: number;
//   likes?: number;
//   dislikes?: number;
//   comments?: number;
// }

// interface VideoCardComponentProps {
//   video: Video;
// }

// export default function VideoCardComponent({ video }: VideoCardComponentProps) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isEditOpen, setIsEditOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//     setIsEditOpen(false);
//   };

//   const closeDropdown = () => {
//     setIsOpen(false);
//   };

//   const toggleEditDropdown = () => {
//     setIsEditOpen(!isEditOpen);
//     setIsOpen(false);
//   };

//   const closeEditDropdown = () => {
//     setIsEditOpen(false);
//   };

//   // Format views/likes to readable format
//   const formatNumber = (num: number | undefined) => {
//     if (!num) return "0";
//     if (num >= 1000) return (num / 1000).toFixed(1) + "K";
//     return num.toString();
//   };

//   return (
//     <div className="rounded-2xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-white/[0.03]">
//       <div className="px-5 pt-5 bg-white shadow-default rounded-2xl pb-6 dark:bg-gray-900 sm:px-6 sm:pt-6">
        
//         {/* Header with dropdown */}
//         <div className="flex justify-between">
//           <div>
//             <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90 truncate">
//               {video.title || video.filename}
//             </h3>
//             <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400 line-clamp-2">
//               {video.description || "No description"}
//             </p>
//           </div>

//           {/* Dropdowns */}
//           <div className="flex gap-2">
//             {/* Menu dropdown */}
//             <div className="relative inline-block">
//               <button className="dropdown-toggle" onClick={toggleDropdown}>
//                 <MoreDotIcon className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 size-6" />
//               </button>
//               <Dropdown isOpen={isOpen} onClose={closeDropdown} className="w-40 p-2">
//                 <DropdownItem
//                   onItemClick={closeDropdown}
//                   className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
//                 >
//                   Edit
//                 </DropdownItem>
//                 <DropdownItem
//                   onItemClick={closeDropdown}
//                   className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
//                 >
//                   Delete
//                 </DropdownItem>
//               </Dropdown>
//             </div>

//             {/* Share dropdown */}
//             <div className="relative inline-block">
//               <button className="dropdown-toggle" onClick={toggleEditDropdown}>
//                 <svg
//                   height="1em"
//                   width="1em"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="#98a2b3"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="hover:text-gray-700"
//                 >
//                   <circle cx="18" cy="5" r="3" />
//                   <circle cx="6" cy="12" r="3" />
//                   <circle cx="18" cy="19" r="3" />
//                   <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
//                   <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
//                 </svg>
//               </button>
//               <Dropdown isOpen={isEditOpen} onClose={closeEditDropdown} className="w-40 p-2">
//                 <DropdownItem
//                   onItemClick={closeEditDropdown}
//                   className="flex justify-between w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
//                 >
//                   Copy Link
//                 </DropdownItem>
//                 <DropdownItem
//                   onItemClick={closeEditDropdown}
//                   className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
//                 >
//                   Share on Facebook
//                 </DropdownItem>
//               </Dropdown>
//             </div>
//           </div>
//         </div>

//         {/* Thumbnail with play button */}
//         <div className="relative pt-5">
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="48"
//               height="48"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="#ffffff"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="lucide lucide-play-icon"
//             >
//               <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
//             </svg>
//           </div>
//           <div className="max-h-[330px] overflow-hidden">
//             <img
//               src={video.thumbnail || "/default-thumbnail.jpg"}
//               alt={video.title}
//               className="w-full h-[200px] object-cover rounded-2xl"
//               loading="lazy"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Stats Footer */}
//       <div className="flex items-center justify-center gap-5 px-6 py-3.5 sm:gap-8 sm:py-5 flex-wrap">
//         <div>
//           <p className="mb-1 text-center text-gray-500 text-theme-xs dark:text-gray-400 sm:text-sm">
//             Views
//           </p>
//           <p className="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
//             {formatNumber(video.views)}
//           </p>
//         </div>

//         <div className="w-px bg-gray-200 h-7 dark:bg-gray-800"></div>

//         <div>
//           <p className="mb-1 text-center text-gray-500 text-theme-xs dark:text-gray-400 sm:text-sm">
//             Likes
//           </p>
//           <p className="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
//             {formatNumber(video.likes)}
//           </p>
//         </div>

//         <div className="w-px bg-gray-200 h-7 dark:bg-gray-800"></div>

//         <div>
//           <p className="mb-1 text-center text-gray-500 text-theme-xs dark:text-gray-400 sm:text-sm">
//             Dislikes
//           </p>
//           <p className="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
//             {formatNumber(video.dislikes)}
//           </p>
//         </div>

//         <div className="w-px bg-gray-200 h-7 dark:bg-gray-800"></div>

//         <div>
//           <p className="mb-1 text-center text-gray-500 text-theme-xs dark:text-gray-400 sm:text-sm">
//             Comments
//           </p>
//           <p className="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
//             {formatNumber(video.comments)}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }






import { useState, useEffect } from "react";
import axios from "axios";
import { ShareIcon } from "../../icons";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { MoreDotIcon } from "../../icons";
import { useVideoEdit } from "../../context/VideoEditContext";
import { getUserVideos } from "../../services/api";

// Hook
interface Video {
  id: number;
  filename: string;
  title: string;
  thumbnail: string | null;
  description: string;
  created_at: string;
  status: string;
  views?: number;
  likes?: number;
  dislikes?: number;
  comments?: number;
}

// export const useUserVideos = (userId: number) => {
//   const [videos, setVideos] = useState<Video[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(
//           `http://localhost:8000/api/user-videos/${userId}/`
//         );
//         setVideos(response.data.videos);
//         setError(null);
//       } catch (err) {
//         setError("Failed to fetch videos");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (userId) {
//       fetchVideos();
//     }
//   }, [userId]);

//   return { videos, loading, error };
// };


export const useUserVideos = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const res = await getUserVideos(); // ✅ use API helper
        setVideos(res.videos);
      } catch {
        setError("Failed to fetch videos");
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return { videos, loading, error };
};




// Component
interface VideoCardComponentProps {
  video: Video;
}

export default function VideoCardComponent({ video }: VideoCardComponentProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const { openModal } = useVideoEdit(); // Get the context function

  const handleCardClick = () => {
    openModal(video); // Open modal with this video data
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsEditOpen(false);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const toggleEditDropdown = () => {
    setIsEditOpen(!isEditOpen);
    setIsOpen(false);
  };

  const closeEditDropdown = () => {
    setIsEditOpen(false);
  };

  const formatNumber = (num: number | undefined) => {
    if (!num) return "0";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toString();
  };

  return (
    <div 
    onClick={handleCardClick}
    className="rounded-2xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-white/[0.03]"
    >
      <div className="px-4 py-4 bg-white shadow-default rounded-2xl dark:bg-gray-900 ">
        
        <div className="flex justify-between">
          {/* <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90 truncate">
              {video.title || video.filename}
            </h3>
            <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400 line-clamp-2">
              {video.description || "No description"}
            </p>
          </div> */}

          {/* <div className="flex gap-2">
            <div className="relative inline-block">
              <button className="dropdown-toggle" onClick={toggleDropdown}>
                <MoreDotIcon className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 size-6" />
              </button>
              <Dropdown isOpen={isOpen} onClose={closeDropdown} className="w-40 p-2">
                <DropdownItem
                  onItemClick={closeDropdown}
                  className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                >
                  Edit
                </DropdownItem>
                <DropdownItem
                  onItemClick={closeDropdown}
                  className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                >
                  Delete
                </DropdownItem>
              </Dropdown>
            </div>

            <div className="relative inline-block">
              <button className="dropdown-toggle" onClick={toggleEditDropdown}>
                <svg
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#98a2b3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="hover:text-gray-700"
                >
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
                </svg>
              </button>
              <Dropdown isOpen={isEditOpen} onClose={closeEditDropdown} className="w-40 p-2">
                <DropdownItem
                  onItemClick={closeEditDropdown}
                  className="flex justify-between w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                >
                  Copy Link
                </DropdownItem>
                <DropdownItem
                  onItemClick={closeEditDropdown}
                  className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                >
                  Share on Facebook
                </DropdownItem>
              </Dropdown>
            </div>
          </div> */}
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 drop-shadow-[2px_4px_6px_black]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-play-icon"
            >
              <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
            </svg>
          </div>
          <div className="max-h-[330px] overflow-hidden">
            <img
              // eslint-disable-next-line no-constant-binary-expression
              src={`http://d1f96o9nypo8e0.cloudfront.net/${video.thumbnail}` || "/default-thumbnail.jpg"}
              alt={video.title}
              className="w-full h-[200px] object-cover rounded-lg border-gray-200"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="flex">

        <div className="px-4 py-4 w-[85%]">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90 truncate">
            {video.title || video.filename}
          </h3>
          <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400 line-clamp-2">
            {video.description || "No description"}
          </p>
        </div>

        <div className="relative inline-block px-4 py-5">
          <button className="dropdown-toggle" onClick={toggleDropdown}>
            <MoreDotIcon className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 size-6" />
          </button>
          <Dropdown isOpen={isOpen} onClose={closeDropdown} className="w-40 p-2">
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              Edit
            </DropdownItem>
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              Delete
            </DropdownItem>
          </Dropdown>
        </div>

      </div>

      <div 
        // className="flex items-center justify-center gap-5 flex-wrap"
        className="px-4 pb-4"
      >
        <div className="flex items-center justify-between">
          <p className="mb-1 text-center text-gray-500 text-theme-xs dark:text-gray-400 sm:text-sm">
            Views
          </p>
          <p className="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
            {formatNumber(video.views)}
          </p>
        </div>

        {/* <div className="w-px bg-gray-200 h-7 dark:bg-gray-800"></div> */}

        <div className="flex items-center justify-between">
          <p className="mb-1 text-center text-gray-500 text-theme-xs dark:text-gray-400 sm:text-sm">
            Likes
          </p>
          <p className="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
            {formatNumber(video.likes)}
          </p>
        </div>

        {/* <div className="w-px bg-gray-200 h-7 dark:bg-gray-800"></div> */}

        <div className="flex items-center justify-between">
          <p className="mb-1 text-center text-gray-500 text-theme-xs dark:text-gray-400 sm:text-sm">
            Dislikes
          </p>
          <p className="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
            {formatNumber(video.dislikes)}
          </p>
        </div>

        {/* <div className="w-px bg-gray-200 h-7 dark:bg-gray-800"></div> */}

        <div className="flex items-center justify-between">
          <p className="mb-1 text-center text-gray-500 text-theme-xs dark:text-gray-400 sm:text-sm">
            Comments
          </p>
          <p className="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
            {formatNumber(video.comments)}
          </p>
        </div>
      </div>
      <div className="px-4 pb-4">
        <h3 className="w-[85%] text-lg font-semibold text-gray-800 dark:text-white/90 truncate">
          Share 
          <span>
            <p className="font-normal mb-1 text-center text-gray-500 text-theme-xs dark:text-gray-400 sm:text-sm"> Find out where your video gets the most traffic</p>
          </span>
        </h3>

        <div className="flex justify-between py-4  text-gray-800 dark:text-white/90">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
          </svg>
          
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter-icon lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16">
            <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube-icon lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
        </div>
        
      </div>
    </div>
  );
}


