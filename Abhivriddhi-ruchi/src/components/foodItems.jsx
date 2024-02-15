import React from 'react'
import FoodCard from './foodCard'
import FoodData from '../data/foodData.js'
import toast, { Toaster } from "react-hot-toast";

const foodItems = () => {
  const handleToast = (name) => toast.success(`${name} added to cart!`);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
        {FoodData.map((food) => {
          return (
            <FoodCard
              key={food.id}
              id={food.id}
              img={food.img}
              name={food.name}
              price={food.price}
              desc={food.desc}
              rating={food.rating}
              handleToast={handleToast}
            />
          );
        })}
      </div>
    </>
  );
}

export default foodItems