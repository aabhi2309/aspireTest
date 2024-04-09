import React,{useState} from 'react'
import CardSlider from './cardSlider'
import AddCard from './addCard'
import CardFeature from './cardFeature'
import RecentTransactions from './recentTransactions'
import CardDetails from './cardDetails'
import {DebitCardType} from '../types'

const CardPage = () => {
    const [activeTab, setactiveTab] = useState(0)
    const [openForm , setOpenForm] = useState(false)
    const cardTabs = ['My debit cards','All company cards']
    const [debitCards,setDebitCards] = useState<DebitCardType[]>([{
        cardNumber: '1234567891234567',
        validThru:'12/20',
        name:'Mark Henry'
    },{
        cardNumber: '1087654321987654',
        validThru:'12/23',
        name:'Jack Lee'
    },{
        cardNumber: '1003312122321098',
        validThru:'1/25',
        name:'Sam Bill'
    }])
    return (
        <div className='p-12 w-full z-0'>
            <p>Available Balance</p>
            <div className='flex justify-between'>
                <div className='flex gap-5 mt-3 justify-center items-center'>
                    <div className='bg-[#01D167] text-white rounded text-xs py-1 px-3 font-bold'>S$</div>
                    <div className='font-bold text-lg'>3,000</div>
                </div>
                <button className='bg-[#325BAF] px-4 rounded text-white text-sm text-bold' onClick={()=>setOpenForm(true)}>
                    <i className='fi-add mr-2'></i>
                    <span >New Card</span> </button>
            </div>
            <div className='flex text-xs  gap-5 mt-10'>
                {cardTabs.map((tab,i)=>(
                    <div key={i} className={`cursor-pointer ${activeTab==i?'font-bold border-b-[#23CEFD] pb-2 border-b-4':'opacity-30'}`} onClick={()=>setactiveTab(i)}>{tab}</div>
                ))}
            </div>
            <div className='w-full border border-[#FCFCFC] drop-shadow p-10 flex gap-10 justify-between mt-5'>
                <div className='flex flex-col gap-5'>
                    <CardSlider cards={debitCards}/>
                    <CardFeature/>
                </div>
                <div className='flex flex-col gap-5'>
                    <CardDetails/>
                    <RecentTransactions/>
                </div>
            </div>

            {openForm && <AddCard closeForm={setOpenForm} addCard={setDebitCards}/> }
            
        </div>
        
    )
}

export default CardPage