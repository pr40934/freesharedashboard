// import EcommerceMetrics from "../../components/ecommerce/EcommerceMetrics";
// import MonthlySalesChart from "../../components/ecommerce/MonthlySalesChart";
// import StatisticsChart from "../../components/ecommerce/StatisticsChart";
// import MonthlyTarget from "../../components/ecommerce/MonthlyTarget";
// import RecentOrders from "../../components/ecommerce/RecentOrders";
// import DemographicCard from "../../components/ecommerce/DemographicCard";
// import PageMeta from "../../components/common/PageMeta";
// import VideoCardComponent, { useUserVideos }from "../../components/ecommerce/VideoCardUi";

// export default function Home() {
//   const userId = 234; // Get from auth/context in real app
//   const { videos, loading, error } = useUserVideos(userId);
//   return (
//     <>
//       <PageMeta
//         title="React.js Ecommerce Dashboard | TailAdmin - React.js Admin Dashboard Template"
//         description="This is React.js Ecommerce Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
//       />
//       <div className="grid grid-cols-12 gap-4 md:gap-6">
        
//         <div className="col-span-12 space-y-6 xl:col-span-7">
//           <EcommerceMetrics />

//           <MonthlySalesChart />
//         </div>

//         <div className="col-span-12 xl:col-span-5">
//           <MonthlyTarget />
//         </div>
// {/* 
//           <div className="col-span-12 space-y-6 xl:col-span-7">
//             <div className="col-span-12">
//               <VideoCard
//                 imageUrl="./public/marita-kavelashvili-ugnrXk1129g-unsplash.jpg"
//                 status="Published"
//                 likes={123}
//                 dislikes={12}
//                 views={1200}
//                 comments={34}
//                 onLike={() => console.log("Liked!")}
//                 onDislike={() => console.log("Disliked!")}
//                 onComment={() => console.log("Comment clicked!")}
//               />
//             </div>
//           </div>
//          */}
        
//         <div className="col-span-12 xl:col-span-5">
//           {/* <div className="col-span-6 space-y-6 xl:col-span-7">
//             <div className="col-span-6"> */}
//               {/* <VideoCardComponent
//                 imageUrl="/marita-kavelashvili-ugnrXk1129g-unsplash.jpg" // no ./public prefix needed
//                 status="Published"
//                 likes={123}
//                 dislikes={12}
//                 views={1200}
//                 comments={34}
//                 onLike={() => console.log("Liked!")}
//                 onDislike={() => console.log("Disliked!")}
//                 onComment={() => console.log("Comment clicked!")}
//               /> */}
//             {/* </div>
//           </div> */}
//         </div>
        
//         <div className="col-span-12 xl:col-span-5">
//           {/* <div className="col-span-6 space-y-6 xl:col-span-7">
//             <div className="col-span-6"> */}
//               {/* <VideoCardComponent
//                 imageUrl="/marita-kavelashvili-ugnrXk1129g-unsplash.jpg" // no ./public prefix needed
//                 status="Published"
//                 likes={123}
//                 dislikes={12}
//                 views={1200}
//                 comments={34}
//                 onLike={() => console.log("Liked!")}
//                 onDislike={() => console.log("Disliked!")}
//                 onComment={() => console.log("Comment clicked!")}
//               /> */}
//             {/* </div>
//           </div> */}
//           {videos.map((video) => (
//               <VideoCardComponent key={video.id} video={video} />
//             ))}
//         </div>



//         <div className="col-span-12">
//           <StatisticsChart />
//         </div>

//         <div className="col-span-12 xl:col-span-5">
//           <DemographicCard />
//         </div>

//         <div className="col-span-12 xl:col-span-7">
//           <RecentOrders />
//         </div>
//       </div>
//     </>
//   );
// }
















// =================================
// =================================
// =================================





// ========== Home.tsx ==========
import EcommerceMetrics from "../../components/ecommerce/EcommerceMetrics";
import MonthlySalesChart from "../../components/ecommerce/MonthlySalesChart";
import StatisticsChart from "../../components/ecommerce/StatisticsChart";
import MonthlyTarget from "../../components/ecommerce/MonthlyTarget";
import RecentOrders from "../../components/ecommerce/RecentOrders";
import DemographicCard from "../../components/ecommerce/DemographicCard";
import PageMeta from "../../components/common/PageMeta";
import VideoCardComponent, { useUserVideos } from "../../components/ecommerce/VideoCardUi";

export default function Home() {
  const userId = 234;
  const { videos, loading, error } = useUserVideos(userId);

  return (
    <>
      <PageMeta
        title="React.js Ecommerce Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Ecommerce Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <EcommerceMetrics />
          <MonthlySalesChart />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <MonthlyTarget />
        </div>

        {/* Videos Grid */}
        <div className="col-span-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 dark:text-white">
            Your Videos
          </h2>
          
          {loading && <p className="text-gray-500">Loading videos...</p>}
          {error && <p className="text-red-500">{error}</p>}
          
          {!loading && videos.length === 0 && (
            <p className="text-gray-500">No videos uploaded yet</p>
          )}
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <VideoCardComponent key={video.id} video={video} />
            ))}
          </div>
        </div>

        <div className="col-span-12">
          <StatisticsChart />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <DemographicCard />
        </div>

        <div className="col-span-12 xl:col-span-7">
          <RecentOrders />
        </div>
      </div>
    </>
  );
}

