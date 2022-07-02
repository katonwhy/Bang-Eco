import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Heroo from './components/Heroo/Heroo';
import HomeAboutUs from './components/HomeAboutUs/HomeAboutUs';
import PageAboutUs from './components/PageAboutUs/PageAboutUs';
import ReqDonation from './components/ReqDonation/ReqDonation';
import InfoDonasi from './components/InfoDonasi';
import Berita from './components/News';
import DonationArticle from './pages/AllDonation/InfoDonation';
import NewsArticle from './pages/AllNews/News';
import {FooterContainer} from './containers/footer';
import Table from './components/Table';
import DetailDonasi from './components/PageDetailDonasi/PageDetailDonasi';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Heroo />
          <Table />
          <InfoDonasi/>
          <Berita/>
          <HomeAboutUs />
        </Route>
        <Route path='/AllNews'>
          <NewsArticle/>
        </Route>
        <Route path='/ReqDonation'>
          <ReqDonation />
        </Route>
        <Route path='/PageAboutUs'>
          <PageAboutUs />
        </Route>
        <Route path='/AllDonationPage'>
          <DonationArticle />
        </Route>
        <Route path='/DetailDonationPage'>
          <DetailDonasi />
        </Route>
      </Switch>
      <FooterContainer />
    </Router>
  )
}

export default App;