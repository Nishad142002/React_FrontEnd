import React, { useEffect, useRef, useState } from "react";
import VerticalCard from "./VerticalCard";

const ITEM_WIDTH = 250;

const VerticalCardContainer = ({ moviedata }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const containerRef = useRef();
  const [maxScroll, setMaxScroll] = useState(0);

  const calculateMaxScroll = () => {
    if (containerRef.current) {
      const { scrollWidth, clientWidth } = containerRef.current;

      setMaxScroll(scrollWidth - clientWidth);
    }
  };

  const handleScroll = (scrollAmmount) => {
    const newScrollPosition = scrollPosition + scrollAmmount;

    setScrollPosition(newScrollPosition);

    containerRef.current.scrollLeft = newScrollPosition;
  };

  useEffect(() => {
    calculateMaxScroll();
    window.addEventListener("resize", calculateMaxScroll);
    return () => window.removeEventListener("resize", calculateMaxScroll);
  }, []);

  return (
    <div>
      <div ref={containerRef} className="cardContianer">
        {moviedata.map((elem, idx) => {
          return <VerticalCard key={idx} elem={elem} />;
        })}
      </div>
      <button
        className="scrol-btn scroll-left"
        disabled={scrollPosition <= 0}
        onClick={() => {
          handleScroll(-ITEM_WIDTH);
        }}
      >
        <i class="ri-arrow-left-wide-line"></i>
      </button>
      <button
        className="scrol-btn scroll-right"
        disabled={scrollPosition >= maxScroll}
        onClick={() => {
          handleScroll(ITEM_WIDTH);
        }}
      >
        <i className="ri-arrow-right-wide-line"></i>
      </button>
    </div>
  );
};

export default VerticalCardContainer;
