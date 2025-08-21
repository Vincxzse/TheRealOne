import { useState } from 'react';
import NavigationBar from './components/Navigation/Navigation.jsx';
import HomePage from './components/Home/Home-Page.jsx';
import TechnologiesPage from './components/Technologies/Technologies-Page.jsx';
import PortfolioPage from './components/Portfolio/Portfolio-Page.jsx';
import FooterPage from './components/Footer/Footer-Page.jsx';

function App() {

  return (
    <>
      <div className='flex flex-col justify-start items-center h-full w-full text-white'>
        <NavigationBar />
        <HomePage />
        <TechnologiesPage />
        <PortfolioPage />
        <FooterPage />
      </div>
    </>
  )
}

export default App
