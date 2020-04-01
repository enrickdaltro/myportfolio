import React from 'react';

import GlobalStyles from './styles/global';

import Header from './components/Header';
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Home />
      <Work />
      <About />
    </>
  );
}

export default App;
