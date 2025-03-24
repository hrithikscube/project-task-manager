import React from 'react';

const PrimaryButton = ({ onClick, width, label }) => {
    return (
        <div className={`${width || 'w-full'}`}>
            <button onClick={onClick} className={`w-full py-2 px-5 bg-blue-600 text-white rounded`}>
                {label}
            </button>
        </div>
    )
}

export default PrimaryButton