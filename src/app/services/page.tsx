const servicesData = [
  {
    id: 1,
    title: "চাকরির আবেদন",
    description: "স্বপ্নের চাকরিতে আবেদন করুন আমাদের সাহায্যে।",
    image: "/images/job.jpg",
    serviceType: "Online Job Application",
    processingTime: "3-5 কার্যদিবস",
    price: "প্রাইস নির্ভর করে সেবার উপর",
  },
  {
    id: 2,
    title: "সিভি রাইটিং",
    description: "পেশাদার সিভি তৈরি করে চাকরি পাওয়ার সুযোগ বাড়ান।",
    image: "/images/cv.webp",
    serviceType: "Professional CV Writing",
    processingTime: "1-2 কার্যদিবস",
    price: "বিভিন্ন প্যাকেজ উপলব্ধ",
  },
  {
    id: 3,
    title: "ভিসা আবেদন",
    description: "নির্ভুল ভিসা প্রসেসিংয়ের মাধ্যমে সহজে ভিসা পান।",
    image: "/images/visa.jpg",
    serviceType: "Visa Application Assistance",
    processingTime: "5-7 কার্যদিবস",
    price: "সেবা অনুযায়ী মূল্য",
  },
  {
    id: 4,
    title: "NID কার্ড আবেদন",
    description: "ঝামেলামুক্ত NID কার্ড প্রসেসিং সেবা।",
    image: "/images/nidcard.jpg",
    serviceType: "NID Card Application",
    processingTime: "প্রক্রিয়া সময় বিবেচনাযোগ্য",
    price: "যোগাযোগ করুন বিস্তারিত জানতে",
  },
  {
    id: 5,
    title: "প্রিন্টআউট ও ডকুমেন্টেশন",
    description: "উচ্চমানের প্রিন্টিং সল্যুশন।",
    image: "/images/printout.jpg",
    serviceType: "Printing & Documentation",
    processingTime: "অর্ডার অনুযায়ী",
    price: "প্রতি পৃষ্ঠা/প্রকল্প অনুযায়ী মূল্য",
  },
  {
    id: 6,
    title: "সীল ও স্ট্যাম্প তৈরি",
    description: "কাস্টমাইজড সীল ও স্ট্যাম্প নিমিষেই।",
    image: "/images/seal.jpeg",
    serviceType: "Seal and Stamp Making",
    processingTime: "2-4 কার্যদিবস",
    price: "ডিজাইন অনুযায়ী মূল্য",
  },
  {
    id: 7,
    title: "লেমুনেটিং",
    description: "ডকুমেন্ট লেমুনেটিং সেবা প্রদান করা হয়।",
    image: "/images/laminating.jpg",
    serviceType: "ডকুমেন্ট লেমুনেটিং",
    processingTime: "1-2 কার্যদিবসে",
    price: "ডকুমেন্ট আকারের উপর ভিত্তি করে মূল্য",
  },
  {
    id: 9,
    title: "ড্রাইভিং লাইসেন্স আবেদন",
    description: "নির্বিঘ্নে আপনার ড্রাইভিং লাইসেন্স প্রক্রিয়া করুন।",
    image: "/images/driving-licence.jpg",
    serviceType: "Driving License Application",
    processingTime: "4-6 সপ্তাহ",
    price: "আবেদন ফি অনুযায়ী",
  },
  {
    id: 10,
    title: "ভারতীয় ভিসা আবেদন",
    description: "সহজে ভারতীয় ভিসা প্রাপ্তির সম্পূর্ণ সহায়তা।",
    image: "/images/India-Visa.jpg",
    serviceType: "Indian Visa Application",
    processingTime: "7-10 দিন",
    price: "ভিসা শুল্ক অনুযায়ী",
  },
  {
    id: 11,
    title: "স্কুল/কলেজ ভর্তি আবেদন",
    description: "শিক্ষার সুযোগ সহজীকরণে আমাদের প্রফেশনাল সহায়তা।",
    image: "/images/admission.jpg",
    serviceType: "School/College Admission Application",
    processingTime: "আবেদন অনুসারে",
    price: "সেবা মূল্য বিবরণী অনুসারে",
  },
  {
    id: 12,
    title: "বাস টিকেট",
    description: "দেশের যেকোনো গন্তব্যে বাস টিকেট বুকিং সার্ভিস।",
    image: "/images/bus-ticket.jpg",
    serviceType: "Bus Ticket Booking",
    processingTime: "তাৎক্ষণিক",
    price: "টিকেট মূল্য অনুযায়ী",
  },
  {
    id: 13,
    title: "ট্রেন টিকেট",
    description: "সময়োপযোগী ট্রেন যাত্রার জন্য আগাম টিকেট বুকিং।",
    image: "/images/train-ticket.png",
    serviceType: "Train Ticket Booking",
    processingTime: "তাৎক্ষণিক",
    price: "টিকেট মূল্য অনুযায়ী",
  },
  {
    id: 14,
    title: "জন্ম নিবন্ধন সার্টিফিকেট আবেদন",
    description: "জন্ম নিবন্ধন প্রক্রিয়ায় সহজ ও নির্ভুল সেবা।",
    image: "/images/birthregi.jpg",
    serviceType: "Birth Certificate Application",
    processingTime: "2-4 সপ্তাহ",
    price: "আবেদন ফি অনুযায়ী",
  },
];

const Services = () => {
  return (
    <div className="md:container">
      <header className="text-center mx-auto  lg:px-20">
        <h2 className="text-4xl text-primary leading-normal mb-2 font-bold ">
          আমাদের সেবাসমূহ
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
      <div className="relative md:p-20 grid md:grid-cols-3 gap-5 p-5 ">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className={`w-full min-h-64 hover:bg-[80px]  group h-full rounded bg-cover bg-center before:absolute hover:before:bg-primary/40 before:bg-primary/20 transition-all duration-300 before:inset-0 transform ease-linear overflow-hidden ${
              service.id % 3 === 0 ? "row-span-2" : ""
            }`}
            style={{ backgroundImage: `url(${service.image})` }}
          >
            {/* text container here */}
            <div className="flex  h-full flex-col justify-center items-center drop-shadow-lg text-white text-center px-5">
              <h2
                style={{ textShadow: "0 2px 5px rgba(0, 0, 0, 0.3)" }}
                className="text-3xl mt-6 md:text-4xl font-bold text-shaw"
              >
                {service.title}
              </h2>

              <div className="mt-3">
                <p
                  style={{ textShadow: "0 2px 5px rgba(0, 0, 0, 0.6)" }}
                  className=" text-lg"
                >
                  {service.description}
                </p>
              </div>
              <div className="mt-2">
                <p
                  style={{ textShadow: "0 2px 5px rgba(0, 0, 0, 0.6)" }}
                  className=" text-xs bg-primary px-10 py-3 rounded-3xl h-full text-center"
                >
                  {service.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
