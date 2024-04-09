import React, { useState } from 'react';
import DebitCard from './debitCard';

const CardSlider = ({cards}:any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToCard = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="overflow-hidden w-[400px] h-[280px] ">
        <div
          className="flex transition-transform duration-500 ease-out"
          
        >
          {cards.map((card:any, index:number) => (
            
             currentIndex == index &&  <DebitCard key={index} cardNumber={card.cardNumber} validThru = {card.validThru}name={card.name} />
          ))}
        </div>
      </div>
      <div className="flex mt-4">
        {cards.map((_:any, index:any) => (
          <button
            key={index}
            className={`h-2 w-2 mx-1 rounded-full ${
              currentIndex === index ? 'bg-blue-500' : 'bg-gray-400'
            }`}
            onClick={() => goToCard(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
