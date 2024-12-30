import React from 'react';
import Image from 'next/image';

const FloatingImageContentBlock = () => {
    return (
        <section className="container mx-auto py-10 flex flex-col md:flex-row text-center">
            <div className="md:w-1/2 mt-8 md:pr-10">
                <h2 className="text-3xl font-bold mb-4 text-white">Delicious Burger</h2>
                <p className="text-white mb-4">
                    Experience the juicy burger in town, made with fresh ingredients and grilled to perfection.
                </p>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-cyan-600 transition duration-200">
                    Order Now
                </button>
                <h3 className="text-2xl font-semibold mt-6 mb-2 text-center text-white">
                    Coming Soon: Our New Burger Launches
                </h3>
                <ul className="text-white text-left list-disc pl-5">
                    <li>
                        <strong>Classic Cheeseburger:</strong> Topped with melted cheddar cheese and fresh veggies.
                    </li>
                    <li>
                        <strong>Spicy Jalapeño Burger:</strong> Packed with jalapeños and spicy mayo for a fiery kick.
                    </li>
                    <li>
                        <strong>BBQ Bacon Burger:</strong> Smoky BBQ sauce, crispy bacon, and melted cheese.
                    </li>
                    <li>
                        <strong>Veggie Supreme Burger:</strong> A wholesome patty loaded with fresh greens and herbs.
                    </li>
                </ul>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
                <Image
                    src="/burger16.jpg"
                    alt="Delicious Burger"
                    width={200}
                    height={200}
                    className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
                />
            </div>
        </section>
    );
};

export default FloatingImageContentBlock;
