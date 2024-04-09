import React,{useState} from 'react';

const CardDetails = () => {
    const [ open , setOpen] = useState(true)
  return (
    <div className='w-[350px]'>
        <div className={`flex justify-between p-5 w-[350px] h-[65px] bg-[#F5F9FF] ${open ? 'rounded-t-lg' : 'rounded-lg'} `}>
            <div className='text-[#0C365A] flex items-center gap-2'>
                <i className='fi-group-11889 text-lg'></i>
                <span className='text-sm font-semibold'>Card Details</span>
            </div>
            <i className={`cursor-pointer fi-${open ?'up-arrow':'down-arrow'} text-gray-500`} onClick={()=>setOpen(!open)} ></i>
        </div>
        {open && <div className='w-[350px] p-5 bg-white rounded-b-lg flex flex-col'>
            <p>NO DATA TO SHOW</p>
        </div>
        }
    </div>
  )
}

export default CardDetails