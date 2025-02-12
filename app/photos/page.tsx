import React from "react";
import type { Metadata } from "next";
import { YouTubeComponent } from "app/components/youtube";

YouTubeComponent

export const metadata: Metadata = {
  title: "Videos",
  description: "My Videos",
};
/*
https://youtu.be/4oOcaultoC8
https://youtu.be/MnEaPLT-t7Y
https://youtu.be/NkSLih0QXeA
https://youtu.be/F4EvOYq5-1w
https://youtu.be/z-5SsKKOX98

*/

export default function Photos() {
  const videos = [
    "4oOcaultoC8",
    "MnEaPLT-t7Y", 
    "NkSLih0QXeA",
    "F4EvOYq5-1w",
    "z-5SsKKOX98"
  ];


  return (
    <section>
    <h1 className="mb-8 text-2xl font-medium tracking-tight">Videos</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {videos.map((videoId, index) => (
        <div key={index} className="rounded-xl overflow-hidden">
          <YouTubeComponent videoId={videoId} />
        </div>
      ))}
    </div>
  </section>
  );
}
