// hooks/useScrollParallax.js
import { useEffect } from "react";

/**
 * 使い方
 * const { aniParallaxStyled } = useScrollParallax();
 * style={{ ...aniParallaxStyled }}
 * @param {*} selector
 * @param {*} ratio
 * @returns
 */

export const useScrollParallax = (
  selector = ".tracked-element",
  ratio = 0.2
) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const elements = document.querySelectorAll(selector);

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const offsetTop = rect.top + scrollY;

        if (
          scrollY + windowHeight > offsetTop &&
          scrollY < offsetTop + rect.height
        ) {
          const offset = (scrollY - offsetTop + windowHeight / 2) * ratio;
          el.style.transform = `translateY(${offset}px)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 初回にも実行

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [selector, ratio]);

  return (
    {
      aniParallaxStyled: {
        transition: "transform 2s ease-out",
        willChange: "transform",
      },
    },
    {
      aniParallaxStyled2: {
        transition: "transform 2s ease-out",
        willChange: "transform",
      },
    }
  );
};
