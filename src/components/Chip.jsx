import React from 'react'

const Chip = ({ label }) => {

    if (label.toLowerCase() === 'medium') {
        return (
            <span className='px-2 py-0.5 text-xs text-white rounded-full bg-[#FF9533]'>
                {label}
            </span>
        );
    }

    if (label.toLowerCase() === 'high') {
        return (
            <span className='px-2 py-0.5 text-xs text-white rounded-full bg-[#E74444]'>
                {label}
            </span>
        );
    }

    return (
        <span className='px-2 py-0.5 text-xs text-white rounded-full bg-[#67CB65]'>
            {label}
        </span>
    )
}

export default Chip