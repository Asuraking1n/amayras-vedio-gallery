import { createContext,useContext,useEffect,useState } from "react";
import axios from 'axios'
import { useLocation } from "react-router-dom";

const LikeContext = createContext()
let token = localStorage.getItem('token')
const LikeProvider=({children})=>{
    const [LikedData,setLikedData] = useState([])
    const location = useLocation()
    useEffect(()=>{
        if (token) {
                axios.get(`/api/user/likes`, {
                headers: {
                    authorization: token 
                }
            }).then((res)=>setLikedData(res.data.likes))
        }
    },[location])
    return(<>
        <LikeContext.Provider value={{LikedData,setLikedData}}>
            {children}
        </LikeContext.Provider>
    </>)
}

const useLike =()=>useContext(LikeContext)
export {useLike,LikeProvider }