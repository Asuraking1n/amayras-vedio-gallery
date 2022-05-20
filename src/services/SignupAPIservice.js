import axios from 'axios'
export  const SignupAPIservice=(userData)=> {
    const res =  axios.post('/api/auth/signup',{
        firstName:'user',
        lastName:'test',
        email:userData.email,
        password:userData.password
      })
      return res
}
