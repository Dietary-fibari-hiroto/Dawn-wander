import { OffSectionTitle, FaqTag, LinkButton } from "../components";
const OffGate = () => {
  return (
    <div>
      <section className="section-frame flex-all-center flex-col space-y-[100px]">
        <OffSectionTitle>
          <span className="string-big">登録</span>
          <span>register</span>
        </OffSectionTitle>
        <div className="">
          <div>
            <p className="string-rg">email</p>
            <input className="w-[700px] h-[50px]" type="text" />
          </div>{" "}
          <div>
            <p className="string-rg">password</p>
            <input className="w-[700px] h-[50px]" type="text" />
          </div>{" "}
        </div>
        <LinkButton label="登録..." />
      </section>
    </div>
  );
};

export default OffGate;
