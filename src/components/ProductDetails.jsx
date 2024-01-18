import plus from "../assets/icon-plus.svg";
import minus from "../assets/icon-minus.svg";
import cart from "../assets/icon-cart1.svg";
import { useState } from "react";

const ProductDetails = () => {
  const [amount, setAmount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const handleMinus = () => {
    setAmount((prevAmount) => (prevAmount > 0 ? prevAmount - 1 : 0));
  };

  const handleAddToCart = () => {
    if (amount > 0) {
      const newItem = {
        id: cartItems.length + 1,
        amount,
        price: 125.0,
      };

      setCartItems((prevItems) => [...prevItems, newItem]);
      setAmount(0);
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <p className="uppercase font-bold text-accent text-sm mb-5 tracking-widest">
        Sneaker Company
      </p>

      <h1 className="text-4xl font-bold mb-10">
        Fall Limited Edition <br /> Sneakers
      </h1>
      <p className="text-secondary mb-5">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <div className=" gap-2 flex lg:flex-col justify-between w-full">
        <div className="flex gap-5">
          <h2 className="font-bold text-2xl">$125.00</h2>
          <p className="text-accent font-bold flex items-center bg-accent bg-opacity-10 px-2 rounded-xl">
            50%
          </p>
        </div>
        <p className="text-light font-bold line-through text-[14px]">$250.00</p>
      </div>

      <div className="flex gap-5 mt-10 flex-col lg:flex-row">
        <div className="flex items-center justify-between lg:flex gap-10 bg-slate-100 p-4 rounded-xl">
          <img
            src={minus}
            alt=""
            onClick={handleMinus}
            className="cursor-pointer"
          />
          <p className="font-bold">{amount}</p>
          <img
            src={plus}
            alt=""
            onClick={() => setAmount(amount + 1)}
            className="cursor-pointer"
          />
        </div>

        <button
          onClick={handleAddToCart}
          className="flex gap-5 items-center justify-center bg-accent px-20 py-4 rounded-xl text-white font-bold shadow-accent shadow-md"
        >
          <img src={cart} alt="" className="" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
