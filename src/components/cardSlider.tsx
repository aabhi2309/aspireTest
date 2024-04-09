import React, { useEffect, useState } from 'react';
import DebitCard from './debitCard';

const CardSlider = ({cards}:any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(()=>{
    localStorage.setItem('currentIndex',JSON.stringify(0))
  },[]) 

  const goToCard = (index: number) => {
    localStorage.setItem('currentIndex',JSON.stringify(index))
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="overflow-hidden w-[400px] h-[280px] ">
        <div className="flex transition-transform duration-500 ease-out">
          {cards.map((card:any, index:number) => (            
             currentIndex == index &&  <DebitCard key={index} card={card} />
          ))}
        </div>
      </div>
      <div className="flex mt-4">
        {cards.map((_:any, index:any) => (
          <button
            key={index}
            className={`h-3 w-3 mx-1 rounded-full ${
              currentIndex === index ? 'bg-[#01D167]' : 'bg-[#01D167] opacity-20'
            }`}
            onClick={() => goToCard(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
