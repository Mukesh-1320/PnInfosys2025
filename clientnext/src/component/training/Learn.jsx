"use client";
import React from "react";
import { motion } from "framer-motion";
import { useGetAllLearnQuery } from "../../../redux/features/learn/learnApi";


function Learn() {
  const { data, isLoading, error } = useGetAllLearnQuery();
  const learn = data?.learn || [];

  if (isLoading)
    return <p className="text-blue-600 text-center">Loading learn...</p>;
  if (error || !learn.length)
    return <p className="text-red-600 text-center">Failed to learn.</p>;

  return (
    <>
      <section className="px-6 md:px-12 lg:px-24 py-12 bg-white">
        <motion.div
          className="text-left mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-xl md:text-2xl text-gray-800 font-semibold">
            What will you
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-500">
            Learn
          </h1>
        </motion.div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {learn.map((learn) => (
            <motion.div
              key={learn._id}
              className="relative group rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: learn._id * 0.2 }}
            >
              <img
                src={learn.image.url}
                alt={learn.title}
                className="w-full h-55 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="p-6 text-center mt-10 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {learn.title}
                </h3>
                <p className="text-blue-500 text-sm mt-6">
                  {learn.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Learn;
