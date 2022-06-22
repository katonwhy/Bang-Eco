import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Heroo from './components/Heroo/Heroo';
import HomeAboutUs from './components/HomeAboutUs/HomeAboutUs';
import PageAboutUs from './components/PageAboutUs/PageAboutUs';
import { FooterContainer } from './containers/footer'

//import AvatarTeam from './assets/AvatarTeam';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Heroo />
      <HomeAboutUs />
      <PageAboutUs />
      <FooterContainer/>
    </React.Fragment>
  )
}

export default App;