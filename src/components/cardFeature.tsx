import React from 'react'

const CardFeature = () => {
  const features = [ 
    { icon:'freeze-card', name:'Freeze card' },
    { icon:'set-spend-limit', name:'Set spend limit' },
    { icon:'gpay', name:'Add to GPay' },
    { icon:'replace-card', name:'Replace card' },
    { icon:'deactivate-card', name:'Cancel card' }]
  return (
    <div className='rounded-lg bg-[#EDF3FF] p-5 flex gap-2 w-[400px] text-[#0C365A]'>
      {features.map((ft,idx)=>(
        <div className='max-w-20 flex flex-col justify-center items-center text-center'>
          <div className='w-[32px] h-[32px] bg-[#325BAF] rounded-full flex justify-center items-center'>
            <i className={`fi-${ft.icon} text-white text-2xl`}></i>
          </div>
          <div className='text-xs'>{ft.name}</div>
        </div>
      ))}
      
    </div>
  )
}

export default CardFeature