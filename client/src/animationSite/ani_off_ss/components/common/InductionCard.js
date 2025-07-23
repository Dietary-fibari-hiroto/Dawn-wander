import OffImagesRoute from "../../assets/OffImagesRoute";
import LinkButton from "./LinkButton";

const InductionCard = () => {
  return (
    <div
      className="image-follow  w-[1000px] h-[500px] rounded-[20px] flex-all-center flex-col"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(${OffImagesRoute.IMG_7028})`,
        backgroundPosition: `center`,
        backgroundSize: "cover",
      }}
    >
      <p>
        <span className="string-big">今すぐ参加</span>
        <span className="string-md">しよう！</span>
      </p>
      <p>その一枚が、誰かの記憶になる</p>
      <LinkButton className="my-[50px]" label="登録画面へ..." to="" />
    </div>
  );
};

export default InductionCard;
