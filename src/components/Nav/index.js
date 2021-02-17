import './style.css';

import Button from '../Button';
import List from '../List';

const Nav = () => {
  return (
    <nav className='nav'>
      <div className='drawer drawer--docked'>
        <div className='drawer--root drawer--regular drawer--left'>
          <div className='drawer--head'>test</div>
          <div className='divider'></div>
          <List />
          <div className='divider'></div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
