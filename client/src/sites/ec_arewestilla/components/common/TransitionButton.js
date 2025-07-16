import { Link } from "react-router-dom";
const TransitionButton = ({ to }) => {
  return (
    <Link to={to} className="border-b border-b-black pr-[200px] string-sm">
      View all
    </Link>
  );
};

export default TransitionButton;
