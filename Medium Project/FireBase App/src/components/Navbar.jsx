import React from "react";


const Navbar = () => {
  return (
    <div className="flex gap-3 items-center justify-center text-3xl rounded-md bg-white h-[60px] my-4">
      <img className="text-xl" src="./Images/logos_firebase.png" />
      <p className="text-2xl ">Firebase Contact App</p>
    </div>
  );
};

export default Navbar;
