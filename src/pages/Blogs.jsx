import React from "react";

const Blogs = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl w-full px-4 xl:mx-auto">
        <h1 className="uppercase text-[#2E6295] text-4xl font-bold">
          WHITE WINGS (BLOG)
        </h1>
        <div className="flex flex-col xl:flex-row gap-8 py-6 px-4">
          <img
            className="max-w-md w-full mx-auto h-full object-cover"
            src="/assets/blogs/White Wings HANS.png"
            alt=""
          />
          <p className="font-semibold text-xl xl:ml-4">
            Swan symbolises the soul for us. White and radiant plumaged Swan
            recognizes the Truth. He distinguishes between milk and water,
            between pearl and pebble. Swan picks the essence. Similarly,
            truthful emotions emerged from the sublime soul-crypts and touch the
            petals of our hearts...We are presenting them here. We won't call
            this a vlog; we will call it White Wings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
