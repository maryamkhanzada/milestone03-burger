import React from "react";
import { FaHamburger, FaSearch, FaBolt, FaShoppingCart } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
  return (
    <div>
      <div className="grid xl:grid-cols-1 grid-cols-1">
        <div className="p-5">
          <div className="py-3 px-3 rounded-xl border w-full">
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-2">
                {/* Logo Burger */}
                <FaHamburger className="w-6 h-6 text-yellow-400 hover:text-cyan-200" />

                {/* Search Icon */}
                <div style={{ position: "relative" }} className="relative">
                  <input
                    className="rounded-3xl py-3 px-3 outline-none text-xs w-[350px] pr-10 hidden lg:block md:block"
                    placeholder="Search for your desired burger in the menu."
                  />
                  <FaSearch className="w-5 h-5 text-lime-300 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block" />
                </div>
              </div>
              <div className="flex justify-center items-center gap-2">
                {/* Lightning Bolt */}
                <FaBolt className="w-5 h-5 text-amber-400 hidden lg:block md:block" />
                <p className="text-sm text-white hidden lg:block md:block">
                  Order now and get it within{" "}
                  <span className="text-amber-400">15 minutes!</span>
                </p>

                {/* Cart Icon */}
                <FaShoppingCart className="w-8 h-8 text-sky-400 rounded-full ring-2 p-1 relative" />
                <div className="inline-block w-8 h-8 rounded-full ring-2 ring-sky-400 overflow-hidden">
                  <Image
                    src="/img31.jpg"
                    alt="user avatar"
                    width={500}
                    height={500}
                    className="hover:scale-110 transition-transform"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
