import { useNavigate } from "react-router-dom";
const MiniProductCard = (items) => {
  const navigate = useNavigate();

  const data = items;
  const handleClick = () => {
    console.log("sending:", data);
    localStorage.setItem("latestData", JSON.stringify(data));
    navigate("/ec/product", { state: data });
  };
  return (
    <button
      onClick={handleClick}
      className={`
    relative w-[400px] h-[500px] flex-shrink-0 overflow-hidden group
    transition-transform duration-300 ease-out
    hover:scale-[1.02] hover:shadow-xl
  `}
      style={{
        background: `url(/${items.path})`,
        backgroundPosition: `center`,
        backgroundSize: "cover",
        backgroundRepeat: `no-repeat`,
      }}
    >
      {/* 暗転オーバーレイ */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>

      {/* テキスト部分 */}
      <div
        className="absolute bottom-0 left-0 p-[20px] text-white font-bold text-start z-10
               transition-all duration-300 group-hover:translate-y-[-5px]"
      >
        <p>
          {items.brand}
          {items.name}
        </p>
        <p>\{items.price}</p>
      </div>
    </button>
  );
};

export default MiniProductCard;
