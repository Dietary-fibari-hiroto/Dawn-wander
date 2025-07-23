import { Link } from "react-router-dom";
const TransitionButton = ({ to }) => {
  return (
    <Link
      to={to}
      className={`
    relative inline-block pr-[200px] string-sm
    text-black border-b border-black
    transition-all duration-300 ease-in-out
    hover:text-[#40867C] hover:border-[#40867C]
    after:absolute after:bottom-0 after:left-0
    after:h-[1px] after:w-0 after:bg-[#40867C]
    after:transition-all after:duration-300
    hover:after:w-full
  `}
    >
      View all
    </Link>
  );
};

export default TransitionButton;
