import React, { useState } from 'react'

const RecentTransactions = () => {
    const [ open , setOpen] = useState(true)
    const transactions = [ 
        {name:'Hamleys',date:'20 May 2020',amount:'S$ 150',icon:'file-storage',text:'Refund on debit card', text_icon:'business-and-finance',credit:true,  colCode1:'[#009DFF1A]', colCode2:'[#009dff]'},
        {name:'Hamleys',date:'20 May 2020',amount:'S$ 150',icon:'flights',     text:'Charged on debit card',text_icon:'business-and-finance',credit:false, colCode1:'[#009DFF1A]', colCode2:'[#009DFF1A]'},
        {name:'Hamleys',date:'20 May 2020',amount:'S$ 150',icon:'megaphone',   text:'Charged on debit card',text_icon:'business-and-finance',credit:false, colCode1:'[#009DFF1A]', colCode2:'[#009DFF1A]'},
        {name:'Hamleys',date:'20 May 2020',amount:'S$ 150',icon:'file-storage',text:'Charged on debit card',text_icon:'business-and-finance',credit:false, colCode1:'[#009DFF1A]', colCode2:'[#009dff]'}
    ]
  return (
    <div className='w-[350px]'>
        <div className={`flex justify-between p-5 w-[350px] h-[65px] bg-[#F5F9FF] ${open ? 'rounded-t-lg' : 'rounded-lg'} `}>
            <div className='text-[#0C365A] flex items-center gap-2'>
                <i className='fi-exchange text-lg'></i>
                <span className='text-sm font-semibold'>Recent transactions</span>
            </div>
            <i className={`cursor-pointer fi-${open ?'up-arrow':'down-arrow'} text-gray-500`} onClick={()=>setOpen(!open)} ></i>
        </div>
        {open && <><div className='w-[350px] p-5 bg-white rounded-b-lg flex flex-col'>
            {transactions.map((tnx,idx)=>(
                <div key={idx}>
                    <div className='flex gap-2'>
                    <div className={`w-[48px] h-[48px] rounded-full flex justify-center items-center bg-${tnx.colCode1}`}>
                        <i className={`fi-${tnx.icon} text-[#009dff]`}></i>
                    </div>
                    <div className='flex flex-col gap-1 w-[80%] text-sm'>
                        <div className='flex justify-between'>
                            <div className='font-semibold'>{tnx.name}</div>
                            <div className='flex justify-center items-center gap-2'>
                                <div className={`font-bold text-${tnx.credit?'[#01D167]':'[#222222]'}`}>{tnx.amount}</div>
                                <i className='fi-next text-xs text-[#AAAAAA]'></i>
                            </div>
                            
                        </div>
                        <div className='text-[#AAAAAA]'>{tnx.date}</div>
                        <div className='flex gap-2 text-sm'>
                            <div className='w-[24px] h-[20px] bg-[#325BAF] rounded-full flex justify-center items-center'>
                                <i className={`fi-${tnx.text_icon} text-white text-[8px]`}></i>
                            </div>                            
                            <div className='text-[#325BAF]'>{tnx.text}</div>
                        </div>
                    </div>

                </div>
                {idx!=transactions.length-1 && <hr className='my-5'/>}
                </div>
                
            ))}
            </div> 
            <div className='w-[350px] p-5 rounded-b-lg bg-[#EDFFF5] text-center'>
                    <p className='text-[#01D167]'>View all card transactions</p>

            </div>
            </>
        }
    </div>
  )
}

export default RecentTransactions