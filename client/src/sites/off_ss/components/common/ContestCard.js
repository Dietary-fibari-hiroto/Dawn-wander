const ContestCard = (props) => {
  return (
    <div className="p-[30px] w-[500px] h-[300px] bg-[#707070] rounded-[50px]">
      <img className="size-[128px]" src={props.img} />
      <div>
        <p className="string-rg">{props.title}</p>
        <p className="string-sm ml-[20px]">{props.explain}</p>
      </div>
    </div>
  );
};

export default ContestCard;
