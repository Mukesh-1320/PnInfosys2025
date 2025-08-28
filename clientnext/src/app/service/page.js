"use client";
import { motion } from "framer-motion";
import React from "react";

const page = () => {
  return (
    <div>
      {/* services */}
      <section
        className="relative bg-gray-800 text-white h-[75vh] flex items-center justify-center text-center mt-24"
        style={{
          backgroundImage: "url('/image/about/page.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-opacity-60 p-6 rounded">
          <h1 className="text-2xl font-extrabold mt-6">Our Services</h1>
          <p className="font-bold text-blue-500 mt-6">Service/Our Services</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 mx-auto bg-gray-100">
        <motion.p
          className="text-gray-700 font-bold max-w-5xl mx-auto mb-12 text-justify leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          "PN INFOSYS is a leading global business consulting and IT service
          company. We provides a full range of maintenance and compliance
          services for Government and Commercial facilities both large and
          small. Whether you need to run your business more efficiently or
          accelerate revenue growth, PN INFOSYS can get you there. Our team is
          proficient enough to provide all the IT services, which a customer
          needs in an affordable rates. We make sure our clients are happy at
          the end of the day."
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {[
            { img: "image/service/bulb.jpg", title: "Innovative Ideas" },
            { img: "image/service/creative.jpg", title: "Creative Designing" },
            {
              img: "https://cdn-icons-png.flaticon.com/512/742/742751.png",
              title: "Client's Happiness",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-40 h-40 mx-auto p-6 transform transition-transform duration-300 hover:scale-110 rounded-full shadow-md hover:shadow-2xl"
              />
              <h3 className="font-semibold text-lg text-gray-800 mt-8">
                {card.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PN Services */}
      <section className="bg-[#0596c6] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold mb-6">PN Services</h2>
            <p className="font-bold mb-4 text-justify">
              PN INFOSYS provides the best service possible to its customers
              because for us, our client’s happiness is important. Whatever we
              choose to do, we do it an exorbitant manner.
            </p>

            <p className="text-white text-justify text-[16px] mb-4 mt-8">
              PN INFOSYS Company provides a full range of maintenance and
              compliance services for Government and Commercial facilities both
              large and small.
            </p>

            <p className="text-white text-justify text-[16px] mb-4 mt-8">
              PN INFOSYS believes in developing true partnerships. We foster a
              collegial environment where individual perspectives are respected
              and honest dialogue is expected.
            </p>

            <p className="text-white text-justify text-[16px] mb-4 mt-8">
              PN INFOSYS brings robust skills and forward looking perspectives
              to solve customer challenges. We use proven knowledge to make
              recommendations and provide expert guidance to our customers.
            </p>

            <p className="text-white text-justify text-[16px] mb-4 mt-8">
              PN INFOSYS is driven to meet client needs with determination and
              grit. We embrace tough challenges and do not rest until the
              problem is solved, the right way.
            </p>
          </motion.div>

          {/* Image */}
          <motion.img
            src="/image/service/pnservice.png"
            alt="E-learning Illustration"
            className="w-full max-w-md rounded-xl"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              y: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 2,
                ease: "easeInOut",
                delay: 0.8, // matches the slide-in duration
              },
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default page;
