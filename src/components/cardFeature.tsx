import React from 'react'
import { FeaturesType } from '../types'

const CardFeature = (props:any) => {
  const features:FeaturesType[]= [ 
    { id:'freeze-card', name:'Freeze card'},
    { id:'set-spend-limit', name:'Set spend limit' },
    { id:'gpay', name:'Add to GPay' },
    { id:'replace-card', name:'Replace card' },
    { id:'deactivate-card', name:'Cancel card' }]
    const handleClick = (ft:FeaturesType) =>{
      console.log(ft.id,"is CLicked");
      let currIdx = localStorage.getItem('currentIndex') ?? 0
      if(ft.id=="freeze-card"){
        props.freezeCard((prevCards: any[]) => {
          return prevCards.map((card:any, i:any) => {
              if (i == currIdx) {
                  return { ...card, freeze: !card.freeze };
              }
              return card;
          });
      });

      }
       
      
      

    }
  return (
    <div className='rounded-lg bg-[#EDF3FF] p-5 flex gap-2 w-[400px] text-[#0C365A]'>
      {features.map((ft:FeaturesType,idx:number)=>(
        <div key={idx} className='cursor-pointer max-w-20 flex flex-col justify-center items-center text-center' onClick={()=>handleClick(ft)}>
          <div className='w-[32px] h-[32px] bg-[#325BAF] rounded-full flex justify-center items-center'>
            <i className={`fi-${ft.id} text-white text-2xl`}></i>
          </div>
          <div className='text-xs'>{ft.name}</div>
        </div>
      ))}
      
    </div>
  )
}

export default CardFeature