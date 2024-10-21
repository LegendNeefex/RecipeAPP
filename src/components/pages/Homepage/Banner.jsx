import React from 'react'
import Buttons from '../../../shared/Buttons'
import { useNavigate } from 'react-router-dom';

function Banner() {

    const navigate = useNavigate();

    const searchHandler = ((e)=>{
        e.preventDefault();
       navigate('/')
        
    })

  return (
    <>
        <div className='bg-first'>
            <div className='flex max-lg:flex-col justify-between items-center m-auto  w-[95%] pt-24 max-lg:pb-16'>
                <img className='img' src="/images/banner-image.png" alt="crispy meat" />
                <div className='pl-20 max-lg:pl-0 max-lg:text-center'>
                    <div className='text-white  '>
                        <h2 className='text-6 font-bold'>Discover Delicious Recipes to Inspire Every Meal</h2>
                        <p className='text-4 pt-3 font-normal'>Unleash your inner chef with our diverse range of recipes. From quick meals to gourmet dishes, find something for every craving. Cook something new today and celebrate every bite!</p>
                    </div>
                    <form method="post" className="relative">
                        <input
                            type="text"
                            placeholder="Discover your new favorite dish"
                            className="outline-none bg-accent1 mt-7 rounded-lg pt-5 pb-5 w-[90%] pl-16 pr-28 overflow-hidden"
                        />
                        <i
                            className="fa-solid fa-search text-4 text-white bg-second ml-1 p-3 rounded absolute mt-10 left-1 max-lg:left-7 xl:left-1 md:left-12"
                        ></i>
                        <Buttons
                            children={"search"}
                            buttonType="submit"
                            className="rounded-3xl absolute top-9 right-20 max-lg:right-7 xl:right-20 md:right-12 bg-first text-accent1"
                            onClick={searchHandler}
                        />
                    </form>
                </div>
            </div>
            <div className="custom-shape-divider-top-1729083569">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
    </>
  )
}

export default Banner 