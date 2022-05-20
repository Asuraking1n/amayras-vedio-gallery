
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { SignupAPIservice } from '../../services/SignupAPIservice';

import './signup.css'
const Login = () => {
  const navigate = useNavigate()
    const [userCred,setUserCred] = useState({
        email:'',
        pass:'',
        cpass:''
    })
    const notify = (msg) => toast(msg);
    const dataHandler=(e)=>{
        let name = e.target.name
        let value = e.target.value
        setUserCred({...userCred,[name]:value})
    }
    const logInUser=async(e)=>{
      e.preventDefault()
      if(userCred.pass === userCred.cpass){
        try {
          const res = await SignupAPIservice(userCred)
          localStorage.setItem('token',res.data.encodedToken)
          navigate('/')
        } catch (error) {
          notify('Got API Error, Refresh and retry')
        }
      }else{
        notify("PASSWORD DON'T MATCH")
      }
    }
  return (
    <><ToastContainer />
        <div className="vedioListing-cont-sec signup-sec">
        <div className="vediolisting-heading login-heading">Sign Up</div>
        <div className="login-sec-cont">
        <div className="login-mail-sec">
            <span>Email</span>
            <input type="mail" value={userCred.email} name='email' onChange={dataHandler}/>
        </div>
        <div className="login-mail-sec">
            <span>Password</span>
            <input type="password" value={userCred.pass} name='pass' onChange={dataHandler}/>
        </div>
        <div className="login-mail-sec">
            <span>ReEnter Password</span>
            <input type="password" value={userCred.cpass} name='cpass' onChange={dataHandler}/>
        </div>
        <button onClick={logInUser}>SIGN UP</button>
        </div>
        
      </div>
    </>
  )
}

export default Login