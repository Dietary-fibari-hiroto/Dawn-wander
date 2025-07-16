import { Link } from "react-router-dom";
import TransitionButton from "./TransitionButton";
const ConceptTransitionButton = (items) => {
  return (
    <Link
      to={items.to}
      className={`${items.className} bg-white min-w-[600px] h-[150px] text-start px-[20px] flex flex-col items-start justify-center `}
    >
      <p className="string-sm">{items.concept}</p>
      <p className="string-lg">{items.title}</p>
      <TransitionButton />
    </Link>
  );
};

export default ConceptTransitionButton;
