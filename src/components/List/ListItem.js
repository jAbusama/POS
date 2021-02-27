import React, { useState, useRef } from 'react';
import Ripple from '../../Animations/Ripple';

const ListItem = () => {
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

  return (
    <div
      className='list__item gutter-x-2 list__base list__button'
      ref={buttonRef}
      onClick={onClickButton}
    >
      <Ripple buttonRef={buttonRef} toggle={effects} type='secondary'>
        <div className='list__item-icon'>Icon</div>
        <div className='list__item-label'>Label</div>
      </Ripple>
    </div>
  );
};

export default ListItem;
