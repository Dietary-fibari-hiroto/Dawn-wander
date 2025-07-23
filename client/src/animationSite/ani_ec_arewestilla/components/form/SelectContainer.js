const SelectContainer = ({ children, name, onChange }) => {
  return (
    <label>
      <select
        onChange={onChange}
        name={name}
        className={`
    border border-gray-300 rounded-md bg-white px-4 py-2
    shadow-sm text-sm transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-black
    hover:shadow-md cursor-pointer
  `}
      >
        {children}
      </select>
    </label>
  );
};

export default SelectContainer;
