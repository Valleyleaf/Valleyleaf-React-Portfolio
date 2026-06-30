import './backtotop.css'
import topperLogo from '../../assets/img/logoSVG.svg'
import { useEffect, useState } from "react";

export default function ScrollToTopBtn() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  function handleScroll() {
    setShowScrollBtn(window.scrollY > 0);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={showScrollBtn ? "btn-visible" : "btn-hidden"}
      onClick={() => scrollToTop()}
    >
    
    <img src={topperLogo} alt="logo" className='topperLogo2'/>
    </button>
  );
}