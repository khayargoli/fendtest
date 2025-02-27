
import cardChip from '../assets/chip.svg';

const CreditCard = ({ type, balance, cardHolder, validThru, cardNumber }) => {
    const formattedBalance = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(balance)
    
    return (
      <div className={`${type === 'dark' ? 'credit-card' : 'light-credit-card'} p-6 shadow-lg`}>
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-sm opacity-80">Balance</p>
            <p className="text-2xl font-bold">{formattedBalance}</p>
          </div>
          <div className="w-10 h-10"><img src={cardChip} /></div> {/* Card chip icon placeholder */}
        </div>
        
        <div className="mb-6">
          <p className="text-sm opacity-80">CARD HOLDER</p>
          <p className="font-medium">{cardHolder}</p>
        </div>
        
        <div className="flex justify-between items-end">
          <div>
            <p className="card-number text-lg font-medium">{cardNumber}</p>
          </div>
          <div className="text-right">
            <p className="text-sm opacity-80">VALID THRU</p>
            <p className="font-medium">{validThru}</p>
          </div>
        </div>
        
        <div className="flex justify-end mt-3">
          <div className="w-10 h-6 bg-gray-300 rounded opacity-80"></div> {/* Card network logo placeholder */}
        </div>
      </div>
    )
  }
  
  export default CreditCard