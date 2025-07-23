import { Link } from "react-router-dom";
import TransitionButton from "./TransitionButton";
const ConceptTransitionButton = (items) => {
  return (
    <Link
      to={items.to}
      className={`
    ${items.className}
    bg-white min-w-[600px] h-[150px] text-start px-[20px]
    flex flex-col items-start justify-center
    border  overflow-hidden
    transition-all duration-300
    hover:bg-[#40867C] hover:text-white group
  `}
    >
      <p className="string-sm transition-colors duration-300 group-hover:text-white">
        {items.concept}
      </p>
      <p className="string-lg transition-colors duration-300 group-hover:text-white">
        {items.title}
      </p>
      <TransitionButton />
    </Link>
  );
};

export default ConceptTransitionButton;
