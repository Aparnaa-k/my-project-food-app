import React, {useState} from 'react'
import { IoMdClose } from "react-icons/io";
import ItemCard from './itemCard';
import { useSelector } from 'react-redux';
import { IoMdCart } from "react-icons/io";



const cart = () => {

  const [activeCart, setActiveCart] = useState(true)

  const cartItems = useSelector((state)=> state.cart.cart);
  const totalQty = cartItems.reduce((totalNum, item)=> totalNum + item.qty, 0 );
  const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.price, 0);
  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[20vw] p-5 h-full bg-white mb-3 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-3 ">
          <span className="text-xl font-bold text-gray-800">My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="cursor-pointer border-2 border-black-600 text-black-600 font-bold p-1 text-xl rounded-md hover:text-red-400 hover:border-red-400"
          />
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((food) => {
            return (
              <ItemCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            );
          })
        ) : (
          <h2 className="text-center text-xl font-bold text-gray-800">
            Your cart is empty
          </h2>
        )}

        <div className="absolute bottom-0  ">
          <h3 className="font-semibold text-gray-800">Items : {totalQty}</h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount : {totalPrice}{" "}
          </h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />
          <button className="bg-green-500 font-bold text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5">
            Checkout
          </button>
        </div>
      </div>
      <IoMdCart
        onClick={() => setActiveCart(!activeCart)}
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-10 right-4 cursor-pointer ${
          totalQty > 0 && "animate-bounce delay-500 transition-all"
        }`}
      />
    </>
  );
}

export default cart