const SelectContainer = ({ children, name, onChange }) => {
  return (
    <label>
      <select onChange={onChange} className="border-none bg-white" name={name}>
        {children}
      </select>
    </label>
  );
};

export default SelectContainer;
