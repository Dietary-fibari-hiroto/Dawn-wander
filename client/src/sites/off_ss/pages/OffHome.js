import { useState } from "react";
import {
  LinkButton,
  OffMainText,
  OffSectionTitle,
  FaqTag,
} from "../components";
import OffImagesRoute from "../assets/OffImagesRoute";

const pageId = 16;

const OffHome = () => {
  //FAQの状態管理
  const [faqShow, setFaqShow] = useState({
    q1: false,
    q2: false,
    q3: false,
  });

  const toggle = (key) => {
    setFaqShow((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div>
      {/*Topセクション */}
      <section className="section-frame relative">
        <div className="absolute bottom-[5%] left-[3%]">
          <img
            className="absolute z-[2]"
            src={OffImagesRoute.IMG_7028}
            style={{
              width: "525px", // 502 * 3/4
              height: "475px", // 460 * 3/4
              background: "black",
              borderRadius: `52% 48% 48% 52% / 48% 50% 50% 52%`,
            }}
          />
          <div
            className="ml-[40px] mt-[160px]"
            style={{
              width: "502px", // 502 * 3/4
              height: "325.27px", // 325 * 3/4
              background: "white",
              borderRadius: `47% 53% 48% 52% / 42% 30% 70% 58%`,
            }}
          ></div>
        </div>
        <div className="absolute right-0 top-1/2 translate-y-[-50%]">
          <img
            className="absolute top-1/2 translate-y-[-50%]"
            src={OffImagesRoute.IMG_2847}
            style={{
              width: "785.25px", // 502 * 3/4
              height: "687px", // 460 * 3/4
              borderRadius: `52% 48% 48% 52% / 48% 50% 50% 52% `,
            }}
          />
          <div
            className=""
            style={{
              width: "800px", // 502 * 3/4
              height: "700px", // 460 * 3/4
              background: "white",
              borderRadius: `52% 48% 48% 52% / 48% 50% 50% 52% `,
            }}
          />
        </div>
        <img
          className="absolute top-[15%] right-[35%] size-[350px] rounded-[50%]"
          src={OffImagesRoute.IMG_28582}
        />
        <div className=" Ten-Mincho-Regular string-hundred absolute top-1/2 left-[20%] translate-y-[-50%] z-[3] flex flex-col">
          <div className="inline-block">
            <p>Shutter</p>
            <div className="off-horizontal-border" />
          </div>
          <div className="inline-block ml-[100px]">
            <p>Showcase</p>
            <div className="off-horizontal-border" />
          </div>
        </div>

        <LinkButton
          to=""
          label="今すぐ始める"
          className="absolute bottom-[5%] left-[5%] z-[5]"
        />
      </section>
      <div className="relative">
        <section className="section-frame relative">
          <div className="absolute top-1/2 translate-y-[-50%] left-1/4 z-[2] translate-x-[-50%] flex string-sm tracking-[12px] space-x-[20px]">
            <div className="flex space-x-[10px]">
              <p className="vertical-text ">写真がつなぐ、</p>
              <div className="off-vertical-border h-1/2" />
            </div>
            <div className="flex space-x-[10px]">
              <p className="vertical-text ">わたしと誰かのストーリー。</p>{" "}
              <div className="off-vertical-border " />
            </div>
          </div>
          <img
            className="w-[450px] h-[600px] absolute bottom-0 right-0 z-[2]"
            src={OffImagesRoute.IMG_2691}
          />
          <img
            className="size-[1080px] absolute top-[5%] right-[10%] "
            src={OffImagesRoute.camera_art3}
          />
        </section>
        <section className="section-frame relative ">
          <OffSectionTitle>
            <p className="string-big">Shutter Showcase</p>
            <p className="string-md">とは？</p>
          </OffSectionTitle>
          <div className="flex items-center justify-evenly">
            <img
              className="art-set size-[705px] rotate-[30deg]"
              src={OffImagesRoute.phone_art}
            />
            <div className="space-y-[15px]">
              <p className="string-sm leading-[30px]">
                ShutterShowcaseは、カメラマン・被写体・写真好きな人たちが、
                <br />
                自分の写真でつながれるポートフォリオ&マッチングプラットフォームです。
                <br /> <br />
                撮る人も、映る人も、ただ見るのが好きな人も。
                <br />
                テンプレートを使って、自分だけの写真ページを簡単に作成でき、
                <br />
                写真をきっかけに、共感や出会いが自然に生まれていきます。
                <br /> <br />
                ただ投稿するだけじゃなく、魅せる。
                <br />
                見つけてもらうだけじゃなく、つながる。
                <br /> <br />
                写真でつながるすべての人の居場所です。
                <br />
              </p>
              <div className="off-horizontal-border" />
            </div>
          </div>
        </section>
        <section className="section-frame relative">
          <img
            className="w-[500px] h-[700px] absolute top-0 right-[10%]"
            src={OffImagesRoute.IMG_2810}
          />
          <img
            className="absolute bottom-1/2 translate-y-1/2 left-0 w-[1000px] h-[666px]"
            src={OffImagesRoute.IMG_2855}
          />
          <div className="off-vertical-border h-[300px] absolute bottom-[-15%] right-[20%] z-[3]" />
        </section>
      </div>
      {/*機能紹介部分 */}
      <div className="bg-[#364A5E] relative">
        <img
          className="art-set size-[1080px] absolute top-1/2 left-1/4 translate-x-[-50%] translate-y-[-50%]"
          src={OffImagesRoute.cameraman_art}
        />
        <section className="section-frame flex-all-center flex-col space-y-[50px]">
          <OffSectionTitle>
            <p>あなただけの</p>
            <p className="string-big">ポートフォリオ</p>
            <p>を、</p>
            <p className="string-big">手軽に。</p>
          </OffSectionTitle>
          <div className="flex-all-center space-x-[100px]">
            <figure className="w-[546px] h-[402px] relative">
              <img
                className="size-[300px] absolute top-0 left-0"
                src={OffImagesRoute.img2_ss}
              />
              <img
                className="size-[300px] absolute bottom-0 right-0"
                src={OffImagesRoute.img1_ss}
              />
            </figure>
            <OffMainText>
              <p>
                写真をアップロードするだけで、世界観のあるページが完成。
                <br />
                用意されたテンプレートを使えば、センスに自信がなくても大丈夫。
                <br />
                カメラマンも、被写体も、ただ写真が好きな人も、自分らしさを自然に表現できます。
                <br />
              </p>
            </OffMainText>
          </div>
        </section>
        <section className="section-frame flex-all-center flex-col space-y-[50px]">
          <OffSectionTitle position="end">
            <span className="string-big">世界観</span>
            <span>で</span>
            <span className="string-big">繋がる、</span>
            <span>ゆるやかなコミュニティ。</span>
          </OffSectionTitle>
          <div className="flex-all-center space-x-[100px]">
            <OffMainText>
              <p>
                コメントやリアクション機能で、写真への感想や共感を伝え合える。
                <br />
                タグ検索で、似た雰囲気の人やテーマがすぐ見つかる。
                <br />
                SNSよりも静かで、作品の空気感がしっかり残るやり取りを。
                <br />
              </p>
            </OffMainText>
            <img className="size-[500px]" src={OffImagesRoute.IMG_3423} />
          </div>
        </section>
        <section className="relative section-frame flex-all-center flex-col space-y-[50px]">
          <OffSectionTitle>
            <span>マップ機能で</span>
            <span className="string-big">フォトスポット</span>
            <span>を</span>
            <span className="string-big">探そう。</span>
          </OffSectionTitle>
          <div className="flex-all-center space-x-[100px]">
            <img className="w-[600px] h-[400px]" src={OffImagesRoute.img3_ss} />
            <OffMainText>
              <p>
                写真とマップをつなげて、
                <br />
                あなたの「行きたい」を叶えるフォトスポット機能を用意しました。
                <br />
                気になる写真に出会ったら、ワンタップで地図をチェック。
                <br />
                自分が見た景色を、誰かもきっと撮っている。
                <br />
                そんなつながりを、旅先でも日常でも感じられます。
                <br />
                あなたの「ここで撮ったよ」も、誰かの「行きたい」になるかもしれません。
                <br />{" "}
              </p>
            </OffMainText>
          </div>
          <div className="off-vertical-border h-[300px] absolute bottom-[-15%] left-[20%]" />
        </section>
      </div>
      <div>
        <section className="section-frame relative">
          <div className="absolute top-1/2 translate-y-[-50%] left-[15%]  z-[2] flex-all-center flex-col">
            <p className="string-m">レタッチで繋がる</p>
            <OffMainText>
              <p className="string-lg">変わらぬ日々に、魔法をかけて</p>
            </OffMainText>
            <LinkButton className="mt-[10px]" to="" label="のぞく..." />
          </div>
          <img
            className="w-[1000px] h-[560px] rounded-[50px] absolute top-1/2 translate-y-[-50%] right-[15%]"
            src={OffImagesRoute.retoutch_img}
          />
        </section>
        <section className="section-frame relative">
          <div className=" absolute top-1/2 translate-y-[-50%] right-[15%]  z-[2] flex-all-center flex-col">
            <p className="string-m">気軽にフォトコンテスト</p>
            <OffMainText>
              <p className="string-lg">尊い瞬間、を拾い集めて</p>
            </OffMainText>
            <LinkButton className="mt-[10px]" to="" label="のぞく..." />
          </div>
          <img
            className="w-[1000px] h-[560px] rounded-[50px] absolute top-1/2 translate-y-[-50%] left-[15%]"
            src={OffImagesRoute.ins}
          />
        </section>
      </div>
      {/*FAQセクション */}
      <section className="section-frame relative">
        <OffSectionTitle>
          <span>よくある</span>
          <span className="string-big">質問</span>
          <span>(FAQ)</span>
        </OffSectionTitle>
        <div className="flex-all-center flex-col space-y-[50px] mt-[200px]">
          <FaqTag
            state={faqShow.q1}
            onClick={() => toggle("q1")}
            q="「カメラ初心者でも大丈夫ですか？」"
            a="はい。お写真を撮られるならどなたでもお使いいただけます。"
          />{" "}
          <FaqTag
            state={faqShow.q2}
            onClick={() => toggle("q2")}
            q="「料金はかかりますか？」"
            a="基本無料でご利用いただけますが、一部機能が有料となっております。"
          />{" "}
          <FaqTag
            state={faqShow.q3}
            onClick={() => toggle("q3")}
            q="「どんな機能がありますか？」"
            a="SNS、メッセージ、ポートフォリオなど、様々な機能をご用意しております。"
          />
        </div>
      </section>
    </div>
  );
};

export default OffHome;
