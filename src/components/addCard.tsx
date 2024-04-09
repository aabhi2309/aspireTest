import React,{useState} from 'react'

const AddCard = ({closeForm,addCard}:any) => {
    const [ formData, setFormData] =useState({name:'',cardNumber:'',validThru:''})

    const handleFormSubmit = (e:any) => {
      e.preventDefault()
      console.log({formData});
      addCard((prev: any)=>[...prev,formData])
      closeForm(false)

      

    }
    const handleChange = (e:any) => {
        const { name, value} =e.target
        setFormData(prev=>({...prev,[name]:value}))

    }
    const closeFormFunc = (e:any) =>{
      e.preventDefault()
      console.log("-----------close");
      closeForm(false)
    }

  return (
    <div className='flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 opacity-100 bg-black w-full h-full z-1 p-20'>
      {/* <form onSubmit={e=>handleFormSubmit(e)} className='flex gap-10 flex-col bg-white rounded-lg p-20'>
        <button onClick={closeForm} className='w-20 border self-end'>Close</button>
        <div className='flex flex-col gap-5'>
          <label>Enter the Card Number</label>
          <input className='border border-l-fuchsia-900' type='text' name='cardNo' value={formData.cardNo} onChange={e=>handleChange(e)}/>
        </div>
        <div className='flex flex-col gap-5'>
          <label>Enter the Cardholder Name</label>
          <input type='text' name='name' value={formData.name} onChange={e=>handleChange(e)}/>
        </div>          
        <div className='flex flex-col gap-5'>
          <label>Enter the Card Expiry</label>
          <input type='text' name='calidThru' value={formData.calidThru} onChange={e=>handleChange(e)}/>
        </div>
        <button type='submit'>ADD CARD</button>

          

          
      </form> */}
      <form onSubmit={handleFormSubmit} className="space-y-6 flex gap-5 flex-col bg-white rounded-md p-10 w-[500px]">
      <button onClick={closeFormFunc} className='w-20 border border-rose-600 self-end -mb-10'>Close</button>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Enter the Cardholder Name
          </label>
          <input
            type="text"
            name="name"
            autoComplete="name"
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
          Enter the Card Number
          </label>
          <input
            type="number"
            name="cardNumber"
            autoComplete="cardNumber"
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={formData.cardNumber}
            // maxLength={16}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="validThru" className="block text-sm font-medium text-gray-700">
          Enter the Card Expiry
          </label>
          <input
            name="validThru"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={formData.validThru}
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            ADD CARD
          </button>
        </div>
      </form>
    </div>
    
  )
}

export default AddCard;