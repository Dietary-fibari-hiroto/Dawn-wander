import OffImagesRoute from "../assets/OffImagesRoute";
import {
  useStayDurationHandler,
  useHover_eventHandler,
  useUpdateStayDurationHandler,
} from "../../../shared/handlers/handleSurvery";
import { useSurvery } from "../../../shared/contexts/SurveryContext";

import {
  ContestCard,
  OffMainText,
  OffSectionTitle,
  TopSection,
  InductionCard,
} from "../components";

const pageId = 18;

const OffContest = () => {
  //ページビューの保存
  const { user_trialId } = useSurvery();
  const pageview_id = useStayDurationHandler(pageId, user_trialId);

  useUpdateStayDurationHandler((duration) => {
    console.log("滞在時間:", duration);
  }, pageview_id);

  const { handleMouseEnter, handleMouseLeave } = useHover_eventHandler(
    user_trialId,
    pageview_id
  );
  const themaList = [
    "静けさ",
    "やわらかい時間",
    "余白",
    "まどろみ",
    "無音の会話",
    "赤いもの",
    "影",
    "逆光",
    "シンメトリー",
    "ほげ",
    "その一瞬を華やかに",
    "君とみた景色",
    "ふたりだけの時間",
    "されかの朝になれたら",
    "何でもない日が愛おしい",
    "この世界のバグ",
    "写真の中の音",
    "``嬉しい``をレタッチで",
  ];

  const contestList = [
    {
      img: OffImagesRoute.camera,
      title: "ベストストーリー賞",
      explain: "写真から物語や感情が伝わってきた作品",
    },
    {
      img: OffImagesRoute.pen,
      title: "レタッチ賞",
      explain: "色・光・トーン編集が印象的だった作品",
    },
    {
      img: OffImagesRoute.idea,
      title: "アイデア賞",
      explain: "テーマの解釈が独特・面白かった作品",
    },
    {
      img: OffImagesRoute.usericon,
      title: "ユーザー投票賞",
      explain: "一般投票数が最も多かった作品",
    },
    {
      img: OffImagesRoute.phone,
      title: "スマホ賞",
      explain: "スマホカメラで撮られた優れた作品",
    },
    {
      img: OffImagesRoute.beginner,
      title: "ビギナー賞",
      explain: "初参加者・初心者からの注目作品",
    },
    {
      img: OffImagesRoute.conpany,
      title: "審査員Pick（運営賞）",
      explain: "テーマ外からでも運営が推したい作品",
    },
  ];
  return (
    <div>
      <TopSection img={OffImagesRoute.offn} title="尊い瞬間、を拾い集めて" />
      <section className="section-frame flex flex-col items-center justify-evenly">
        <OffSectionTitle>
          <span>気軽に</span>
          <span className="string-big">フォトコンテスト</span>
        </OffSectionTitle>
        <div className="w-full flex items-center justify-evenly">
          <img className="size-[256px]" src={OffImagesRoute.album} />
          <div className="space-y-[50px]">
            <div>
              {" "}
              <p className="string-rg">1.テーマを見る</p>
              <p className="string-sm">
                毎回変わる、やさしいテーマ（例：「朝の光」「あしあと」「静かな時間」など）
              </p>
            </div>{" "}
            <div>
              {" "}
              <p className="string-rg">2.手持ちの写真から選ぶだけ</p>
              <p className="string-sm">
                スマホで撮った写真でもOK！撮り下ろしじゃなくても大丈夫。
              </p>
            </div>{" "}
            <div>
              {" "}
              <p className="string-rg">3. 投稿して待つだけ</p>
              <p className="string-sm">
                フォロワーが少なくても関係ない。みんな平等に評価されます。
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-frame flex-all-center flex-col">
        {" "}
        <OffSectionTitle>
          {" "}
          <span className="string-big">コンテスト</span>
          <span>の</span>
          <span className="string-big">テーマ例</span>
          <span>一覧</span>
        </OffSectionTitle>
        <div className="inline-block mx-[200px] flex flex-wrap">
          {themaList.map((thema, index) => (
            <p
              key={index}
              className="w-[300px] h-[50px] bg-[#364A5E] flex-all-center string-m m-[20px]"
            >
              {thema}
            </p>
          ))}
        </div>
      </section>
      <section className="w-full flex-all-center flex-col">
        <OffSectionTitle>
          <span>受賞のしかたも</span>
          <span className="string-big">いろいろ</span>
        </OffSectionTitle>
        <div className="grid grid-cols-3 gap-10">
          {contestList.map((item, index) => (
            <ContestCard {...item} key={index} />
          ))}
        </div>
      </section>{" "}
      <section className="section-frame flex-all-center ">
        <InductionCard />
      </section>
    </div>
  );
};

export default OffContest;
