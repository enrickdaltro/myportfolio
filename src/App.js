import React from 'react';
import Favicon from 'react-favicon';

import GlobalStyles from './styles/global';
import faviconsource from './assets/Ellipse 1.png';

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
      <Favicon url={faviconsource} />
      <Contact />
    </>
  );
}

export default App;
