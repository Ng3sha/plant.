// import React from 'react'

import Button from "./button";

export default function Pricing() {
  return (
    <>
      <>
  {/* https://gist.github.com/goodreds/3d044027175954984fb96c7407a955ab */}
  {/* Container */}
  <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
    {/* Image Column */}
    <div className="w-full h-64 lg:w-1/2 lg:h-auto">
      <img
        className="h-full w-full object-cover"
        src="https://picsum.photos/id/1018/2000"
        alt="Winding mountain road"
      />
    </div>
    {/* Close Image Column */}
    {/* Text Column */}
    <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
      {/* Text Wrapper */}
      <div className="flex flex-col p-12 md:px-16">
        <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-4xl">
          Winding Mountain Road
        </h2>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        {/* Button Container */}
        <div className="mt-8">
          <Button
            btnname={"Learn More"}
            className="rounded-md bg-green-700 px-6 py-4 text-xl font-medium text-white shadow hover:bg-green-600"

          />
        </div>
      </div>
      {/* Close Text Wrapper */}
    </div>
    {/* Close Text Column */}
  </div>
</>


    </>
  )
}
