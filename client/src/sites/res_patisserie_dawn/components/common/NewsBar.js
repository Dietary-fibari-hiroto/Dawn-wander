import { useNavigate } from "react-router-dom";

const NewsBar = (items) => {
  const navigate = useNavigate();
  const data = items;
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/res/news/detail", { state: data });
  };
  return (
    <button
      onClick={handleClick}
      className="border-b border-b-[#ccc] pb-[50px]"
    >
      {" "}
      <div className=" flex-shrink-0 text-white KinutaShinStdN6K flex items-end justify-center text-end space-x-[20px]">
        <div className="w-auto">
          <p className="string-sm">1025.6.5{items.date}</p>
          <p className="string-sm w-[500px]">新メニュー追加！{items.title}</p>
        </div>
        <div className="flex">
          <img className="w-[500px] h-[300px]" src={items.img} />
        </div>
      </div>
    </button>
  );
};
export default NewsBar;
