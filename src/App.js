import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/navbar/navbar";
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
import Education from './components/Education/Education'
import SinglePost from './components/SinglePost';
import EducationPage from './components/Education/EducationPage';

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
          <Education />
          <HomeAboutUs />
        </Route>
        <Route path='/post/:id'>
          <SinglePost />
        </Route>
        {/* <Route exact path="/post/:id" component={SinglePost} /> */}
        <Route exact path="/AllEdukasi" component={EducationPage} />
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

      </Switch>
      <FooterContainer />
    </Router>
  )
}

export default App;