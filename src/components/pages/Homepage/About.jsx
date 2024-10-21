import React from 'react'
import Buttons from '../../../shared/Buttons'

function About() {
  return (
    <>
        <div className='bg-second relative max-lg:pb-16 max-lg:text-center'>
            <div>
                <img src="/images/stickers.png" alt="stickers" className='absolute h-auto w-[50rem] top-20 left-0 object-cover z-0 max-lg:h-[900px]' />
                <img src="/images/stickers.png" alt="stickers" className='absolute h-auto w-[50rem] top-0 left-[40%] object-cover z-0 max-lg:h-[900px] max-lg:left-72' />
            </div>
            <div className='relative w-[95%] m-auto pt-40 z-10'>
                <h2 className='text-accent1 font-semibold text-6 text-center'>How Gusta Works</h2>
                <div className='flex max-lg:flex-col-reverse justify-between items-center'>
                    <div className='max-lg:pt-7'>
                        <p className='text-accent1 w-[95%]'>Discovering great recipes has never been easier. Browse through a variety of dishes that suit your taste, whether you're looking for something quick or an elaborate meal. Found a recipe you love? Save it to your personal list for easy access later. Got a recipe you'd like to share? Submit your own creations and inspire others with your unique touch in the kitchen! Whether you're cooking for yourself or hosting a dinner party, our app makes it simple to find and save the perfect recipes, while also giving you the space to contribute your culinary ideas.</p>
                        <Buttons children={'Get started'} className='bg-accent1 text-second mt-7 cursor-pointer m-auto xl:w-auto xl:ml-[0px] md:w-[700px]' />
                    </div>
                    <img src="/images/section-1-image.png" alt="Food Combo" className="z-10" />
                </div>
            </div>
        </div>
        <div className="custom-shape-divider-top-1729089182">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill"></path>
            </svg>
        </div>
    </>
  
  )
}

export default About