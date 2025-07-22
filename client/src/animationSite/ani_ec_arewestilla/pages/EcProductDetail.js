import { useCart } from "../contexts/CartContext";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { SectionTitle } from "../components";
import EcLogoImagesRoute from "../assets/images/EcLogoImagesRoute";
import {
  useStayDurationHandler,
  useHover_eventHandler,
  useUpdateStayDurationHandler,
} from "../../../shared/handlers/handleSurvery";
import { useSurvery } from "../../../shared/contexts/SurveryContext";

const pageId = 13;

const EcProductDetail = () => {
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
  const { dispatch } = useCart();

  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(0);
  const sizeOption = ["S", "M", "L", "XL"];
  const location = useLocation();
  const data =
    location.state || JSON.parse(localStorage.getItem("latestData") || "null");

  const handleAdd = () => {
    const newData = {
      ...data,
      size: selectedSize,
      quantity: quantity,
    };
    console.log("newData", newData);
    dispatch({ type: "ADD_ITEM", item: newData });
  };

  return (
    <div className="py-[100px]">
      <SectionTitle title="Online Store" />
      <section className="flex items-center justify-evenly">
        <img
          onMouseEnter={() => handleMouseEnter(31)}
          onMouseLeave={handleMouseLeave}
          src={`/${data.path}`}
          className="w-[700px] h-[1000px]"
        />
        <div className="flex flex-col items-start space-y-[50px]">
          <div>
            {" "}
            <p className="string-sm">{data.brand}</p>
            <p className="string-rg">{data.name}</p>
            <p className="string-m">\{data.price}</p>{" "}
          </div>
          <div>
            {" "}
            <p className="string-sm">size</p>
            <div className="flex items-center justify-start space-x-[10px]">
              {sizeOption.map((opt, index) => (
                <label key={index} className="cursor-pointer">
                  <input
                    type="radio"
                    name="size"
                    value={opt}
                    checked={selectedSize === opt}
                    onChange={() => setSelectedSize(opt)}
                    className="hidden peer"
                  />
                  <div className="w-[80px] h-[40px] border border-black flex-all-center peer-checked:bg-[#71E2D2] peer-checked:text-white peer-checked:border-none">
                    {opt}
                  </div>
                </label>
              ))}
            </div>
          </div>
          <div className="w-[200px] h-[50px] flex justify-between items-center border border-black">
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="size-[50px] border-r border-black flex-all-center string-m"
            >
              +
            </button>
            <p className="string-m">{quantity}</p>
            <button
              onClick={() => setQuantity((prev) => (prev <= 0 ? 0 : prev - 1))}
              className="size-[50px] border-l border-black flex-all-center string-m"
            >
              -
            </button>
          </div>
          <div className="flex flex-col space-y-[20px] string-sm">
            {" "}
            <button
              onClick={handleAdd}
              className="w-[700px] h-[50px] border border-black"
              onMouseEnter={() => handleMouseEnter(32)}
              onMouseLeave={handleMouseLeave}
            >
              Add to Cart
            </button>{" "}
            <button
              onMouseEnter={() => handleMouseEnter(33)}
              onMouseLeave={handleMouseLeave}
              className="w-[700px] h-[50px] bg-[#40867C] text-white"
            >
              購入
            </button>
          </div>
          <div className="string-sm">
            <p> 【発送時期】</p>
            <p>入金確認後　3営業日以内</p>
          </div>
          <button
            onMouseEnter={() => handleMouseEnter(34)}
            onMouseLeave={handleMouseLeave}
            className="w-[700px] h-[50px] border border-black rounded-[10px] flex-all-center string-sm space-x-[10px]"
          >
            <img className="size-[30px]" src={EcLogoImagesRoute.heart_log} />
            <p>ウォッシュリストへ追加する</p>
          </button>
        </div>
      </section>
    </div>
  );
};
export default EcProductDetail;
