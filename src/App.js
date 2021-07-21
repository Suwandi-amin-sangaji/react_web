import React from 'react';
import Header from './components/Header';
import Feature from './components/Feature';
import About from './components/About';
import Presentation from './components/Presentation';
import aboutimage from './images/Frame 19.png';
import aboutimage1 from './images/download.png';
import Contact from './components/contact';
function App() {
  return (
    <div className="App">
        <Header />
        <Feature />
        <About image= {aboutimage} title='Comes With All You need for daily life' button=' Get The App' />
        <About image= {aboutimage1} title='Download And Get The App Now' button=' Download' />
        <Presentation />
        <Contact />
    </div>
  );
}

export default App;
