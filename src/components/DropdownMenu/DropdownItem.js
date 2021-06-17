import React, { useState, useRef } from 'react';
import Ripple from '../../Animations/Ripple';
import { Lock } from '@material-ui/icons';

const DropdownItem = (props) => {
  const { iconRight, iconLeft, data } = props;
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
    <a
      href='#'
      className='dropdown__item'
      key={data}
      ref={buttonRef}
      onClick={onClickButton}
    >
      <Ripple buttonRef={buttonRef} toggle={effects} type='secondary'>
        <span className='dropdown__item-icon'>
          <Lock fontSize='large' />
        </span>
        <span className='dropdown__item-label'>{data}</span>
        {iconLeft && (
          <span className='dropdown__item-iconLeft'>{iconLeft}</span>
        )}
      </Ripple>
    </a>
  );
};

export default DropdownItem;
