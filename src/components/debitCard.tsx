import React, {useState} from 'react';
import eyeImage from '../assests/images/red_eye.svg'

const DebitCard = ({card}:any) => {

    const cardNo = card.cardNumber ;
    
    const [showCardNumber, setShowCardNumber] = useState(false);
    const toggleCardNumberVisibility = () => {
      setShowCardNumber(!showCardNumber);
    };
    const displayCardNumber = () => {
      if (showCardNumber) {
        return cardNo;
      } else {
        const hiddenPart = cardNo.slice(0, -4).replace(/\d/g, '*');
        const visiblePart = cardNo.slice(-4);
        return hiddenPart.replace(/(.{4})/g, '$1 ') + visiblePart;
        }
    };
  return (
    <div>
          <div className='cursor-pointer flex justify-end items-end text-sm text-[#01D167] mb-3 gap-2' onClickCapture={toggleCardNumberVisibility}><img src={eyeImage}/>show card number</div>
        <div>
            <div className={`w-[400px] h-[240px] bg-[#01D167] rounded-3xl text-white p-6 ${card.freeze?'opacity-20':'opacity-100'} `} >
                <div className='flex justify-end mr-12'>
                    <i className='fi-aspire-logo text-lg'></i>
                </div>
                <div className='flex flex-col gap-5 font-bold mt-5'>
                    <div className='text-2xl  transform scale-x-200'>{card.name}</div>
                    <div className='text-xs'>{displayCardNumber()}</div>
                    <div className='flex gap-10 text-xs'>
                        <div>Thru: {card.validThru}</div>
                        <div>CVV: <strong>***</strong></div>
                    </div>
                </div>
                
                <div className='flex justify-end mr-12'>
                    <i className='fi-visa-logo text-2xl'></i>
                </div>
                
                
            </div>
        </div>
    </div>
  )
}

export default DebitCard