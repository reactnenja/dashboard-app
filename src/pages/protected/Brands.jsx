// import { AnimatePresence, motion } from "framer-motion";
// import { Search, Upload, X } from "lucide-react";
// import React, { useState } from "react";
// import { ThreeCircles } from "react-loader-spinner";
// import { useGetBrandsQuery } from "../../store/slice/brandsSlice";

// const Brands = () => {
//     const [open, setOpen] = useState(false);
//     const [uploading, setUploading] = useState(false);
//     const [progress, setProgress] = useState(0);
//     const [uploadSuccess, setUploadSuccess] = useState(false);

//     // redux
//     const { data, error, isLoading } = useGetBrandsQuery();
//     // redux

//     const handleOpen = (e) => {
//         e.preventDefault();
//         setOpen(!open);
//         setUploadSuccess(false); // Reset success message when opening the modal
//     };

//     const handleUpload = (e) => {
//         e.preventDefault();
//         setUploading(true);
//         let interval = setInterval(() => {
//             setProgress((prev) => {
//                 if (prev >= 100) {
//                     clearInterval(interval);
//                     setUploading(false);
//                     setUploadSuccess(true);
//                     return 100;
//                 }
//                 return prev + 10;
//             });
//         }, 1000);
//     };

//     const handleCancel = () => {
//         setUploading(false);
//         setProgress(0);
//         setUploadSuccess(false);
//     };

//     React.useEffect(() => {
//         if (open) {
//             document.body.style.overflow = "hidden";
//         } else {
//             document.body.style.overflow = "auto";
//         }
//     }, [open]);

//     // if section
//     if (isLoading)
//         return (
//             <div className="fixed w-full h-screen bg-black top-0 left-0 z-[200]">
//                 <div className="flex justify-center items-center w-full h-screen">
//                     <ThreeCircles
//                         visible={true}
//                         height="100"
//                         width="100"
//                         color="#4fa94d"
//                         ariaLabel="three-circles-loading"
//                     />
//                 </div>
//             </div>
//         );
//     if (error) return <div>Error: {error.message}</div>;
//     // if section end

//     return (
//         <div className="w-full border p-4 h-screen overflow-y-auto">
//             <div className="w-[1530px] mb-10 flex items-center justify-between sticky top-0 bg-white z-10 py-4">
//                 <form className="rounded-md flex justify-between items-center gap-2 p-3">
//                     <Search />
//                     <input
//                         type="text"
//                         className="outline-none w-[500px]"
//                         placeholder="Search brands: text, id"
//                     />
//                 </form>

//                 <button
//                     onClick={handleOpen}
//                     className="bg-blue-500/80 p-3 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
//                 >
//                     New Brands
//                 </button>
//             </div>

//             <AnimatePresence>
//                 {open && (
//                     <motion.div
//                         className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                     >
//                         <motion.div
//                             className="w-[800px] p-6 bg-slate-300/50 backdrop-blur-2xl rounded-md relative"
//                             initial={{ scale: 0.9 }}
//                             animate={{ scale: 1 }}
//                             exit={{ scale: 0.9 }}
//                             transition={{ duration: 0.3 }}
//                         >
//                             <button
//                                 onClick={handleOpen}
//                                 className="absolute top-2 right-2 text-black"
//                             >
//                                 <X className="w-6 h-6" />
//                             </button>
//                             <div>
//                                 <h2 className="text-3xl font-bold text-center mb-4">
//                                     New Brands Adding
//                                 </h2>
//                                 <form>
//                                     <div className="mb-4">
//                                         <label
//                                             htmlFor="name"
//                                             className="inline-block mb-2 text-xl font-medium"
//                                         >
//                                             Your Name
//                                         </label>
//                                         <input
//                                             type="text"
//                                             id="name"
//                                             className="p-3 w-full bg-transparent border-black border outline-none rounded-md"
//                                             placeholder="Your Name..."
//                                         />
//                                     </div>
//                                     <div className="mb-4 border border-black p-4 rounded-md bg-transparent">
//                                         <label
//                                             htmlFor="file"
//                                             className="flex flex-col items-center text-blue-600 capitalize underline decoration-blue-600 text-center cursor-pointer mb-2 text-xl font-medium"
//                                         >
//                                             <Upload className="w-[150px] h-[150px] mb-2" />
//                                             <span>Your Image File</span>
//                                         </label>
//                                         <input
//                                             type="file"
//                                             id="file"
//                                             className="p-3 hidden outline-none rounded-md"
//                                             onChange={handleUpload}
//                                         />
//                                     </div>
//                                     <div>
//                                         <button
//                                             type="button"
//                                             className="border bg-transparent p-3 rounded-md text-black font-medium border-black w-full hover:bg-gray-200 transition-colors duration-300"
//                                             onClick={handleUpload}
//                                         >
//                                             Upload
//                                         </button>
//                                     </div>
//                                 </form>

//                                 {uploading && (
//                                     <motion.div
//                                         className="mt-4 bg-white border border-black p-4 rounded-md"
//                                         initial={{ opacity: 0 }}
//                                         animate={{ opacity: 1 }}
//                                         exit={{ opacity: 0 }}
//                                         transition={{ duration: 0.3 }}
//                                     >
//                                         <h3 className="text-xl font-bold mb-2">
//                                             Uploading...
//                                         </h3>
//                                         <div className="relative bg-gray-200 rounded-md h-4">
//                                             <motion.div
//                                                 className="absolute top-0 left-0 h-full bg-blue-600 rounded-md"
//                                                 style={{
//                                                     width: `${progress}%`,
//                                                 }}
//                                                 initial={{ width: 0 }}
//                                                 animate={{
//                                                     width: `${progress}%`,
//                                                 }}
//                                                 transition={{ duration: 1 }}
//                                             />
//                                         </div>
//                                         <div className="mt-2 flex justify-between text-sm">
//                                             <button
//                                                 onClick={handleCancel}
//                                                 className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors duration-300"
//                                             >
//                                                 Cancel
//                                             </button>
//                                         </div>
//                                     </motion.div>
//                                 )}

//                                 {uploadSuccess && !uploading && (
//                                     <motion.div
//                                         className="mt-4 bg-green-100 border border-green-300 p-4 rounded-md"
//                                         initial={{ opacity: 0 }}
//                                         animate={{ opacity: 1 }}
//                                         exit={{ opacity: 0 }}
//                                         transition={{ duration: 0.3 }}
//                                     >
//                                         <h3 className="text-xl font-bold text-green-600 mb-2">
//                                             Success!
//                                         </h3>
//                                         <p className="text-green-600">
//                                             Your image file has been
//                                             successfully uploaded.
//                                         </p>
//                                     </motion.div>
//                                 )}
//                             </div>
//                         </motion.div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//             <div className="overflow-x-auto">
//                 <table className="table border-2 w-full capitalize">
//                     <thead className="sticky top-0 bg-white">
//                         <tr>
//                             <th className="p-3 border">Name</th>
//                             <th className="p-3 border">Images</th>
//                             <th className="p-3 border">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data?.data?.map((brand) => (
//                             <tr key={brand.id}>
//                                 <td className="border p-3">{brand.title}</td>
//                                 <td className="border p-3">
//                                     <img
//                                         src={`https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/${brand.image_src}`}
//                                         alt={brand?.title}
//                                         className="w-20 h-20 p-4 border object-cover"
//                                     />
//                                 </td>
//                                 <td className="flex gap-2 justify-between items-center p-3 border">
//                                     <button
//                                         onClick={handleEdit}
//                                         className="p-2 border rounded-md w-1/3 bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
//                                     >
//                                         Edit
//                                     </button>
//                                     <button
//                                         onClick={handleDelete}
//                                         className="p-2 border rounded-md w-1/3 bg-red-500 text-white hover:bg-red-600 transition-colors duration-300"
//                                     >
//                                         Delete
//                                     </button>
//                                     <button className="p-2 border rounded-md w-1/3 bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300">
//                                         Update
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default Brands;

import React from "react";

const Brands = () => {
    return <div>hjkl;'</div>;
};

export default Brands;
