import React from "react";
import img1 from "/public/shop/shop1.jpg";
import img2 from "/public/shop/shop2.jpg";
import img3 from "/public/shop/4.jpg";
import Image from "next/image";
const GalleryPage = () => {
  return (
    <div className="bg-white  md:px-20  py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {/* image - start */}
          <a
            href="/shop/shop1.jpg" //
            rel="noopener noreferrer"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <Image src={img1} fill alt="" />
          </a>

          <a
            href="/shop/shop2.jpg" //
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <Image src={img2} fill alt="" />
          </a>
          {/* image - end */}
          {/* image - start */}
          <a
            href="/shop/shop1.jpg" //
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <Image src={img1} fill alt="" />
          </a>
          {/* image - end */}
          {/* image - start */}
          <a
            href="/shop/4.jpg" //
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <Image src={img3} fill alt="" />
          </a>
          {/* image - end */}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
