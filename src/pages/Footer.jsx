import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/fontawesome-free-brands'
import { faLinkedin } from '@fortawesome/fontawesome-free-brands';
import { faFile } from '@fortawesome/fontawesome-free-solid';
import { faEnvelope } from '@fortawesome/fontawesome-free-solid';

export default function footer() {
    return (
        <section id="footer" className='md:h-[30vh] w-full bg-dark-blue text-white flex flex-col items-center justify-center py-28 md:pt-10'>
            <h1 className='mb-5'>Victor Barra</h1>
            <div className="socials space-x-10 flex flex-row items-center justify-center">
                <a href="https://github.com/Vicba"><FontAwesomeIcon icon={faGithub} className='h-9' /></a>
                <a href="#"><FontAwesomeIcon icon={faFile} className='h-9' /></a>
                <a href="https://www.linkedin.com/in/victor-barra"><FontAwesomeIcon icon={faLinkedin} className='h-10' /></a>
                <a href="mailto:victor.barra@live.be"><FontAwesomeIcon icon={faEnvelope} className='h-10' /></a>
            </div>
        </section>
    )
}
