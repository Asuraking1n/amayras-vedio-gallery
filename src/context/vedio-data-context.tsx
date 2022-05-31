import { createContext, useContext, useEffect,useState } from "react";
import axios from 'axios'

const videoContext = createContext({})

type childrenType = {
    children :JSX.Element;
}

const VideoProvider = ({ children }:childrenType) => {
    const [vedioData,setVedioData] = useState()
    useEffect(() => {
            axios.get('/api/videos')
            .then(res => setVedioData(res.data.videos))
    }, [])
    return (<>
        <videoContext.Provider value={{vedio:vedioData}}>
            {children}
        </videoContext.Provider>
    </>)
}

const useVedioData = () => useContext(videoContext)

export { VideoProvider, useVedioData }