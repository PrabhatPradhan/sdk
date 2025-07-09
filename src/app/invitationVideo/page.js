'use client';
import React from "react";
import Navbar from "../Componentes/Navbar/Navbar";

export default function Page() {
  const videoUrls = [
    "https://www.youtube.com/embed/_4jR9njMhSo",
    "https://www.youtube.com/embed/ScMzIvxBSi4",
    "https://www.youtube.com/embed/ysz5S6PUM-U",
    "https://www.youtube.com/embed/iLnmTe5Q2Qw",
  ];

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Invitation Video
        </h2>

        {/* 4 Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoUrls.map((url, index) => (
            <div key={index} className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src={url}
                title={`YouTube video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center text-sm">
        <p>
          <span className="text-gray-300">Copyright © 2022</span>{" "}
          <a href="tel:+91 9990144668"><span className="font-semibold text-yellow-400">SKG PSD.</span>{" "}</a>
          <span className="font-bold">All Right Reserved.</span>
        </p>
      </footer>
    </>
  );
}
