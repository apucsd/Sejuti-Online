import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const ContactUs = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl  text-center md:text-5xl font-semibold text-primary mb-4">
          Contact Us
        </h2>
        {/* Contact Information */}
        <div className="text-gray-500 flex text-sm justify-center items-center gap-2">
          <p className="flex items-center gap-1">
            <AiOutlinePhone />
            +8801714-717301
          </p>
          <p className="flex items-center gap-1">
            <AiOutlineWhatsApp />
            +8801714-717301
          </p>
          <p className="flex items-center gap-1">
            <AiOutlineMail />
            sejuti.online@gmail.com
          </p>
        </div>

        <div className="my-3 h-1  border-2 border-primary w-full" />
        <div className="mb-8 flex text-center flex-col justify-center items-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            আমাদের ঠিকানা
          </h3>
          <p className="text-gray-600">
            নাসির সুপার মার্কেট (টাঙ্গাইল রোড)
            <br />
            চন্দনা চৌরাস্তা
            <br />
            গাজিপুর, ঢাকা
          </p>
        </div>

        {/* Responsive Google Map */}
        <div className="relative  overflow-hidden mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d455.6480761729121!2d90.3804991849182!3d23.98925725006013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755db7b36c534b3%3A0x61ca15a23a20864d!2sNasir%20Super%20Market!5e0!3m2!1sen!2sbd!4v1709913851856!5m2!1sen!2sbd"
            width="100%"
            height="350"
            loading="lazy"
          ></iframe>
        </div>
        {/* Additional contact details or a contact form can be added here */}
      </div>
    </section>
  );
};

export default ContactUs;
