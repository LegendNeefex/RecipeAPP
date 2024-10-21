import { createContext, useState } from "react";

const RecipeAppContext = createContext();


export const RecipeAppProvider = (({children})=>{
    const [frmShow,setFrmShow] = useState(false)


    const stateData = {
        frmShow,
        setFrmShow
    }

    return (
        <RecipeAppContext.Provider value={stateData}>
            {children}
        </RecipeAppContext.Provider>
    )
})

export default RecipeAppContext;