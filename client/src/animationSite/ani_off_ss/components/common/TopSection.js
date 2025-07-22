const TopSection = (props) => {
  return (
    <section
      className="section-frame flex-all-center"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${props.img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <p className="string-sm">{props.title}</p>
    </section>
  );
};

export default TopSection;
