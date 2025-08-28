"use client";
import React from "react";
import Image from "next/image";
import link from "next/link";
import { useGetAllEventsQuery } from "../../redux/features/events/eventsApi";

function Events() {
  const { data, isLoading, error } = useGetAllEventsQuery();
  const events = data?.events || [];

  if (isLoading)
    return <p className="text-blue-600 text-center">Loading events...</p>;
  if (error || !events.length)
    return <p className="text-red-600 text-center">Failed to events.</p>;
  return (
    <>
      <section className="px-6 md:px-12 lg:px-24 py-12 bg-white">
        <div className="text-left mb-10">
          <h2 className="text-xl md:text-2xl text-gray-800 font-semibold">
            News
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-500">
            Events
          </h1>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((events) => (
            <div
              key={events._id}
              className="relative group rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={events.image.url}
                alt={events.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="p-6 text-center mt-10 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {events.title}
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  {events.description}
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-center mt-10 ">
                  Read more...
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Events;
