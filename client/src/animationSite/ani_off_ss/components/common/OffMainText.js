import { Children } from "react";

const OffMainText = ({ children }) => {
  return (
    <div className="space-y-[20px] leading-[50px] string-sm">
      {children}
      <div className="off-horizontal-border" />
    </div>
  );
};

export default OffMainText;
