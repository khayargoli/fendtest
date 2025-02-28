import { IconCardChip } from './icon-components/IconCardChip';
import MasterCard from '../assets/icons/mastercard.svg?react';

const CreditCard = ({ type, balance, cardHolder, validThru, cardNumber }) => {
  const formattedBalance = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(balance)

  return (
    <div className={`${type === 'dark' ? 'credit-card' : 'light-credit-card border-[#DFEAF2] border'} min-w-[350px] min-h-[235px]`}>
      <div className='p-6 pb-0 h-[165px]'>
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="font-normal text-[12px] opacity-70">Balance</p>
            <p className="text-[20px] font-semibold">{formattedBalance}</p>
          </div>
          <div className="w-10 h-10"><IconCardChip className={`${type === 'dark' ? 'credit-card' : 'light-credit-card'}`} /></div>
        </div>

        <div className="flex justify-between items-end w-[227px]">
          <div>
            <p className="font-normal text-[12px]  opacity-70">CARD HOLDER</p>
            <p className="font-semibold text-[15px] ">{cardHolder}</p>
          </div>
          <div className="text-right">
            <p className="font-normal text-[12px]  opacity-70">VALID THRU</p>
            <p className="font-semibold text-[15px]">{validThru}</p>
          </div>
        </div>
      </div>

      <div className={`${type !== 'dark' ? 'border-t-[1px] border-solid border-[#DFEAF2]' : 'border-none'} flex justify-between items-center h-[70px] bottom-gradient p-6 `}>
        <p className="text-[15px] md:text-[22px] tracking-[0px] font-semibold">{cardNumber}</p>
        <div className="w-10 h-8" fill={`${type === 'dark' ? '#FFFFFF' : '#9199AF80'} `}><MasterCard /></div>
      </div>
    </div>
  )
}

export default CreditCard