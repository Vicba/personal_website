import React from 'react'


import Profile_image from './../components/Profile_image'

export default function hero() {
    return (
        <section id="hero" className='md:h-[90vh] w-full bg-hero bg-no-repeat bg-cover bg-center bg-fixed text-white flex items-center justify-center py-28 md:my-0'>

            <div className="flex flex-col-reverse items-center space-y-25 md:flex-row md:space-x-60 md:space-y-0">
                <div className="flex flex-col space-y-12 md:w-1/2">
                    <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
                        Hello, I'm Victor
                    </h1>
                    <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                        I'm a college student passionate about software technology.
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <a href="#projects" className="pt-2 text-white rounded-full font-bold">View more   --<i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>

                <div className="image">
                    <Profile_image />
                </div>
            </div>
        </section>

    )
}
