import { useNavigate } from "react-router-dom";

const LinkButton = (props) => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate(props.to);
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`
    ${props.className}
    string-sm w-[300px] h-[50px] rounded-[25px]
    bg-[#364A5E] text-white
    flex justify-center items-center gap-2
    underline
    transition-all duration-300 ease-in-out
    hover:bg-[#4a627a]
    hover:shadow-lg hover:scale-[1.03]
  `}
    >
      <p className="transition-all duration-300 ease-in-out">{props.label}</p>
      <p className="transition-all duration-300 ease-in-out group-hover:translate-x-1">
        →
      </p>
    </button>
  );
};

export default LinkButton;
