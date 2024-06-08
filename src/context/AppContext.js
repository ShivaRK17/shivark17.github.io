import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const useAppContext = () => {
    const [loaded, setLoaded] = useState(true);
    const [BlogData, setBlogData] = useState([])
    const getBlogs = async () => {
        try {
            const resp = await fetch(process.env.REACT_APP_BLOGS_API);
            const data = await resp.json();
            setBlogData(data);
            setLoaded(false);
        } catch (error) {
            setBlogData([])
        }
    }
    useEffect(() => {
      getBlogs()
    }, [])
    
    return {
        getBlogs,
        BlogData, setBlogData,
        loaded, setLoaded
    }
}

const AppProvider = ({ children }) => {
    const contextvalue = useAppContext();
    return <AppContext.Provider value={contextvalue}>
        {children}
    </AppContext.Provider>
}
const useApp = () => {
    return useContext(AppContext);
}
export { AppProvider, useApp }