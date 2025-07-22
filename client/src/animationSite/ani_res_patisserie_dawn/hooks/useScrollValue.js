import { useEffect, useState } from "react";

export function useScrollValue(offset = 500, factor = 150) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setValue((window.scrollY - offset) / factor);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset, factor]);
  return value;
}
