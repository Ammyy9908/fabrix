import {createContext,useState} from "react"

const AppContext = createContext({
    files:null,
    setFiles:()=>{},
    
});

export const AppContextProvider = ({children})=>{
    const [files,setFiles] = useState(null);
    const [loading,setLoading] = useState(true);
    
    const context = {files,setFiles,loading,setLoading};

    return (
        <AppContext.Provider value={context}>
                {children}
        </AppContext.Provider>
    )
}

export default AppContext;