import React from 'react'
import strive from '../images/image 4.png'

const Strive = () => {
    return (
        <div>
            <div className='w-full max-w-[1350px] mx-auto px-6 py-8 '>
                <div className='lg:flex items-center gap-20'>
                    <div className='flex-1'>
                        <h1 className='text-[24px] lg:text-[32px] text-slate-600 font-semibold font-serif leading-8 lg:leading-10 mb-4'>We Strive to make education a fun experience </h1>
                        <p className='text-[18px] lg:text-[22px] text-slate-500 mb-4'>Cras ac leo purus. Mauris quis diam velit. Duis
                            non tempor justo. Vivamus ac erat eu mi gravida
                            fermentum. Suspendisse potenti. Ut pharetra
                            euismod ultricies. Integer libero nisi, finibus et
                            quam at, varius varius enim. Vivamus dictum
                            sem sit amet odio viverra, sit amet tempor nisi
                            vulputate. Nam aliquet, erat at varius pretium,
                            quam sapien dictum sapien, a porttitor nisi
                            sapien et massa. Proin condimentum, velit a
                            efficitur pulvinar, libero nulla varius massa, in
                            cursus eros enim quis libero</p>
                    </div>
                    <div className='flex-1'>
                        <div className='relative inline-block p-4'>
                            <img src={strive} />
                            <div className='absolute top-0 right-0 left-0 bottom-0 border-4 border-blue-300 border-dashed p-2 rotate-[12deg] rounded-[25%]'></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Strive