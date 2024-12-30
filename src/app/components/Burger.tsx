import React from 'react';
import Image from 'next/image';

const products = [
    { id: 1, title: "Cheesy Burger", price: "300.00", imageUrl: "/burger6.avif" },
    { id: 2, title: "Creamy Burger", price: "400.00", imageUrl: "/burger7.avif" },
    { id: 3, title: "Family Burger", price: "500.00", imageUrl: "/burger8.jpg" },
    { id: 4, title: "Double Patty", price: "600.00", imageUrl: "/burger6.avif" },
    { id: 5, title: "Spicy Burger", price: "350.00", imageUrl: "/burger7.avif" },
    { id: 6, title: "Veggie Burger", price: "250.00", imageUrl: "/burger8.jpg" },
];

export default function ProductGrid() {
    return (
        <div className="bg-white py-12">
            {/* Main Heading */}
            <h1 className="text-center text-4xl font-bold text-yellow-600 mb-8">
                Delicious
            </h1>

            {/* Product Grid */}
            <div className="grid gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4 transition-transform hover:scale-105"
                    >
                        {/* Image */}
                        <div className="relative">
                            <Image
                                src={product.imageUrl}
                                alt={product.title}
                                width={200} // Explicit width
                                height={200} // Explicit height
                                className="rounded-md"
                            />
                        </div>

                        {/* Product Title */}
                        <h2 className="mt-4 text-lg font-semibold text-gray-700">
                            {product.title}
                        </h2>

                        {/* Price */}
                        <p className="mt-2 text-lg font-bold text-gray-900">
                            ${product.price}
                        </p>

                        {/* Order Button */}
                        <button className="mt-4 bg-yellow-500 text-white px-6 py-2 rounded-full font-medium transition-colors hover:bg-cyan-500">
                            Order
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
