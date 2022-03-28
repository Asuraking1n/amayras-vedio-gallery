import { createContext,useContext,useEffect,useState } from "react";
import axios from 'axios'
import { useLocation } from "react-router-dom";

const playListContext = createContext()

const PlayListProvider=({children})=>{
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