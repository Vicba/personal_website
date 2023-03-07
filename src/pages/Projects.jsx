import React from 'react'

export default function projects() {
    return (
        <section id="projects" className='md:h-[90vh] w-full text-center my-28 flex flex-col items-center'>
            <div>
                <h2 className='text-3xl mx-4 md:text-5xl font-bold'>Recent projects</h2>
                <p className='text-xl mx-3 md:text-2xl py-6 text-gray-500'>Click one to visit.</p>
            </div>

            <div className="flex flex-col xl:flex-row items-center md:space-x-60 md:space-y-0 md:my-12">
                <div className='border py-8 mx-3 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-indigo-600'>100%</p>
                    <p className='text-gray-400 mt-2'>Completion</p>
                </div>
                <div className='border py-8 mx-3 rounded-xl shadow-xl h-15' >
                    <p className='text-6xl font-bold text-indigo-600'>24/7</p>
                    <p className='text-gray-400 mt-2'>Delivery</p>
                </div>
                <div className='border py-8 mx-3 rounded-xl shadow-xl h-15' >
                    <p className='text-6xl font-bold text-indigo-600'>100K</p>
                    <p className='text-gray-400 mt-2'>Transactions</p>
                </div>
            </div>
        </section>
    )
}
