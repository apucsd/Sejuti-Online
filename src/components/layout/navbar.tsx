"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  AiOutlineWhatsApp,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";
import Image from "next/image";
import { MdOutlineFacebook, MdPhone, MdWhatsapp } from "react-icons/md";

const links = [
  {
    id: 1,
    title: "হোম",
    url: "/",
  },
  {
    id: 2,
    title: "সেবাসমূহ",
    url: "/services",
  },

  {
    id: 4,
    title: "যোগাযোগ",
    url: "/contact",
  },
  {
    id: 5,
    title: "গ্যালারী",
    url: "/gallery",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex z-10 h-20 bg-white  items-center justify-between  px-4 py-2">
      <div className="md:w-[60%] h-full flex justify-around items-center">
        <div className="size-52 relative">
          <Link className="" href="/">
            <Image className="" src="/logo.png" fill alt="" />
          </Link>
        </div>

        <ul className="hidden w-full text-gray-700  uppercase font-semibold items-center  justify-center gap-8 md:flex">
          {links.map((link) => (
            <li className="hover:text-primary" key={link.id}>
              <Link href={link.url}>{link.title}</Link>
            </li>
          ))}
          <div className="flex  justify-center items-center md:justify-start space-x-6">
            <li>
              <a
                href="https://www.facebook.com/sejutionline.com.gazipur"
                target="_blank"
              >
                <MdOutlineFacebook className="size-7 text-primary hover:text-gray-700" />
              </a>
            </li>
            <li>
              <a href="tel:+8801714-717301">
                <MdWhatsapp className="size-7 text-primary hover:text-gray-700" />
              </a>
            </li>
            <li>
              <a href="tel:+8801714-717301">
                <MdPhone className="size-7 text-primary hover:text-gray-700" />
              </a>
            </li>
          </div>
        </ul>
      </div>

      {/* contact text */}
      <div className="w-[40%] space-y-1 text-center hidden sm:hidden md:block lg:block">
        <h1 className="text-gray-600 text-center font-semibold">
          সকাল অনলাইন আবেদন:: টিকিট :: প্রিন্টিং :: সিল :: সিভি
        </h1>
        <div className="text-gray-500 flex text-sm justify-center items-center gap-3">
          <p className="flex items-center gap-1">
            <AiOutlinePhone />
            <a href="tel:+8801714-717301">+8801714-717301</a>
          </p>
          <p className="flex items-center gap-1">
            <AiOutlineWhatsApp />
            <a href="tel:+8801714-717301">+8801714-717301</a>
          </p>
          <p className="flex items-center gap-1">
            <AiOutlineMail />
            <a href="mailto:sejuti.online@gmail.com">sejuti.online@gmail.com</a>
          </p>
        </div>
      </div>
      {/* sidebar hamburger */}
      <div
        onClick={() => setOpen(!open)}
        className="relative hover:cursor-pointer flex transition-all duration-300 md:hidden"
      >
        <div className="flex flex-col group justify-between gap-1">
          <div className="h-0.5 bg-gray-700 w-6 "></div>
          <div className="h-0.5 bg-gray-700 w-5 group-hover:w-6 transition-all duration-300"></div>
          <div className="h-0.5 bg-gray-700 w-3 group-hover:w-6 transition-all duration-300"></div>
        </div>
      </div>

      {/* SIDEBAR ITEMS */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                bounce: 0,
                duration: 0.4,
                delayChildren: 0.2,
              }}
              className="fixed md:hidden z-[9999] bg-indigo-600 text-white shadow-lg top-0 right-0 w-full max-w-xs h-screen p-5"
            >
              <button
                onClick={() => setOpen(!open)}
                className="bg-white hover:cursor-pointer text-gray-700 text-lg h-8 w-8 block  rounded-full"
              >
                &times;
              </button>
              <div>
                {/* all link */}
                <hr className="my-4" />
                <motion.ul className="flex uppercase flex-col items-start h-screen gap-5 justify-start">
                  {links.map((link) => (
                    <motion.li
                      key={link.id}
                      className="group border-b w-full pb-1 flex  cursor-pointer flex-col"
                    >
                      <Link href={link.url} onClick={() => setOpen(!open)}>
                        {link.title}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
