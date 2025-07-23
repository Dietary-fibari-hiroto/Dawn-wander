import { MouseFollow } from "../../../../shared/components";

const OffMainText = ({ children }) => {
  return (
    <MouseFollow className="space-y-[20px] leading-[50px] string-sm">
      {children}
      <div className="off-horizontal-border" />
    </MouseFollow>
  );
};

export default OffMainText;
