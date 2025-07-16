import { Link } from "react-router-dom";

const ResHeader = () => {
  const rootPath = "/res";
  const Links = [
    { name: "Top", to: `${rootPath}/` },
    { name: "About", to: `${rootPath}/about` },
    { name: "News", to: `${rootPath}/news` },
    { name: "Access", to: `${rootPath}/access` },
    { name: "reservation", to: `${rootPath}/reservation` },
  ];
  return (
    <header className="fixed top-0 left-0 z-[10] w-screen flex items-center justify-between text-white px-[20px] py-[10px]">
      <div className="flex flex-col items-center KinutaShinStdN6K leading-[20px]">
        <p className="string-sss">Patisserie</p>
        <p className="string-rg">DAWN</p>
      </div>
      <div className="space-x-[100px] flex items-center justify-evenly kinuta-maruminfuji-stdn string-sm">
        {Links.map(({ name, to }, index) => (
          <Link key={index} to={to}>
            {name}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default ResHeader;
