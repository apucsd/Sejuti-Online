import Button from "./Button";

const NewsLetter = () => {
  return (
    <div className="bg-gradient-to-b from-primary to-white py-16 px-6 font-[sans-serif]">
      <div className="max-w-6xl mx-auto text-center text-white">
        <h2 className="md:text-5xl text-4xl font-extrabold mb-6">
          Join Our Exclusive Newsletter
        </h2>
        <p className="text-xl text-gray-300">
          Be part of our elite community. Get VIP access to curated content,
          early product releases, and special promotions.
        </p>
        <div className="bg-white shadow-lg rounded-lg p-8 mt-12 flex flex-col md:flex-row items-center justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-96 bg-transparent border-b-2 border-primary py-3 px-4 text-[#2e0249] text-base focus:outline-none placeholder-primary placeholder-opacity-70"
          />
          <Button className="bg-slate-200 ">Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
