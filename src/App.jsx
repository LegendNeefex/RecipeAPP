import React,{useState,useEffect} from 'react'
import { BrowserRouter } from 'react-router-dom';
import { RecipeAppProvider } from './context/Recipe_app_context'
import LandingPage from './components/pages/LandingPage';
import { ClimbingBoxLoader  } from 'react-spinners'

const override = {
  display: "flex",
  margin:"250px auto",
  backgroundColor:'#127D68',
  borderRadius:'100%',
  height:"100px",
  width:"100px",
  alignItems:"center",
  // paddingLeft:"20px"
};


function App() {
  const [loading,setLoading] = useState(false)

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
      startLoading();
  }, []); // Only run once when the component mounts

  return (
    <BrowserRouter>
      <RecipeAppProvider>
      {
        loading ?
        <>
          <ClimbingBoxLoader 
            color="#ffff"
            size={15}
            margin={4}
            speedMultiplier={1}
            width={4}
            cssOverride={override}
          />
        </>
        :
        <>
          <LandingPage />
        </>
      }
      </RecipeAppProvider>
    </BrowserRouter>
  )
}

export default App;