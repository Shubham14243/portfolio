import React from "react";
import { useMenuContext } from "../../Context/MenuContext";
import useGetData from "../../hooks/useGetData";
import { HiOutlineDownload } from "react-icons/hi";

const NavItems = () => {
  const { menuItem } = useMenuContext();
  const { setData } = useGetData();

  const handleMenu = (menuName) => {
    setData(menuName);
  };

  return (
    <>
      <ul className="menu menu-horizontal lg:menu-horizontal bg-base-100 rounded-md gap-3">
        <li>
          <a
            href="./Shubham_Kumar_Gupta_Resume.pdf"
            download="Shubham_Kumar_Gupta_Resume.pdf"
          >
            <button className="btn btn-outline btn-sm btn-primary">
              <span className="text-xl font-thin">Resume </span>
              <HiOutlineDownload className="h-5 w-5" />
            </button>
          </a>
        </li>
        <li>
          <a
            onClick={() => handleMenu("about")}
            className={`${menuItem === "about" ? "active" : ""}`}
          >
            <span className="text-2xl">About</span>
          </a>
        </li>
        <li>
          <a
            onClick={() => handleMenu("resume")}
            className={`${menuItem === "resume" ? "active" : ""}`}
          >
            <span className="text-2xl">Resume</span>
          </a>
        </li>
        <li>
          <a
            onClick={() => handleMenu("project")}
            className={`${menuItem === "project" ? "active" : ""}`}
          >
            <span className="text-2xl">Projects</span>
          </a>
        </li>
        <li>
          <a
            onClick={() => handleMenu("contact")}
            className={`${menuItem === "contact" ? "active" : ""}`}
          >
            <span className="text-2xl">Contacts</span>
          </a>
        </li>
      </ul>
    </>
  );
};

export default NavItems;
