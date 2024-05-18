import React from 'react'
import './InformationMessage.css'
import earthquakeBag from '../../assets/images/depremcantasi.jpg'

export default function InformationMessage() {
  return (
    <div className='informationMessage'>
        <div className='informationMessageContent'>
            <div className='informationMessageTitle'>
                <h1> Deprem Çantası Önemi </h1>            
            </div>
            <div className='informationMessageBody'>
                 <img src={earthquakeBag} alt="" />
                 <p>Deprem çantası, özellikle afetten sonraki ilk 72 saat içerisinde kendinizin ve sevdiklerinizin acil ihtiyaçlarını temin edebilmeniz için gerekli. Deprem sonrası arama ve kurtarma faaliyetleri başlayana kadar acil ihtiyaçlarınızı hazırladığınız deprem çantasındaki ürünlerle giderebilirsiniz.</p>
            </div>
        </div>
    </div>
  )
}
