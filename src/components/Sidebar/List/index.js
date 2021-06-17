import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Item from './ListItem';
import './style.scss';

const List = (props) => {
  const { data } = props;

  return (
    <nav className='list pd-y-1'>
      {data.map((item) => (
        <Item item={item} key={item.key} />
      ))}
    </nav>
  );
};

export default List;
