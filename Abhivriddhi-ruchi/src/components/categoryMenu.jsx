import React, {useState} from 'react'
import { useEffect } from 'react';
import foodData from "../data/foodData";
import { useDispatch, useSelector } from "react-redux";
import  { setCategory } from '../redux/slices/catergorySlice';

const categoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () =>{
    const uniqueCatergories = [
      ...new Set(foodData.map((food)=> food.category)),
    ];
    setCategories(uniqueCatergories);
    console.log(uniqueCatergories);
  };

  useEffect(()=>{
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();
const selectedCategory = useSelector((state) => state.category?.category);


  return (
    <div className="mx-6">
      <h1 className="text-4xl font-bold">What's on your mind?</h1>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button
        onClick={()=> dispatch(setCategory("All"))}
          className={`px-5 py-1 bg-yellow-100 font-bold rounded-lg hover:bg-green-500 hover:text-orange border border-green-900 ${ selectedCategory === "All" && "bg-green-500 text-orange"}`}
        >
          All
        </button>
        {categories.map((category, index) => {
          return (
            <button
              onClick={() => dispatch(setCategory(category))}
              key={index}
              className={`px-5 py-1 bg-yellow-100 font-bold rounded-lg hover:bg-green-500 hover:text-orange border border-green-900 ${ selectedCategory === category && "bg-green-500 text-orange"}`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default categoryMenu