"use client";
import React from "react";
import Navbar from "../Componentes/Navbar/Navbar";

export default function Page() {
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Courses
        </h2>

        {/* Responsive Video + Text Layout */}
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-10">
          {/* Text */}
          <div className="w-full md:w-1/2">
            <p className="text-lg text-gray-700 leading-relaxed pt-4 md:pt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              euismod, nunc at imperdiet laoreet, risus justo lacinia eros, vel
              malesuada lorem turpis ac tortor. Suspendisse potenti. Curabitur
              mattis, libero vitae gravida euismod, erat sapien tincidunt lorem,
              nec sagittis orci urna at magna. Sed pulvinar arcu vel sapien
              convallis, vitae facilisis nulla commodo. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Vivamus euismod, nunc at
            </p>
          </div>

          {/* Video */}
          <div className="w-full md:w-1/2">
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/_4jR9njMhSo?si=XCo4LDsyVCc2XgqB"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
         
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center text-sm">
        <p>
          <span className="text-gray-300">Copyright © 2022</span>{" "}
          <a href="tel:+91 9990144668">
            {" "}
            <span className="font-semibold text-yellow-400">SKG PSD.</span>{" "}
          </a>
          <span className="font-bold">All Right Reserved.</span>
        </p>
      </footer>
    </>
  );
}
