import React from 'react';
import banner from "../../public/Banner.jpg";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row items-center mb-12 my-10"> 
        <div className="w-full md:w-1/2 order-2 md:order-1 mt-12 md:mt-32 space-y-8 md:space-y-12">
          <h1 className="text-4xl font-bold">
            Are you excited enough to board <span className="text-green-500">Road to IUT</span>
          </h1>
          <p className="text-xl">
            Shakkhar here writes something about our website, its activity, and what type of benefits will be provided.
          </p>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow input input-bordered" placeholder="Email" />
          </div>
          <button className="btn mt-6 btn-secondary">Subscribe</button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
          <img src={banner} className="w-90 h-92 object-cover" alt="Banner" />
        </div>
      </div>
    </>
  );
}

export default Banner;
