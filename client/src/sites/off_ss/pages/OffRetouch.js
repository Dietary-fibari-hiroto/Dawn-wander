import OffImagesRoute from "../assets/OffImagesRoute";
import {
  CanDoCard,
  InductionCard,
  OffMainText,
  OffSectionTitle,
  TopSection,
} from "../components";
import {
  useStayDurationHandler,
  useHover_eventHandler,
  useUpdateStayDurationHandler,
} from "../../../shared/handlers/handleSurvery";
import { useSurvery } from "../../../shared/contexts/SurveryContext";

const pageId = 17;

const OffRetouch = () => {
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
  return (
    <div>
      <TopSection
        img={OffImagesRoute.IMG_3420}
        title="変わらぬ日々に、魔法をかけて"
      />
      <section className="section-frame flex flex-col items-center justify-evenly">
        <OffSectionTitle>
          <span className="string-big">レタッチ</span>
          <span>で</span>
          <span className="string-big">繋がる</span>
        </OffSectionTitle>
        <div className="flex items-center justify-evenly w-full">
          <img
            onMouseEnter={() => handleMouseEnter(53)}
            onMouseLeave={handleMouseLeave}
            className="w-[600px] h-[322px]"
            src={OffImagesRoute.img4_ss}
          />
          <OffMainText>
            <p>
              いつもの帰り道も、ふとした笑顔も、
              <br />
              レタッチひとつで、まるで映画のワンシーンのように変わる。
              <br />
              その色、その光、その空気まで、自分らしく仕上げたい。
              <br />
              そんなあなたの「編集スタイル」も誰かと共有しましょう。
              <br />
              プリセットやテンプレートから、知らない誰かと感性でつながる体験を。
              <br />
              あなたの“魔法のような一枚”が、誰かの心をそっと動かすかもしれない。
              <br />
              レタッチスタイルの共有からもつながれる場所です。
              <br />
            </p>
          </OffMainText>
        </div>
      </section>
      <section>
        <OffSectionTitle>
          <span className="string-big">できること</span>
          <span>一覧</span>
        </OffSectionTitle>
        <CanDoCard
          label="フィルタプリセットの作成・公開"
          img={OffImagesRoute.filter}
        >
          <p>
            自分だけのレタッチスタイルを「プリセット」として保存し、誰でも使える形で公開できます。
            <br />
            明るめ・フィルム調・シネマティックなど、感性を詰め込んだ“色づけ”をみんなとシェア。
            <br />
            気に入ったプリセットはそのまま自分の写真に適用することもできます。
            <br />
          </p>
        </CanDoCard>{" "}
        <CanDoCard
          label=" 編集テンプレートの共有（例：Lightroom/VSCO風）"
          img={OffImagesRoute.card}
          end={true}
        >
          <p>
            露出、彩度、シャドウなどの調整ステップをテンプレートとして記録・共有できます。
            <br />
            編集の流れを見ながら「この人はどこをどう変えているのか」が学べるのもポイント。
            <br />
            初心者でも真似しながら自分のスタイルを磨くことができます。
            <br />
          </p>
        </CanDoCard>{" "}
        <CanDoCard
          label="他ユーザーのレタッチを参考にできる「ビフォー・アフター」閲覧"
          img={OffImagesRoute.edit}
        >
          <p>
            自分だけのレタッチスタイルを「プリセット」として保存し、誰でも使える形で公開できます。
            <br />
            明るめ・フィルム調・シネマティックなど、感性を詰め込んだ“色づけ”をみんなとシェア。
            <br />
            気に入ったプリセットはそのまま自分の写真に適用することもできます。
            <br />
          </p>
        </CanDoCard>{" "}
        <CanDoCard
          label="レタッチのスタイルから「好き」をフォロー＆マッチ"
          img={OffImagesRoute.hurt}
          end={true}
        >
          <p>
            フィルタやレタッチの“センス”そのものを軸にして、他のユーザーとつながることができます。
            <br />
            「この雰囲気が好き」「この加工感が好み」──そんな直感を起点に、出会いが生まれます。
            <br />
            撮影相手選びや作品の参考としても、新しいマッチングのかたちです。
            <br />
          </p>
        </CanDoCard>{" "}
        <CanDoCard
          label="編集プロセスにコメント・レビューも可能"
          img={OffImagesRoute.review}
        >
          <p>
            ユーザーが共有した編集の流れに対して、感想やアドバイスを気軽に投稿できます。
            <br />
            「この色味いいですね」「ここで明るさ上げたのが好き」など、温かいやりとりが自然に生まれます。
            <br />
            写真だけじゃなく“編集という表現”にもフィードバックが届く場です。{" "}
            <br />
          </p>
        </CanDoCard>
      </section>
      <section className="section-frame flex-all-center ">
        <InductionCard />
      </section>
    </div>
  );
};

export default OffRetouch;
