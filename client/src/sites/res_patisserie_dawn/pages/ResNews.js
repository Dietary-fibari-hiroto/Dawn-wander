import ResNewsDatas from "../constants/ResNewsDatas";
import { NewsBar, SectionTitle } from "../components";
const ResNews = () => {
  return (
    <div className="py-[200px] ">
      <SectionTitle title="News" titleJp="お知らせ" />

      <div className="flex flex-col items-center justify-start space-y-[100px]">
        {ResNewsDatas.map((item, index) => (
          <NewsBar {...item} />
        ))}
      </div>
    </div>
  );
};
export default ResNews;
