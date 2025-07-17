import { OffMainText } from "../";

const CanDoCard = (props) => {
  const justifyState = props.end ? "justify-end" : "justify-start";
  return (
    <div className={`w-full flex justify-start ${justifyState} my-[50px]`}>
      <div className="mx-[15%]">
        <img className="size-[96px]" src={props.img} />
        <div className="inline-block">
          <OffMainText>
            <p className="string-rg">{props.label}</p>
          </OffMainText>
          <div className="string-sm mt-[10px]">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default CanDoCard;
