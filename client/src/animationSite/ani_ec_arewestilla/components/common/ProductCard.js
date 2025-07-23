import { useNavigate } from "react-router-dom";

const ProductCard = (items) => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => {
        navigate("/ani/ec/product", { state: items });
      }}
      className="relative w-[500px] h-[600px] flex-shrink-0"
      style={{
        background: `url(/${items.path})`,
        backgroundPosition: `center`,
        backgroundSize: "cover",
        backgroundRepeat: `no-repeat`,
      }}
    >
      <div className="absolute bottom-0 left-0 p-[20px] text-white text-start">
        <p>
          {items.brand}
          {items.name}
        </p>
        <p>\{items.price}</p>
      </div>
    </button>
  );
};
export default ProductCard;
