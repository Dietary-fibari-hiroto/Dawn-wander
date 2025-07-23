import { motion } from "framer-motion";

const SectionTitle = (items) => {
  return (
    <div className="flex-all-center flex-col space-y-[-20px] py-[50px]">
      <p className="text-hover-lift text-transparent bg-gradient-to-b from-[#000000] to-[#808080] bg-clip-text string-big">
        {items.title}
      </p>
      <p className="text-hover-lift string-s">{items.titleJp}</p>
    </div>
  );
};

export default SectionTitle;
