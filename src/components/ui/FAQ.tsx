/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { useState } from "react";

const Faq = () => {
  // add your array of object data
  const array = [
    {
      id: 1,
      question: "আমি কীভাবে অনলাইনে চাকরি আবেদন করতে পারি?",
      answer:
        "আপনি কীভাবে চাকরি আবেদন করতে পারেন তা জানতে, আপনি বিস্তারিত তথ্যের জন্য আমাদের WhatsApp নাম্বারে যোগাযোগ করতে পারেন।",
    },
    {
      id: 2,
      question: "কিভাবে অন্যদের জন্য সিভি লেখা সম্পর্কে অর্ডার করতে পারি?",
      answer:
        "সিভি লেখা সেবা সম্পর্কে বিস্তারিত জানতে, আপনি আমাদের WhatsApp নাম্বারে যোগাযোগ করতে পারেন।",
    },
    {
      id: 3,
      question: "ভিসা আবেদন করার পদ্ধতি কী?",
      answer:
        "ভিসা আবেদনের পদ্ধতি সম্পর্কে বিস্তারিত জানতে, আপনি আমাদের WhatsApp নাম্বারে যোগাযোগ করতে পারেন।",
    },
    {
      id: 4,
      question: "কিভাবে এনআইডি কার্ড আবেদন করতে পারি?",
      answer:
        "এনআইডি কার্ড আবেদন সম্পর্কে বিস্তারিত জানতে, আপনি আমাদের WhatsApp নাম্বারে যোগাযোগ করতে পারেন।",
    },
    {
      id: 5,
      question: "কিভাবে প্রিন্ট আউট পেতে পারি?",
      answer:
        "প্রিন্ট আউট প্রয়োজন সম্পর্কে বিস্তারিত জানতে, আপনি আমাদের WhatsApp নাম্বারে যোগাযোগ করতে পারেন।",
    },
    {
      id: 6,
      question: "সিল এবং স্ট্যাম্প কীভাবে তৈরি করা যায়?",
      answer:
        "সিল এবং স্ট্যাম্প সেবার বিস্তারিত জানতে, আপনি আমাদের WhatsApp নাম্বারে যোগাযোগ করতে পারেন।",
    },
  ];

  // toggle state and function
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const handleToggle = (idx: number | null) =>
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  console.log(isOpen);
  return (
    <div className="flex my-10 p-4 md:max-w-5xl mx-auto flex-col justify-center">
      <header className="text-center mx-auto mb-12 lg:px-20">
        <h2 className="text-4xl text-primary leading-normal mb-2 font-bold ">
          সচারাচর কিছু প্রশ্ন
        </h2>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 100 60"
          style={{ margin: "0 auto", height: 35 }}
          xmlSpace="preserve"
        >
          <circle
            cx="50.1"
            cy="30.4"
            r={5}
            className="stroke-primary"
            style={{
              fill: "transparent",
              strokeWidth: 2,
              strokeMiterlimit: 10,
            }}
          />
          <line
            x1="55.1"
            y1="30.4"
            x2={100}
            y2="30.4"
            className="stroke-primary"
            style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
          />
          <line
            x1="45.1"
            y1="30.4"
            x2={0}
            y2="30.4"
            className="stroke-primary"
            style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
          />
        </svg>
        <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
          সকাল অনলাইন আবেদন:: টিকিট :: প্রিন্টিং :: সিল :: সিভি
        </p>
      </header>
      <div className="grid md:grid-cols-2">
        <div className="">
          <img
            src="/faq.svg"
            alt=""
            className="w-full h-[600px] hidden md:block object-cover"
          />
        </div>
        <div className=" w-full rounded-lg space-y-6 cursor-pointer">
          {/* maping each accordion  */}
          {array.map((arr, idx) => (
            <div
              key={idx}
              onClick={() => handleToggle(idx)}
              className="flex items-center"
            >
              {/* the index div  */}
              <div className="w-20 h-16  flex justify-center items-center  text-2xl font-semibold rounded-xl font-sans">
                <span>0{idx + 1}</span>
              </div>
              <div className="md:w-32 h-[2px] bg-primary relative">
                <span className="w-3 h-3 bg-white absolute -left-2 -top-[5px] z-40 rounded-full border-2 border-primary"></span>
                <span className="bg-primary w-10 h-1"></span>
              </div>
              {/* main accordion div  */}
              <div className="w-full">
                <div className="w-full  shadow-md border-t-[12px] p-3 border-primary relative">
                  <span className="h-0 w-0 border-b-[40px] border-b-transparent border-r-[40px] border-r-primary absolute top-0 right-0"></span>
                  <h1 className="font-medium text-xl text-center">
                    {arr.question}
                  </h1>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out text-slate-600 ${
                    isOpen === idx
                      ? "max-h-[500px] opacity-100"
                      : "max-h-[0px] opacity-0"
                  }`}
                >
                  <div className="p-6 text-center text-sm">{arr.answer}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
