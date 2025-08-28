import React from 'react'

function page() {
  return (
    <div>
        <section
        className="relative bg-gray-800 text-white h-[75vh] flex items-center justify-center text-center mt-24"
        style={{
          backgroundImage: "url('/image/about/page.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-opacity-60 p-6 rounded">
          <h1 className="text-2xl font-extrabold mt-6">MPCT Collage</h1>
          <p className="font-bold text-blue-500 mt-6">Workshop</p>
        </div>
      </section>
    </div>
  )
}

export default page
