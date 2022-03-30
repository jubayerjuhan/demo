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
      <Account />
    </div>
  );
}

export default App;
