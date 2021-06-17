import React, { useState } from 'react';
import ButtonIcon from '../ButtonIcon';
import './style.scss';

const Dropdown = ({
  children,
  icon,
  type,
  menuList = [{ data: 'Profile' }, { data: 'Change Password' }],
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {type == 'btn-icon' && (
        <ButtonIcon icon={icon} onClick={() => setOpen(!open)} />
      )}
      {open && (
        <div className='dropdown'>
          <div className='dropdown__menu'>{children}</div>
        </div>
      )}
    </>
  );
};

export default Dropdown;
