import React from 'react';
import { RouterConfig } from '../navigation/RouterConfig';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

import './style.css';

const MainLayout = ({ children }) => {
	return (
		<div className='flex'>
			<Header />
			<Sidebar />

			<main className='content'>
				<div className='empty-element'></div>
				<RouterConfig />
			</main>
		</div>
	);
};

export default MainLayout;
