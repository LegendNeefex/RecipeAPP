import React from 'react'
import Buttons from '../../../shared/Buttons'

function Section() {
  return (
    <>
        <div className='w-[80%] m-auto pt-16'>
            <h2 className='text-second font-semibold text-6 text-center pb-20'>Popular Recipes</h2>
            <div className='flex max-lg:flex-col max-lg:items-end md:flex-row md:gap-20 md:h-auto items-center justify-between'>
                <img src="/images/section-image.png" alt="Cheese and vegetable" className='h-auto w-96 md:w-72' />
                <div className='ml-32 max-lg:pt-7 max-lg:ml-0'>
                    <h3 className='text-first font-semibold text-5 pb-3'>Cheese and vegetable meal</h3>
                    <p className='text-4 font-medium pb-3'>Ingredients :</p>
                    <ol className='list-decimal text-4 font-medium'>
                        <li>Fresh tomatoes</li>
                        <li>Spring onions</li>
                        <li>Blueberry</li>
                        <li>Cheese</li>
                    </ol>
                    <div className='flex pt-10 gap-24 max-lg:flex-col max-lg:gap-7'>
                        <div>
                            <p>Preparation time :</p>
                            <h3 className='font-semibold text-4'>7 mins</h3>
                        </div>
                        <Buttons children={'view recipe'} className='bg-first text-accent1 transition duration-300 transform scale-95 hover:scale-100' />
                    </div>
                </div>
            </div>
        </div>

        {/* Section2 */}

        <div className='bg-accent2 pt-16 pb-16 mt-20'>
            <div className='w-[90%] m-auto '>
                <div className='flex items-center justify-between flex-row-reverse max-lg:flex-col md:flex-row-reverse md:gap-20 md:h-auto'>
                    <img src="/images/section-image.png" alt="Cheese and vegetable" className='h-auto w-96 max-lg:w-72' />
                    <div className='ml-32 max-lg:pt-7 max-lg:ml-4'>
                        <h3 className='text-first font-semibold text-5 pb-3'>Cheese and vegetable meal</h3>
                        <p className='text-4 font-medium pb-3'>Ingredients :</p>
                        <ol className='list-decimal text-4 font-medium'>
                            <li>Fresh tomatoes</li>
                            <li>Spring onions</li>
                            <li>Blueberry</li>
                            <li>Cheese</li>
                        </ol>
                        <div className='flex pt-10 gap-24 max-lg:flex-col max-lg:gap-7'>
                            <div>
                                <p>Preparation time :</p>
                                <h3 className='font-semibold text-4'>7 mins</h3>
                            </div>
                            <Buttons children={'view recipe'} className='bg-first text-accent1 transition duration-300 transform scale-95 hover:scale-100' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='relative w-[100%]'>
         <img src="/images/vector 4.png" alt="triangele" className='absolute left-[50%] z-10 ' />
        </div>
    </>
  )
}

export default Section