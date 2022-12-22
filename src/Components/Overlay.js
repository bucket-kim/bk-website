import React from "react";

const Overlay = () => {
  return (
    <>
      <div className="py-8">
        <h1 className="text-center text-3xl">Brian Kim</h1>
      </div>
      <div className="flex justify-evenly items-center">
        <section>Portfolio</section>
        <section>Skills</section>
        <section>About</section>
        <section>Contact</section>
      </div>
      <div>
        <div className="h-screen flex items-center relative px-24 ">
          <h1 className="text-9xl">Projects</h1>
        </div>
        <div className="h-screen flex items-center relative px-32 flex-row-reverse">
          <h1 className="text-9xl">Skills</h1>
        </div>
        <div className="h-screen flex items-center relative px-32">
          <h1 className="text-9xl">About</h1>
        </div>
        <div className="h-screen flex items-center relative px-32 flex-row-reverse">
          <h1 className="text-9xl">Contact</h1>
        </div>
      </div>
    </>
  );
};

export default Overlay;
