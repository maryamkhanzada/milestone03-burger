
'use client'
import React from 'react';

type Offer = {
    title: string;
    description: string;
};

const Specialoffers: React.FC = () => {
    const offers: Offer[] = [
        {
            title: 'Happy Hour',
            description: 'Enjoy 50% off on all drinks from 5 PM to 7 PM',
        },
        {
            title: 'Family Meal Deal',
            description: 'Purchase 2 main courses to unlock the family deal with the code.',
        },
        {
            title: 'Weekly Brunch',
            description: 'Enjoy a free complimentary drink.',
        },
    ];

    const handleOfferClick = (description: string) => {
        alert(description);
    };

    return (
        <section className="py-10 bg-cyan-800">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6 text-white">Special Offers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {offers.map((offer, index) => (
                        <div
                            key={index}
                            onClick={() => handleOfferClick(offer.description)}
                            className="cursor-pointer bg-white shadow-lg rounded-lg p-6 text-center hover:bg-cyan-300 transition duration-300 transform hover:scale-105"
                        >
                            <h3 className="text-2xl font-semibold text-gray-700">{offer.title}</h3>
                            <p className="text-yellow-600 mt-3">{offer.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Specialoffers;
