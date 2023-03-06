import React from 'react'

export default function footer() {
    return (
        <section id="footer" className='md:h-[30vh] w-full bg-dark-blue text-white flex flex-col items-center justify-center py-28'>
            <h1 className='mb-5'>Victor Barra</h1>
            <div className="socials space-x-10">
                <a href="#">Github</a>
                <a href="#">Resume</a>
                <a href="#">LinkedIn</a>
                <a href="#">Mail</a>
            </div>
        </section>
    )
}
