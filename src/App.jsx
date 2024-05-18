import { useState } from 'react'
import './App.css'
import Hero from './Components/Hero/Hero'
import InformationMessage from './Components/InformationMessage/InformationMessage'
import Navbar from './Components/Navbar/Navbar'
import earthquakeBag from  './assets/images/depremcantasi.jpg'
import meetingPlace from './assets/images/toplanmayeri.jpg'
import Footer from './Components/Footer/Footer'

function App() {

  const[earthquakeBagMessage,setEarthquakeBagMessage] = useState("Deprem çantası, özellikle afetten sonraki ilk 72 saat içerisinde kendinizin ve sevdiklerinizin acil ihtiyaçlarını temin edebilmeniz için gerekli. Deprem sonrası arama ve kurtarma faaliyetleri başlayana kadar acil ihtiyaçlarınızı hazırladığınız deprem çantasındaki ürünlerle giderebilirsiniz.");
  const[earthquakeBagTitle,setEarthquakeBagTitle] = useState("Deprem Çantası Önemi");
  const[meetingPlaceTitle, setMeetingPlaceTitle] = useState("Toplanma Yeri Önemi");
  const[meetingPlaceMessage, setMeetingPlaceMessage] = useState("Yaşanan depremlerin ardından vatandaşlar paniğe kapılabilmektedir. Deprem sonrasında halk arasındaki paniğin önlenmesi amacıyla kurulan deprem toplanma alanları, sağlıklı bilgi alışverişinin sağlanmasını sağlamaktadır. Vatandaşların depremin ardından kendilerine en yakın acil toplanma yerinde beklemeleri gerekmektedir.");

  return (
    <>
        <Navbar/>
        <Hero/>
        <InformationMessage image={earthquakeBag} title = {earthquakeBagTitle} message = {earthquakeBagMessage} className = "informationMessageContentearthquakeBag"/>
        <InformationMessage image={meetingPlace} title = {meetingPlaceTitle} message = {meetingPlaceMessage} className = "informationMessageContentmeetingPlace"/>
        <Footer/>
    </>
  )
}

export default App
