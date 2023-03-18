import './components/charts/ChartjsConfig';

import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import DMM from './pages/dashboard/DMM';
import RPL from './pages/dashboard/RPL';
import TKJ from './pages/dashboard/TKJ';
import Home from './pages/Home';

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/dashboard/tkj" element={<TKJ />} />
        <Route path="/dashboard/dmm" element={<DMM />} />
        <Route path="/dashboard/rpl" element={<RPL />} />
      </Routes>
    </>
  );
}

export default App;
