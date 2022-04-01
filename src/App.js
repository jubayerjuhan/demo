import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import logo from './assets/navlogo.svg'
import Navbar from './components/Navbar/Navbar.jsx';
import AboutUs from './Pages/About Us/AboutUs.jsx';
import Account from './Pages/Account Page/Account.jsx';
import StakePool from './Pages/StakePool/StakePool.jsx';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <AboutUs /> */}
      {/* <StakePool /> */}
      {/* <Account /> */}
      <Router>
        <Routes>
          <Route path='/about-us' element={<AboutUs />} />
          <Route exact path='/' element={<AboutUs />} />
          <Route path='/stake-pool' element={<StakePool />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
