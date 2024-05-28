import React from 'react'

import './styles/App.scss';
import { Footer } from './footer/footer'
import { Header } from './header/header'
import { Body } from './body/body'

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
