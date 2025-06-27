import { TiHomeOutline } from "react-icons/ti";
import { LuMessageSquareText } from "react-icons/lu";
import { GiFlowerEmblem } from "react-icons/gi";

const SideMenu = () => {
    return (
        <div className="w-[40px] sm:w-[60px] bg-darkBlack  px-1 sm:px-3">
            <div className="relative group my-7">
                <button className="nav-btn text-white back text-xl bg-darkBlack">
                    <TiHomeOutline className="text-xs"/>
                </button>
                <span className="absolute top-full mt-1 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                    Home
                </span>
            </div>
            <div className="relative group pb-32">
                <button className="nav-btn text-white text-xl">
                    <LuMessageSquareText className="text-xs"/>
                </button>
                <span className="absolute top-full mt-1 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                    Ask
                </span>
            </div>
            <div className="relative group">
                <button className="nav-btn text-white text-xl bg-darkBlack">
                    <GiFlowerEmblem className="text-purple-500 text-xs" />
                </button>
                <span className="absolute top-full mt-1 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                    AI Agent
                </span>
            </div>
        </div>
    )
}
export default SideMenu