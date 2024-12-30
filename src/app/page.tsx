import React from "react";
import Navbar from "../app/components/Navbar";
import Carousel from "./components/Carousel";
import Progressor from "./components/Progressor";
import Product from "./components/Product";
import Banner from "./components/Banner";
import Burger from "./components/Burger";
import Offer from "./components/Offer";
import Card from "./components/Card";

import Reservation from "./components/Reservation";
import Footer from "./components/Footer";
import Home from "./components/Menuitem";




export default function App() {
  return (
    
            <div className=" bg-white bg-gradient-to-r from-black to-slate-700 min-h-screen">
              <Navbar/>
               <Carousel/> 
               <Progressor/>
               <Product/> 
              <Home/>
              <Banner/> 
              <Burger/>
                <Offer/>
               <Card/>
               <Reservation/>
               
               <Footer/>

             
              

            </div>
          
        
  );
}
