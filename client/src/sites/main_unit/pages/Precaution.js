import { useNavigate } from "react-router-dom";
const Precaution = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/introduction");
  };
  return (
    <div
      onClick={handleClick}
      className="text-center space-y-[100px] UDDigiKyokasho-Pro-R section-frame bg-white text-black flex-all-center flex-col"
    >
      <p className="string-sm">/*Precaution*/</p>
      <p className="string-sm">
        このサイトは実験用に作成した「疑似店舗サイト」です。
        <br />
        実際の個人、団体とは関係ありません。
      </p>
      <button onClick={handleClick} className="string-ss underline ">
        Agree...
      </button>
    </div>
  );
};

export default Precaution;
