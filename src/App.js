import React from 'react';

import GlobalStyles from './styles/global';

import Header from './components/Header';
import Home from './components/Home';
import Work from './components/Work';
import Tecnologias from './components/Tecnologias';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Home />
      <Tecnologias />
      <Work />
    </>
  );
}

export default App;
