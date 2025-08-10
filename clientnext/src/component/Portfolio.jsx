'use client'
import React from 'react'
import Image from "next/image";
import link from "next/link";
import { useGetAllPortfolioQuery } from '../../redux/features/portfolio/portfolioApi';
import { FaLink, FaSearch } from 'react-icons/fa';

function Portfolio() {
    const { data, isLoading, error } = useGetAllPortfolioQuery();
      const portfolio = data?.portfolio || []


      if (isLoading) return <p className="text-blue-600 text-center">Loading portfolio...</p>
      if (error || !portfolio.length) return <p className="text-red-600 text-center">Failed to load portfolio.</p>

  return (
    <>
      <section className="px-6 md:px-12 lg:px-24 py-12 bg-white">
            <div className="text-left mb-10">
              <h2 className="text-xl md:text-2xl text-gray-800 font-semibold">
                Our
              </h2>
              <h1 className="text-4xl md:text-5xl font-bold text-blue-500">
                Portfolio
              </h1>
            </div>
    
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {portfolio.map((portfolio) => (
                <div
                  key={portfolio._id}
                  className="relative group rounded-2xl overflow-hidden shadow-lg"
                >
                  <img
                    src={portfolio.image.url}
                    alt={portfolio.alt}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/*hover Overlay */}
                  <div className="absolute inset-0 bg-[#009df2] bg-opacity-95 text-white flex flex-col justify-center items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex gap-4">
                      <div className="bg-white text-[#009df2] p-3 rounded-full hover:scale-110 transition">
                        <FaSearch/>
                      </div>
                      <div className="bg-white text-[#009df2] p-3 rounded-full hover:scale-110 transition">
                        <FaLink/>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-center">{portfolio.title}</h3>
                    <p className="text-shadow-md font-bold mt-0 ">
                      {portfolio.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
    </>
  )
}

export default Portfolio
