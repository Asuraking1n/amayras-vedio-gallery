import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './signup.css'
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
      await axios.post('/api/auth/login',{
          email:userCred.email,
          password:userCred.pass
        })
        .then((res)=>{
          localStorage.setItem('token',res.data.encodedToken)
          navigate('/')
        })
        .catch((e)=>alert("USER NOT FOUND"))
  
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