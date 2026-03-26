import React from "react";

const projectsData = [
  "/2.png",
  "/1.png",
  "/2-5.png",
  "/3-5.png",
];

const Gallery = () => {
  return (
    <section className="min-h-screen bg-black/10 px-6 py-12">
      
      <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
        Gallery
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {projectsData.map((img, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl group cursor-pointer"
          >
            <img
              src={img}
              alt={`gallery-${index}`}
              className="w-full h-60 object-cover transition-all duration-300 group-hover:scale-110 group-hover:brightness-75"
            />

            {/* overlay */}
            <div className="absolute inset-0 flex items-center justify-center 
              bg-black/40 opacity-0 group-hover:opacity-100 
              transition-all duration-300">

              <span className="text-white text-xl md:text-2xl font-semibold tracking-wide">
                🔍 View
              </span>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Gallery;