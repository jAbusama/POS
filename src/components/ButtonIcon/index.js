import React, { useState, useRef } from 'react';
import Ripple from '../../Animations/Ripple';
import './style.scss';

const ButtonIcon = ({ icon, onClick }) => {
  const buttonRef = useRef(null);
  const [effects, setEffects] = useState([]);

  const onClickButton = (e) => {
    updateEffects(e);
    if (onClick) {
      onClick();
    }
  };

  const updateEffects = ({ pageX, pageY }) => {
    const now = Date.now();

    setEffects((prev) => {
      const activeEffects = prev.filter(({ date }) => now - date < 650);
      return [...activeEffects, { date: now, pageX, pageY }];
    });
  };

  return (
    <button ref={buttonRef} className='btn btn__icon' onClick={onClickButton}>
      <Ripple buttonRef={buttonRef} toggle={effects} type={'secondary'}>
        {icon}
      </Ripple>
    </button>
  );
};

export default ButtonIcon;
