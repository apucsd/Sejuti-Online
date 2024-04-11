"use client";
import { useEffect, useState } from "react";
import Button from "./Button";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  visible: {
    opacity: 1,
    y: 0, // adjust y-axis transition if needed
    transition: {
      when: "beforeChildren", // ensures parent animates first
      staggerChildren: 0.2, // stagger each child by 0.2 seconds
    },
  },
  hidden: {
    opacity: 0,
    y: 20, // adjust y-axis transition for hidden state if needed
  },
};
const childVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
  hidden: {
    opacity: 0,
    y: 100,
  },
};
export const Slider = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [
    {
      id: 1,
      img: "https://media.licdn.com/dms/image/D4E12AQFxaILHwtttVg/article-cover_image-shrink_720_1280/0/1669111413895?e=2147483647&v=beta&t=qTnjWNfJ0cf3BJbBu8SavnTf0Grac0JTUYkaUmnir7E",
      title: "চাকরি",
      des: "সহজ আবেদন! আপনার জন্য নিখুঁত চাকরি খুঁজুন।",
    },
    {
      id: 2,
      img: "https://businesspostbd.com/files/media/daily-media/Dated/2022/APRIL/23/Train-ticket-sale-edited.png",
      title: "ট্রেন",
      des: "ঝামেলাহীন! অনলাইনে টিকিট কিনুন, আরামে যাত্রা করুন।",
    },
    {
      id: 3,
      img: "https://blog.etravelsmart.com/wp-content/uploads/2016/09/generalbus.jpg",
      title: "বাস",
      des: "নতুন গন্তব্য! অনলাইনে বুকিং করে ভ্রমণের আনন্দ নিন।",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/7009468/pexels-photo-7009468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "ভিসা",
      des: "বিশ্ব ভ্রমণ! সহজ আবেদনে আপনার ভিসা পান।",
    },
    {
      id: 5,
      img: "https://images.prothomalo.com/prothomalo-english%2F2023-07%2Fd35033cb-bc6e-467e-bf9b-9f46ddff04d4%2Fprothomalo_import_media_2019_01_10_4e23c3e8c9bb121a8a35a710271417ce_5c375a45a726a.webp?rect=0%2C22%2C1600%2C840&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&overlay=&overlay_position=bottom&overlay_width_pct=1",
      title: "পাসপোর্ট",
      des: "অনলাইন আবেদন! ঝটপট পান আপনার পাসপোর্ট।",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setCurrentSlider(
          currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
        ),
      6000
    );
    return () => clearInterval(intervalId);
  }, [currentSlider, sliders.length]);

  return (
    <div className="relative flex flex-col justify-between">
      <div
        className="w-full  h-72 sm:h-96 md:h-[440px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute  before:bg-black/20 before:inset-0 transform duration-1000 ease-linear overflow-hidden"
        style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}
      >
        {/* text container here */}
        <motion.div
          key={currentSlider}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="drop-shadow-lg text-white text-center px-5"
        >
          <motion.h1
            variants={childVariants}
            style={{
              textShadow: "3px 4px 1px rgb(79, 70, 229)", // Adjust the shadow values as needed
            }}
            className="text-5xl lg:text-8xl font-semibold mb-3"
          >
            {sliders[currentSlider].title}
          </motion.h1>
          <motion.p
            variants={childVariants}
            style={{
              textShadow: "1px 1px 1px rgb(0, 0, 0,0.3)", // Adjust the shadow values as needed
            }}
            className="text-sm md:text-base lg:text-2xl w-full max-w-[50ch] mx-auto"
          >
            {sliders[currentSlider].des}
          </motion.p>
          {/* Button here */}
          <motion.div variants={childVariants}>
            <Link href="/services">
              <Button>আরো দেখুন</Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* slider container */}

      <div className="flex absolute bottom-5 left-1/2 transform -translate-x-1/2 justify-center items-center gap-3 p-2">
        {/* sliders */}

        {sliders.map((_slide, inx) => (
          <button
            onClick={() => setCurrentSlider(inx)}
            key={inx}
            className={`size-3 border ${
              currentSlider === inx ? "border-2 bg-white p-px" : ""
            } rounded-full  box-content cursor-pointer`}
          />
        ))}
      </div>
    </div>
  );
};
