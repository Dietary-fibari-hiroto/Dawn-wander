import { Link } from "react-router-dom";
import ResImagesRoute from "../../assets/images/EcImagesRoute";
const EcHeader = () => {
  const rootPath = "/ec";
  const Links = [
    { name: "TOP", to: `${rootPath}/` },
    { name: "ABOUT US", to: `${rootPath}/about` },
    { name: "PRODUCT", to: `${rootPath}/productlist` },
    { name: "CART", to: `${rootPath}/cart` },
  ];
  return (
    <header className="fixed top-0 left-0 z-[10] w-screen flex items-center justify-between  px-[20px] py-[10px] mix-blend-difference text-white">
      <div className="flex flex-col items-center  leading-[20px]">
        <p className="string-sm">Are We Still A...?</p>
      </div>
      <div className="space-x-[100px] flex items-center justify-evenly kinuta-maruminfuji-stdn string-sm">
        {Links.map(({ name, to }, index) => (
          <Link key={index} to={to}>
            {name}
          </Link>
        ))}
        <Link className="size-[50px]">
          <img
            src={
              ResImagesRoute.p4544843_business_comerce_delivery_shop_trolley_121443
            }
          />
        </Link>
      </div>
    </header>
  );
};

export default EcHeader;
