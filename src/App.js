import React from 'react';
<<<<<<< HEAD
import Navbar from "./Components/Navbar";
import { FooterContainer } from './containers/footer'

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <FooterContainer/>
    </React.Fragment>
  );
=======
import './App.css';
import Heroo from './components/Heroo/Heroo';
import HomeAboutUs from './components/HomeAboutUs/HomeAboutUs';
import PageAboutUs from './components/PageAboutUs/PageAboutUs';

//import AvatarTeam from './assets/AvatarTeam';

function App() {
  return (
    <div>
      <h1>Navbar</h1>
      <Heroo />
      <HomeAboutUs />
      {/*<OurTeam img={AvatarTeam.dp1} name='Mohammad Adji Febriansyah' />
      <OurTeam img={AvatarTeam.dp2} name='Mohammad Adji Febriansyah' />
      <OurTeam img={AvatarTeam.dp3} name='Mohammad Adji Febriansyah' />
      <OurTeam img={AvatarTeam.dp4} name='Mohammad Adji Febriansyah' />
      <OurTeam img={AvatarTeam.dp5} name='Mohammad Adji Febriansyah' />*/}
      <PageAboutUs />
      
      <h1>Footer</h1>
    </div>
  )
>>>>>>> f28656570e8747d90cae2825be0ed0d09b70433e
}

export default App;