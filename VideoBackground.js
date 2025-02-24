import React from "react";

export default function VideoBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="https://video.wixstatic.com/video/11062b_4f14b356c1df4854968cf1cc94ca98c5/1080p/mp4/file.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
