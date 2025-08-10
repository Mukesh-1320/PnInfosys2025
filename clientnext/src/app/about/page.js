'use client';
import React from "react";
import { FaSearch } from "react-icons/fa";

function About() {
  const features = [
    {
      id: "01",
      title: "Consult your idea with us!",
      icon: "image/about/a1.png",
    },
    {
      id: "02",
      title: "We'll Develop your idea",
      icon: "image/about/a2.webp",
    },
    {
      id: "03",
      title: "We'll Digital Market your idea.",
      icon: "image/about/a3.png",
    },
    {
      id: "04",
      title: "Client's happiness",
      icon: "image/about/a4.png",
    },
  ];

  // Technology
  const technologies = [
    {
      title: "HTML 5",
      description: "Markup language for Web pages.",
      image: "image/HTML.png",
    },
    {
      title: "CSS 3",
      description: "Cascading Style Sheets.",
      image: "image/CSS.png",
    },
    {
      title: "JavaScript",
      description: "Dynamic, lightweight, essential.",
      image: "image/JavaScript.jpg",
    },
    {
      title: "jQuery",
      description: "JavaScript Library.",
      image: "image/jQuery.png",
    },
    {
      title: "Bootstrap",
      description: "CSS Framework.",
      image: "image/Bootstrap.png",
    },
    {
      title: "Tailwind CSS",
      description: "Utility-first CSS Framework.",
      image: "image/tailwind.png",
    },
    {
      title: "React JS",
      description: "JavaScript library for building user interfaces.",
      image: "image/React.png",
    },
    {
      title: "Node.JS",
      description: "Fast server-side scripting.",
      image: "image/Node.jpg",
    },
    {
      title: "MongoDB",
      description: "NoSQL database for modern applications.",
      image: "image/mongoDB.jpg",
    },
    {
      title: "Python",
      description: "Programing Language",
      image: "image/python.png",
    },
    {
      title: "Django",
      description: "Open-source web framework.",
      image: "image/django.jpg",
    },
    {
      title: "SQL",
      description: "Structured Query Language.",
      image: "image/sql.jpg",
    },
  ];

  // Team Members
  const teamMembers = [
    {
      name: "Vikas Jain",
      position: "Director PNINFOSYS",
      image: "/image/about/vikash.png",
      color: "text-blue-600",
    },
    {
      name: "Vaibhav Sir",
      position: "Senior Advisor",
      image: "/image/about/vaibhav.jpg",
      color: "text-blue-600",
    },
    {
      name: "Niket Bansal",
      position: "Senior Advisor",
      image: "/image/about/niket.jpg",
      color: "text-blue-600",
    },
    {
      name: "Rishi Jha",
      position: "General Manager",
      image: "/image/about/rishi.jpg",
      color: "text-blue-600",
    },
    {
      name: "Neha Jain",
      position: "CEO PNINFOSYS",
      image: "/image/about/neha.png",
      color: "text-blue-600",
    },
    {
      name: "Muskan Tiwari",
      position: "Full Stack Developer",
      image: "/image/about/muskan.jpg",
      color: "text-blue-600",
    },
    {
      name: "Kashish Tiwari",
      position: "Full Stack Developer",
      image: "/image/about/kashish.jpg",
      color: "text-blue-600",
    },
    {
      name: "Priyanka Chaturvedi",
      position: "Full Stack Developer",
      image: "/image/about/priyanka.jpg",
      color: "text-blue-600",
    },

     {
      name: "Devraj Pun",
      position: "Full Stack Developer",
      image: "/image/about/devraj.jpg",
      color: "text-blue-600",
    },
     {
      name: "Rinkesh Jha",
      position: "Full Stack Developer",
      image: "/image/about/Rinkesh.jpg",
      color: "text-blue-600",
    },
     {
      name: "Aman Narwariya",
      position: "Full Stack Developer",
      image: "/image/about/Aman.jpg",
      color: "text-blue-600",
    },
    
  ];

  return (
    <div className="font-sans">
      {/* About Us  */}
      <section
        className="relative bg-gray-800 text-white h-[75vh] flex items-center justify-center text-center mt-24"
        style={{
          backgroundImage: "url('/image/about/page.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" bg-opacity-60 p-6 rounded">
          <h1 className="text-2xl font-extrabold mt-6">About Us</h1>
          <h1 className="text-2xl font-bold mt-6">Home/About Us</h1>
        </div>
      </section>

      {/* Feature  */}
      <section className="bg-blue-50 py-24 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">
          We are the best
        </h2>
        <h3 className="text-5xl font-bold text-blue-500 mt-2 mb-12">
          For all your needs
        </h3>

        <div className="flex flex-wrap justify-center items-center gap-25 px-4 py-12 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center relative group"
            >
              {/* Number Tag */}
              <div className="absolute -top-3 -left-3 bg-purple-600 text-white px-3 py-1 rounded-xl text-[25px] font-bold z-10">
                {feature.id}
              </div>

              {/* Card Box */}
              <div className="bg-white p-6 rounded-2xl shadow-md w-45 h-45 flex items-center justify-center transform transition duration-300 group-hover:scale-110 group-hover:shadow-lg">
                <img
                  src={feature.icon}
                  alt="icon"
                  className="w-25 h-25 object-contain"
                />
              </div>

              {/* Title below card */}
              <p className="text-[18px] mt-10 font-bold text-gray-700 w-44 leading-tight transition duration-300 group-hover:text-blue-600 group-hover:scale-110">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* who we are section  */}
      <section className="bg-[#0596c6] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Who & We Are?
            </h2>
            <p className="text-white text-justify text-[15px] leading-[26px] mb-4">
              We are a one-stop destination for all digital solutions, be it
              website designing, web development, digital marketing, SEO, mobile
              apps and full maintenance and compliance services for Government
              and Commercial facilities both large and small. Our elegant group
              of Developers provide their innovation who transform your idea
              into an amazing website Design or Mobile App Development while
              keeping every custom project unique.
            </p>
            <p className="text-white text-justify text-[15px] leading-[26px] mb-4">
              We are part of this IT industry since 2018, we not only developed
              products and websites but also provide internship and training to
              students and make them capable to work in this IT software
              industry. Our internship and training program is totally based on
              hands-on practical experience with live projects.
            </p>
            <p className="text-white text-justify text-[15px] leading-[26px]">
              Our team of certified IT professionals services Dental Offices,
              Medical Offices, Restaurants, Bars and all types of businesses
              throughout the Lowcountry and the world. Our team of certified IT
              professionals services Hospitals, Colleges, Research Institutes,
              Schools, Restaurants, Bars and all types of businesses throughout
              the Lowcountry and the world.
            </p>
          </div>

          {/* Video/Image Section */}
          <div className="flex justify-center">
            <img
              src="/image/about/template.png" // Replace with actual image path
              alt="What You Will Learn"
              className="rounded-xl w-full max-w-md shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Technologies  */}
      <section className="px-6 md:px-12 lg:px-24 py-12 bg-white">
        <h2 className="text-3xl font-bold text-gray-800">
          Technologies <br />{" "}
          <span className="text-blue-500 text-5xl">We work on..</span>
        </h2>

        <div className="flex items-center gap-4 text-sm text-gray-600 mt-4 mb-10 text-right">
          <button className="text-blue-500">Show All</button>
          <span>Web Designing</span>
          <span>Web Development</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md text-center p-4 hover:shadow-xl transition"
            >
              <img
                src={tech.image}
                alt={tech.title}
                className="w-50 h-50 object-contain mx-auto mb-4 transform transition-transform duration-300 hover:scale-110"
              />
              <h3 className="font-semibold text-2xl text-black">{tech.title}</h3>
              <p className="text-blue-500 text-sm mt-2">{tech.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Members Section */}
      <section className="bg-[#F2F6FE] py-20">
        <div className=" max-w-[1200px] mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Team</h2>
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            Meet Our Team Members
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <div className="relative group bg-gray-800 flex justify-center items-center">
                  <img
                    src={member.image}
                    alt={member.name}
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
                    {member.name}
                  </h3>
                  <p className={`text-sm font-medium ${member.color}`}>
                    {member.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
