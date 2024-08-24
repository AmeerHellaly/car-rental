import React from 'react'
import masterCard from '../../assets/all-images/master-card.jpg'
import payPal from '../../assets/all-images/paypal.jpg'
import '../../styles/payment.css'
const PaymentMethod = () => {
  return (
    <>
    <div className='payment'>
        <label htmlFor="direct-bank" className='d-flex align-items-center gap-2'>
            <input type="radio" id='direct-bank' name='paypal' /> Direct Bank Transfer
        </label>
        
    </div>
    <div className='payment mt-3'>
        <label htmlFor="cheque-payment" className='d-flex align-items-center gap-2'>
            <input type="radio"  id='cheque-payment' name='paypal'/> Cheque Payment
        </label>
        
    </div>
    <div className='payment mt-3 d-flex align-items-center justify-content-between'>
        <label htmlFor="master-card" className='d-flex align-items-center gap-2'>
            <input type="radio" id='master-card' name='paypal' /> Master Card
        </label>
        <img src={masterCard} alt="" />
    </div>
    <div className='payment mt-3 d-flex align-items-center justify-content-between'>
        <label htmlFor="paypal" className='d-flex align-items-center gap-2'>
            <input type="radio"  id='paypal' name='paypal'/> Paypal
        </label>
        <img src={payPal} alt="" />
    </div>
    <div className='payment text-end mt-5'>
        <button>Reserve Now</button>
    </div>
    </>
  )
}

export default PaymentMethod