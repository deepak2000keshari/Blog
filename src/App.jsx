import { useState,useEffect } from 'react'
import { BrowserRouter, Routes, Route,useLocation } from "react-router";
import Website from './Website/Website'
import Home from './Website/Layout/pages/Home'
import About from './Website/Layout/pages/About'
import Signup from './Website/Layout/pages/Auth/Signup';
import Login from './Website/Layout/pages/Auth/Login'
import Logout from './Website/Layout/pages/Auth/Logout'
import PagenotFound from './Website/Layout/pages/PageNotFound';
import Edit from './Website/Layout/pages/Edit'
import Contact from './Website/Layout/pages/Contact';
import Loading from './Website/Layout/pages/Loading';



function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    // Simulate a short delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

 
  
  return loading ? ( <Loading />) : (
   
      <Routes>
        <Route element = {<Website/>}>
            <Route path = '/' element = {<Home/>}/>
            <Route path = '/blog/:edit/:id' element = {<Home/>}/>
            <Route index path = '/Home' element = {<Home/>}/>
            <Route path = '/about' element = {<About/>}/>
            <Route path = '/edit/:id' element = {<Edit/>}/>
            <Route path = '/contact' element = {<Contact/>}/>
            <Route path = "*" element = {<PagenotFound/>}/>
        </Route>
        <Route path = '/signin' element = {<Login/>}/>
        <Route path = '/Signup' element = {<Signup/>}/>
        <Route path = '/logout' element = {<Logout/>}/>
      </Routes>
    // </BrowserRouter>
  )
}
export default App
