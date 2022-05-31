import axios from 'axios'

export const LoginAPIservice = (userData:any) => {
    const res = axios.post('/api/auth/login', {
        email: userData.email,
        password: userData.pass
    })
    return res
}