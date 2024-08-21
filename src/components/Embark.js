import React from 'react'
import img1 from '../images/Ellipse 3.png'
import img2 from '../images/Ellipse 2.png'
import img3 from '../images/Ellipse 3-1.png'
import img4 from '../images/Ellipse 3-2.png'

const Embark = () => {
    return (
        <div>
            <div className='w-full max-w-[1350px] mx-auto px-3 py-4 lg:py-8'>
                <h1 className='text-[24px] lg:text-[32px] font-serif text-center font-semibold text-slate-600'>Embark on a Journey of Fun and Learning for Your Child</h1>

                <div className='lg:pt-60 lg:-mb-60 lg:grid grid-cols-3'>
                    <div className='text-center p-4'>
                        <h1 className='text-left text-[50px] font-bold text-[#FF007F]'>01.</h1>
                        <div className=' inline-block p-4 rounded-full border-dashed border-4 border-[#FF007F]'>
                            <img src={img1} />
                        </div>
                        <h1 className='text-[36px] font-bold text-slate-800 mb-2'>Table/Floor Toys</h1>
                        <p className='lg:px-4 text-slate-600'>Children explore their world from birth. Our table
                            and floor toys nurture this curiosity, encouraging
                            innovation and hands on learning through play.</p>
                    </div>
                    <div className='text-center p-4 lg:-translate-y-60'>
                        <h1 className='text-left text-[50px] font-bold text-[#FF007F]'>02.</h1>
                        <div className=' inline-block p-4 rounded-full border-dashed border-4 border-[#FF007F]'>
                            <img src={img2} />
                        </div>
                        <h1 className='text-[36px] font-bold text-slate-800 mb-2'>Water Games</h1>
                        <p className='lg:px-4 text-slate-600'>From birth, children are natural explorers. Our water
                            games nurture this curiosity, promoting innovation
                            and hands on learning through splash filled play</p>
                    </div>
                    <div className='text-center p-4'>
                        <h1 className='text-left text-[50px] font-bold text-[#FF007F]'>03.</h1>
                        <div className=' inline-block p-4 rounded-full border-dashed border-4 border-[#FF007F]'>
                            <img src={img3} />
                        </div>
                        <h1 className='text-[36px] font-bold text-slate-800 mb-2'>Sport Activities</h1>
                        <p className='lg:px-4 text-slate-600'>Children are born explorers. Our sports activities
                            harness their natural curiosity, fostering physical
                            fitness, teamwork, and skill development through
                            engaging, active play.</p>
                    </div>
                    <div className='text-center p-4 lg:pt-10 lg:-translate-y-60 lg:col-span-3 lg:justify-items-center lg:max-w-[33%] m-auto'>
                        <h1 className='text-left text-[50px] font-bold text-[#FF007F]'>04.</h1>
                        <div className=' inline-block p-4 rounded-full border-dashed border-4 border-[#FF007F]'>
                            <img src={img4} />
                        </div>
                        <h1 className='text-[36px] font-bold text-slate-800 mb-2'>Outdoor Games</h1>
                        <p className='lg:px-4 text-slate-600'>Spark your child s curiosity with our outdoor games.
                            Designed for active play, these games enhance
                            physical fitness, teamwork, and imaginative play.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Embark