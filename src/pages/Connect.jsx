import React from "react";

const Connect = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl w-full mx-4 xl:mx-auto space-y-8">
        {/* Connect */}
        <div className="space-y-6">
          <h1 className="uppercase text-[#2E6295] text-4xl font-bold">
            Connect
          </h1>
          <div className="flex gap-8">
            <img
              className="max-w-[240px] w-full h-full object-cover"
              src="/assets/connect/hand.png"
              alt=""
            />
            <div>
              <h1 className="uppercase text-2xl font-semibold">
                WELCOME TO INTERACT WITH KRISHN PRAGYA TEAM
              </h1>
            </div>
          </div>
        </div>
        {/* Spiritual */}
        <div className="space-y-6">
          <h1 className="uppercase text-[#2E6295] text-4xl font-bold">
            SPIRITUAL/ASTRO COUNSELLING
          </h1>
          <div className="flex gap-8">
            <div>
              <img
                className="max-w-xs w-full h-fit object-cover"
                src="/assets/spiritual/Image1.png"
                alt=""
              />
              <div className="text-xs">Courtesy - KESHAV VENKATARAGHAVAN</div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold">
                  Guidance Team Advanced Spiritual Seakers for any kind of
                  crisis of faith or in life.
                </h3>
                <h3 className="text-xl font-semibold">
                  Leave your Name, E-mail, Phone Number and your problem in the
                  given space. We will connect with you.
                </h3>
              </div>
              <form className="max-w-xl w-full space-y-4">
                <div className="flex flex-col gap-4">
                  <div className="flex space-x-2">
                    <input
                      className="border-2 border-gray-500 w-full rounded-lg px-3 py-2 placeholder:text-black"
                      placeholder="First Name"
                      type="text"
                    />
                    <input
                      className="border-2 border-gray-500 w-full rounded-lg px-3 py-2 placeholder:text-black"
                      placeholder="Last Name"
                      type="text"
                    />
                  </div>
                  <input
                    className="border-2 border-gray-500 w-full rounded-lg px-3 py-2 placeholder:text-black"
                    placeholder="E-mail"
                    type="email"
                  />
                  <input
                    className="border-2 border-gray-500 w-full rounded-lg px-3 py-2 placeholder:text-black"
                    placeholder="Phone No."
                    type="text"
                  />
                  <textarea
                    className="border-2 min-h-[160px] border-gray-500 w-full rounded-lg px-3 py-2 placeholder:text-black"
                    placeholder="Your Queries"
                    type="text"
                  />
                </div>
                <div className="flex justify-center">
                  <button className="linear-bg px-6 py-2 text-xl text-white rounded-lg">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="space-y-6">
            <h1 className="uppercase text-[#2E6295] text-4xl font-bold">
              COMMENTS
            </h1>
            <textarea
              className=" max-w-4xl w-full border-2 border-gray-500 rounded-lg px-3 py-2 placeholder:text-black"
              placeholder="Your Comments"
              name="comments"
              id=""
              rows="10"
            ></textarea>
            <div className="flex justify-center  max-w-4xl w-full ">
              <button className="linear-bg px-6 py-2 text-xl text-white rounded-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
