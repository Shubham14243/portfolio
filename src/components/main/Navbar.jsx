import React from "react";
import NavItems from "./NavItems";
import { useMenuContext } from "../../Context/MenuContext";
import { HiOutlineDownload } from "react-icons/hi";

const Navbar = () => {
  const { menuItem } = useMenuContext();

  return (
    <>
      <div className="w-full flex flex-row items-center justify-between gap-8">
        <div className="flex flex-row items-center">
          <h1 className="px-10">
            <span className="text-gray-300 text-5xl">
              {menuItem === "about" && "About Me!"}
              {menuItem === "contact" && "Contact Me!"}
              {menuItem === "project" && "My Projects!"}
              {menuItem === "resume" && "My Resume!"}
            </span>
          </h1>
        </div>

        <NavItems />
      </div>
    </>
  );
};

export default Navbar;
