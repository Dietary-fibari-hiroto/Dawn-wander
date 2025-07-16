import { useState, useEffect } from "react";
import EcLogoImagesRoute from "../assets/images/EcLogoImagesRoute";
import { MiniProductCard, SectionTitle } from "../components";
import { useCart } from "../contexts/CartContext";

const EcCart = () => {
  const { cart, dispatch } = useCart();
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div className="py-[100px]">
      {" "}
      <SectionTitle title="Cart" />
      <div className="grid grid-cols-4 gap-4 place-items-center w-full ">
        {cart.map((item, index) => (
          <div key={index} className="flex-all-center flex-col">
            <MiniProductCard {...item} />
            <div className="flex space-x-[10px]">
              <button>
                <img
                  className="size-[25px]"
                  src={EcLogoImagesRoute.trash_log}
                />
              </button>
              <button
                onClick={() =>
                  setQuantity((prev) => (prev <= 0 ? 0 : prev - 1))
                }
                className="size-[50px] border-l border-black flex-all-center string-m"
              >
                {item.quantity}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default EcCart;
