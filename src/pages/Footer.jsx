import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/fontawesome-free-brands'
import { faLinkedin } from '@fortawesome/fontawesome-free-brands';
import { faFile } from '@fortawesome/fontawesome-free-solid';
import { faEnvelope } from '@fortawesome/fontawesome-free-solid';

export default function footer() {
    return (
        <section id="footer" className='md:h-[40vh] w-full bg-dark-blue text-white flex flex-col items-center justify-center py-28 md:pt-30'>
            <h1 className='my-5 font-bold text-lg'>Let's talk!</h1>
            <div className="socials space-x-10 flex flex-row items-center justify-center">
                <a href="https://github.com/Vicba" className='flex flex-col gap-3 font-thin text-sm'><FontAwesomeIcon icon={faGithub} className='h-9' />GitHub</a>
                <a href="#" className='flex flex-col space-y-2 gap-3 font-thin text-sm'><FontAwesomeIcon icon={faFile} className='h-9' />Resume</a>
                <a href="https://www.linkedin.com/in/victor-barra" className='flex flex-col gap-2 font-thin text-sm'><FontAwesomeIcon icon={faLinkedin} className='h-10' />LinkedIn</a>
                <a href="mailto:victor.barra@live.be" className='flex flex-col gap-2 font-thin text-sm'><FontAwesomeIcon icon={faEnvelope} className='h-10' />Email</a>
            </div>
        </section>
    )
}
