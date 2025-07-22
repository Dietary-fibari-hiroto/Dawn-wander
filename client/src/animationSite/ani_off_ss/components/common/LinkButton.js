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
      className={`${props.className} string-sm w-[300px] h-[50px] rounded-[25px] bg-[#364A5E] flex justify-center items-center underline`}
    >
      <p>{props.label}</p>
      <p>→</p>
    </button>
  );
};

export default LinkButton;
