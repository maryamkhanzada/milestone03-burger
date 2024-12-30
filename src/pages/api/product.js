export default function handler(req, res) {
    const products = [
        {
            id: 1,
            name: "Cheese Burger",
            price: 10,
            image: "https://www.allrecipes.com/recipe/72657/best-hamburger-ever/",
        },
        {
            id: 2,
            name: "Creamy Burger",
            price: 70,
            image: "https://vegplatter.in/cart/item/add/Cream-Burger/1379",
        },
      
        {
            id: 3,
            name: "Delicious Burger",
            price: 200,
            image: "https://www.istockphoto.com/photos/delicious-burger",
        },
     
        {
            id: 4,
            name: "Yummy Burger",
            price: 400,
            image: "https://www.foodandhome.co.za/recipes/8-yummy-burger-recipes",
        },
        {
            id: 5,
            name: "Yummy Burger",
            price: 500,
            image: "https://www.timeoutriyadh.com/food-drink/best-burger-in-riyadh-2022",
        },
        {
            id: 6,
            name: "Yummy Burger",
            price: 500,
            image: "https://torontolife.com/food/torontos-best-cheap-burgers-right-now/",
        },
    ];

    res.status(200).json(products);
}