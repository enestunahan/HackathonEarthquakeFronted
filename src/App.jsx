import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import MeetingPlace from './Components/MeetingPlace/MeetingPlace'
import Home from './Components/Home/Home'

function App() {

  return (
    <>
        <Navbar />

          <Routes>
            <Route path = '' element = {<Home/>}/>
            <Route path='/meetingPlace' element = {<MeetingPlace/>}/>
          </Routes>
          
        <Footer/>
    </>
  )
}

export default App
