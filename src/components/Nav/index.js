import List from '../List';
import './style.scss';

const Nav = () => {
  return (
    <nav className='navigation'>
      <div className='navigation__drawer navigation__docked'>
        <div className='navigation__drawer-primary navigation__drawer-left'>
          <div className='navigation__drawer-header text__center item__center'>
            <h4 className='heading__secondary'>Drawer Head</h4>
          </div>
          <div className='divider'></div>
          <List />
          <div className='divider'></div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
