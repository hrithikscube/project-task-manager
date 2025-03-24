import React from 'react';
import PrimaryButton from '@/components/PrimaryButton';

const Contacts = () => {
    return (
        <div className='flex flex-col lg:gap-5 gap-4'>

            <div className='flex items-center justify-between w-full'>
                <h1 className='lg:text-3xl text-2xl font-medium text-black'>List of Contacts <span className='text-base text-[#6C6C6C]'>(8)</span></h1>

                <PrimaryButton width="w-fit" label="+ Add New Project" />
            </div>


            <div className='grid grid-cols-3 lg:gap-5 gap-4'>

                {
                    React.Children.toArray(
                        [...Array(8)]?.map((item, index) => (
                            <div className='bg-[#f0f0f0] p-4 rounded-xl flex flex-col lg:gap-4 gap-2 lg:hover:shadow cursor-pointer'>

                                <div className='flex flex-row items-center gap-2 w-full'>

                                    <div className='w-12 h-12 rounded-full bg-gradient-to-r from-red-300 via-purple-200 to-cyan-200' />
                                    <h2 className='lg:text-base text-sm text-black font-medium'>John Doe</h2>
                                </div>

                                <div className='flex flex-col items-start'>
                                    <div className='flex items-center gap-2'>

                                        <p className='text-sm font-medium text-black'>Phone:</p>
                                        <p className='text-sm text-black'>+91 97318163{index + 1}7</p>

                                    </div>

                                    <div className='flex items-center gap-2'>

                                        <p className='text-sm font-medium text-black'>Location:</p>
                                        <p className='text-sm text-black'>Bangalore, Karnataka</p>

                                    </div>

                                </div>

                            </div>
                        ))
                    )
                }

            </div>


        </div>
    )
}

export default Contacts

export async function getServerSideProps() {
    return {
        props: {
            data: {}
        }
    }
}