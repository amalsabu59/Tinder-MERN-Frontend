import './App.css';
import Dashbord from './pages/Dashbord';
import Home from './pages/Home';
import Onboarding from './pages/Onboarding';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useCookies } from 'react-cookie'


function App() {
  const [cookies, setCookie, removeCookie] = useCookies(null)
  const user = cookies.User
  console.log(user)
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"}  element={user ? <Dashbord/>  : <Home />} />
        <Route path={"/dashbord"} element={user ? <Dashbord /> : <Home/>} />
        <Route path={"/onboarding"} element={<Onboarding />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
