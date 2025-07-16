const PageTitleContainer = (items) => {
  return (
    <section
      className="text-white relative section-frame bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(#00000088),url(${items.bg})`,
      }}
    >
      <div className="absolute bottom-[10%] left-[10%]">
        <p className="string-big">{items.title}</p>
        <p className="string-sm">{items.subTitle}</p>
      </div>
    </section>
  );
};
export default PageTitleContainer;
