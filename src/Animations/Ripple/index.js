import React, { useState, useRef, useEffect } from 'react';
import Ripple from './Ripple';

const Effect = ({ buttonRef, toggle, children, type = 'default' }) => {
  // const buttonRef = useRef(null);
  // const [effects, setEffects] = useState([]);

  // const onClickButton = (e) => {
  //   updateEffects(e);
  // };

  // const updateEffects = ({ pageX, pageY }) => {
  //   const now = Date.now();

  //   setEffects((prev) => {
  //     const activeEffects = prev.filter(({ date }) => now - date < 650);
  //     return [...activeEffects, { date: now, pageX, pageY }];
  //   });
  // };
  const [effects, setEffects] = useState(toggle);
  useEffect(() => {
    setEffects(toggle);
  }, [buttonRef, toggle]);

  const renderRipple = () => {
    const button = buttonRef.current;
    if (button === null) {
      return null;
    }

    const { top, left } = button.getBoundingClientRect();
    const diameter = Math.max(button.offsetWidth, button.offsetHeight);

    const offsetTop = top + window.pageYOffset;
    const offsetLeft = left + window.pageXOffset;
    // const className = `${effect} ${effectClassName}`;

    return effects.map(({ date, pageX, pageY }) => (
      <Ripple
        key={date}
        top={pageY - offsetTop}
        left={pageX - offsetLeft}
        size={diameter}
        type={type}
        // className={className}
      />
    ));
  };

  return (
    <>
      {children}
      {renderRipple()}
    </>
  );
};

export default Effect;
