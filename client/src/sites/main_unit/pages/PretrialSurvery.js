import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Click_to,
  SurveryInput,
  Wander_logo,
} from "../../../shared/components";
import { motionSet } from "../../../shared/utils/motionConfig";
import useForm from "../hooks/useForm";
import { createUser } from "../../../api/users";
import { useUser } from "../../../shared/contexts/UserContext";

const inputCategory = [{ name: "age" }, { name: "gender_id" }];

const PretrialSurvery = () => {
  const navigate = useNavigate();
  const { setUserId } = useUser();
  const { formData, handleChange } = useForm(inputCategory);
  const [proccessIndex, setProccessIndex] = useState(0);

  const nextProccess = (e) => {
    e.preventDefault();
    setProccessIndex((prev) => prev + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("postData:", formData);
    try {
      const res = await createUser(formData);
      console.log("res:", res);
      setUserId(res.id);
      setProccessIndex((prev) => prev + 1);
    } catch (error) {
      console.log("エラー");
    }
  };

  useEffect(() => {
    if (proccessIndex === 2) {
      const timer = setTimeout(() => {
        navigate("/introduction");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [proccessIndex]);

  return (
    <div className="text-white section-frame  relative">
      <Wander_logo className="w-full absolute top-[5%] z-[3]" />
      <AnimatePresence mode="wait">
        {proccessIndex === 1 && (
          <motion.div {...motionSet}>
            <form
              onSubmit={handleSubmit}
              className="section-frame flex-all-center flex-col text-white space-y-[20px]"
            >
              <SurveryInput
                label="1.年齢"
                name="age"
                type="number"
                onChange={handleChange}
                required={true}
                placeholder="00"
                value={formData["age"]}
              />
              <div className="w-[600px] flex-all-center flex-col">
                {" "}
                <p className="string-sm w-full text-start">2.性別</p>
                <select
                  className="w-[550px] h-[50px] text-black bg-white"
                  name="gender_id"
                  value={formData["gender_id"]}
                  onChange={handleChange}
                  required
                >
                  <option value="">選択してください</option>
                  <option value="0">男性</option>
                  <option value="1">女性</option>
                  <option value="2">その他/答えたくない</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-[300px] h-[50px] flex-all-center rounded-[25px] bg-[#364A5E] string-sm"
              >
                確定
              </button>
            </form>
          </motion.div>
        )}
        {proccessIndex === 0 && (
          <motion.div {...motionSet}>
            <div
              onClick={nextProccess}
              className="section-frame text-white flex-all-center cursor-pointer"
            >
              <section className="w-[50%] space-y-[50px] flex-all-center flex-col">
                <div className="space-y-[10px]">
                  <p className="string-rg">📘 このアンケートについて</p>
                  <p className="string-sm px-[100px]">
                    ユーザー層に基づいた結果も研究のデータとして取りたいと思っています。
                    そのため「年齢,性別」の入力にご協力ください。
                  </p>
                </div>
                <div className="space-y-[10px]">
                  <p className="string-rg">🔒 プライバシーについて</p>
                  <p className="string-sm px-[100px]">
                    回答は中間発表のデータとして扱われます。
                    収集されたデータは研究目的または発表資料として使用します。
                  </p>
                </div>
                <p className="string-rg text-center w-[80%]">
                  ✅ 回答に同意いただける場合は、画面をクリックで
                  <br />
                  次へお進みください。
                </p>
              </section>
              <Click_to className="w-full absolute bottom-[15%]" />
            </div>
          </motion.div>
        )}
        {proccessIndex === 2 && (
          <motion.div {...motionSet}>
            <div className="string-s tracking-[5px] leading-[50px] section-frame text-white text-center flex-all-center">
              <p>
                ご協力ありがとうございます！
                <br />
                それでは実験を開始いたします！！！
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default PretrialSurvery;
