import React from "react";
import { FaSearch } from "react-icons/fa";
import { TbCirclePlusFilled } from "react-icons/tb";

const InputFeilds = ({ handleOpen, filteredData }) => {
  return (
    <div className="flex relative">
      <FaSearch className="text-white absolute items-center ml-2 m-4 text-3xl" />
      <input
        onChange={(e) => filteredData(e)} 
        type="text"
        className="my-2 pl-12 h-12 bg-transparent border border-white rounded-md flex-grow text-white font-semibold "
      />
      <TbCirclePlusFilled
        onClick={handleOpen}
        className="text-white cursor-pointer text-6xl ml-2"
      />
    </div>
  );
};

export default InputFeilds;
