import { initializeRazorpay } from "./initializeRazorpay";
import { toast } from "react-toastify";
const makePayment = async (setPremiumData) => {
  const res = await initializeRazorpay();
  if (!res) {
    alert("Razorpay SDK Failed to load");
    return;
  }
  const notify = (msg) => toast(msg,{
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    })
  var options = {
    key: "rzp_test_LOK2Oboy6YH5gw", 
    key_id: "rzp_test_LOK2Oboy6YH5gw",
    key_secret: "sxIbBI0dELrrB0p6gJzwh9ID",
    name: "Amayra's Group",
    currency: "INR",
    amount: 50 * 100,
    description: "Thankyou for your test purchase",

    handler: function (response) {
        setPremiumData(true)
        sessionStorage.setItem('isPremium',true)
      notify(
        `Your payment is done with orderno-,${response.razorpay_payment_id}`
      );
    },
    prefill: {
      name: "Amayra's Gallery",
      email: "nishant_admin@amayra.com",
      contact: "+91 7880647182",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};

export { makePayment };
