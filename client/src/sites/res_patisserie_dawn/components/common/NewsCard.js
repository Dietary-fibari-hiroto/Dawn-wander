import { useNavigate } from "react-router-dom";

const NewsCard = (items) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/res/news/detail", { state: items });
  };
  return (
    <button
      onClick={handleClick}
      className="w-[550px] h-[400px] flex-shrink-0 text-white KinutaShinStdN6K"
    >
      <div className="flex">
        <img className="w-[500px] h-[300px]" src={items.img} />
        <p className="[writing-mode:vertical-rl] string-sm">{items.date}</p>
      </div>
      <p className="string-sm text-start">{items.title}</p>
    </button>
  );
};

export default NewsCard;
