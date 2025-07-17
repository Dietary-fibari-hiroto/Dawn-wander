import { Link } from "react-router-dom";
import OffImagesRoute from "../../assets/OffImagesRoute";

const OffHeader = () => {
  const rootPath = "/off";
  const links = [
    { name: "Top", to: `${rootPath}/` },
    { name: "Retouch", to: `${rootPath}/retouch` },
    { name: "Contest", to: `${rootPath}/contest` },
    { name: "Gate", to: `${rootPath}/gate` },
  ];

  return (
    <div className="fixed top-0 left-0 z-[10] w-screen px-[20px] flex justify-between items-center">
      <img className="h-[75px]" src={OffImagesRoute.ss_logo} />
      <div className="off-horizontal-border w-[500px]" />
      <div className="flex-all-center space-x-[80px]">
        {links.map(({ name, to }, index) => (
          <Link className="string-sm" to={to}>
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OffHeader;
