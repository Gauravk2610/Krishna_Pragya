import React from "react";

const PhotosList = [
  {
    name: "Hon'ble Shri Mahamandleshwar Rajeshree Dr. Ramsundar Das ji",
    post: "President Chhattis Garh State Gauseva Ayog.",
    image: "/assets/photos/Image 1.png",
  }, 
  {
    name: "Suresh Soni Ji",
    post: "Central committee member, RSS",
    image: "/assets/photos/Image 2.png",
  },
  {
    name: "Shri Harkesh Singh Ji",
    post: "Ex. Vice Chancellor Jai Prakash University Chhapra. Bihar",
    image: "/assets/photos/Image 3.png",
  },
  {
    name: "Shri Amitabh Bachchan Ji Indian Film Actor",
    post: "Indian Film Actor",
    image: "/assets/photos/Image 4.png",
  },
]

const Photos = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl w-full mx-4 xl:mx-auto space-y-6">
        <h1 className="uppercase text-[#2E6295] text-4xl font-bold">
          Photos
        </h1>
        {/* Photos List */}
        <div className="flex gap-x-4 gap-y-6 flex-wrap">
          {/* Photo */}
          {PhotosList?.map((_, i) => (
            <div>
              <div className=" max-w-[420px] w-full cursor-pointer h-[300px]">
                <img
                  key={i}
                  draggable={false}
                  className="w-full h-full object-cover select-none border-gray-500"
                  src={_.image}
                  alt=""
                />
              </div>
              <div className="text-sm font-[500] mt-2">{_.name}</div> 
              <div className="text-sm font-light">{_.post}</div> 
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Photos;
