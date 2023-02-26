import { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { Wrapper } from "./styles";

import logoScroll from "../../assets/svg/ico_arrow_circle_up.svg";

const ScrollToTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    scroll.scrollTo(0, { delay: 1, duration: 10 });
  };

  return (
    <Wrapper
      onClick={() => scrollTop()}
      visible={scrollPosition >= 158 ? "visible" : "invisible"}>
      <img src={logoScroll} width={24} height={24} alt="ico_arrow_circle_up" />
    </Wrapper>
  );
};

export default ScrollToTop;
