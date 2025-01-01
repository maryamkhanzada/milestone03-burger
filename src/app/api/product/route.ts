

import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  console.log(req)
  const product = [
    {
      id: 1,
      name: "Cheese Burger",
      price: 10,
      image: "/burger17.webp",
    },
    {
      id: 2,
      name: "Creamy Burger",
      price: 70,
      image: "/burger16.jpg",
    },
    {
      id: 3,
      name: "Delicious Burger",
      price: 200,
      image: "/burger15.jpeg",
    },
    {
      id: 4,
      name: "Yummy Burger",
      price: 400,
      image: "/burger14.jpg",
    },
    {
      id: 5,
      name: "Yummy Burger",
      price: 500,
      image: "/burger13.jpg",
    },
    {
      id: 6,
      name: "Yummy Burger",
      price: 500,
      image: "/burger12.jpg",
    },
  ];

  return NextResponse.json(product);
}
