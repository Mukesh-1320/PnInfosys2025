'use client';
import React from "react";
import Header from "../component/Header";
import { motion } from "framer-motion";

import {
  FaBullseye,
  FaLaptop,
  FaLightbulb,
  FaMobileAlt,
  FaPenNib,
  FaServer,
  FaSmile,
} from "react-icons/fa";
import HeroSlider from "@/component/HeroSlider";
import Technology from "@/component/Technology";
import Portfolio from "@/component/Portfolio";
import Events from "@/component/Events";


function Page() {
  const learning = [
    {
      icon: <FaLaptop className="w-10 h-10 text-red-500" />,
      title: "WEB DESIGNING",
      description:
        "Something which makes PN INFOSYS different from other IT companies is that we train novice students and also make them work on Live projects.",
    },
    {
      icon: <FaLaptop className="w-10 h-10 text-red-500" />,
      title: "WEB DEVELOPMENT",
      description:
        "Something which makes PN INFOSYS different from other IT companies is that we train novice students and also make them work on Live projects.",
    },
    {
      icon: <FaMobileAlt className="w-10 h-10 text-red-500" />,
      title: "APP DEVELOPMENT",
      description:
        "Something which makes PN INFOSYS different from other IT companies is that we train novice students and also make them work on Live projects.",
    },
    {
      icon: <FaLaptop className="w-10 h-10 text-red-500" />,
      title: "ANGULAR, PYTHON, DJANGO, LARAVEL",
      description:
        " Something which makes PN INFOSYS different from other IT companies is that we train novice students and also make them work on Live projects. ",
    },
  ];
  //   { title: "HTML 5", description: "Markup language for Web pages.", image: "/image/HTML.png" },
  //   { title: "CSS 3", description: "Cascading Style Sheets.", image: "/image/CSS.png" },
  //   { title: "JavaScript", description: "Dynamic, lightweight, essential.", image: "/image/JavaScript.jpg" },
  //   { title: "jQuery", description: "JavaScript Library.", image: "/image/jQuery.png" },
  //   { title: "Bootstrap", description: "CSS Framework.", image: "/image/Bootstrap.png" },
  //   { title: "Tailwind CSS", description: "Utility-first CSS Framework.", image: "/image/tailwind.png" },
  //   { title: "React JS", description: "JavaScript library for building user interfaces.", image: "/image/React.png" },
  //   { title: "Node.JS", description: "Fast server-side scripting.", image: "/image/Node.jpg" },
  //   { title: "MongoDB", description: "NoSQL database for modern applications.", image: "/image/mongoDB.jpg" },
  //   { title: "Python", description: "Programming Language", image: "/image/python.png" },
  //   { title: "Django", description: "Open-source web framework.", image: "/image/django.jpg" },
  //   { title: "SQL", description: "Structured Query Language.", image: "/image/sql.jpg" },
  // ];


  const services = [
    { icon: <FaLightbulb className="w-6 h-6 text-red-500" />, title: "INNOVATIVE IDEAS", description: "PN INFOSYS believes in developing true partnerships..." },
    { icon: <FaPenNib className="w-6 h-6 text-red-500" />, title: "CREATIVE DESIGNING", description: "PN INFOSYS brings robust skills and forward-looking perspectives..." },
    { icon: <FaSmile className="w-6 h-6 text-red-500" />, title: "CLIENT’s Happiness", description: "Our top priority is client satisfaction..." },
    { icon: <FaServer className="w-6 h-6 text-red-500" />, title: "FULL Maintenance", description: "PN INFOSYS Company provides a full range of maintenance..." },
    { icon: <FaBullseye className="w-6 h-6 text-red-500" />, title: "PRACTICAL Training", description: "We don't use paper and pencil at all in our training sessions..." },
  ];

  //   {
  //     image: "/image/events/e1.jpg",
  //     title: "Workshop by Senior Advisor",
  //     description: "Workshop was enacted by Vaibhav Shrivastava, who is Product Owner at Xiaomi...",
  //   },
  //   {
  //     image: "/image/events/e2.jpg",
  //     title: "PN INFOSYS invited as Chief Guest",
  //     description: "Rustamji Institute of Technology invited PN INFOSYS as a Chief Guest...",
  //   },
  //   {
  //     image: "/image/events/e3.jpg",
  //     title: "Social Applaud by MPCT college",
  //     description: "PN INFOSYS gave two months training sessions to MPCT College...",
  //   },
  //   {
  //     image: "/image/events/e4.jpg",
  //     title: "Social Applaud for our Work",
  //     description: "PN INFOSYS did a project for Samaysaar Vidhyaniketan...",
  //   },
  //   {
  //     image: "/image/events/e5.jpg",
  //     title: "New Branch Opening in Indore",
  //     description: "PN INFOSYS has a new branch in Indore. It was a grand launch...",
  //   },
  //   {
  //     image: "/image/events/e6.jpg",
  //     title: "Workshop by Senior Advisor",
  //     description: "He is our Senior Advisor, he conducted the workshop...",
  //   },
  // ];

  return (
    <div className="font-sans">
     {/* Hero Section */}
     <HeroSlider/>

      {/* Tagline Section */}
      <section className=" text-sm md:text-base lg:text-lg text-center text-gray-800 px-1 bg-white p-6">
        PN INFOSYS is a leading global business consulting and IT service
        company, Whether you need to run your business more efficiently or
        accelerate revenue growth, PN INFOSYS can get you there.
      </section>

      {/* Features Section */}
      <section className="py-10 grid grid-cols-1 md:grid-cols-4 gap-4 p-7 bg-white">
        {[
          {
            title: "Collaborative Spirit",
            description:
              "We believe in developing true partnerships and making clients happy.",
            icon: "image/collaborative.jpg",
          },
          {
            title: "Expert Thinking",
            description:
              "We bring robust skill and forward-looking perspective to solve customer challenges.",
            icon: "image/thinking.png",
          },
          {
            title: "Unrelenting Dedication",
            description:
              "PN Infosys is driven to meet client needs with determination and grit. We embrace tough challenges.",
            icon: "image/dedication.jpg",
          },
          {
            title: "Industrial Training",
            description:
              "We provide free industrial internship to tackle undergraduates. Basically our ability to help students.",
            icon: "image/training.png",
          },
        ].map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-sm shadow-lg p-6 text-center transition hover:shadow-2xl "
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="bg-white w-40 h-40 mx-auto p-6 text-center transform transition-transform duration-300 hover:scale-110 rounded-full shadow-md hover:shadow-2xl "
            />
            <div className="text-5xl mb-4 h-20">{feature.image}</div>
            <h2 className="text-xl font-semibold mb-6 text-black">{feature.title}</h2>
            <p className="text-gray-600 text-sm mb-6">{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Learning Environment Section */}
      <section className="bg-[#009df2] text-white py-24 px-4 md:px-12 lg:px-24">
        <h2 className="text-left text-3xl font-bold mb-16">
          Learning environment,Free <br />
          Internship to novice students.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Service List */}
          <div className="space-y-8">
            {learning.map((svc, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="bg-white rounded-full p-3 flex-shrink-0">
                  {svc.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[20px]">{svc.title}</h3>
                  <p className="mt-2 text-[16px]">{svc.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Illustration */}
          <div className="flex justify-center md:justify-end">
            <motion.img
              src="/image/learning.png"
              alt="E-learning Illustration"
              className="w-full max-w-md rounded-xl"
              animate={{ y: [0, -20, 0] }} // Move up and down
              transition={{
                duration: 4, // same as 4s
                repeat: Infinity, // infinite loop
                ease: "easeInOut", // smooth motion
              }}
            />
          </div>
        </div>
      </section>

      {/* Technologies  */}
      <Technology/>

      {/* Portfolio Section */}
     <Portfolio/>

      {/* Our Services  */}
      <section className="bg-[#009df2] text-white py-24 px-4 md:px-12 lg:px-24">
        <h2 className="text-center text-6xl font-bold mb-20">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Service List */}
          <div className="space-y-8">
            {services.map((svc, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="bg-white rounded-full p-3 flex-shrink-0">
                  {svc.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[20px]">{svc.title}</h3>
                  <p className="mt-2 text-[16px]">{svc.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Illustration */}
          <div className="flex justify-center md:justify-end">
            <motion.img
              src="/image/e-learning.png"
              alt="E-learning Illustration"
              className="w-full max-w-md rounded-xl"
              animate={{ y: [0, -20, 0] }} // Move up and down
        transition={{
          duration: 4,        
          repeat: Infinity,   // infinite loop
          ease: "easeInOut",  // smooth motion
        }}
            />
          </div>
        </div>
      </section>

      {/* Events  */}
      <Events/>
    </div>
  );
}

export default Page;
