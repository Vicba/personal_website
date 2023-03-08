import React from 'react'
import Languages_card from '../components/Languages_card'
import Tools_items from '../components/Tools_items'

import Image from '../assets/images/bg-skillset.png'


export default function skillset() {
    return (
        <section id="skills" className='md:h-screen w-full bg-dark-blue text-white flex flex-col items-center justify-center py-28 md:my-0'>

            <div className='my-12'>
                <h2 className='text-3xl mx-4 md:text-5xl font-bold'>Skillset</h2>
            </div>

            <div className='flex flex-col items-center justify-center space-y-10 lg:flex-row lg:space-x-40 lg:space-y-0'>
                <div className='bg-card-blue w-full md:w-96 md:h-96 py-8 mx-3 rounded-xl shadow-xl' >
                    <h1 className='font-bold tracking-wider mt-2 text-center mb-10'>Languages & Frameworks</h1>
                    <Languages_card />
                </div>
                <div className='bg-card-blue w-full md:w-96 md:h-96 py-8 mx-3 rounded-xl shadow-xl ' >
                    <h1 className='font-bold tracking-wider mt-2 text-center mb-10'>Tools & Services</h1>
                    <Tools_items />
                </div>
            </div>
        </section>
    )
}

/*
<section id='skills' className='w-full h-screen relative flex items-center justify-center'>
            <img src={Image} alt="" className='w-full object-cover lg:h-auto' />

            <div className='absolute my-15 w-full  items-center justify-center text-center text-white lg:flex-row'>
                <div className=''>
                    <h2 className='text-3xl mx-4 md:text-5xl font-bold'>Skillset</h2>
                </div>

                <div className='flex flex-col-reverse items-center justify-center space-y-7 lg:flex-row md:space-x-60 md:space-y-0'>
                    <div className='bg-card-blue w-full md:w-96 md:h-96 py-8 mx-3 rounded-xl shadow-xl' >
                        <h1 className='font-bold tracking-wider mt-2 text-center mb-10'>Languages & Frameworks</h1>
                        <Languages_card />
                    </div>
                    <div className='bg-card-blue w-full md:w-96 md:h-96 py-8 mx-3 rounded-xl shadow-xl ' >
                        <h1 className='font-bold tracking-wider mt-2 text-center mb-10'>Tools & Services</h1>
                        <Tools_items />
                    </div>
                </div>
            </div>
        </section>
*/