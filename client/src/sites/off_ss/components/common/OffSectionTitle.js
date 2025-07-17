const OffSectionTitle = ({ children, position }) => {
  const items = position === "end" ? "justify-end" : "jusfity-center";
  return (
    <div
      className={`string-md px-[100px] py-[50px] w-full flex items-center ${items} Ten-Mincho-Regular`}
    >
      {children}
    </div>
  );
};

export default OffSectionTitle;
