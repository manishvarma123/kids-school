import React from 'react'
import img1 from '../images/Ellipse 4.png'
import img2 from '../images/Ellipse 9.png'
import img3 from '../images/Ellipse 8.png'
import whatsapp from '../images/whatsapplogo.png'
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom'

const Best_School = () => {
    return (
        <div className='relative overflow-hidden'>
            <div className='w-full max-w-[1150px] min-h-[80vh] m-auto p-9 flex items-center'>
                <div className='py-[50vh]'>
                    <h1 className='text-[36px] lg:text-[56px] font-serif font-semibold'>The best school</h1>
                    <h1 className='text-[36px] lg:text-[56px] font-serif font-semibold'>for your kids</h1>
                    <p className='text-slate-500 text-[20px] mb-2'>Unlock Potential. Enroll Today!</p>
                    <div className='lg:flex gap-3'>
                        <input type='email' placeholder='Your Email' className='min-w-full max-w-[450px] px-5 py-2 text-[22px] border-2 rounded-full mb-2' />
                        <button className='px-5 py-2 font-bold bg-yellow-400 rounded-full text-[22px] mb-2'>Connect</button>
                    </div>
                </div>
            </div>
            <div className='absolute -left-[40px] top-[300px] lg:top-[calc(50%-300px)] w-[360px] lg:w-[700px] h-[360px] lg:h-[700px] rounded-full -z-10 bg-gradient-to-b from-slate-200 to-white shadow-lg border'>

            </div>

            <div className='absolute right-[40px] lg:right-[350px] top-[70px] lg:top-[100px] rounded-full'>
                <img src={img1} className=' w-[70%] lg:w-fit' />
            </div>
            <div className='absolute w-[110px] lg:w-[160px] h-[110px] lg:h-[160px] right-[40px] lg:right-[180px] top-[40px] lg:top-[70px] rounded-full bg-gradient-to-b from-slate-200 to-white shadow-lg'>

            </div>
            <div className='absolute w-[60px] lg:w-[100px] h-[60px] lg:h-[100px] right-[330px] lg:right-[530px] top-[250px] lg:top-[430px] rounded-full bg-slate-300 bg-gradient-to-bl from-slate-200 to-white shadow-lg'>

            </div>



            <div className='absolute -right-[35px] lg:right-[50px] bottom-[250px] lg:bottom-[500px] rounded-full'>
                <img src={img2} className='w-[70%] lg:w-fit' />
            </div>
            <div className='absolute right-[130px] lg:right-[300px] bottom-[70px] lg:bottom-[300px] rounded-full'>
                <img src={img3} className='w-[60%] lg:w-fit' />
            </div>
            <div className='absolute w-[120px] lg:w-[200px] h-[120px] lg:h-[200px] right-[90px] lg:right-[30px] bottom-[100px] lg:bottom-[250px] rounded-full bg-slate-300 bg-gradient-to-l from-slate-200 to-white shadow-lg'>

            </div>




            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <div className='w-[50px] h-[50px] p-1 shadow-md border-2 rounded-full fixed right-10 bottom-32 z-40 bg-white'>
                    <img src={whatsapp} className='' />
                </div>
            </a>

            <a href="mailto:example@example.com" target="_blank" rel="noopener noreferrer">
                <div className='w-[50px] h-[50px] p-2 shadow-md border-2 rounded-full fixed right-10 bottom-16 -z-40 bg-white'>
                    <MdEmail className='w-full h-full' />
                </div>
            </a>

        </div>
    )
}

export default Best_School