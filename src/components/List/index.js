import React, { useRef, useState } from 'react';
import Item from './ListItem';
import './style.scss';

const List = () => {
  return (
    <nav className='list pd-y-1'>
      <Item />
    </nav>
  );
};

export default List;
