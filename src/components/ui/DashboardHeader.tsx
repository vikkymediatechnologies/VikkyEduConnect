// src/components/layout/DashboardHeader.tsx
import { Bell, User } from "lucide-react";
import { motion } from "framer-motion";

const DashboardHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex items-center gap-5"
    >
      {/* Notification Button */}
      <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
        <Bell size={20} className="text-gray-600" />
        <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-[1px] rounded-full">
          3
        </span>
      </button>

      {/* User Info */}
      <div className="flex items-center gap-3 px-3 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition cursor-pointer">
        <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
          V
        </div>
        <div className="hidden md:flex flex-col leading-tight">
          <span className="text-sm font-semibold text-gray-800">Victor</span>
          <span className="text-xs text-gray-500">Admin</span>
        </div>
        <User size={18} className="text-gray-500" />
      </div>
    </motion.div>
  );
};

export default DashboardHeader;



// import { useEffect, useState } from "react";
// import { Bell, User } from "lucide-react";
// import { motion } from "framer-motion";

// const DashboardHeader = () => {
//   const [role, setRole] = useState("User");
//   const [profileImage, setProfileImage] = useState<string | null>(null);

//   useEffect(() => {
//     const storedRole = localStorage.getItem("role");
//     setRole(storedRole ? storedRole.charAt(0).toUpperCase() + storedRole.slice(1) : "User");

//     const savedImage = localStorage.getItem("profileImage");
//     if (savedImage) setProfileImage(savedImage);
//   }, []);

//   // ✅ Handle profile image upload
//   const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onloadend = () => {
//       const base64String = reader.result as string;
//       setProfileImage(base64String);
//       localStorage.setItem("profileImage", base64String);
//     };
//     reader.readAsDataURL(file);
//   };

//   return (
//     <motion.header
//       initial={{ opacity: 0, y: -10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4 }}
//       className="flex items-center justify-between px-6 py-4 bg-white border-b shadow-sm"
//     >
//       {/* ✅ Dashboard Title */}
//       <h1 className="text-lg sm:text-xl font-semibold text-gray-800">
//         {role} Dashboard
//       </h1>

//       {/* ✅ Right Side */}
//       <div className="flex items-center gap-5">
//         {/* Notification Button */}
//         <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
//           <Bell size={20} className="text-gray-600" />
//           <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-[1px] rounded-full">
//             3
//           </span>
//         </button>

//         {/* User Profile */}
//         <div className="relative group">
//           <div className="flex items-center gap-3 px-3 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition cursor-pointer">
//             {/* Profile Image / Initial */}
//             {profileImage ? (
//               <img
//                 src={profileImage}
//                 alt="Profile"
//                 className="w-8 h-8 rounded-full object-cover"
//               />
//             ) : (
//               <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
//                 {role.charAt(0)}
//               </div>
//             )}

//             <div className="hidden md:flex flex-col leading-tight">
//               <span className="text-sm font-semibold text-gray-800">Victor</span>
//               <span className="text-xs text-gray-500">{role}</span>
//             </div>

//             <User size={18} className="text-gray-500" />
//           </div>

//           {/* Hidden file input */}
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageUpload}
//             className="absolute inset-0 opacity-0 cursor-pointer"
//             title="Upload Profile Picture"
//           />
//         </div>
//       </div>
//     </motion.header>
//   );
// };

// export default DashboardHeader;
