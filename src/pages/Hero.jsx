import React from 'react'


import Profile_image from './../components/Profile_image'

export default function hero() {
    return (
        <section id="hero" className='h-[80vh] w-screen bg-hero text-white flex gap-x-20 items-center justify-center'>


            <div className="flex flex-col-reverse items-center md:flex-row">
                <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                    <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
                        Hello, I'm Victor
                    </h1>
                    <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                        I'm a college student passionate about software technology.
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <a href="#" className="pt-2 text-white rounded-full">View more  --<i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>

                <div className="image">
                    <Profile_image />
                </div>
            </div>
        </section>

    )
}
