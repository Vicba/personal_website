import React from 'react'


import Image from '../assets/images/bg.png'
import Profile_image from './../components/Profile_image'

import { faLongArrowAltRight } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function hero() {
    return (
        <section id='hero' className='w-full h-screen relative flex items-center justify-center'>
            <img src={Image} alt="" className='w-full h-full object-cover top-0 left-0 lg:h-auto' />

            <div className='absolute top-0 w-full h-full flex flex-col-reverse items-center justify-center text-center text-white p-4 mx-auto lg:flex-row'>
                <div className="flex flex-col space-y-12 md:w-1/2">
                    <h1 className="max-w-md text-4xl font-extrabold text-center md:text-6xl md:text-left">
                        Hello, I'm Victor
                    </h1>
                    <p className="text-lg max-w-sm text-center text-darkGrayishBlue md:text-left md:text-xl">
                        I'm a college student passionate about designing and developing software.
                    </p >
                    <div className="flex justify-center md:justify-start">
                        <a href="#projects" className="pt-2 text-white rounded-full font-bold hover:underline">View more <FontAwesomeIcon icon={faLongArrowAltRight} className='ml-2 hover:translate-x-2 hover:ease-in duration-150' />
                        </a>
                    </div>
                </div>

                <div className="image flex items-center justify-center mb-5">
                    <Profile_image />
                </div>
            </div>
        </section>
    )
}
