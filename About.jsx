import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="flex h-screen"
      style={{
        backgroundImage: "url('/assets/images/aboutimg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Left Content Section - Full Height */}
      <div className="w-1/2 bg-white bg-opacity-100 flex justify-center items-center">
        <div className="w-2/3 h-5/6 flex flex-col gap-y-4 ml-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">ABOUT</h2>
          <div className="w-16 h-1 bg-yellow-400 mb-2"></div>
          
          {/* Paragraphs with spacing */}
          <div className="space-y-5 text-gray-700 leading-relaxed text-left pr-10 ">
            <p>
              Welcome to Harshanth Infra, your reliable partner in the construction industry.
              We proudly specialize in supplying high-quality TMT steel and a variety of
              construction cement, ensuring that every project is built on a foundation of strength.
              With years of industry experience, we are dedicated to providing materials that
              not only meet but exceed your expectations, whether for residential buildings or
              large-scale infrastructure projects. Let's build something great together!
            </p>

            <p>
              Whether you're embarking on a small residential construction or a large 
              infrastructure project, Harshanth Infra is here to provide you with the finest 
              materials and unmatched service to ensure your project’s success.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side (Background Image) */}
      <div className="w-1/2"></div>
    </section>
  );
}
