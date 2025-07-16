import { useNavigate, useLocation } from "react-router-dom";
import { SectionTitle } from "../components";
import ResImagesRoute from "../assets/images/ResImagesRoute";

const ResReservationConfirm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state || {};

  const formSetting = [
    {
      name: "menber",
      logo: ResImagesRoute.user,
      label: "人数",
    },
    {
      name: "date",
      logo: ResImagesRoute.calender,
      label: "日付",
    },
    {
      name: "time",
      logo: ResImagesRoute.clock,
      label: "時間",
    },
    {
      name: "tabletype",
      logo: ResImagesRoute.char,
      label: "席タイプ",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // ここで送信処理を書く
    console.log("予約データ:", data);
    // 例: navigate("/thanks", { state: data });
  };

  return (
    <div className="py-[100px] space-y-[100px] w-[100vw] text-white">
      <SectionTitle title="予約内容確認" titleJp="reservation" />
      <div className="w-full flex-all-center">
        <div className="w-[1200px] h-[800px] bg-[#333333] flex-all-center flex-col space-y-[100px]">
          <div className="flex flex-col items-center KinutaShinStdN6K">
            <p>Patisserie</p>
            <p className="text-[75px]">DAWN</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-[1000px] flex flex-col string-ss kinuta-maruminfuji-stdn space-y-[30px] flex-all-center"
          >
            {formSetting.map((item, index) => (
              <div
                key={index}
                className="relative w-[300px] h-[50px] bg-white text-black"
              >
                <div className="flex items-center justify-start bg-white p-[5px] space-x-[10px]">
                  <img className="size-[40px]" src={item.logo} alt="icon" />
                  <p className="w-full">{data[item.name] || "未入力"}</p>
                </div>
              </div>
            ))}

            <button
              type="submit"
              className="relative w-[300px] h-[50px] bg-[#555555] text-white flex-all-center"
            >
              確認
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResReservationConfirm;
