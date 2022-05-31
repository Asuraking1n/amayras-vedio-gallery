import { createContext, useContext, useEffect,useState } from "react";
import axios from 'axios'
import { useLocation } from "react-router-dom";

type contextType={
    historyData:string[],
    setHistoryData: React.Dispatch<React.SetStateAction<never[]>> 
}
const HistoryContext = createContext({} as contextType)


type childrenType = {
    children :JSX.Element;
}


const HistoryProvider = ({ children }:childrenType) => {
    const [historyData,setHistoryData] = useState([])
    const location = useLocation()
    let token = localStorage.getItem('token')
    useEffect(()=>{
        if(token){
            axios.get('/api/user/history',{
                headers:{authorization: token}
            }).then((res)=>setHistoryData(res.data.history))
        }
    },[location])
    return (<>
        <HistoryContext.Provider value={{historyData,setHistoryData}}>
            {children}
        </HistoryContext.Provider>
    </>)
}

const useHistory = () => useContext(HistoryContext)

export { HistoryProvider, useHistory }