import React, { useEffect, useState } from "react";
import { IoArrowUpOutline } from "react-icons/io5";
const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goTopBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let hieghtToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > hieghtToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div>
      {isVisible && (
        <div className="goToBtn" onClick={goTopBtn}>
          <IoArrowUpOutline className="btn text-3xl font-extrabold" />
        </div>
      )}
    </div>
  );
};

export default GoToTop;
