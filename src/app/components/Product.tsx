import React from 'react';
import Image from 'next/image';

const products = [
    {
        id: 1,
        title: "Cheesy Burger",
        category: "Fixing",
        price: "300.00",
        imageUrl: "/burger6.avif",
        bgColor: "bg-amber-500"
    },
    {
        id: 2,
        title: "Creamy Burger",
        category: "Delight",
        price: "400.00",
        imageUrl: "/burger7.avif",
        bgColor: "bg-cyan-500"
    },
    {
        id: 3,
        title: "Family Burger",
        category: "Fixing",
        price: "500.00",
        imageUrl: "/burger8.jpg",
        bgColor: "bg-amber-500"
    },
];

export default function Product() {
    return (
        <div className="p-4 flex flex-wrap items-center justify-center">
            {products.map((product) => (
                <div
                    key={product.id}
                    className={`relative flex flex-col m-6 overflow-hidden ${product.bgColor} rounded-lg shadow-lg group max-w-sm`}
                >
                    {/* Decorative Background */}
                    <div
                        className="absolute inset-0 opacity-10 bg-gradient-to-br from-white/40 to-transparent rounded-lg group-hover:scale-105 transition-transform"
                    ></div>

                    {/* Product Image */}
                    <div className="relative pt-10 px-10 flex items-center justify-center">
                        <Image
                            src={product.imageUrl}
                            alt={product.title}
                            width={200}
                            height={200}
                            className="relative z-10 transition-transform group-hover:scale-110"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="relative text-white px-6 pb-6 mt-6">
                        <span className="block opacity-75 -mb-1">{product.category}</span>
                        <div className="flex justify-between items-center">
                            <span className="block font-semibold text-xl">{product.title}</span>
                            <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2">
                                {product.price}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
