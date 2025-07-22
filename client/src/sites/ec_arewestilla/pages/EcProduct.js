import { useState } from "react";
import ResImagesRoute from "../assets/images/EcImagesRoute";
import {
  MiniProductCard,
  PageTitleContainer,
  SectionTitle,
  SelectContainer,
} from "../components";
import output from "../constants/output.json";
import {
  useStayDurationHandler,
  useHover_eventHandler,
  useUpdateStayDurationHandler,
} from "../../../shared/handlers/handleSurvery";
import { useSurvery } from "../../../shared/contexts/SurveryContext";

const pageId = 12;

const EcProduct = () => {
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
  const [selectGender, setSelectGender] = useState("");
  const [selectBrand, setSelectBrand] = useState("");
  const [selectSort, setSelectSort] = useState("");
  const filteredItems = output
    .filter((item) => {
      return (
        (selectBrand === "" || item.brand === selectBrand) &&
        (selectGender === "" || item.gender === selectGender)
      );
    })
    .sort((a, b) => {
      if (selectSort === "asc") return a.price - b.price;
      if (selectSort === "desc") return b.price - a.price;
      return 0;
    });

  return (
    <div>
      <PageTitleContainer
        bg={ResImagesRoute.p10_a9f071f1_b77d_4cb2_8658_9ebdf721e335_800x}
        title="Product"
        subTitle="商品一覧"
      />
      <section>
        <SectionTitle title="Online store" />
        <div className="w-full h-[100px] flex items-center justify-end space-x-[20px] px-[50px] string-sm">
          <SelectContainer
            name="gender"
            onChange={(e) => setSelectGender(e.target.value)}
          >
            <option value="" disabled selected hidden>
              性別
            </option>
            <option value="">All</option>
            <option value="me">MEN'S</option>
            <option value="rd">LADY'S</option>
            <option value="ユニセックス">UNISEX</option>
          </SelectContainer>
          <SelectContainer
            name="brand"
            onChange={(e) => setSelectBrand(e.target.value)}
          >
            <option value="" disabled selected hidden>
              ブランド
            </option>{" "}
            <option value="">All</option>{" "}
            <option value="affaiver">affaiver</option>{" "}
            <option value="aiver">aiver</option>{" "}
            <option value="auntierosa">auntierosa</option>{" "}
            <option value="casperjohn">casperjohn</option>{" "}
            <option value="CLEL">CLEL</option>{" "}
            <option value="ezick">ezick</option>{" "}
            <option value="mideal">mideal</option>{" "}
            <option value="moment+">moment+</option>{" "}
            <option value="monomart">monomart</option>{" "}
            <option value="SHIPS">SHIPS</option>{" "}
          </SelectContainer>
          <SelectContainer
            name="sort"
            onChange={(e) => setSelectSort(e.target.value)}
          >
            <option value="" disabled selected hidden>
              並び替え
            </option>
            <option value="asc">価格が安い順</option>
            <option value="desc">価格が高い順</option>
          </SelectContainer>
        </div>
      </section>
      <section>
        {" "}
        <div className="grid grid-cols-4 gap-4 place-items-center w-full space-y-[50px]">
          {filteredItems.map((item, index) => (
            <div
              onMouseEnter={() => handleMouseEnter(30)}
              onMouseLeave={handleMouseLeave}
              key={index}
            >
              {" "}
              <MiniProductCard {...item} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EcProduct;
