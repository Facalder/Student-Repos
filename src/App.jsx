import './components/charts/ChartjsConfig';

import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

// Pages
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
      </Routes>
    </>
  );
}

export default App;
