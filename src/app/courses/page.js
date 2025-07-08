import React from "react";
import Navbar from "../Componentes/Navbar/Navbar";

export default function page() {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
    Our Courses 
  </h2>

        {/* Text + Video Side-by-Side */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Paragraph */}
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              euismod, nunc at imperdiet laoreet, risus justo lacinia eros, vel
              malesuada lorem turpis ac tortor. Suspendisse potenti. Curabitur
              mattis, libero vitae gravida euismod, erat sapien tincidunt lorem,
              nec sagittis orci urna at magna. Sed pulvinar arcu vel sapien
              convallis, vitae facilisis nulla commodo. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Vivamus euismod, nunc at
              imperdiet laoreet, risus justo lacinia eros, vel malesuada lorem
              turpis ac tortor. Suspendisse potenti. Curabitur mattis, libero
              vitae gravida euismod, erat sapien tincidunt lorem, nec sagittis
              orci urna at magna. Sed pulvinar arcu vel sapien convallis, vitae
              
            </p>
          </div>
          {/* YouTube Video Embed */}
          <div className=" w-full">
            <div className="aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                 className="w-full h-[32rem]"
                src="https://www.youtube.com/embed/_4jR9njMhSo?si=XCo4LDsyVCc2XgqB"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-4 text-center text-sm">
        <p>
          <span className="text-gray-300">Copyright © 2022</span>{" "}
          <span className="font-semibold text-yellow-400">SKG PSD.</span>{" "}
          <span className="font-bold">All Right Reserved.</span>
        </p>
      </footer>
    </>
  );
}
