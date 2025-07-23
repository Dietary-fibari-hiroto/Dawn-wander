import { useState, useEffect } from "react";
import ResImagesRoute from "../../../sites/ec_arewestilla/assets/images/EcImagesRoute";
import { useNavigate } from "react-router-dom";

const pageId = 9;

const EcLoading = () => {
  const navigate = useNavigate();
  const [proccessIndex, setProccessIndex] = useState(0);
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const process = async () => {
    await sleep(2000);
    setProccessIndex(1);
    await sleep(300);
    setProccessIndex(2);
    await sleep(2000);
    navigate("/ani/ec");
  };

  useEffect(() => {
    process();
  }, []);

  return (
    <div className="relative overflow-hidden Yu-Mincho-Pr6N-R h-screen w-screen flex-all-center bg-white">
      <div className="string-sm">
        これは、まだなっていない「何か」への問いかけ。
      </div>

      {proccessIndex >= 2 && (
        <div
          style={{
            background: `linear-gradient(to right,#00000022,#00000022),url(${ResImagesRoute.p464739458_416156958199650_3162208171733525292_n})`,
            backgroundSize: "cover",
          }}
          className="absolute z-[2] section-frame flex-all-center"
        >
          <p className="text-white string-big border-b border-b-[#40867C] border-b-[3px]">
            Are We Still A...?
          </p>
        </div>
      )}
      <div
        className={`absolute z-[3] bg-[#40867C] h-screen w-[150vw] ${
          proccessIndex >= 1 ? "left-[-150%]" : "left-[100%]"
        }  transition-left duration-[1500ms] `}
      />
    </div>
  );
};

export default EcLoading;
