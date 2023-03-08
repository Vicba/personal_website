import React from 'react'
import Languages_card from '../components/Languages_card'
import Tools_items from '../components/Tools_items'



export default function skillset() {
    return (
        <section id="skills" className='md:h-screen w-full bg-dark-blue text-white flex flex-col items-center justify-center py-28 md:my-0'>

            <div className='my-12'>
                <h2 className='text-4xl mx-4 md:text-5xl font-extrabold'>Skillset</h2>
            </div>

            <div className='flex flex-col items-center justify-center space-y-10 lg:flex-row lg:space-x-40 lg:space-y-0'>
                <div className='bg-card-blue w-full md:w-96 md:h-96 py-8 mx-3 rounded-xl shadow-xl' >
                    <h1 className='font-extrabold tracking-wider mt-2 text-center mb-10'>Languages & Frameworks</h1>
                    <Languages_card />
                </div>
                <div className='bg-card-blue w-full md:w-96 md:h-96 py-8 mx-3 rounded-xl shadow-xl ' >
                    <h1 className='font-extrabold tracking-wider mt-2 text-center mb-10'>Tools & Services</h1>
                    <Tools_items />
                </div>
            </div>
        </section>
    )
}