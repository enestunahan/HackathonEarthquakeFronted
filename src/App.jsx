import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { Route, Routes , useLocation } from 'react-router-dom'
import MeetingPlace from './Components/MeetingPlace/MeetingPlace'
import Home from './Components/Home/Home'
import MeetingPlaceDetail from './Components/MeetingPlaceDetail/MeetingPlaceDetail'
import Admin from './Components/Admin/Admin'

function App() {

  const location = useLocation();
  const showNavbarAndFooter = location.pathname !== '/admin';

  return (
    <>
        {showNavbarAndFooter && <Navbar /> }  

          <Routes>
            <Route path = '' element = {<Home/>}/>
            <Route path='/meetingPlace' element = {<MeetingPlace/>}/>
            <Route path='/meetingPlaceDetail/:placeId' element = {<MeetingPlaceDetail/>}/>
            <Route path='/admin' element= {<Admin/>}/> 
          </Routes>
          
        {showNavbarAndFooter && <Footer/>}  
    </>
  )
}

export default App
