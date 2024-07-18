import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { FiShoppingBag } from "react-icons/fi";
import { IoMdContacts } from "react-icons/io";

const Cards = () => {
  return (
    <div className="__cards mt-[70px] h-[28%] w-full bg-zinc-300 flex justify-center items-center flex-wrap gap-7">
      <div className="__card h-[80%] w-[22%] bg-white p-5">
        <div className="__icon h-10 w-10 rounded-full bg-zinc-300 flex justify-center items-center">
          <IoEyeOutline className="text-blue-500 text-2xl font-bold" />
        </div>
        <div className="text-black mt-2">
          <h1 className="font-bold text-xl">$3.456K</h1>
          <div className="flex justify-between items-center">
            <p className="text-zinc-500 font-medium text-sm">Total Views</p>
            <span className="flex justify-center items-center text-green-500">
              <p>0.43%</p>
              <FaArrowUp />
            </span>
          </div>
        </div>
      </div>

      <div className="__card h-[80%] w-[22%] bg-white p-5">
        <div className="__icon h-10 w-10 rounded-full bg-zinc-300 flex justify-center items-center">
          <LuShoppingCart className="text-blue-500 text-xl font-bold" />
        </div>
        <div className="text-black mt-2">
          <h1 className="font-bold text-xl">$45,2K</h1>
          <div className="flex justify-between items-center">
            <p className="text-zinc-500 font-medium text-sm">Total Profit</p>
            <span className="flex justify-center items-center text-green-500">
              <p>4.35</p>
              <FaArrowUp />
            </span>
          </div>
        </div>
      </div>

      <div className="__card h-[80%] w-[22%] bg-white p-5">
        <div className="__icon h-10 w-10 rounded-full bg-zinc-300 flex justify-center items-center">
          <FiShoppingBag className="text-blue-500 text-xl font-bold" />
        </div>
        <div className="text-black mt-2">
          <h1 className="font-bold text-xl">2.450</h1>
          <div className="flex justify-between items-center">
            <p className="text-zinc-500 font-medium text-sm">Total Products</p>
            <span className="flex justify-center items-center text-green-500">
              <p>2.59%</p>
              <FaArrowUp />
            </span>
          </div>
        </div>
      </div>

      <div className="__card h-[80%] w-[22%] bg-white p-5">
        <div className="__icon h-10 w-10 rounded-full bg-zinc-300 flex justify-center items-center">
          <IoMdContacts className="text-blue-500 text-xl font-bold" />
        </div>
        <div className="text-black mt-2">
          <h1 className="font-bold text-xl">3.456</h1>
          <div className="flex justify-between items-center">
            <p className="text-zinc-500 font-medium text-sm">Total Users</p>
            <span className="flex justify-center items-center text-green-500">
              <p>0.95%</p>
              <FaArrowUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
