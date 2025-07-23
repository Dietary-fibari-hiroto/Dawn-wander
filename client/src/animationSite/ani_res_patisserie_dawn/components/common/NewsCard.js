import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "../../../../shared/hooks/useInView";

const NewsCard = (items) => {
  const { ref, isInView } = useInView();

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/res/news/detail", { state: items });
  };
  return (
    <button
      onClick={handleClick}
      className=" w-[550px] h-[400px] flex-shrink-0 text-white KinutaShinStdN6K"
    >
      <div className="flex">
        <figure className="img-expansion">
          <img className="w-[500px] h-[300px]" src={items.img} />
        </figure>{" "}
        <p className="[writing-mode:vertical-rl] string-sm">{items.date}</p>
      </div>
      <p className="string-sm text-start">{items.title}</p>
    </button>
  );
};

export default NewsCard;
