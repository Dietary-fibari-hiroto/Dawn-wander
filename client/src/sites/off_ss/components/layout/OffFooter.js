import OffImagesRoute from "../../assets/OffImagesRoute";
import LinkButton from "../common/LinkButton";

const imageList = [
  OffImagesRoute.IMG_2763,
  OffImagesRoute.IMG_1915_2,
  OffImagesRoute.ins,
  OffImagesRoute.IMG_2763,
];

const OffFooter = () => {
  return (
    <footer className="relative section-frame overflow-x-hidden whitespace-nowrap bg-black">
      <div className="flex opacity-[0.75]">
        <img className="section-frame" src={OffImagesRoute.IMG_2763} />
      </div>
      <p className="absolute bottom-0 w-full text-center p-[10px] string-sm">
        Copyright 2025 - Dawn. All Rights Reserved.
      </p>
      <div className="absolute z-[3] top-[50%] translate-y-[-50%] left-[5%] flex-all-center flex-col space-y-[30px]">
        <div className=" flex string-sm tracking-[12px] space-x-[20px]">
          {" "}
          <div className="flex space-x-[10px]">
            <p className="vertical-text ">写真がつなぐ、</p>
            <div className="off-vertical-border h-1/2" />
          </div>
          <div className="flex space-x-[10px]">
            <p className="vertical-text ">わたしと誰かのストーリー。</p>{" "}
            <div className="off-vertical-border " />
          </div>
        </div>
        <LinkButton to="" label="ログイン..." />
      </div>
    </footer>
  );
};

export default OffFooter;
