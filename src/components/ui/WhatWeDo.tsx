import {
  PiReadCvLogoLight,
  PiTicketLight,
  PiPrinterLight,
  PiStampLight,
  PiIdentificationCardLight,
  PiTextAaLight,
} from "react-icons/pi";
const WhatWeDo = () => {
  return (
    <div
      id="services"
      className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white"
    >
      <div className="container xl:max-w-6xl mx-auto px-4">
        {/* Heading start */}
        <header className="text-center mx-auto mb-12 lg:px-20">
          <h2 className="text-4xl text-primary leading-normal mb-2 font-bold ">
            আমরা যা যা করি
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
        {/* End heading */}
        {/* row */}
        <div className="grid md:grid-cols-3 gap-5 text-center">
          <div className="w-full flex flex-col">
            {/* service block */}
            <div className="flex-grow py-8 px-12 mb-12 hover-box border-[0.35rem] border-transparent  bg-gray-50  border-gray-100  transition duration-300 ease-in-out ">
              <div className="inline-block text-gray-900 mb-4">
                {/* icon */}
                <PiReadCvLogoLight className="size-10" />
              </div>
              <h3 className="text-primary text-lg leading-normal mb-2 font-semibold ">
                সিভি লেখা
              </h3>
              <p className="text-sm text-slate-600">
                সকল ধরনের চাকরির জন্য পেশাদার সিভি
              </p>
            </div>
            {/* end service block */}
          </div>
          <div className="w-full">
            {/* service block */}
            <div className="py-8 px-12 mb-12 hover-box border-[0.35rem] border-transparent  bg-gray-50  border-gray-100  transition duration-300 ease-in-out ">
              <div className="inline-block text-gray-900 mb-4">
                {/* icon */}
                <PiTicketLight className="size-10" />
              </div>
              <h3 className="text-primary text-lg leading-normal mb-2 font-semibold ">
                বাস + ট্রেন টিকিট
              </h3>
              <p className="text-sm text-slate-600">
                সবার আগে বাস এবং ট্রেনের টিকিট
              </p>
            </div>
            {/* end service block */}
          </div>
          <div className="w-full flex flex-col">
            {/* service block */}
            <div className="py-8 px-12 mb-12 hover-box border-[0.35rem] border-transparent bg-gray-50  border-gray-100  transition duration-300 ease-in-out ">
              <div className="inline-block text-gray-900 mb-4">
                {/* icon */}
                <PiPrinterLight className="size-10" />
              </div>
              <h3 className="text-primary text-lg leading-normal mb-2 font-semibold ">
                প্রিন্ট আউট
              </h3>
              <p className="text-sm text-slate-600">ন্যূনতম দরে প্রিন্ট আউট</p>
            </div>
            {/* end service block */}
          </div>
          <div className="w-full flex flex-col ">
            {/* service block */}
            <div className="flex-grow py-8 px-12 mb-12 hover-box border-[0.35rem] border-transparent bg-gray-50  border-gray-100  transition duration-300 ease-in-out ">
              <div className="inline-block text-gray-900 mb-4">
                {/* icon */}
                <PiStampLight className="size-10" />
              </div>
              <h3 className="text-primary text-lg leading-normal mb-2 font-semibold ">
                সিল বা স্ট্যাম্প
              </h3>
              <p className="text-sm text-slate-600">
                মাত্র ২ মিনিটের মধ্যে সিল
              </p>
            </div>
            {/* end service block */}
          </div>
          <div className="w-full flex flex-col">
            {/* service block */}
            <div className="flex-grow py-8 px-12 mb-12 hover-box border-[0.35rem] border-transparent bg-gray-50  border-gray-100  transition duration-300 ease-in-out ">
              <div className="inline-block text-gray-900 mb-4">
                {/* icon */}
                <PiIdentificationCardLight className="size-10" />
              </div>
              <h3 className="text-primary text-lg leading-normal mb-2 font-semibold ">
                এনআইডি কার্ড আবেদন
              </h3>
              <p className="text-sm text-slate-600">
                পুরাতন এবং নতুন এনআইডি কার্ডের জন্য আবেদন
              </p>
            </div>
            {/* end service block */}
          </div>
          <div className="w-full flex flex-col">
            {/* service block */}
            <div className="flex-grow py-8 px-12 mb-12 hover-box border-[0.35rem] border-transparent bg-gray-50  border-gray-100  transition duration-300 ease-in-out ">
              <div className="inline-block text-gray-900 mb-4">
                {/* icon */}
                <PiTextAaLight className="size-10" />
              </div>
              <h3 className="text-primary text-lg leading-normal mb-2 font-semibold ">
                চাকরি আবেদন
              </h3>
              <p className="text-sm text-slate-600">
                সরকারি এবং বেসরকারি সকল চাকরির জন্য আবেদন
              </p>
            </div>
            {/* end service block */}
          </div>
        </div>

        {/* end row */}
      </div>
    </div>
  );
};

export default WhatWeDo;
