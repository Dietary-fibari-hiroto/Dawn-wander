import { useState, useEffect } from "react";
import EcLogoImagesRoute from "../assets/images/EcLogoImagesRoute";
import { MiniProductCard, SectionTitle } from "../components";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { updateTrialFinish } from "../../../api/userTrial";
import {
  useStayDurationHandler,
  useHover_eventHandler,
  useUpdateStayDurationHandler,
} from "../../../shared/handlers/handleSurvery";
import { useSurvery } from "../../../shared/contexts/SurveryContext";

const pageId = 14;

const EcCart = () => {
  //ページビューの保存
  const { user_trialId } = useSurvery();
  const pageview_id = useStayDurationHandler(pageId, user_trialId);

  useUpdateStayDurationHandler((duration) => {
    console.log("滞在時間:", duration);
  }, pageview_id);

  const { handleMouseEnter, handleMouseLeave } = useHover_eventHandler(
    user_trialId,
    pageview_id
  );
  const navigate = useNavigate();
  const { cart, dispatch } = useCart();
  const [quantity, setQuantity] = useState(0);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateTrialFinish(user_trialId);
      navigate("/question");
    } catch (error) {
      console.log("updateTrialFinishエラー");
    }
  };
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
            <div
              onMouseEnter={() => handleMouseEnter(35)}
              onMouseLeave={handleMouseLeave}
              key={index}
            >
              <MiniProductCard {...item} />
            </div>
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
      </div>{" "}
      <div className="flex-all-center flex-col space-y-[20px] string-sm">
        {" "}
        <button
          className="w-[700px] h-[50px] border border-black"
          onMouseEnter={() => handleMouseEnter(36)}
          onMouseLeave={handleMouseLeave}
        >
          Add to Cart
        </button>{" "}
        <button
          onMouseEnter={() => handleMouseEnter(37)}
          onMouseLeave={handleMouseLeave}
          className="w-[700px] h-[50px] bg-[#40867C] text-white"
        >
          購入
        </button>
      </div>
    </div>
  );
};
export default EcCart;
