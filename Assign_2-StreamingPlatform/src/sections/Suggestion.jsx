import React, { useEffect, useRef, useState } from "react";
import VerticalCard from "../component/VerticalCard";
import { actionMovies } from "../assets/assets";

const ITEM_WIDTH = 250;

const Suggestion = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const containerRef = useRef();
  const actionRef = useRef();
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
    <div className="suggestion">
      <div className="cardsSections">
        <h2>Action</h2>
        <div ref={containerRef} className="cardContianer">
          {actionMovies.map((elem, idx) => {
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
          <i class="ri-arrow-right-wide-line"></i>
        </button>
      </div>

      <div className="cardsSections">
        <h2>Drama</h2>
        <div ref={containerRef} className="cardContianer">
          {actionMovies.map((elem, idx) => {
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
          <i class="ri-arrow-right-wide-line"></i>
        </button>
      </div>
    </div>
  );
};

export default Suggestion;
