import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import Ripple from '../../../Animations/Ripple';

const ListItem = (props) => {
  const { item } = props;
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
    <NavLink
      to={item.path}
      className='list__item gutter-x-2 list__base list__button'
      ref={buttonRef}
      onClick={onClickButton}
      activeClassName={'item-active'}
      key={item.key}
      exact
    >
      <Ripple buttonRef={buttonRef} toggle={effects} type='secondary'>
        <div className='list__item-icon'>{item.icon}</div>
        <div className='list__item-label'>{item.label}</div>
      </Ripple>
    </NavLink>
  );
};

export default ListItem;
