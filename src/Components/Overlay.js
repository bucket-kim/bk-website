import React from "react";

const Overlay = () => {
  return (
    <div className="h-full absolute inset-0 overflow-y-auto">
      <div className="flex justify-evenly items-center">
        <section>Portfolio</section>
        <section>Skills</section>
        <section>About</section>
        <section>Contact</section>
      </div>
      <div>
        <div className="h-screen flex items-center relative px-10 ">
          <h1 className="text-3xl">Portfolio</h1>
        </div>
        <div className="h-screen flex items-center relative px-10">
          <h1 className="text-3xl">Skills</h1>
        </div>
        <div className="h-screen flex items-center relative px-10">
          <h1 className="text-3xl">About</h1>
        </div>
        <div className="h-screen flex items-center relative px-10">
          <h1 className="text-3xl">Contact</h1>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
