import React from 'react'

const Chip = ({ label }) => {

    if (label.toLowerCase() === 'medium') {
        return (
            <div className='px-2 py-0.5 text-xs text-white rounded-full bg-[#FF9533]'>
                {label}
            </div>
        );
    }

    if (label.toLowerCase() === 'high') {
        return (
            <div className='px-2 py-0.5 text-xs text-white rounded-full bg-[#E74444]'>
                {label}
            </div>
        );
    }

    return (
        <div className='px-2 py-0.5 text-xs text-white rounded-full bg-[#67CB65]'>
            {label}
        </div>
    )
}

export default Chip