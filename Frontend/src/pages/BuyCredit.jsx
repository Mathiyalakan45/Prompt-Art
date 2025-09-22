import React, { useContext } from "react";
import { plans, assets } from "../assets/assets";
import { Appcontext } from "../context/AppContext";

const BuyCredit = () => {
  const { user } = useContext(Appcontext);

  return (
    <div className="min-h-[80vh] text-center pt-14 mb-10">
      <button className="border border-gray-400 px-10 py-2 rounded-full mb-6">
        Our Plans
      </button>
      <h1 className="text-center text-3xl font-medium mb-6 sm:mb-10">
        Choose the plan
      </h1>

      <div className="flex flex-wrap justify-center gap-6 text-left">
        {plans.map((item, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow bg-white/10 hover:scale-[1.02] transition-all duration-300 max-w-sm"
          >
            <img src={assets.logo_icon} alt="Plan Icon" className="w-10 mb-4" />
            <h2 className="text-xl font-semibold mb-2">{item.id}</h2>
            <p className="text-gray-600 mb-4">{item.desc}</p>
            <p className="text-2xl font-bold mb-4">
              ${item.price} / {item.credits} credits
            </p>
            <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
              {user ? "purches" : "Get Stared"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyCredit;
