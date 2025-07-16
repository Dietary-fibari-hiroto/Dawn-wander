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
      className="relative w-[400px] h-[500px] flex-shrink-0"
      style={{
        background: `url(/${items.path})`,
        backgroundPosition: `center`,
        backgroundSize: "cover",
        backgroundRepeat: `no-repeat`,
      }}
    >
      <div className="absolute bottom-0 left-0 p-[20px] text-white font-bold text-start">
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
