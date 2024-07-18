import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BsListTask } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaTableSolid } from "react-icons/lia";
import { RiPagesLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { SiGoogleforms } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const SideBar = () => {

  const navigate = useNavigate()
  const openForm = () => {
    // navigate("/form")
  }
  return (
    <div className="__sidebar h-screen lg:w-[250px] w-[100px] sm:w-[180px] md:w-[200px] bg-slate-800 p-5">
      <div className="__sideHeader flex justify-center items-center h-[70px] gap-2">
        <div className="h-7 w-7 rounded-md bg-blue-800"></div>
        <h1 className="text-2xl font-bold">TailAdmin</h1>
      </div>
      <div className="flex flex-col justify-center items-center w-full gap-4">
        <h1 className="text-zinc-400 uppercase font-medium text-sm mt-8 mb-4">
          Menu
        </h1>
        <Select>
          <SelectTrigger className="w-[180px] bg-gray-700 border-none outline-none rounded-none">
          <RxDashboard /><SelectValue placeholder="Dashboard" />
          </SelectTrigger>
          <SelectContent className="bg-slate-800 border-none outline-none text-white">
            <SelectGroup>
              <SelectLabel>eCommerce</SelectLabel>
              <SelectItem value="banana">Analytics</SelectItem>
              <SelectItem value="blueberry">Marketing</SelectItem>
              <SelectItem value="grapes">CRM</SelectItem>
              <SelectItem value="pineapple">Stocks</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <div className="flex justify-start items-start flex-col gap w-[90%] gap-4 ml-2">
          <button className="flex justify-center items-center gap-2"><IoCalendarOutline />Calendar</button>
          <button className="flex justify-center items-center gap-2"><CgProfile />Profile</button>
        </div>

        <Select>
          <SelectTrigger className="w-[180px] bg-gray-700 border-none outline-none rounded-none">
          <BsListTask /><SelectValue placeholder="Task" />
          </SelectTrigger>
          <SelectContent className="bg-slate-800 border-none outline-none text-white">
            <SelectGroup>
              <SelectLabel>eCommerce</SelectLabel>
              <SelectItem value="banana">Analytics</SelectItem>
              <SelectItem value="blueberry">Marketing</SelectItem>
              <SelectItem value="grapes">CRM</SelectItem>
              <SelectItem value="pineapple">Stocks</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select onOpenChange={() => openForm()}>
          <SelectTrigger className="w-[180px] bg-gray-700 border-none outline-none rounded-none">
          <SiGoogleforms /><SelectValue placeholder="Forms" />
          </SelectTrigger>
          <SelectContent className="bg-slate-800 border-none outline-none text-white">
            <SelectGroup>
              <SelectLabel>Form Elements</SelectLabel>
              <SelectItem onClick={openForm} value="banana">Pro Form Elements</SelectItem>
              <SelectItem value="blueberry">Form Layout</SelectItem>
              <SelectItem value="grapes">Pro Form Layout</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[180px] bg-gray-700 border-none outline-none rounded-none">
          <LiaTableSolid /><SelectValue placeholder="Tables" />
          </SelectTrigger>
          <SelectContent className="bg-slate-800 border-none outline-none text-white">
            <SelectGroup>
              <SelectLabel>eCommerce</SelectLabel>
              <SelectItem value="banana">Analytics</SelectItem>
              <SelectItem value="blueberry">Marketing</SelectItem>
              <SelectItem value="grapes">CRM</SelectItem>
              <SelectItem value="pineapple">Stocks</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[180px] bg-gray-700 border-none outline-none rounded-none">
          <RiPagesLine /><SelectValue placeholder="Pages" />
          </SelectTrigger>
          <SelectContent className="bg-slate-800 border-none outline-none text-white">
            <SelectGroup>
              <SelectLabel>eCommerce</SelectLabel>
              <SelectItem value="banana">Analytics</SelectItem>
              <SelectItem value="blueberry">Marketing</SelectItem>
              <SelectItem value="grapes">CRM</SelectItem>
              <SelectItem value="pineapple">Stocks</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SideBar;
