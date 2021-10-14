import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';
import FancyBackground from './components/FancyBackground';

function App() {
  return (
    <>
      <FancyBackground />
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
