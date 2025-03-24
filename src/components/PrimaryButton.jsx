import React from 'react';

const PrimaryButton = ({ onClick, width, label }) => {
    return (
        <div className={`${width || 'w-full'}`}>
            <button onClick={onClick} className={`w-full py-2 px-5 bg-[#D9E5F9] text-[#121212] font-medium text-base lg:hover:shadow rounded`}>
                {label}
            </button>
        </div>
    )
}

export default PrimaryButton