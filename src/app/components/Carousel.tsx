import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Carousel() {
    return (




      <div>
        <section className="bg-gradient-to-r from-black to-grey-700">
          <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
              {/* Left Tall Image */}
              <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-grey-700 h-auto flex flex-col">
                <Link
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg pb-4 pt-40 flex-grow"
                >
                  <Image
                    src="/burger2.jpg"
                    alt="burger"
                    width={300}
                    height={400}
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute bottom-4 left-4">
                    Delicious Bite
                  </h3>
                </Link>
              </div>
  
              {/* Top Right Small Image */}
              <div className="col-span-2 sm:col-span-1 md:col-span bg-gradient-to-r from-black to-grey-700 h-auto">
                <Link
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg pb-4 pt-40 w-full h-[200px]"
                >
                  <Image
                    src="/burger3.jpg"
                    alt="burger image"
                    width={1000}
                    height={1000}
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute bottom-4 left-4">
                    Luni Burger
                  </h3>
                </Link>
  
                {/* Two Small Images Below */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <Link
                    href=""
                    className="group relative flex flex-col overflow-hidden rounded-lg w-full h-[120px]"
                  >
                    <Image
                      src="/burger4.webp"
                      alt="burger image"
                      width={300}
                      height={200}
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"></div>
                    <h3 className="z-10 text-xl font-medium text-white absolute bottom-4 left-4">
                      Spicy
                    </h3>
                  </Link>
                  <Link
                    href=""
                    className="group relative flex flex-col overflow-hidden rounded-lg w-full h-[120px]"
                  >
                    <Image
                      src="/burger5.jpeg"
                      alt="burger image"
                      width={300}
                      height={200}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"></div>
                    <h3 className="z-10 text-xl font-medium text-white absolute bottom-4 left-4">
                      Yummy
                    </h3>
                  </Link>
                </div>
              </div>
  
              {/* Right Large Image */}
              <div className="col-span-2 sm:col-span-2 md:col-span-1 bg-gradient-to-r from-black to-grey-700 h-auto flex flex-col">
                <Link
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg pb-4 pt-40 w-full h-[300px]"
                >
                  <Image
                    src="/burger6.avif"
                    alt="burger image"
                    width={300}
                    height={200}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute bottom-4 left-4">
                    Cheesy Burger
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  