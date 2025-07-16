import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SectionTitle } from "../components";
import ResImagesRoute from "../assets/images/ResImagesRoute";

const formSetting = [
  {
    name: "menber",
    type: "number",
    logo: ResImagesRoute.user,
    placeholder: "2",
  },
  {
    name: "date",
    type: "calender",
    logo: ResImagesRoute.calender,
    placeholder: "2025/01/01",
  },
  {
    name: "time",
    type: "time",
    logo: ResImagesRoute.clock,
    placeholder: "12:00",
  },
];
const ResReservation = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("送信されたデータ:", formData);
    // ここでAPI送信やバリデーション処理
    const data = formData;
    navigate("/res/reservation/confirm", { state: data || {} });
  };
  return (
    <div className="py-[100px] space-y-[100px] w-[100vw] text-white">
      <SectionTitle title="予約" titleJp="reservation" />
      <div className="w-full flex-all-center">
        <div className="w-[1200px] h-[800px] bg-[#333333] flex-all-center flex-col space-y-[100px] ">
          <div className="flex flex-col items-center KinutaShinStdN6K ">
            <p>Patisserie</p>
            <p className="text-[75px]">DAWN</p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-[1000px] flex flex-col string-ss kinuta-maruminfuji-stdn space-y-[30px] flex-all-center flex-col"
          >
            {formSetting.map((item, index) => (
              <div
                key={index}
                className="relative w-[300px] h-[50px] bg-white text-black"
              >
                <label className="flex items-center justify-start bg-white p-[5px] space-x-[10px]">
                  <img className="size-[40px]" src={item.logo} alt="icon" />
                  <input
                    type={item.type}
                    name={item.name}
                    className="w-full"
                    value={formData[item.name] || ""}
                    placeholder={item.placeholder}
                    onChange={handleChange}
                  />
                </label>
              </div>
            ))}

            <div className="relative w-[300px] h-[50px] bg-white text-black">
              <label className="flex items-center justify-start bg-white p-[5px] space-x-[10px]">
                <img
                  className="size-[40px]"
                  src={ResImagesRoute.char}
                  alt="icon"
                />
                <select
                  name="tabletype"
                  className="w-full bg-white border border-gray-300 rounded px-2 py-1"
                  value={formData.tabletype}
                  onChange={handleChange}
                >
                  <option value="指定しない">指定しない</option>
                  <option value="店内">店内</option>
                  <option value="テラス">テラス</option>
                </select>
              </label>
            </div>

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
export default ResReservation;
