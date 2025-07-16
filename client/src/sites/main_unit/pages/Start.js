import { Link } from "react-router-dom";

const Start = () => {
  return (
    <Link
      to="/home"
      className="text-white  relative Kinuta-Shin-StdN-6K flex-all-center section-frame text-center tracking-[10px] leading-[30px]"
    >
      <div>
        <p className="string-lg">DAWN</p>
        <p className="string-sm">Wander</p>
      </div>
      <p className="absolute bottom-[30%] sleepy-element">Click To Start...</p>
    </Link>
  );
};

export default Start;
