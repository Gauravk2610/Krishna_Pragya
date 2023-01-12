import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import Home from './pages/Home';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import KrishnPragya from './pages/KrishnPragya';
import KrishnPragyaDetails from './pages/KrishnPragyaDetails';
import { Modal } from './components/Modal';
import { useEffect, useState } from 'react';
import {Login} from './components/Login';
import { useSelector } from 'react-redux';
import TatTvamAsi from './pages/TatTvamAsi';
import VisionMission from './pages/VisionMission';
import Paintings from './pages/Paintings';
import KrishnsWhispering from './pages/KrishnsWhispering';
import Wallpapers from './pages/Wallpapers';
import Photos from './pages/Photos';
import Videos from './pages/Videos';
import Podcast from './pages/Podcast';
import ScrollToTop from './components/ScrollToTop';
import Subscription from './pages/Subscription';
import Blogs from './pages/Blogs';
import Forum from './pages/Forum';
import Connect from './pages/Connect';
import Team from './pages/Team';
import Subscribe from './components/Subscribe';

function App() {
  const [showModal, setShowModal] = useState(false);

  const user = useSelector(state => state.user.value);

  useEffect(() => {
    // if (!user) {
    //   setTimeout(() => {
    //     setShowModal(true);
    //   }, 10000);
    // }

  }, [])

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Modal isVisible={showModal} >
          <Login setModal={setShowModal} />
        </Modal>
        <Header />
        <Subscribe />
        <Routes>
          <Route path="/vision-and-mission" element={<VisionMission />} />
          <Route path="/krishn-pragya/:vol" element={<KrishnPragyaDetails />} />
          <Route path="/krishn-pragya" element={<KrishnPragya />} />
          <Route path="/krishn's-whispering" element={<KrishnsWhispering />} />
          <Route path="/tat-tvam-asi/:type" element={<TatTvamAsi />} />
          <Route path="/paintings" element={<Paintings />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/wallpapers" element={<Wallpapers />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/blogs" element={<Blogs />} /> 
          <Route path="/forum" element={<Forum />} /> 
          <Route path="/connect" element={<Connect />} /> 
          <Route path="/team" element={<Team />} /> 
          <Route path="/videos" element={<Videos />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>

    </Router>
  );
}

export default App;
