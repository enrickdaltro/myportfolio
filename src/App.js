import React from 'react';

import GlobalStyles from './styles/global';

import Header from './components/Header';
import Home from './components/Home';
import Projetos from './components/Projetos';
import Tecnologias from './components/Tecnologias';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Home />
      <Tecnologias />
      <Projetos />
      <Contact />
    </>
  );
}

export default App;
