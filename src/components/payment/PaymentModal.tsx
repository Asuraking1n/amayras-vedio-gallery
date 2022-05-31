import { useClickOutSide } from '../../hook/useClickOutSide'
import './paymentmodal.css'
import { makePayment } from './razorpay/makePayment'
import profile from '../../images/profile-img.png'
import { usePremiumData } from '../../context/premium-context'
const PaymentModal = (props:any) => {
    const {setPremiumData} = usePremiumData()
  let domNode:any = useClickOutSide(()=>{
    props.openModal(false)
  })
  return (
    <>
        <div className=' payment-sec' >
        <div className="payment-modal" ref={domNode}>
            <div className="profile-card">
                <div className='profile-img-payment'><img src={profile} alt="" /></div>
                <div className='price'>
                    Amayra's Premimum <br/>
                    <span>₹ 50</span>
                </div>
            </div>

            <div className="features">
                <div className='premium-benifits'>
                <ol>
                    <li>
                        One Time Payment
                    </li>
                    <li>
                        Several Avatars
                    </li>
                    <li>
                        Add notes on video
                    </li>
                    <li>
                    many more...
                    </li>
                </ol>
                </div>
                <div className='buy-sec'>
                    <button onClick={()=>{makePayment(setPremiumData),props.openModal(false)}}>Buy NOw</button>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default PaymentModal