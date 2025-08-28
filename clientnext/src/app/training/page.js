"use client";
import React from "react";
import { motion } from "framer-motion";
import Learn from "@/component/training/Learn";

function page() {
  return (
    <div>
      {/* training */}
      <section
        className="relative bg-gray-800 text-white h-[75vh] flex items-center justify-center text-center mt-24"
        style={{
          backgroundImage: "url('/image/about/page.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-opacity-60 p-6 rounded">
          <h1 className="text-2xl font-extrabold mt-6">Training</h1>
          <p className="font-bold text-blue-500 mt-6">Home/Training</p>
        </div>
      </section>

      {/* Helping hands  */}
      <section className="bg-blue-400 text-white py-12 px-4 mx-auto pb-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-12 mt-20">Helping Hands</h2>

            <p className="text-white text-justify text-[16px] mb-10 mt-8">
              We have capability to train even novice students, students who
              don’t have any experience with coding can work efficiently in our
              training sessions. We need only adamant students who are
              disciplined enough to pay attention and have that urge in them for
              learning new things. You will have the experience to work on Live
              Projects, which will ameliorate your portfolio. Basically through
              these training sessions, we want to help students to grow, Our
              training sessions are helping hands for adamant students.
            </p>
          </motion.div>

          {/* Right: Illustration */}
          <div className="flex justify-center md:justify-end">
            <motion.img
              src="/image/e-learning.png"
              alt="E-learning Illustration"
              className="w-full max-w-md rounded-xl"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              animate={{ y: [0, -20, 0] }} // Move up and down
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
        </div>
      </section>

      {/* Learn  */}
      <Learn/>

      {/* internship  */}
      <section className="pt-20 pb-8 px-6 md:px-12 lg:px-24  mx-auto bg-gray-100 ">
        <motion.div
          className="max-w-5xl mx-auto mb-12 text-justify leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-600">Internship</h2>
          <h2 className="text-5xl font-bold text-blue-500">Experience</h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {[
            {
              img: "image/training/t1.png",
              title: "100% Practical Training",
              description:
                "We don't use paper and pencil at all in our training sessions.",
            },
            {
              img: "image/service/creative.jpg",
              title: "Live Projects",
              description:
                "We make you work on Live projects, in order to strengthen your portfolio.",
            },
            {
              img: "image/training/t2.png",
              title: "Innovative Ideas",
              description:
                "We always inbuilt innovation in our training sessions, to learn something new.",
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
              <p className="text-gray-600 text-sm mb-8 mt-6">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default page;
