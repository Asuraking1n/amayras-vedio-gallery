import { createContext, useContext, useEffect,useState } from "react";
import axios from 'axios'
import { useLocation } from "react-router-dom";
const WatchLaterContext = createContext()



const WatchLaterProvider = ({ children }) => {
    const [WatchLaterData,setWatchLaterData] = useState([])
    const location = useLocation()
    let token = localStorage.getItem('token')
    useEffect(()=>{
        if(token){
            axios.get('/api/user/watchlater',{
                headers:{authorization: token}
            }).then((res)=>setWatchLaterData(res.data.watchlater))
        }
    },[location])
    return (<>
        <WatchLaterContext.Provider value={{WatchLaterData,setWatchLaterData}}>
            {children}
        </WatchLaterContext.Provider>
    </>)
}      

const useWatchLater = () => useContext(WatchLaterContext)

export { WatchLaterProvider, useWatchLater }