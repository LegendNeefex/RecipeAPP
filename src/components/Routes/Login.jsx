import React, { useContext, useState,useRef,useEffect } from 'react'
import Buttons from '../../shared/Buttons'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import RecipeAppContext from '../../context/Recipe_app_context';

function Login() {
    const navigate = useNavigate();
    const [form, setForm] = useState(true);
    const [back, setBack] = useState(false);
    const [pwdShow, setPwdShow] = useState(false);
    const [text, setText] = useState(false);

    const {frmShow,setFrmShow} = useContext(RecipeAppContext);

    const formRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (formRef.current && !formRef.current.contains(event.target)) {
                setFrmShow(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setFrmShow]);

    const loginHandler = ((e)=>{
        e.preventDefault();

        if (form) {
            setForm(false)
            setText(true)
            setBack(true)
        }else{
            setBack(true)
            // console.log('submitted');
        }

        navigate('/')
    })

    const backHandler = (()=>{
        if (back) {
            console.log('back clicked');
            setForm(true)
            setBack(false)
            setText(false)
            return; 
        }
    })

    const pwdHandler = (()=>{
        if (!pwdShow) {
            setPwdShow(true)
        }else{
            setPwdShow(false)
        }
    })

  return (
    <>
        {
            frmShow ?
            <>
                <div className='fixed inset-0 bg-black bg-opacity-50 z-20'></div>

                <div className=' bg-accent1 rounded-xl shadow-custom w-[400px] absolute left-[900px] mt-5 z-30 max-lg:left-0 max-lg:w-[370px] max-lg:ml-2 xl:left-[500px] xl:top-[130px] md:left-[370px]' ref={formRef}>
                    <div className='relative'>
                        <img src="/images/vector 2.png" alt="vector 2" className='absolute -left-[1px] max-lg:top-[0.7px]' />
                        <img src="/images/vector 3.png" alt="vector 3" className='absolute left-[303px] max-lg:left-[273px]' />
                    </div>
                    <div className='p-10 max-lg:p-6'>
                        <div className='text-center'>
                            <h2 className=' text-others text-5 font-semibold'>Welcome</h2>
                            <p className='text-3 font-normal text-accent2'>Let’s start with your email address</p>
                        </div>
                        <div className='pt-10'>
                            <form method="post">
                                {
                                    form ?
                                    <input type="text" autoComplete='off' placeholder='email' className='outline-none w-80 border-2 border-first rounded pt-3 pb-3 pl-2 pr-2 overflow-hidden' />
                                    :
                                    <div className='relative'>
                                        <input type={pwdShow ? 'password' : 'text'} autoComplete='off' placeholder='password' className='outline-none w-80 border-2 border-first rounded pt-3 pb-3 pl-2 pr-10 overflow-hidden' />
                                        {
                                            pwdShow ?
                                            <i onClick={pwdHandler} className='fa-solid fa-eye text-4 text-accent2  absolute right-3 top-4 cursor-pointer'></i>
                                            :
                                            <i onClick={pwdHandler} className='fa-solid fa-eye-slash text-4 text-accent2 absolute right-3 top-4 cursor-pointer'></i>
                                        }
                                    </div>
                                }
                                <div className='flex justify-between'>
                                    <Buttons children={text ? 'Login' : 'continue'} buttonType='submit' onClick={loginHandler} className='bg-first text-accent1 mt-5 w-80 transition duration-300 transform scale-95 hover:scale-100' />
                                    {
                                        back ?
                                        <Buttons children={'back'} buttonType='submit' onClick={backHandler} className='mt-5 border-2 rounded-3xl border-first w-80 shadow-custom text-first transition duration-300 transform scale-95 hover:scale-100' />
                                        :
                                        <></>
                                    }
                                </div>
                            </form>
                        </div>
                        <div className='pt-7 text-center'>
                            <p className='text-accent2 font-normal'>New to Gusta ?</p>
                            <Buttons children={'Join the waitlist'} className='border-2 rounded-3xl border-second w-80 shadow-custom text-second mt-3' />
                        </div>
                        <p className='mt-3 text-2 font-normal'>By creating an account, you automatically accept our <NavLink to='/' className='underline font-semibold'>Terms and conditions</NavLink>, <NavLink to='/' className='underline font-semibold'>Privacy Policy</NavLink> and <NavLink to='/' className='underline font-semibold'>Cookie Policy</NavLink>.</p>
                    </div>
                </div>
            </>
            :
            <></>
        }
    </>
  )
}

export default Login