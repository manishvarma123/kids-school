import React from 'react'
import img from '../images/Rectangle 7.png'
import plane from '../images/paper-airplane 2.png'

const Start = () => {
    return (
        <div>
            <div className='relative w-full max-w-[1150px] mx-auto px-3 py-4 lg:pb-[100px]'>
                <h1 className='text-[24px] lg:text-[32px] font-serif text-center font-semibold text-slate-600 mb-2'>Start Your Child's Learning Adventure Here</h1>
                <p className='lg:text-[20px] text-center text-slate-500 mb-8 px-4'>Infuse Your Child's Early Years with the Joy of Discovery!</p>

                <div className='flex flex-nowrap overflow-x-auto lg:justify-center gap-6 pt-10'>
                    <div className='w-full min-w-[350px] px-6 py-8 bg-[#ffc0cb] rounded-[32px] border-4 border-slate-200 hover:-translate-y-6 duration-300'>
                        <div>
                            <img src={img} />
                        </div>
                        <h1 className='text-center text-white text-[32px] font-bold'>Playgroup</h1>
                        <p className='text-center text-white px-6'>Children start to explore the world
                            around them as soon as they are
                            born. Play group curriculum
                            enables children to continue their
                            exploration and innovate new
                            things.</p>
                    </div>
                    <div className='w-full min-w-[350px] px-6 py-8 bg-[#ffc0cb] rounded-[32px] border-4 border-slate-200 hover:-translate-y-6 duration-300'>
                        <div>
                            <img src={img} />
                        </div>
                        <h1 className='text-center text-white text-[32px] font-bold'>Nursery</h1>
                        <p className='text-center text-white px-6'>In Nursery, children are engaged in school activities such as reading,
                            writing, number recognition and
                            problem solving in a fun filled
                            purposeful manner.</p>
                    </div>
                    <div className='w-full min-w-[350px] px-6 py-8 bg-[#ffc0cb] rounded-[32px] border-4 border-slate-200 hover:-translate-y-6 duration-300'>
                        <div>
                            <img src={img} />
                        </div>
                        <h1 className='text-center text-white text-[32px] font-bold'>Kindergarten</h1>
                        <p className='text-center text-white px-6'>Kindergarten is a place where
                            children will be able to experience
                            nature close up and where children
                            will be cared for and nourished.</p>
                    </div>

                </div>
                <div className='w-10 lg:w-28'>
                    <img src={plane} className='absolute bottom-0 right-6 w-fit' />
                </div>
            </div>
        </div >
    )
}

export default Start