import React from 'react';
import Navbar from "./Components/Navbar";
import { FooterContainer } from './containers/footer'

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <FooterContainer/>
    </React.Fragment>
  );
}

export default App;
