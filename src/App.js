import './App.css';
import Header from './pages/Header';
import Dashbord from './pages/Dashbord';
import Home from './pages/Home';
import Onboarding from './pages/Onboarding';
import SwipeButtons from './pages/SwipeButtons';
import TinderCards from './pages/TinderCards';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
   <BrowserRouter>
   <Routes>
<Route path={"/"} element={<Home/>}/>
<Route path={"/dashbord"} element={<Dashbord/>}/>
<Route path={"/onboarding"} element={<Onboarding/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
