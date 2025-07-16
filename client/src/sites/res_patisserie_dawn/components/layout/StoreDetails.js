const StoreDetailes = () => {
  return (
    <section className="section-frame flex-all-center text-white">
      {" "}
      <div className="w-[1200px] h-[800px] bg-[#333333] flex-all-center flex-col space-y-[100px]">
        <div className="flex flex-col items-center KinutaShinStdN6K ">
          <p>Patisserie</p>
          <p className="text-[75px]">DAWN</p>
        </div>
        <div className="w-[1000px] flex flex-col string-ss kinuta-maruminfuji-stdn space-y-[30px]">
          <div className="flex justify-between border-b border-b-[#888888]">
            <p>住所</p>
            <p>兵庫県神戸市灘区篠原大月山 大月山DNタワー 9F/10F</p>
          </div>
          <div className="flex justify-between border-b border-b-[#888888]">
            <p>営業時間</p>
            <p>
              平日：11:00〜21:00
              <br />
              土日祝：10:00〜22:00
              <br />
              水,金,土曜日(DAWN特別営業)：4:00～8:00
              <br />
            </p>
          </div>
          <div className="flex justify-between border-b border-b-[#888888]">
            <p>定休日</p>
            <p>毎週火曜日</p>
          </div>
          <div className="flex justify-between border-b border-b-[#888888]">
            <p>電話番号</p>
            <p>000-0000-0000</p>
          </div>
          <div className="flex justify-between border-b border-b-[#888888]">
            <p>採用情報</p>
            <p>https://dawn-waiting.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreDetailes;
