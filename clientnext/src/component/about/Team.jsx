'use client'
import React from 'react'
import image from "next/image";
import Link from "next/link";
import { useGetAllTeamQuery } from '../../../redux/features/team/teamApi';
import { FaSearch } from 'react-icons/fa';



function Team() {
     const { data, isLoading, error } = useGetAllTeamQuery();
     const team = data?.team || []
    
          if (isLoading) return <p className="text-blue-600 text-center">Loading team...</p>
          if (error || !team.length) return <p className="text-red-600 text-center">Failed to load team.</p>
  return (
   <>
     <section className="bg-[#F2F6FE] py-20">
           <div className=" max-w-[1200px] mx-auto text-center">
             <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Team</h2>
             <h2 className="text-3xl font-bold text-gray-800 mb-10">
               Meet Our Team Members
             </h2>
   
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
               {team.map((team) => (
                 <div
                   key={team._id}
                   className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
                 >
                   <div className="relative group bg-gray-800 flex justify-center items-center">
                     <img
                       src={team.image.url}
                       alt={team.alt}
                       className="w-60 h-60 rounded-full border-2 border-red-500 object-cover"
                     />
                     {/* hover overlay  */}
                     <div className="absolute inset-0 bg-[#009df2] bg-opacity-95 text-white flex flex-col justify-center items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                       <div className="flex gap-4">
                         <div
                           className="bg-white text-[#009df2] p-3 rounded-full  transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100
                             transition-all duration-500 ease-in-out"
                         >
                           <FaSearch />
                         </div>
                       </div>
                     </div>
                   </div>
                   <div className="py-6 h-30">
                     <h3 className="text-lg font-semibold text-gray-800">
                       {team.name}
                     </h3>
                     <p className="text-sm font-medium text-blue-400 " >
                       {team.position}
                     </p>
                   </div>
                 </div>
               ))}
             </div>
           </div>
         </section>
   </>
  )
}

export default Team
