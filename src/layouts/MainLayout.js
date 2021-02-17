import React from 'react';

import Header from '../components/Header';
import Nav from '../components/Nav';

import './style.css';

const MainLayout = ({ children }) => {
  return (
    <div className='flex'>
      <Header />
      <Nav />
      <main className='content'>
        <div className='empty-element'></div>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
