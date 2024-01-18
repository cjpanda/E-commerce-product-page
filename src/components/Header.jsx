import logo from "../assets/logo.svg";
import cart from "../assets/icon-cart.svg";
import profile from "../assets/image-avatar.png";
import menuOpen from "../assets/icon-menu.svg";
import menuClose from "../assets/icon-close.svg";
import { useState } from "react";
import Cart from "./Cart";

const Header = ({ cartItems, setCartItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <header className="max-width mx-auto  flex justify-between items-center p-8">
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          {!isOpen && (
            <div onClick={() => setIsOpen(true)} className="lg:hidden">
              <img src={menuOpen} alt="" className="cursor-pointer" />
            </div>
          )}
          {isOpen && (
            <div onClick={() => setIsOpen(false)} className="lg:hidden close">
              <img src={menuClose} alt="" className="cursor-pointer" />
            </div>
          )}

          {/* Logo */}
          <div>
            <img
              src={logo}
              width={150}
              height={50}
              className="object-contain mr-5"
            />
          </div>

          <nav className={isOpen && "open"}>
            <ul className=" text-secondary">
              <li className="lg:hover:text-primary lg:font-medium">
                Collections
              </li>
              <li className="lg:hover:text-primary lg:font-medium">Men</li>
              <li className="lg:hover:text-primary lg:font-medium">Women</li>
              <li className="lg:hover:text-primary lg:font-medium">About</li>
              <li className="lg:hover:text-primary lg:font-medium">Contact</li>
            </ul>
          </nav>
        </div>

        {/* Profile and Shopping Cart */}
        <div className="flex items-center gap-5">
          <button
            onClick={() => setCartOpen(!cartOpen)}
            className="cursor-pointer"
          >
            <img src={cart} alt="" />
          </button>
          {/* Cart */}
          <div>
            {cartOpen && (
              <Cart cartItems={cartItems} setCartItems={setCartItems} />
            )}
          </div>
          <div className=" cursor-pointer ">
            <img
              src={profile}
              alt=""
              className="object-contain rounded-full border-4 border-light hover:border-accent hover:border-4"
              width={50}
              height={50}
            />
          </div>
        </div>
      </header>
      <div className="bg-slate-200 h-[0.5px] w-full max-width mx-auto " />
    </>
  );
};

export default Header;
