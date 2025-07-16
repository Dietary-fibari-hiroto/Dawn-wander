import { Link } from "react-router-dom";
const ReservationButton = () => {
  return (
    <Link
      to="/res/reservation"
      className=" w-[275px] h-[50px] bg-white text-[#CC9600] string-sm flex-all-center"
    >
      reservation 予約する
    </Link>
  );
};

export default ReservationButton;
