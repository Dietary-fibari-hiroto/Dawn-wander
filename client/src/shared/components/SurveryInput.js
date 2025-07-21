const SurveryInput = (items) => {
  return (
    <div className="w-[600px] flex-all-center flex-col">
      <p className="string-sm w-full text-start">{items.label}</p>
      <input
        className="w-[550px] h-[50px] text-black "
        name={items.name}
        type={items.type}
        placeholder={items.placeholder}
        onChange={items.onChange}
        required={items.required}
        value={items.value}
      />
    </div>
  );
};

export default SurveryInput;
