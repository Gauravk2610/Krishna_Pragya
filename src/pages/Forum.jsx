import React from "react";

const Forum = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl w-full mx-4 xl:mx-auto">
        <h1 className="uppercase text-[#2E6295] text-4xl font-bold">FORUM</h1>
        <div className="flex flex-col xl:flex-row gap-8 py-6 px-4">
          <img
            className="max-w-lg w-full mx-auto h-full object-cover"
            src="/assets/forum/Forum Image.png"
            alt=""
          />
          <div className="space-y-6">
            <div className="space-y-2 pr-6">
                <h2 className="text-2xl font-semibold">
                A Marquee under which we meet each other to satisfy our spiritual
                quest.
                </h2>
                <div className="text-2xl font-semibold text-[#06779F]">
                THIS WEEK'S TOPIC -
                </div>
                <div className="text-2xl font-semibold">What is Meditation?</div>
                <div className="font-semibold text-lg">
                To join the video meeting, click this link:{" "}
                <a
                    href="https://meet.google.com/dvt-ctvt-tcv"
                    target={"_blank"}
                    className="text-[#3299D8]"
                >
                    https://meet.google.com/dvt-ctvt-tcv
                </a>{" "}
                Otherwise, to join by phone, dial +1 760-503-5206 and enter this
                PIN: 689 961 706#
                </div>
                <div className="text-[#EF5613] font-semibold">
                On 7th January 2023 at 11:00 AM
                </div>
            </div>
            {/* Enroll yourself for discussion */}
            <form className="max-w-lg w-full space-y-4">
                <h2 className="font-semibold ">Enroll yourself for discussion</h2>
                <div className="flex flex-col gap-4">
                    <div className="flex space-x-2">
                        <input 
                        className="border-2 border-black w-full rounded-md px-3 py-2 placeholder:text-black"
                        placeholder="First Name"
                        type="text" />
                        <input 
                        className="border-2 border-black w-full rounded-md px-3 py-2 placeholder:text-black"
                        placeholder="Last Name"
                        type="text" />
                    </div>
                    <div className="flex space-x-2">
                        <input 
                        className="border-2 border-black w-full rounded-md px-3 py-2 placeholder:text-black"
                        placeholder="E-mail"
                        type="email" />
                        <input 
                        className="border-2 border-black w-full rounded-md px-3 py-2 placeholder:text-black"
                        placeholder="Phone No."
                        type="text" />
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="linear-bg px-6 py-2 text-xl text-white rounded-md">
                        Submit
                    </button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forum;
