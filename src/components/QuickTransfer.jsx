// components/QuickTransfer.jsx
import { useState } from 'react'

const QuickTransfer = () => {
  const [amount, setAmount] = useState('')
  const [selectedContact, setSelectedContact] = useState(null)
  
  const contacts = [
    { id: 1, name: 'Livia Bator', role: 'CEO', avatar: null },
    { id: 2, name: 'Randy Press', role: 'Director', avatar: null },
    { id: 3, name: 'Workman', role: 'Designer', avatar: null }
  ]
  
  const handleSend = () => {
    console.log(`Sending $${amount} to ${selectedContact?.name}`)
    // In a real app, this would call an API
    setAmount('')
    setSelectedContact(null)
  }
  
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="font-bold text-lg mb-6">Quick Transfer</h3>
      
      <div className="flex space-x-4 mb-8 overflow-x-auto py-2">
        {contacts.map((contact) => (
          <button
            key={contact.id}
            className={`flex flex-col items-center space-y-2 min-w-[80px] ${
              selectedContact?.id === contact.id ? 'opacity-100' : 'opacity-70'
            }`}
            onClick={() => setSelectedContact(contact)}
          >
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div> {/* Avatar placeholder */}
            <p className="text-sm font-medium">{contact.name}</p>
            <p className="text-xs text-gray-500">{contact.role}</p>
          </button>
        ))}
        <button className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mt-1">
          <div className="w-6 h-6 bg-gray-400 rounded-full"></div> {/* More button placeholder */}
        </button>
      </div>
      
      <div className="flex space-x-2">
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
          className={`px-5 rounded-lg flex items-center justify-center space-x-2 ${
            amount && selectedContact
              ? 'bg-gray-900 text-white'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          <span>Send</span>
          <div className="w-5 h-5 bg-gray-300 rounded"></div> {/* Send icon placeholder */}
        </button>
      </div>
    </div>
  )
}

export default QuickTransfer
