import React from 'react'
import earthquakeBag from  '../../assets/images/depremcantasi.jpg'
import meetingPlace from '../../assets/images/toplanmayeri.jpg'
import Hero from '../Hero/Hero';
import InformationMessage from '../InformationMessage/InformationMessage';
import { useState } from 'react'

export default function Home() {
  
    
  const[earthquakeBagMessage,setEarthquakeBagMessage] = useState("Deprem çantası, özellikle afetten sonraki ilk 72 saat içerisinde kendinizin ve sevdiklerinizin acil ihtiyaçlarını temin edebilmeniz için gerekli. Deprem sonrası arama ve kurtarma faaliyetleri başlayana kadar acil ihtiyaçlarınızı hazırladığınız deprem çantasındaki ürünlerle giderebilirsiniz.");
  const[earthquakeBagTitle,setEarthquakeBagTitle] = useState("Deprem Çantası Önemi");
  const[meetingPlaceTitle, setMeetingPlaceTitle] = useState("Toplanma Yeri Önemi");
  const[meetingPlaceMessage, setMeetingPlaceMessage] = useState("Yaşanan depremlerin ardından vatandaşlar paniğe kapılabilmektedir. Deprem sonrasında halk arasındaki paniğin önlenmesi amacıyla kurulan deprem toplanma alanları, sağlıklı bilgi alışverişinin sağlanmasını sağlamaktadır. Vatandaşların depremin ardından kendilerine en yakın acil toplanma yerinde beklemeleri gerekmektedir.");
  
  
    return (
    <div>
        <Hero/>
        <InformationMessage image={earthquakeBag} title = {earthquakeBagTitle} message = {earthquakeBagMessage} className = "informationMessageContentearthquakeBag"/>
        <InformationMessage image={meetingPlace} title = {meetingPlaceTitle} message = {meetingPlaceMessage} className = "informationMessageContentmeetingPlace"/>
    </div>
  )
}
