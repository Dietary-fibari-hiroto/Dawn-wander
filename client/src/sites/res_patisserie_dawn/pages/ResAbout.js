import { useState, useEffect } from "react";
import ResImagesRoute from "../assets/images/ResImagesRoute";
import useScrollProgressValue from "../hooks/useScrollProgressValue";
import { SectionTitle, StoreDetailes } from "../components";
import {
  useStayDurationHandler,
  useHover_eventHandler,
  useUpdateStayDurationHandler,
} from "../../../shared/handlers/handleSurvery";

import { useSurvery } from "../../../shared/contexts/SurveryContext";

const pageId = 3;

const ResAbout = () => {
  const { user_trialId } = useSurvery();

  const pageview_id = useStayDurationHandler(pageId, user_trialId);
  useUpdateStayDurationHandler((duration) => {
    console.log("滞在時間:", duration);
  }, pageview_id);

  const { handleMouseEnter, handleMouseLeave } = useHover_eventHandler(
    user_trialId,
    pageview_id
  );
  const [circleValue, setCircleValue] = useState(); //最大値は1080くらいかな
  const [circleValue2, setCircleValue2] = useState();
  const [circleValue3, setCircleValue3] = useState();
  const scrollMaxValue = 1080;
  const scrollValue = useScrollProgressValue(".scroll-target", 25);
  const scrollValue2 = useScrollProgressValue(".scroll-target2", 25);
  const scrollValue3 = useScrollProgressValue(".scroll-target3", 25);
  useEffect(() => {
    const result = (scrollValue / 100) * scrollMaxValue;
    setCircleValue(result);
  }, [scrollValue]);
  useEffect(() => {
    const result = (scrollValue2 / 100) * scrollMaxValue;
    setCircleValue2(result);
  }, [scrollValue2]);
  useEffect(() => {
    const result = (scrollValue3 / 100) * scrollMaxValue;
    setCircleValue3(result);
  }, [scrollValue3]);

  return (
    <div className="text-white">
      <section className="relative kinuta-maruminfuji-stdn section-frame flex items-center justify-evenly text-white">
        <div
          className="w-[50vw] h-screen absolute top-0 right-0 z-[-1]"
          style={{
            backgroundImage: `linear-gradient(to right,#000000,#00000055,#00000000),url(${ResImagesRoute.pexels_unkdevil_20226372})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="text-start z-[5]">
          <p className="string-big">About us</p>
          <p className="string-sm">私たちについて</p>
        </div>
        <p className="string-ss">
          「映画を観たあとの感動」や「夢の中のような非日常」をスイーツと空間で味わえる、
          <br />
          そういう深い没入感・余韻・現実離れした特別な体験を表現したい。
        </p>
      </section>
      <section
        onMouseEnter={() => handleMouseEnter(5)} // ✅ ←ここ絶対 arrow function にする！
        onMouseLeave={handleMouseLeave}
        className="relative w-full h-[200lvh] scroll-target"
        style={{
          backgroundImage: `linear-gradient(#00000066),url(${ResImagesRoute.city_7459162_1920})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="sticky top-0 left-0 section-frame flex items-center justify-around">
          <div className="text-start ">
            <p className="string-big">Concept</p>
            <p className="string-sm">as if in a dream</p>
            <p className="string-sss">まるで映画のような空間で</p>
          </div>
          <p className="leading-[40px] string-s">
            ドアを開けた瞬間、
            <br />
            まるで一本の映画がはじまったような、
            <br />
            静かで美しい物語の中へ。
            <br />
            Patisserie DAWMが届けるのは、
            <br />
            ただのデザートではありません。
            <br />
            感情を揺らす、ひとくちの“演出”。
            <br />
            日常からふっと浮かび上がるような“体験”。
            <br />
            味わうたび、景色が変わる。
            <br />
            余韻が胸に残る。
            <br />
            そんな特別なひとときが、ここにあります。
          </p>
        </div>
      </section>
      <section
        onMouseEnter={() => handleMouseEnter(6)} // ✅ ←ここ絶対 arrow function にする！
        onMouseLeave={handleMouseLeave}
        className="relative w-full h-[200lvh] scroll-target2"
        style={{
          backgroundImage: `linear-gradient(#00000066),url(${ResImagesRoute.pexels_eva_bronzini_6811161})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="sticky top-0 left-0 section-frame flex items-center justify-around">
          <div className="text-start ">
            <p className="string-big">Concept</p>
            <p className="string-sm">as if in a dream</p>
            <p className="string-sss">まるで映画のような空間で</p>
          </div>
          <p className="leading-[40px] string-s">
            ドアを開けた瞬間、
            <br />
            まるで一本の映画がはじまったような、
            <br />
            静かで美しい物語の中へ。
            <br />
            Patisserie DAWMが届けるのは、
            <br />
            ただのデザートではありません。
            <br />
            感情を揺らす、ひとくちの“演出”。
            <br />
            日常からふっと浮かび上がるような“体験”。
            <br />
            味わうたび、景色が変わる。
            <br />
            余韻が胸に残る。
            <br />
            そんな特別なひとときが、ここにあります。
          </p>
        </div>
      </section>
      <section
        onMouseEnter={() => handleMouseEnter(7)} // ✅ ←ここ絶対 arrow function にする！
        onMouseLeave={handleMouseLeave}
        className="relative w-full h-[200lvh] scroll-target3"
        style={{
          backgroundImage: `linear-gradient(#00000066),url(${ResImagesRoute.t_ed_hOgog7l_iuY_unsplash})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="sticky top-0 left-0 section-frame flex items-center justify-around">
          <div className="text-start ">
            <p className="string-big">Concept</p>
            <p className="string-sm">as if in a dream</p>
            <p className="string-sss">まるで映画のような空間で</p>
          </div>
          <p className="leading-[40px] string-s">
            ドアを開けた瞬間、
            <br />
            まるで一本の映画がはじまったような、
            <br />
            静かで美しい物語の中へ。
            <br />
            Patisserie DAWMが届けるのは、
            <br />
            ただのデザートではありません。
            <br />
            感情を揺らす、ひとくちの“演出”。
            <br />
            日常からふっと浮かび上がるような“体験”。
            <br />
            味わうたび、景色が変わる。
            <br />
            余韻が胸に残る。
            <br />
            そんな特別なひとときが、ここにあります。
          </p>
        </div>
      </section>
      <section className="flex items-center justify-evenly section-frame">
        <figure
          onMouseEnter={() => handleMouseEnter(8)}
          onMouseLeave={handleMouseLeave}
        >
          <img
            className="w-[500px] h-[750px]"
            src={ResImagesRoute.pexels_fotios_photos_1855214}
          />
        </figure>
        <div>
          <div className="p-[30px]">
            <p className="Kinuta-Shin-StdN-6K text-[#CC9600] string-md">
              Our Place
            </p>
            <p className="string-lg UDDigiKyokasho-Pro-R">店内のご紹介</p>
          </div>
          <p className="string-ss leading-[30px] border-l border-t border-white p-[30px]">
            店内は黒と木目を基調とした落ち着きのある空間で、
            <br />
            無機質になりすぎないよう、随所にやわらかな照明と自然素材を取り入れています。
            <br />
            中央にはショーケースがあり、季節ごとに変わるスイーツが並びます。
            <br />
            テラス席からは、町並みを一望できる開放的な景色が広がり、
            <br />
            心地よい風とともに、静かな時間をお過ごしいただけます。
            <br />
            <br />
            その空間で流れるひとときは、まるで映画のワンシーンのように、
            <br />
            現実でありながら少しだけ夢を見ているような、
            <br />
            そんな体験をご用意しております。
            <br />
          </p>
        </div>
      </section>
      <section className="flex items-center justify-evenly section-frame">
        <div className="flex-1 flex flex-all-center string-ss leading-[30px]">
          店内には、2人掛け・4人掛けのテーブルをゆとりを持って配置し、
          <br />
          全36席をご用意しております。黒を基調にした内装は、モダンで静かな印象を与え、
          <br />
          おひとりでのご利用から、ゆっくりと過ごす記念日にも適した空間となっています。
          <br />
          また、テラスには木目のウッドデッキが広がり、
          <br />
          四季折々の町並みを眺めながら過ごせる開放的な24席を設けました。
          <br />
          2人用テーブルのほか、ソファ席もあり、やわらかな風と光に包まれる心地よさを感じていただけます。
          <br />
        </div>
        <div className="relative flex-1 h-full">
          <img
            className="absolute top-0 left-[10%] z-[5] w-[400px] h-[600px]"
            src={ResImagesRoute.dining_table_7782610_1920}
          />
          <img
            className="absolute bottom-0 right-[20%] z-[3] w-[400px] h-[600px]"
            src={ResImagesRoute.pexels_rana_aldemir_2151415483_32333615}
          />
          <div className="absolute left-0 top-[30%] size-[600px] border border-[#CC9600]"></div>
        </div>
      </section>
      <section className="section-frame relative">
        <SectionTitle title="Story" titleJp="ストーリー" />
        <img
          className="absolute top-[21%] left-[5%] w-[300px] h-[450px] opacity-[0.6]"
          src={ResImagesRoute.raspberries_7213407_1920}
        />
        <img
          className="absolute top-[28%] left-[15%] z-[3] w-[450px] h-[575px]"
          src={ResImagesRoute.p_464893687_478738995182642_7484504265560039706_n}
        />
        <img
          className="absolute bottom-[3%] left-[32%]  w-[300px] h-[400px] opacity-[0.6]"
          src={ResImagesRoute.pexels_unkdevil_20226372}
        />
        <div className="size-[300px] border border-[#CC9600] absolute top-[15%] left-[30%]"></div>
        <div className="absolute bottom-1/2 translate-y-[50%] right-[10%] space-y-[30px]">
          <p className="string-md">甘さは、心に触れる。— パティシエ</p>
          <p className="string-s leading-[40px]">
            幼いころから、スイーツが誰かの心をほどく瞬間を何度も見てきました。
            <br />
            専門学校を卒業後、東京と大阪の有名レストランで修業し、国内外のコンテストで経験を積みました。
            <br />
            やがて気づいたのは、「スイーツの役割は、ただ美味しいだけじゃない」ということ。
            <br />
            それは、誰かの一日に光を灯したり、記憶に残る瞬間をつくる“演出”にもなれる。
            <br />
            その想いから「Patisserie DAWM」を立ち上げました。
            <br />
          </p>
        </div>
      </section>
      <section className="section-frame relative">
        <SectionTitle title="Story" titleJp="ストーリー" />
        <img
          className="absolute top-[21%] right-[5%] w-[300px] h-[450px] opacity-[0.6]"
          src={ResImagesRoute.pexels_rana_aldemir_2151415483_32333615}
        />
        <img
          className="absolute top-[28%] right-[15%] z-[3] w-[450px] h-[575px]"
          src={
            ResImagesRoute.p_370563396_1013176073212825_6199235972543108956_n
          }
        />
        <img
          className="absolute bottom-[3%] right-[32%]  w-[300px] h-[400px] opacity-[0.6]"
          src={ResImagesRoute.date_2211338_1920}
        />
        <div className="size-[300px] border border-[#CC9600] absolute bottom-[3%] right-[5%]"></div>
        <div className="absolute bottom-1/2 translate-y-[50%] left-[10%] space-y-[30px]">
          <p className="string-md">空間は、無言の語り手。— 建築士</p>
          <p className="string-s leading-[40px]">
            わたしが設計の仕事で大切にしているのは、「人の心が、ふっとほどける瞬間」をどうつくるかということ。{" "}
            <br />
            飲食店の内装・空間演出に携わる中で、ある日こう思ったんです。 <br />
            “本当に記憶に残る場所って、味と空気が一緒に思い出される”って。{" "}
            <br />
            <br />
            Patisserie DAWMの世界観は、そうした発想から始まりました。 <br />
            黒と木目を基調に、現実と非日常の間を漂うような内装。 <br />
            席の配置や光の角度まで、甘いものがいちばん美しく見えるよう計算されています。{" "}
            <br />
          </p>
        </div>
      </section>
      <section className="section-frame flex-all-center text-center leading-[40px]">
        <div
          onMouseEnter={() => handleMouseEnter(9)}
          onMouseLeave={handleMouseLeave}
        >
          Patisserie DAWNでは
          <br />
          特別な非日常をご用意しております。
          <br />
          あなたのお越しを、心よりお待ちしております。
          <br />
        </div>
      </section>
      <StoreDetailes />
    </div>
  );
};

export default ResAbout;
