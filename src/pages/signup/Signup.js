import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './signup.css'
const Login = () => {
  const navigate = useNavigate()
    const [userCred,setUserCred] = useState({
        email:'',
        pass:'',
        cpass:''
    })

    const dataHandler=(e)=>{
        let name = e.target.name
        let value = e.target.value
        setUserCred({...userCred,[name]:value})
    }
    const logInUser=async(e)=>{
      e.preventDefault()
      if(userCred.pass === userCred.cpass){
        await axios.post('/api/auth/signup',{
            firstName:'user',
            lastName:'test',
            email:userCred.email,
            password:userCred.password
          })
          .then(res=>{
            console.log(res);
            localStorage.setItem('token',res.data.encodedToken)
            navigate('/')
          }).catch((e)=>console.warn(e))
      }else{
          alert("PASSWORD DONT MATCH")
      }
    }
  return (
    <>
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