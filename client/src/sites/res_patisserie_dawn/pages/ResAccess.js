import ReservationButton from "../components/common/ReservationButton";
import { useStayDurationHandler } from "../../../shared/handlers/handleSurvery";
import { useSurvery } from "../../../shared/contexts/SurveryContext";

const pageId = 4;

const ResAccess = () => {
  const { user_trialId } = useSurvery();

  useStayDurationHandler(() => {}, pageId, user_trialId);
  return (
    <div>
      <section className="flex-all-center text-white text-end my-[200px]">
        {" "}
        <div className="w-[1200px] h-[1300px] bg-[#333333] flex-all-center flex-col space-y-[100px] ">
          <div className="flex flex-col items-center KinutaShinStdN6K ">
            <p>Patisserie</p>
            <p className="text-[75px]">DAWN</p>
          </div>
          <div className="w-[1000px] flex flex-col string-ss kinuta-maruminfuji-stdn space-y-[30px]">
            <div className="flex justify-between border-b border-b-[#888888]">
              <p>住所</p>
              <p>兵庫県神戸市灘区篠原大月山 大月山DNタワー 9F/10F</p>
            </div>
            <div className="flex justify-between border-b border-b-[#888888]">
              <p>営業時間</p>
              <p>
                平日：11:00〜21:00
                <br />
                土日祝：10:00〜22:00
                <br />
                水,金,土曜日(DAWN特別営業)：4:00～8:00
                <br />
              </p>
            </div>
            <div className="flex justify-between border-b border-b-[#888888]">
              <p>定休日</p>
              <p>毎週火曜日</p>
            </div>
            <div className="flex justify-between border-b border-b-[#888888]">
              <p>電話番号</p>
              <p>000-0000-0000</p>
            </div>
            <div className="flex justify-between border-b border-b-[#888888]">
              <p>採用情報</p>
              <p>https://dawn-waiting.com</p>
            </div>
            <div className="flex justify-between border-b border-b-[#888888]">
              <p>座席情報</p>
              <p>
                店内席：36席
                <br />
                → 2人掛けテーブル × 10卓（20席）
                <br />
                → 4人掛けテーブル × 4卓（16席）
                <br />
                →
                ※テーブルの配置に余裕あり。黒を基調にしたモダンな空間、ゆったり感重視。
                <br />
                <br />
                -テラス席：24席
                <br />
                → 2人掛けテーブル × 8卓（16席）
                <br />
                → ソファ席（4人用）× 2卓（8席）
                <br />
                →
                ※町並みを見渡せるウッドデッキ風のテラス、緑と風と光を感じられる配置。
                <br />
                <br />
                合計：60席
              </p>
            </div>
          </div>
          <ReservationButton />
        </div>
      </section>
    </div>
  );
};

export default ResAccess;
