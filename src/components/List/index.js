import React, { useRef, useState } from 'react';
import Ripple from '../../Animations/Ripple';
import './style.css';

const List = () => {
  const buttonRef = useRef(null);
  const [effects, setEffects] = useState([]);

  const onClickButton = (e) => {
    updateEffects(e);
  };

  const updateEffects = ({ pageX, pageY }) => {
    const now = Date.now();

    setEffects((prev) => {
      const activeEffects = prev.filter(({ date }) => now - date < 650);
      return [...activeEffects, { date: now, pageX, pageY }];
    });
  };

  const renderEffect = (effect, effectClassName) => {
    const button = buttonRef.current;
    if (button === null) {
      return null;
    }

    const { top, left } = button.getBoundingClientRect();
    const diameter = Math.max(button.offsetWidth, button.offsetHeight);

    const offsetTop = top + window.pageYOffset;
    const offsetLeft = left + window.pageXOffset;
    const className = `${effect} ${effectClassName}`;

    return effects.map(({ date, pageX, pageY }) => (
      <Ripple
        key={date}
        top={pageY - offsetTop}
        left={pageX - offsetLeft}
        size={diameter}
        className={className}
      />
    ));
  };

  return (
    <nav className='list pd-y-1'>
      <div
        className='list__item gutter-x-2 list__base list__item-button'
        ref={buttonRef}
        onClick={onClickButton}
      >
        <div className='list__item-icon'>Icon</div>
        <div className='list__item-label'>Label</div>
        {renderEffect()}
      </div>
    </nav>
  );
};

export default List;
