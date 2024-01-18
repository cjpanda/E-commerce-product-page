import thumbnail from "../../public/image-product-1-thumbnail.jpg";
import { RiDeleteBin6Fill } from "react-icons/ri";

const Cart = () => {
  return (
    <>
      <div
        className="bg-white rounded-2xl shadow-md p-5 absolute right-8 top-32 left-8 lg:w-96 lg:left-auto lg:top-30"
        style={{
          zIndex: 1000,
        }}
      >
        <h2 className=" border-b border-light font-bold pb-5 mb-5 border-opacity-50">
          Cart
        </h2>

        <div className="flex items-center gap-4 mb-5">
          <div>
            <img
              src={thumbnail}
              alt=""
              className="w-14 rounded-md object-contain"
            />
          </div>
          <div>
            <p className="text-light">Fall Limited Edition Sneakers</p>
            <p className="text-sm">
              <span className="text-light">$125.00 x 3</span>{" "}
              <span className="font-bold text-primary">$375.00</span>
            </p>
          </div>
          <RiDeleteBin6Fill className="text-light cursor-pointer" />
        </div>
        <button className="bg-accent hover:bg-opacity-80 font-bold text-white flex items-center justify-center w-full p-4 rounded-xl ">
          Checkout
        </button>
      </div>
    </>
  );
};

export default Cart;
