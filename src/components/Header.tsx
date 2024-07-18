import React from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa";
import { IoSearchOutline, IoSunny } from "react-icons/io5";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import ProfilePic from "../assets/ProfilePic.png"

const Header = () => {
  return (
    <div className="__header flex justify-between items-center absolute top-0 right-0 w-[calc(100vw-100px)] sm:w-[calc(100vw-180px)] md:w-[calc(100vw-200px)] lg:w-[calc(100vw-250px)] bg-white h-[70px] text-black">
      <div className="flex justify-start items-center w-[60%] gap-5 px-5">
        <IoSearchOutline className="text-xl" />
        <input
          type="text"
          placeholder="Type to search..."
          className="px-4 py-2 w-[70%] border-none outline-none text-lg"
        />
      </div>
      <div className="h-full w-[40%] flex justify-end items-center px-8 gap-5">
        <div className="flex items-center h-8 w-16">
          <Switch
            size={""}
            id="airplane-mode"
            className="h-full text-black w-full p-[2px]"
          >
            <IoSunny className="text-black" />
            sdfsdfsdfsdf
          </Switch>
          {/* <Label htmlFor="airplane-mode">Airplane Mode</Label> */}
        </div>
        <div className="__notifications cursor-pointer h-10 w-10 bg-zinc-300 rounded-full flex justify-center items-center">
          <FaRegBell className="text-zinc-500 text-xl" />
        </div>
        <div className="__messages cursor-pointer h-10 w-10 bg-zinc-300 rounded-full flex justify-center items-center">
          <AiOutlineMessage className="text-xl text-zinc-500" />
        </div>
        <div className="-mr-2 text-end">
          <p className="text-sm font-medium">Thomas Anree</p>
          <p className="text-xs text-gray-800">UX Designer</p>
        </div>
        <div className="__profilePic h-12 w-12 rounded-full bg-zinc-300">
            <img src={ProfilePic} className="h-full w-full cursor-pointer rounded-full" alt="profile-picture" />
        </div>
      </div>
    </div>
  );
};

export default Header;
