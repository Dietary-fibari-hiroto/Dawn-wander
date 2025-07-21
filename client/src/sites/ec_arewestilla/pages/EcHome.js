import EcImagesRoute from "../assets/images/EcImagesRoute";
import {
  ConceptTransitionButton,
  ProductCard,
  TransitionButton,
} from "../components";
import SectionTitle from "../components/common/SectionTitle";
import output from "../constants/output.json";
import {
  useStayDurationHandler,
  useHover_eventHandler,
  useUpdateStayDurationHandler,
} from "../../../shared/handlers/handleSurvery";
import { useSurvery } from "../../../shared/contexts/SurveryContext";
const pageId = 10;

const EcHome = () => {
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
      <section className="section-frame flex-all-center">
        <div className="text-start w-1/2 h-full flex-all-center flex-col">
          <div>
            {" "}
            <p className="string-sm">Apparel company</p>
            <p className="string-big">Are We Still A...?</p>
          </div>
        </div>
        <figure className="w-1/2 h-full">
          <img
            className="w-full h-full"
            src={EcImagesRoute.p464739458_416156958199650_3162208171733525292_n}
          />
        </figure>
      </section>
      <section className="section-frame relative">
        <img
          className="absolute top-[2%] left-[10%] w-[400px] h-[500px] "
          src={EcImagesRoute.p465189818_3939773542908699_8873408741192309513_n}
        />
        <img
          className="absolute w-[400px] h-[500px] top-[39%] left-[27%] z-[3]"
          src={EcImagesRoute.p464739458_416156958199650_3162208171733525292_n}
        />
        <img
          className="absolute w-[300px] h-[450px] top-[45%] left-[73%] z-[3]"
          src={EcImagesRoute.p465523955_568969585623225_5011903062634586769_n}
        />
        <p className="absolute top-[13%] left-[52%] string-s leading-[40px]">
          これは、まだなっていない「何か」への問いかけ。
          <br />
          未来は、もう始まっている。
          <br />
          まだ触れていないだけで、
          <br />
          まだ言葉にしていないだけで、
          <br />
          私たちはもっといろんな「何者か」になれる。
          <br />
          <br />
          可能性は、静かにそこにある。 <br />
          勇気は、問いから始まる。
          <br />
          <br />
          <p className="string-md">
            Are we still a...? <br />
          </p>{" "}
          <br />
          その続きを、 <br />
          自分で選びにいけるように。
        </p>
      </section>
      <section className="relative w-full h-[300lvh]">
        <img
          className="absolute top-[8%] left-[7%] w-[500px] h-[625px]"
          src={EcImagesRoute.p465016259_518845894375867_8285105657171650499_n}
        />{" "}
        <img
          className="absolute top-[29%] left-[42%] w-[600px] h-[750px]"
          src={EcImagesRoute.p465072607_1461049087899559_588075790240556776_n}
        />
        <img
          className="absolute top-[36%] left-[18%] z-[3] w-[600px] h-[750px]"
          src={EcImagesRoute.p342556318_115896121460895_8287576671975300005_n}
        />
        <img
          className="absolute top-[62%] left-[52%] z-[3] w-[500px] h-[625px]"
          src={EcImagesRoute.p400475984_1022956298820493_8107272998278097604_n}
        />
        <img
          className="absolute top-[73%] left-[6%] w-[500px] h-[625px]"
          src={EcImagesRoute.p342733903_151170067913370_6675419363304254692_n}
        />
        <img
          className="absolute top-[80%] left-[45%] w-[300px] h-[375px]"
          src={EcImagesRoute.p464977767_560983056316378_134872665243504907_n}
        />
      </section>
      <section className="section-frame">
        <SectionTitle title="Product" titleJp="商品一覧" />
        <div className="w-[100vw] overflow-scroll flex space-x-[50px] px-[100px]">
          {output.slice(0, 6).map((item, index) => (
            <ProductCard key={index} {...item} />
          ))}
        </div>
        <div className="w-full flex-all-center py-[30px]">
          <TransitionButton to="/ec/productlist" />
        </div>
      </section>
      <section className="section-frame relative">
        <SectionTitle
          title="About Are We Still A...?"
          titleJp="「Are We Still A...?」について"
        />
        <img
          className="absolute top-1/2 left-[30%] translate-y-[-40%] size-[600px]"
          src={EcImagesRoute.p394950440_1395983420954633_4006749580879168449_n}
        />
        <ConceptTransitionButton
          className="absolute top-[30%] right-[15%] z-[3]"
          to="/ec/about"
          concept="our concept"
          title="私たちは、まだ途中だ。"
        />
      </section>
      <section className="section-frame relative">
        <div className="absolute bottom-[5%] left-[10%]">
          <div className="relative w-[700px] h-[700px] ">
            <img
              className="w-[500px] h-[625px] absolute top-0 left-0"
              src={
                EcImagesRoute.p454242905_1050173736446959_4193106417481059157_n
              }
            />
            <ConceptTransitionButton
              className="absolute right-0 bottom-0 z-[3]"
              to="/ec/productlist"
              concept="our product"
              title="LADY'S"
            />
          </div>
        </div>
        <div className="absolute top-[5%] right-[10%]">
          <div className="relative w-[700px] h-[700px] absolute right-[10%] top-[0%]">
            <img
              className="w-[500px] h-[625px] absolute top-0 left-0"
              src={EcImagesRoute.IMG_3855}
            />
            <ConceptTransitionButton
              className="absolute right-0 bottom-0 z-[3]"
              to="/ec/productlist"
              concept="our product"
              title="MEN'S"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcHome;
