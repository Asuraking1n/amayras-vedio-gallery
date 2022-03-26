import { createContext, useContext, useEffect,useState } from "react";
import axios from 'axios'
import { useLocation } from "react-router-dom";
const HistoryContext = createContext()


let token = localStorage.getItem('token')
const HistoryProvider = ({ children }) => {
    const [historyData,setHistoryData] = useState([])
    const location = useLocation()
    useEffect(()=>{
        axios.get('/api/user/history',{
            headers:{authorization: token}
        }).then((res)=>setHistoryData(res.data.history))
    },[location])
    return (<>
        <HistoryContext.Provider value={{historyData,setHistoryData}}>
            {children}
        </HistoryContext.Provider>
    </>)
}

const useHistory = () => useContext(HistoryContext)

export { HistoryProvider, useHistory }