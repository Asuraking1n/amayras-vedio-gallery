import { createContext,useContext,useEffect,useState } from "react";
import axios from 'axios'
import { useLocation } from "react-router-dom";


type contextType={
    ListData:string[],
    setListData?: React.Dispatch<React.SetStateAction<never[]>>
}
const playListContext = createContext({} as contextType)
type childrenType = {
    children :JSX.Element;
}
const PlayListProvider=({children}:childrenType)=>{
    const [ListData,setListData] = useState([])
    const location = useLocation()
    let token = localStorage.getItem('token')
    useEffect(()=>{
        if (token) {
                axios.get(`/api/user/playlists`, {
                headers: {
                    authorization: token 
                }
            }).then((res)=>setListData(res.data.playlists))
        }
    },[location])
    return(
        <playListContext.Provider value={{ListData,setListData}}>
        {children}
        </playListContext.Provider>
    )
}

const usePlayList =()=>useContext(playListContext)

export {usePlayList,PlayListProvider}