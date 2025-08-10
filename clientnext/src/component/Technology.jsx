'use client';
import Image from "next/image";
import link from "next/link";
import { useGetAllTechnologiesQuery } from "../../redux/features/technology/technologyApi";


export default function Technology() {
  const { data, isLoading, error } = useGetAllTechnologiesQuery();
   const technologies = data?.technology || []



  // const technologies = Array.isArray(data) ? data : data?.data || [];

  if (isLoading) return <p className="text-blue-600 text-center">Loading technologies...</p>
  if (error || !technologies.length) return <p className="text-red-600 text-center">Failed to load technologies.</p>


  return (
    <section className="px-6 md:px-12 lg:px-24 py-12 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 text-left">
        Technologies <br />
        <span className="text-blue-500 text-5xl">We work on..</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        {technologies.map((tech) => (
          <div
            key={tech._id}
            className="bg-white rounded-xl shadow-md text-center p-4 hover:shadow-xl transition"
          >
            <img
              src={tech.image.url}
              alt={tech.title}
              className="w-50 h-50 object-contain mx-auto mb-4 transform transition-transform duration-400 hover:scale-110"
            />
            <h3 className="text-black font-semibold text-xl">{tech.title}</h3>
            <p className="text-blue-500 text-sm mt-2">{tech.discription}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
