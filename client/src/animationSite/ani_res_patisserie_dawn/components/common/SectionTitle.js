const SectionTitle = (items) => {
  return (
    <div className="text-start my-[50px] mx-[100px]">
      <p className="string-md text-[#CC9600] KinutaShinStdN6K">{items.title}</p>
      <p className="UDDigiKyokasho-Pro-R string-lg text-white">
        {items.titleJp}
      </p>
    </div>
  );
};

export default SectionTitle;
