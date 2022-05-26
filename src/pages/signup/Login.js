
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import './signup.css'
import { LoginAPIservice } from '../../services/LoginAPIservice';
const Login = () => {
  const navigate = useNavigate()
    const [userCred,setUserCred] = useState({
        email:'',
        pass:''
    })
    const dummyUser = {
      email: "nishant@gmail.com",
      pass: "nishant"
    }
    const notify = (msg) => toast(msg,{
      autoClose:1000
    });
    const addDummyUser=(e)=>{
      e.preventDefault()
      setUserCred(dummyUser)
    }
    const dataHandler=(e)=>{
        let name = e.target.name
        let value = e.target.value
        setUserCred({...userCred,[name]:value})
    }
 

    const logInUser=async(e)=>{
      e.preventDefault();
      try {
        const res = await LoginAPIservice(userCred)
        if(res.status === 200){
          localStorage.setItem('token',res.data.encodedToken)
          localStorage.setItem('name',res.data.foundUser.firstName)
          navigate('/vedios')
        }
      } catch (error) {
        notify('User Not Found Sign UP first')
        setTimeout(()=>navigate('/signup'),3000)
      }
    }
  return (
    <>
    
        <div className="vedioListing-cont-sec login-sec">
        <div className="vediolisting-heading login-heading">Log In</div>
        <div className="login-sec-cont">
        <div className="login-mail-sec">
            <span>Username or Email</span>
            <input type="mail" value={userCred.email} name='email' onChange={dataHandler}/>
        </div>
        <div className="login-mail-sec">
            <span>Password</span>
            <input type="password" value={userCred.pass} name='pass' onChange={dataHandler}/>
        </div>
        <button onClick={addDummyUser}>Click to add dummy data</button>
        <button onClick={logInUser}>LOG IN</button>
        </div>
        
      </div>
    </>
  )
}

export default Login