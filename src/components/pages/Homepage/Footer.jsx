import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-first relative pt-14'>
        <div>
            <div className='flex justify-between m-auto w-[95%] max-lg:flex-col'>
                <NavLink to='/'>
                    <img className='w-40 h-auto object-cover' src="/images/gusta-logo.png" alt="Gusta Logo" />
                </NavLink>
                <div className='flex gap-80 max-lg:flex max-lg:justify-between max-lg:gap-0 max-lg:mt-7'>
                    <div className='max-lg:pt-4'>
                        <h3 className='text-5 font-semibold text-accent2 max-lg:pb-4'>Links</h3>
                        <div className='flex flex-col underline text-accent1 gap-2 max-lg:gap-4'>
                            <NavLink to="/">
                                Privacy Policy
                            </NavLink>
                            <NavLink to="/">
                                Terms and conditions
                            </NavLink>
                            <NavLink to="/">
                                Cookie Policy
                            </NavLink>
                        </div>
                    </div>
                    <div className='max-lg:pt-4'>
                        <h3 className='text-5 font-semibold text-accent2 max-lg:pb-4'>Contact</h3>
                        <div className='flex flex-col text-accent1 gap-2 max-lg:gap-4'>
                            <NavLink to="mailto:dolores@gmail.com">
                                <h3>dolores@gmail.com</h3>
                            </NavLink>
                            <p>(503)-383-4582</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between m-auto w-[95%] items-center pb-7 pt-16 max-lg:flex-col'>
                <div className='flex gap-5 items-center max-lg:pb-4'>
                    <NavLink to='https://www.facebook.com/' target='_blank'>
                        <img className='h-auto w-9 transition duration-300 transform scale-95 hover:scale-100' src="/images/facebook.png" alt="facebook icon" />
                    </NavLink>
                    <NavLink to='https://www.instagram.com/' target='_blank'>
                        <img className='h-auto w-9 transition duration-300 transform scale-95 hover:scale-100' src="/images/instagram.png" alt="Instagram icon" />
                    </NavLink>
                    <NavLink to='https://x.com/' target='_blank'>
                        <img className='h-auto w-9 transition duration-300 transform scale-95 hover:scale-100' src="/images/twitter.png" alt="Twitter icon" />
                    </NavLink>
                </div>
                <div className='flex gap-3 font-medium items-center text-accent1'>
                    <span className='text-5'>&copy;</span>
                    <h3> All right reserved, 2024 gusta inc</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer