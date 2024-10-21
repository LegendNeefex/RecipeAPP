import React, { useContext } from 'react'
import Buttons from '../../../shared/Buttons'
import { NavLink } from 'react-router-dom'
import Login from '../../Routes/Login'
import RecipeAppContext from '../../../context/Recipe_app_context'

function TopBar() {
  const {setFrmShow} = useContext(RecipeAppContext)

  const formHandler = (()=>{
    setFrmShow(true)
  })

  return (
    <div className='bg-first border-none fixed w-[100%] z-20'>
      <div className='flex justify-between items-center m-auto w-[95%]'>
        <NavLink to=''>
          <img className='w-40 h-auto object-cover' src="/images/gusta-logo.png" alt="Gusta Logo" />
        </NavLink>
        <Buttons 
          children={'Login'} 
          icon={<i className="fa-solid fa-user text-4"></i>} 
          className='bg-accent1 text-first font-semibold text-3 items-center transition duration-300 transform scale-95 hover:scale-100'
          buttonType='submit'
          onClick={formHandler}
        />
      </div>
      <Login />
    </div>

  )
}

export default TopBar