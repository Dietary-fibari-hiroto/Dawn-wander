import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import FlutteringCloth from "../components/layout/FlutteringCloth";
import { useScrollValue } from "../hooks/useScrollValue";
import ResImagesRoute from "../assets/images/ResImagesRoute";
import { NewsCard, SectionTitle, StoreDetailes } from "../components";
import ReservationButton from "../components/common/ReservationButton";
import ResNewsDatas from "../constants/ResNewsDatas";

const animateThreshold = 1;

const ResHome = () => {
  const value = useScrollValue();
  const [blurAmount, setBlurAmount] = useState(0);

  useEffect(() => {
    const normalized = value / 10 - 0.3;
    setBlurAmount(Math.max(0, Math.min(normalized, 0.3)));
  }, [value]);

  return (
    <div>
      <div className="relative h-[400vh] bg-black text-white KinutaShinStdN6K">
        <div
          className="w-[100vw] h-[100vh] sticky top-0 z-1 transition-all duration-300 ease-in-out"
          style={{ filter: `blur(${blurAmount * (animateThreshold * 80)}px)` }}
        >
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <ambientLight intensity={2} />
            <FlutteringCloth />
          </Canvas>
        </div>

        <div
          className="w-[100vw] h-[100vh] sticky top-0 z-3 bg-black blur-[20px] transition-all duration-300 ease-in-out"
          style={{ opacity: `${blurAmount - 0.2}` }}
        ></div>

        <div className="absolute w-[100vw] top-0 z-5">
          <section className="relative w-full h-[100vh] flex items-center justify-around block">
            <div className="absolute left-[80%] top-[80%]">
              <ReservationButton />
            </div>
            <div className="flex flex-col items-center KinutaShinStdN6K">
              <p>Patisserie</p>
              <p className="text-[75px]">DAWN</p>
            </div>
            <div className="kinuta-maruminfuji-stdn text-[25px]">
              <p>
                世界が静かに切り替わる
                <br />
                わたしがわたしに戻る
                <br />
                やわらかな空間で。
              </p>
            </div>
          </section>

          <section className="h-screen"></section>
        </div>

        <section className="w-[100vw] sticky top-0 z-5">
          <div className="w-full h-[100vh] flex items-center justify-evenly">
            <div className="flex flex-col items-center ">
              <p className="text-[20px]">because you deserve softness.</p>
            </div>
            <div className="kinuta-maruminfuji-stdn string-ss leading-[40px]">
              <p>
                心がふっと軽くなる瞬間って、 <br />
                案外、甘いものの中にある気がする。
                <br />
                <br />
                ひとくち食べて、ふわっと笑顔になる。
                <br />
                目を閉じたら、風や光まで思い出せる。
                <br />
                <br /> 誰かと分け合っても、
                <br />
                ひとりでそっと味わってもいい。
                <br />
                <br /> 特別な日も、そうじゃない日も。
                <br /> その時間が、ちゃんと自分のものだって思えるから。
                <br />
                <br />
                今日のわたしに、ひとつだけご褒美を。
                <br /> Patisserie DAWMで、
                <br />
                ほんの少し、心を甘やかしてみませんか。
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="relative w-full h-[500lvh]">
        <img
          className="absolute w-[750px] h-[500px] top-[13%] left-[11%]"
          src={ResImagesRoute.wooden_2594768_1920}
        />
        <img
          className="absolute w-[600px] h-[750px] top-[18%] left-[55%]"
          src={ResImagesRoute.dessert_6924030_1920}
        />
        <img
          className="absolute z-[3] w-[600px] h-[450px] top-[31%] left-[29%]"
          src={ResImagesRoute.dessert_2603520_1920}
        />
        <img
          className="absolute  w-[600px] h-[900px] top-[42%] left-0"
          src={ResImagesRoute.pexels_amaliamaria11_6292065}
        />
        <img
          className="absolute  w-[450px] h-[300px] top-[44%] left-[42%]"
          src={ResImagesRoute.pexels_pavel_danilyuk_6405650}
        />
        <img
          className="absolute  w-[450px] h-[300px] top-[44%] right-0"
          src={ResImagesRoute.glasses_6800873_1920}
        />
        <img
          className="absolute  w-[600px] h-[900px] top-[55%] right-0"
          src={ResImagesRoute.pexels_pelageia_zelenina_58865108_9976628}
        />
        <img
          className="absolute  w-[600px] h-[900px] top-[65%] left-[22%]"
          src={ResImagesRoute.pexels_nanamusic_31665647}
        />
      </section>
      {/*ニュースセクション*/}
      <section className="section-frame flex flex-col justify-center">
        <SectionTitle title="News" titleJp="お知らせ" />
        <div className="flex items-center justify-evenly overflow-x-scroll px-[100px] space-x-[100px]">
          {ResNewsDatas.map((item, index) => (
            <NewsCard {...item} />
          ))}
        </div>
      </section>
      <section className="section-frame flex-all-center">
        <Link
          to="/res/about"
          className="w-[1200px] h-[600px] flex-all-center flex-col space-y-[50px] text-white text-center"
          style={{
            backgroundImage: `linear-gradient(#00000055,#00000055),url(${ResImagesRoute.table_5356682_1920})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <p className="KinutaShinStdN6K string-md">Concept</p>
          <p className="string-sm UDDigiKyokasho-Pro-R">
            as if in dream...
            <br />
            まるで夢のような空間で
          </p>
          <p className="UDDigiKyokasho-Pro-R underline string-ss">
            read more...
          </p>
        </Link>
      </section>
      <StoreDetailes />
    </div>
  );
};
export default ResHome;
