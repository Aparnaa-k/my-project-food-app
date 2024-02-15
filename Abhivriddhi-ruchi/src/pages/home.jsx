import React from 'react'
import Navbar from '../components/navbar'
import CategoryMenu from '../components/categoryMenu';
import FoodItems from '../components/foodItems';
import Cart from '../components/cart';
const home = () => {
  return (
    <>
      <Navbar />
      <CategoryMenu/>
      <FoodItems/>
      <Cart/>
    </>
  );
}

export default home