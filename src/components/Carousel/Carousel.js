import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';

const boxes = [1, 2, 3, 4];

const InfiniteSlider = () => {
  const [cur, setCur] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const ref = useRef(null);

  useLayoutEffect(() => {
    const handleTransitionEnd = () => {
      setIsTransitioning(false);
      if (cur === boxes.length + 1) {
        setCur(1);
        ref.current.style.transition = 'none';
        ref.current.style.transform = `translateX(-100px)`;
      } else if (cur === 0) {
        setCur(boxes.length);
        ref.current.style.transition = 'none';
        ref.current.style.transform = `translateX(-${boxes.length * 100}px)`;
      }
    };

    const slider = ref.current;
    slider.addEventListener('transitionend', handleTransitionEnd);

    return () => {
      slider.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [cur]);

  const handleClick = (flag) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    if (flag) {
      setCur((prev) => prev + 1);
      ref.current.style.transition = 'transform 0.5s ease';
      ref.current.style.transform = `translateX(-${(cur + 1) * 100}px)`;
    } else {
      setCur((prev) => prev - 1);
      ref.current.style.transition = 'transform 0.5s ease';
      ref.current.style.transform = `translateX(-${(cur - 1) * 100}px)`;
    }
  };

  return (
    <div id="carousel" style={{ width: '300px', margin: '0 auto', border: '1px blue solid', overflow: "hidden" }}>
      <button onClick={() => handleClick(false)}>Prev</button>
      <button onClick={() => handleClick(true)}>Next</button>
      <div className="container" style={{ display: 'flex', transition: 'transform 0.5s ease', transform:"translateX(-100px)" }} ref={ref}>
        <div style={{ width: '100px', height: '100px', background: 'red', flexShrink: 0, border: '1px blue solid' }}>
          {boxes[boxes.length - 1]}
        </div>
        {boxes.map((item, index) => (
          <div
            key={index}
            style={{
              width: '100px',
              height: '100px',
              background: index === cur - 1 ? 'green' : 'red',
              flexShrink: 0,
              border: '1px blue solid',
            }}
          >
            {item}
          </div>
        ))}
        <div style={{ width: '100px', height: '100px', background: 'red', flexShrink: 0, border: '1px blue solid' }}>
          {boxes[0]}
        </div>
      </div>
    </div>
  );
};

export default InfiniteSlider;
