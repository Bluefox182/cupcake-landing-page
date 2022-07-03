import { useState } from 'react';

import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import ToggleMenu from './components/ToggleMenu';
import 'swiper/css/bundle';

function App() {
  const [navToggle, setNavToggle] = useState(false);
  return (
    <div className='App'>
      <NavBar navToggle={navToggle} setNavToggle={setNavToggle} />
      <HomePage />
      <ToggleMenu />
    </div>
  );
}

export default App;
