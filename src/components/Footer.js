import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { HiPhone } from "react-icons/hi";
import { IoLocation } from "react-icons/io5";

const Footer = () => {
    return (
        <div className='bg-slate-200'>
            <div className='w-full max-w-[1150px] mx-auto px-5 py-14'>
                <div className='lg:flex justify-between gap-14'>
                    <div className='w-full pb-5'>
                        <div className='lg:flex justify-center'>
                            <img src={logo} />
                        </div>
                        <h1 className='hidden lg:block font-serif text-[20px] text-center py-4 font-semibold text-slate-600'>LITTLE KANHA</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Phasellus imperdiet, nulla et
                            dictum interdum, nisi lorem egestas odio,
                            vitae scelerisque enim ligula venenatis dolor.
                            Maecenas nisl est, ultrices nec congue eget,
                            auctor vitae massa. Fusce luctus</p>
                    </div>
                    <div className='w-full lg:pl-20 pb-5'>
                        <h1 className='font-serif text-[20px] pb-4 font-semibold text-slate-600'>QUICK LINKS</h1>
                        <ul className='text-[18px] text-slate-600font-serif flex lg:flex-col flex-wrap justify-center gap-3'>
                            <li className=''>
                                <Link>Home</Link>
                            </li>
                            <li className=''>
                                <Link>About</Link>
                            </li>
                            <li className=''>
                                <Link>Our Caring Faculty</Link>
                            </li>
                            <li className=''>
                                <Link>Our Program</Link>
                            </li>
                            <li className=''>
                                <Link>Gallery</Link>
                            </li>
                            <li className=''>
                                <Link>Contact</Link>
                            </li>
                            <li className=''>
                                <Link>Admission Form</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='w-full '>
                        <div className='flex items-center gap-2 text-[20px] font-semibold font-serif text-slate-600'>
                            <HiPhone className='text-[30px]' />
                            <h1>9876543210</h1>
                        </div>
                        <div className='py-3'>
                            <p>Open: </p>
                            <p>Mon-Sat </p>
                            <p>9:00 - 16:00</p>
                        </div>
                        <div className='flex items-center gap-2 text-[22px] font-semibold font-serif text-slate-600 mb-4'>
                            <IoLocation className='text-[30px]' />
                            <h1>Little Kanha</h1>
                        </div>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            Phasellus imperdiet, nulla et
                            dictum interdum, nisi lorem
                            egestas odio, vitae sce</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer