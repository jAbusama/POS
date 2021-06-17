import React from 'react';
import './style.scss';

const Badge = ({ icon, content, color, className }) => {
  return (
    <div className='badge'>
      {icon}
      <span className='badge__icon'>{content > 10 ? 10 + '+' : content}</span>
    </div>
  );
};

export default Badge;
