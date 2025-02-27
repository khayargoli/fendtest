// components/QuickTransfer.jsx
import { useState } from 'react'
import SendIcon from '../assets/icons/send.svg?react';

import RightArrow from '../assets/icons/right-arrow.svg?react';
import personOne from '../assets/icons/p1.png';
import personTwo from '../assets/icons/p2.png';
import personThree from '../assets/icons/p3.png';

const QuickTransfer = () => {
  const [amount, setAmount] = useState('')
  const [selectedContact, setSelectedContact] = useState(null)

  const contacts = [
    { id: 1, name: 'Livia Bator', role: 'CEO', avatar: personOne },
    { id: 2, name: 'Randy Press', role: 'Director', avatar: personTwo },
    { id: 3, name: 'Workman', role: 'Designer', avatar: personThree }
  ]

  const handleSend = () => {
    console.log(`Sending $${amount} to ${selectedContact?.name}`)
    // In a real app, this would call an API
    setAmount('')
    setSelectedContact(null)
  }

  return (
    <div className="w-full max-h-[325px]">
      <div className="flex justify-between items-center mb-4">
        <label className="font-semibold text-[22px]">Quick Transfer</label>
      </div>
      <div className="bg-white rounded-[40px] h-[275px] p-7">
        <div className='flex items-center justify-between'>
          <div className="flex space-x-8  overflow-x-auto items-center pr-1">
            {contacts.map((contact) => (
              <button
                key={contact.id}
                className={`flex flex-col items-center space-y-2 min-w-[80px] `}
                onClick={() => setSelectedContact(contact)}
              >
                <div className="w-[70px] h-[70px]"><img className='rounded-full' src={contact.avatar} /></div>
                <p className="text-sm font-medium">{contact.name}</p>
                <p className="text-xs text-[#718EBF]">{contact.role}</p>
              </button>
            ))}
          </div>
          <button className="flex items-center justify-center w-12 h-12 bg-white rounded-full mt-1 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-6 h-6 flex justify-center items-center">
              <RightArrow />
            </div>
          </button>
        </div>
        {/* <div className="flex space-x-2">
          <div className="flex-1">
            <label className="block text-sm text-gray-500 mb-1">Write Amount</label>
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="525.50"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button
            onClick={handleSend}
            disabled={!amount || !selectedContact}
            className={`px-5 rounded-lg flex items-center justify-center space-x-2 ${amount && selectedContact
              ? 'bg-gray-900 text-white'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
          >
            <span>Send</span>
            <div className="w-5 h-5"><SendIcon /></div>
          </button>
        </div> */}

        <div className="flex items-center relative mt-10">
          <span className="mr-2 text-[16px] font-normal text-[#718EBF]">Write Amount</span>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="525.50"
            className="border-none outline-none ml-[15px] pl-[25px] rounded-full bg-gray-100 mr-2 w-[225px] h-[50px]  text-[#718EBF]"
          />
          <button className="border-none justify-center outline-none w-[125px] h-[50px] rounded-full bg-[#232323] text-white flex items-center absolute right-0 top-1/2 transform -translate-y-1/2"
            onClick={handleSend}
            disabled={!amount || !selectedContact}>
            Send &nbsp;
            <SendIcon />
          </button>

        </div>
      </div>
    </div >


  )
}

export default QuickTransfer
