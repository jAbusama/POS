import React from 'react';
import { Notifications, AccountCircle } from '@material-ui/icons';
import Search from '../Search';
import ButtonIcon from '../ButtonIcon';
import DropdownMenu from '../DropdownMenu';
import Badge from '../Badge';
import DropdownIten from '../DropdownMenu/DropdownItem';

import './style.scss';

const Header = () => {
	const mockData = [{ data: 'Profile' }, { data: 'Change Password' }];
	const Menu = ({ data, rightIcon, leftIcon }) => (
		<DropdownIten data={data} rightIcon={rightIcon} leftIcon={leftIcon} />
	);

	return (
		<header className='header__appBar header__fix header__width header__primary'>
			<div className='header__appBar-toolbar header__appBar-regular gutter'>
				<div className='header__left'></div>
				<div className='header__right'>
					<div className='header__right-search'>
						<Search />
					</div>
					<div className='divider__vertical'></div>
					<div className='header__right-notification'>
						<ButtonIcon
							icon={
								<Badge icon={<Notifications fontSize='large' />} content={11} />
							}
						></ButtonIcon>
					</div>
					<div className='header__right-profile'>
						<DropdownMenu
							type='btn-icon'
							icon={<AccountCircle fontSize='large' />}
						>
							{mockData.map((item, i) => (
								<React.Fragment key={i}>
									<Menu data={item.data} rightIcon={item.rightIcon} />
								</React.Fragment>
							))}
						</DropdownMenu>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
