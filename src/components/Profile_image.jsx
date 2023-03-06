import React from 'react'

import Victor from '../assets/images/Victor.jpeg'

export default function profile_image() {
    return (
        <>
            <img src={Victor} alt="Picture of Victor" className='rounded-full h-40 md:h-60' />
        </>
    )
}
