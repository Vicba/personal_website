import React from 'react'

export default function skillset() {
    return (
        <section id="skills" className='md:h-[90vh] w-full bg-dark-blue text-white flex flex-col items-center justify-center py-28 md:my-0'>
            <div className='my-12'>
                <h2 className='text-3xl mx-4 md:text-5xl font-bold'>Skillset</h2>
            </div>

            <div className="flex flex-col md:flex-row items-center md:space-x-60 md:space-y-0 md:my-12">
                <div className='bg-card-blue md:w-96 md:h-96 border py-8 mx-3 rounded-xl shadow-xl' >
                    <h1 className='font-bold tracking-wider mt-2 text-center'>Languages</h1>
                </div>
                <div className='bg-card-blue md:w-96 md:h-96 border py-8 mx-3 rounded-xl shadow-xl h-15' >
                    <h1 className='font-bold tracking-wider mt-2 text-center'>Frameworks & services</h1>
                </div>
            </div>
        </section>
    )
}
