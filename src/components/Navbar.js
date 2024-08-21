import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import { VscThreeBars } from "react-icons/vsc";
import { ImCross } from "react-icons/im";

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='shadow-md'>
            <div className='w-full max-w-[1450px] mx-auto px-3 py-2' >
                <div className='w-full flex justify-between items-center'>
                    <div>
                        <Link>
                            <img className='' src={logo} />
                        </Link>
                    </div>
                    <div className='hidden lg:block'>
                        <ul className='text-[20px] text-slate-600 font-[550] font-serif flex flex-wrap justify-center gap-4 xl:gap-6'>
                            <li className='hover:text-red-600 hover:underline duration-500'>
                                <Link>Home</Link>
                            </li>
                            <li className='hover:text-red-600 hover:underline duration-500'>
                                <Link>About</Link>
                            </li>
                            <li className='hover:text-red-600 hover:underline duration-500'>
                                <Link>Our Caring Faculty</Link>
                            </li>
                            <li className='hover:text-red-600 hover:underline duration-500'>
                                <Link>Our Program</Link>
                            </li>
                            <li className='hover:text-red-600 hover:underline duration-500'>
                                <Link>Gallery</Link>
                            </li>
                            <li className='hover:text-red-600 hover:underline duration-500'>
                                <Link>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='hidden lg:block'>
                        <Link>
                            <button className='bg-slate-300 text-slate-600 px-5 py-3 text-[22px] rounded-full font-[550] border border-blue-400 font-serif'>Admission Form</button>
                        </Link>
                    </div>
                    <div className='lg:hidden text-[36px]' onClick={() => setToggle(true)}>
                        <VscThreeBars />
                    </div>

                    {/* Responsive */}
                    <div className={`z-50 p-4 duration-1000 lg:hidden w-full h-full text-white text-2xl bg-blue-200 fixed top-0 bottom-0 ${toggle ? 'left-[0%]' : 'left-[-100%]'}`}>
                        <div className='flex justify-between items-center'>
                            <div>
                                <img src={logo} />
                            </div>
                            <div className='text-[36px] text-black' onClick={() => setToggle(false)}>
                                <ImCross />
                            </div>
                        </div>
                        <ul className='text-slate-700 font-serif font-bold flex flex-col gap-4 mt-6 px-4'>
                            <li onClick={() => setToggle(false)}>
                                <Link to="/">Home</Link>
                            </li>
                            <li onClick={() => setToggle(false)}>
                                <Link to="/">About</Link>
                            </li>
                            <li onClick={() => setToggle(false)}>
                                <Link to="/">Our Caring Faculty</Link>
                            </li>
                            <li onClick={() => setToggle(false)}>
                                <Link to="/">Our Program</Link>
                            </li>
                            <li onClick={() => setToggle(false)}>
                                <Link to="/">Gallery</Link>
                            </li>
                            <li onClick={() => setToggle(false)}>
                                <Link to="/">Contact</Link>
                            </li>
                            <li onClick={() => setToggle(false)}>
                            <button onClick={() => setToggle(false)} className='bg-white px-6 py-2 rounded-full'>Admission Form</button>

                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar