import { FadeIn } from "../shared/components";

const Test = () => {
  return (
    <div className="flex-all-center flex-col w-screen h-[300lvh]">
      {" "}
      <div class="w-24 h-24 rounded-full border-8 border-white border-t-transparent "></div>
      <FadeIn>
        <p className="bg-white h-[30lvh]">test</p>
      </FadeIn>{" "}
      <FadeIn>
        <p className="bg-white h-[30lvh]">test</p>
      </FadeIn>{" "}
      <FadeIn>
        <p className="bg-white h-[30lvh]">test</p>
      </FadeIn>
    </div>
  );
};

export default Test;
