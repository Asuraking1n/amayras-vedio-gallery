import { createContext,useContext,useState } from "react";


type contextType={
    PremiumData:boolean | string,
    setPremiumData: React.Dispatch<React.SetStateAction<string | boolean>>
}

const premiumContext = createContext({} as contextType)
type childrenType = {
    children :JSX.Element;
}

const PremiumProvider = ({children}:childrenType)=>{
    const [PremiumData,setPremiumData] = useState( sessionStorage.getItem('isPremium')||false)

    return(
        <premiumContext.Provider value={{PremiumData,setPremiumData}}>
        {children}
        </premiumContext.Provider>
    )
}
const usePremiumData =()=>useContext(premiumContext)

export {usePremiumData,PremiumProvider}