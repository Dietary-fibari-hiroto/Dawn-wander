import EcLogoImagesRoute from "../assets/images/EcLogoImagesRoute.js";
import EcImagesRoute from "../assets/images/EcImagesRoute";
import BackBar from "../components/common/BackBar.js";
import {
  BackBoll,
  ConceptTransitionButton,
  SectionTitle,
  PageTitleContainer,
} from "../components/index.js";

const pageId = 11;

const BrandImgList = [
  EcLogoImagesRoute.F51D2376_20EC_4960_B8D4_9E856CB37B6C,
  EcLogoImagesRoute.kurofvg,
  EcLogoImagesRoute.logo1n,
  EcLogoImagesRoute.news_16_9,
  EcLogoImagesRoute.p229257655_129859329326272_6954796544347887080_n,
  EcLogoImagesRoute.p471665751_1090074989514086_290110307823194435_n,
  EcLogoImagesRoute.p491519145_18476790502065633_896293402587589201_n,
  EcLogoImagesRoute.shopimage_0,
];
const EcAbout = () => {
  return (
    <div>
      <PageTitleContainer
        bg={EcImagesRoute.pexels_kowalievska_1148960}
        title="About 『Are We Still A...?』"
        subTitle="「Are We Still A...?」について"
      />
      <section className="relative w-screen h-[500lvh] leading-[40px]">
        <div className="sticky top-0 flex flex-col justify-end items-center section-frame z-[3] ">
          <div className="bg-white w-full h-1/3" />
        </div>
        <div className="absolute w-screen h-[500lvh] top-0 left-0 z-[1]">
          <BackBar className="top-[30%] left-[20%]  w-[1200px] rotate-[40deg]" />
          <BackBoll className="top-[38%] right-[23%] " />
          <BackBar className="top-[48.5%] right-[13%] w-[1200px] rotate-[130deg]" />
          <BackBoll className="top-[58%] left-[34%]" />
          <BackBar className="top-[71%] left-[15%] w-[1200px] rotate-[70deg]" />
        </div>
        {/**半透明テキスト*/}
        <div className="absolute w-screen h-[500lvh] top-0 left-0 z-[5] opacity-[0.3]">
          <p className="absolute left-[50%] top-[13%] string-sm">
            Are We Still A... は、 <br />
            “まだ何者にもなれていない自分”を抱きしめる場所です。
            <br />
            <br />
            変わりたい気持ちも、 <br />
            まだ少し怖い気持ちも、 <br />
            名前のない焦りも、 <br />
            ぜんぶそのままでいい。
            <br />
            <br />
            私たちは、あなたの「問い」と一緒にいます。
            <br />
            まだ見ぬあなた自身へ、そっと背中を押せますように。
            <br />
          </p>
          <p className="string-ss absolute top-[20%] left-[77%]">
            Are We Still A...
            <br />
            is a place to embrace the version of yourself
            <br />
            that hasn’t become anything—yet.
            <br />
            <br />
            Your desire to change,
            <br />
            your quiet fear,
            <br />
            that nameless sense of urgency—
            <br />
            you can bring it all, just as it is.
            <br />
            <br />
            We are here with your questions.
            <br />
            And we hope to gently nudge you
            <br />
            toward the you who is still waiting to be discovered.
          </p>
          <p className="absolute string-sm top-[36%] left-[24%]">
            わたしたち自身もまた、「まだ何者でもない」状態のまま、
            <br />
            日々、変わりながらこの問いに向き合っています。
            <br />
            <br />
            誰かの「これから」へ、一歩踏み出すきっかけになれるように。
            <br />
            服のデザインも、言葉のひとつひとつも、
            <br />
            その人の“可能性”にそっと光を当てるものでありたい。
            <br />
            <br />
            変わりたいと願う気持ちに、勇気を添えられるように。
            <br />
            Are We Still A...は、
            <br />
            まだ何者にもなれていないすべての人の、最初の伴走者でありたいと思っています。
          </p>
          <p className="absolute string-ss top-[50%] left-[55%]">
            shifting, changing, and facing these questions every single day.
            <br />
            <br />
            We hope to become a small spark,
            <br />
            a gentle push for someone’s beginning.
            <br />
            <br />
            In every piece of clothing we design,
            <br />
            in every word we choose,
            <br />
            we hope to cast a quiet light
            <br />
            on the possibilities within each person.
            <br />
            <br />
            To every heart that wishes to change,
            <br />
            we want to offer a little courage.
            <br />
            <br />
            Are We Still A...
            <br />
            hopes to walk alongside those
            <br />
            who have not yet become “someone”—
            <br />
            as their very first companion on the journey.
            <br />
          </p>
        </div>
        {/**画像配置 */}
        <div className="absolute w-screen h-[500lvh] top-0 left-0 z-[6] ">
          <img
            className="absolute w-[700px] h-[875px] top-[9%] left-[5%]"
            src={EcImagesRoute.p438602871_345978747968461_5251680703168824051_n}
          />

          <img
            className="size-[1000px] absolute top-[67%] left-[20%]"
            src={EcImagesRoute.mideal2way_________________5920RD}
          />
          <ConceptTransitionButton
            className="absolute top-[72%] left-[60%]"
            to="/ec/productlist"
            concept="商品一覧"
            title="Our Product"
          />
        </div>

        {/**表示テキスト */}
        <div className="absolute w-screen h-[500lvh] top-0 left-0 z-[2]">
          <p className="absolute left-[50%] top-[13%] string-sm">
            Are We Still A... は、 <br />
            “まだ何者にもなれていない自分”を抱きしめる場所です。
            <br />
            <br />
            変わりたい気持ちも、 <br />
            まだ少し怖い気持ちも、 <br />
            名前のない焦りも、 <br />
            ぜんぶそのままでいい。
            <br />
            <br />
            私たちは、あなたの「問い」と一緒にいます。
            <br />
            まだ見ぬあなた自身へ、そっと背中を押せますように。
            <br />
          </p>
          <p className="string-ss absolute top-[20%] left-[77%]">
            Are We Still A...
            <br />
            is a place to embrace the version of yourself
            <br />
            that hasn’t become anything—yet.
            <br />
            <br />
            Your desire to change,
            <br />
            your quiet fear,
            <br />
            that nameless sense of urgency—
            <br />
            you can bring it all, just as it is.
            <br />
            <br />
            We are here with your questions.
            <br />
            And we hope to gently nudge you
            <br />
            toward the you who is still waiting to be discovered.
          </p>
          <p className="absolute string-sm top-[36%] left-[24%]">
            わたしたち自身もまた、「まだ何者でもない」状態のまま、
            <br />
            日々、変わりながらこの問いに向き合っています。
            <br />
            <br />
            誰かの「これから」へ、一歩踏み出すきっかけになれるように。
            <br />
            服のデザインも、言葉のひとつひとつも、
            <br />
            その人の“可能性”にそっと光を当てるものでありたい。
            <br />
            <br />
            変わりたいと願う気持ちに、勇気を添えられるように。
            <br />
            Are We Still A...は、
            <br />
            まだ何者にもなれていないすべての人の、最初の伴走者でありたいと思っています。
          </p>
          <p className="absolute string-ss top-[50%] left-[55%]">
            shifting, changing, and facing these questions every single day.
            <br />
            <br />
            We hope to become a small spark,
            <br />
            a gentle push for someone’s beginning.
            <br />
            <br />
            In every piece of clothing we design,
            <br />
            in every word we choose,
            <br />
            we hope to cast a quiet light
            <br />
            on the possibilities within each person.
            <br />
            <br />
            To every heart that wishes to change,
            <br />
            we want to offer a little courage.
            <br />
            <br />
            Are We Still A...
            <br />
            hopes to walk alongside those
            <br />
            who have not yet become “someone”—
            <br />
            as their very first companion on the journey.
            <br />
          </p>
        </div>
      </section>
      <section className="section-frame flex flex-col items-center">
        <SectionTitle title="BrandList" titleJp="取り扱いブランド" />
        <div className="grid grid-cols-4 gap-4 place-items-center w-[50%]">
          {BrandImgList.map((item, index) => (
            <img className="size-[200px]" key={index} src={item} />
          ))}
        </div>
      </section>
    </div>
  );
};
export default EcAbout;
