import React from 'react'

const Sidebar = () => {
    const sideTabs = [ {icon:'home',name:'Home'},{icon:'pay',name:'Cards'},{icon:'payments',name:'Payments'},{icon:'credit',name:'Credit'},{icon:'account',name:'Settings'} ]
  return (
    <div className='p-10 bg-[#0C365A] w-[30rem] h-[700px]'>
        <div>
            <i className='fi-aspire-logo text-3xl text-[#01D167]'></i>
            <p className='text-sm leading-5 opacity-30 text-white mt-5'>Trusted way of banking for 3,000+ SMEs and startups in Singapore</p>
        </div>
        <div className='flex flex-col gap-10 my-20 text-white'>
            {sideTabs.map((tab,i)=>(
                <div className='flex gap-4'>
                    <i className={`fi-${tab.icon}`}></i>
                    <span>{tab.name}</span>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default Sidebar