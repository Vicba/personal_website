import React from 'react'

import Java from '../assets/images/java.png'
import ReactIcon from '../assets/images/react.png'
import Nodejs from '../assets/images/node.png'
import Python from '../assets/images/python.png'
import Javascript from '../assets/images/js.png'
import Tailwind from '../assets/images/tailwind.png'
import Github from '../assets/images/java.png'
import Figma from '../assets/images/figma.png'
import AWS from '../assets/images/aws.png'
import Firebase from '../assets/images/firebase.png'
import MySQL from '../assets/images/mysql.png'
import MongoDB from '../assets/images/mongoDB.png'
import Linux from '../assets/images/linux.png'

export default function projects() {
    return (
        <section id="projects" className='md:h-screen w-full text-center my-16 flex items-center md:my-32'>
            <div className="container flex flex-col items-center justify-center">
                <div className='mt-8 md:mt-12'>
                    <h2 className='text-3xl mx-4 md:text-5xl font-bold'>Recent projects</h2>
                    <p className='text-xl mx-3 md:text-2xl py-6 text-gray-500'>Click one to visit.</p>
                </div>

                <div className="container flex flex-col space-y-10 items-center justify-center lg:flex-row lg:space-x-20">
                    <a href="">
                        <div className='border py-8 mx-3 rounded-xl shadow-xl lg:h-98 w-52' >
                            <p className='text-6xl font-bold text-indigo-600'>Chapr</p>
                            <p className='text-gray-400 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repudiandae voluptate natus tempore cupiditate dolorum cum enim reprehenderit eos, magni ullam? Eius, debitis expedita mollitia ab ipsam fugiat totam reprehenderit.</p>
                            <div className="flex flex-row justify-center mt-5">
                                <img src={Firebase} alt="firebase" className='h-8' />
                                <img src={ReactIcon} alt="react" className='h-7' />
                            </div>
                        </div>
                    </a>

                    <a href="">
                        <div className='border py-8 mx-3 rounded-xl shadow-xl lg:h-98 w-52' >
                            <p className='text-6xl font-bold text-indigo-600'>Socials</p>
                            <p className='text-gray-400 mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut harum architecto sit quisquam dolore blanditiis in, vel ullam quas reiciendis, qui velit doloribus officia iure distinctio cupiditate, quasi magnam aspernatur?</p>
                            <div className="flex flex-row justify-center mt-5 space-x-3">
                                <img src={ReactIcon} alt="react" className='h-6' />
                                <img src={Nodejs} alt="nodejs" className='h-6' />
                                <img src={MongoDB} alt="mongodb" className='h-6' />
                                <img src={AWS} alt="aws" className='h-6' />
                            </div>
                        </div>
                    </a>

                    <a href="">
                        <div className='border py-8 mx-3 rounded-xl shadow-xl lg:h-98 w-52' >
                            <p className='text-6xl font-bold text-indigo-600'>Mars</p>
                            <p className='text-gray-400 mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore quas, voluptas ex repellendus perspiciatis dolore nobis officia nisi voluptates reiciendis! Officiis voluptatum ad assumenda magnam odit nulla quam amet eaque?</p>
                            <div className="flex flex-row justify-center mt-5 space-x-3">
                                <img src={Javascript} alt="javascript" className='h-6' />
                                <img src={Java} alt="java" className='h-6' />
                                <img src={MySQL} alt="mysql" className='h-6' />
                            </div>
                        </div>
                    </a>

                </div>
            </div>

        </section>
    )
}
