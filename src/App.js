import React, { useEffect, useState } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Cards from './containers/Cards';
import Main from './containers/Main';
import Service from './containers/Service';
import Tablet from './containers/Tablet';
import Team from './containers/Team';
import { FaArrowCircleUp } from 'react-icons/fa';
import Loader from './components/Loader/Loader';
function App() {

  const [showScroll, setShowScroll] = useState(false)
  const [loader, setLoader] = useState(<React.Fragment>
    <Loader></Loader>
  </React.Fragment>)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 1250) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 1250) {
      setShowScroll(false)
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop)




  useEffect(() => {
    setTimeout(() => {
      setLoader(<React.Fragment>
        <Header />
        <Main />
        <Cards />
        <Tablet />
        <Team />
        <Service />
      </React.Fragment>)
    }, 3200)
  }, [])

  return (
    <div className="App">
      <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{ height: 50, display: showScroll ? 'flex' : 'none' }} />
      {loader}
    </div>
  );
}

export default App;
