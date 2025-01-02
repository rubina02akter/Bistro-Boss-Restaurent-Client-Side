// এটা ইউজ করার আগে কয়েকটা প্যাকেজ ইন্সটল দিও
// 1. React Router Dom - npm install react-router-dom
// 2. React Icons - npm install react-icons
// 3. Framer Motion - npm install framer-motion

import React, { useState } from "react";
import {
  FiMenu,
  FiX,
  FiHome,
  FiHelpCircle,
  FiLogOut,
  FiStar,
} from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
// import useAuth from "../AuthPorvider/useAuth";

const NavBar = () => {
  // const { logOut, user, setUser, loading } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // if (loading)
  //   return (
  //     <div className="h-[100vh] flex justify-center items-center ">
  //       <span className="loading loading-ring loading-lg"></span>
  //     </div>
  //   );
  return (
    <nav className= "text-white fixed w-full z-50 bg-opacity-40 bg-black">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-xl font-bold">Bistro-Boss</div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-2 hover:text-gray-300 ${
                  isActive ? "text-blue-500" : "text-white"
                }`
              }
            >
              <FiHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                `flex items-center gap-2 hover:text-gray-300 ${
                  isActive ? "text-blue-500" : "text-white"
                }`
              }
            >
             Menu
            </NavLink>
          </li>
          <li>
          <NavLink
              to="/our-shop"
              className={({ isActive }) =>
                `flex items-center gap-2 hover:text-gray-300 ${
                  isActive ? "text-blue-500" : "text-white"
                }`
              }
            >
            Our Shop
            </NavLink>
          </li>
          <li>
          <NavLink
              to="/order"
              className={({ isActive }) =>
                `flex items-center gap-2 hover:text-gray-300 ${
                  isActive ? "text-blue-500" : "text-white"
                }`
              }
            >
            Order
            </NavLink>
          </li>
         
          {/* {user ? ( */}
          <div className="flex gap-4">
            {/* <li>
              <NavLink
                to="/recommendations"
                className={({ isActive }) =>
                  `flex items-center gap-2 hover:text-gray-300 ${
                    isActive ? "text-blue-500" : "text-white"
                  }`
                }
              >
                <FiStar /> Recommendations For Me
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink
                to="/my-queries"
                className={({ isActive }) =>
                  `flex items-center gap-2 hover:text-gray-300 ${
                    isActive ? "text-blue-500" : "text-white"
                  }`
                }
              >
                <FiHelpCircle /> My Queries
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink
                to="/my-recommendations"
                className={({ isActive }) =>
                  `flex items-center gap-2 hover:text-gray-300 ${
                    isActive ? "text-blue-500" : "text-white"
                  }`
                }
              >
                <FiStar /> My Recommendations
              </NavLink>
            </li> */}
          </div>
          {/* ) : (
            ""
          )} */}
        </ul>
        <ul>
          {/* {user ? ( */}
          <li className="lg:block hidden">
            <button
              // onClick={() => {
              //   logOut().then(() => {
              //     navigate("/login");
              //   });
              // }}
              className="flex  items-center gap-2 hover:text-gray-300 text-white"
            >
              <FiLogOut /> Logout
            </button>
          </li>
          {/* ) : ( */}
          <li className="lg:block hidden">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `flex items-center gap-2  hover:text-gray-300 ${
                  isActive ? "text-blue-500" : "text-white"
                }`
              }
            >
              <FiLogOut /> Login
            </NavLink>
          </li>
          {/* )} */}
        </ul>

        {/* Mobile Menu Button */}
        <button className="lg:hidden focus:outline-none" onClick={toggleMenu}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-2/3 bg-gray-800 text-white shadow-lg z-50 lg:hidden"
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <span className="text-xl font-bold"></span>
              <button onClick={toggleMenu} className="text-white">
                <FiX size={24} />
              </button>
            </div>

            {/* Menu Items */}
            <ul className="flex flex-col gap-4 p-6">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `flex items-center gap-2 hover:text-gray-300 ${
                      isActive ? "text-blue-500" : "text-white"
                    }`
                  }
                  onClick={toggleMenu}
                >
                  <FiHome /> Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu"
                  className={({ isActive }) =>
                    `flex items-center gap-2 hover:text-gray-300 ${
                      isActive ? "text-blue-500" : "text-white"
                    }`
                  }
                  onClick={toggleMenu}
                >
                  <FiHelpCircle />Menu
                </NavLink>
              </li>

              {/* {user ? ( */}
              <div className="flex flex-col gap-4">
                <li>
                  <NavLink
                    to="/our-shop"
                    className={({ isActive }) =>
                      `flex items-center gap-2 hover:text-gray-300 ${
                        isActive ? "text-blue-500" : "text-white"
                      }`
                    }
                    onClick={toggleMenu}
                  >
                    <FiStar /> Our Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/order"
                    className={({ isActive }) =>
                      `flex items-center gap-2 hover:text-gray-300 ${
                        isActive ? "text-blue-500" : "text-white"
                      }`
                    }
                    onClick={toggleMenu}
                  >
                    <FiHelpCircle /> Order
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/my-recommendations"
                    className={({ isActive }) =>
                      `flex items-center gap-2 hover:text-gray-300 ${
                        isActive ? "text-blue-500" : "text-white"
                      }`
                    }
                    onClick={toggleMenu}
                  >
                    <FiStar /> My Recommendations
                  </NavLink>
                </li>
                <li>
                  <button
                    // onClick={() => {
                    //   logOut().then(() => {
                    //     navigate("/login");
                    //   });
                    // }}
                    className="flex items-center gap-2 hover:text-gray-300 text-white"
                  >
                    <FiLogOut /> Logout
                  </button>
                </li>
              </div>
              {/* ) : ( */}
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `flex items-center gap-2 hover:text-gray-300 ${
                      isActive ? "text-blue-500" : "text-white"
                    }`
                  }
                >
                  <FiLogOut /> Login
                </NavLink>
              </li>
              {/* )} */}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
