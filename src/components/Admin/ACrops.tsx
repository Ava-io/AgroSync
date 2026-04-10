import { IoSearch } from "react-icons/io5";

const ACrops = () => {
  return (
    <div className="mt-3">
      <div className="bg-white flex items-center relative">
        <div>
          <IoSearch className="absolute top-3 text-2xl left-4 text-gray-400" />
        </div>

          <input
            type="text"
            placeholder="Search crops or field "
            className="px-12 py-3 rounded-lg border text-black placeholder-gray-400 focus:outline-none 
          focus:ring-2 transition duration-200 focus:ring-green-400
           border-gray-400 w-full focus:border-green-400"
          />
      </div>

      <div className=""></div>
    </div>
  );
};

export default ACrops;
