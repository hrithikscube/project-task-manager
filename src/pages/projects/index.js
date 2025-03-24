import React from 'react';
import { useRouter } from 'next/router';
import PrimaryButton from '@/components/PrimaryButton';

const Projects = () => {

    const Router = useRouter()

    return (
        <div className='flex flex-col lg:gap-5 gap-4'>

            <div className='flex items-center justify-between w-full'>
                <h1 className='lg:text-3xl text-2xl font-medium text-black'>List of Projects <span className='text-base text-[#6C6C6C]'>(5)</span></h1>

                <PrimaryButton width="w-fit" label="+ Add New Project" />
            </div>


            <div className='grid grid-cols-2 lg:gap-5 gap-4'>

                {
                    React.Children.toArray(
                        [...Array(5)]?.map((item, index) => (
                            <div onClick={() => {
                                Router.push(`/projects/${index}`)
                            }} className='bg-[#f0f0f0] p-4 rounded-xl flex flex-col lg:gap-4 gap-2 lg:hover:shadow cursor-pointer'>

                                <div className='flex flex-col gap-1'>
                                    <h2 className='lg:text-base text-sm text-black font-medium'>Project Name {index + 1}</h2>

                                    <p className='text-sm text-black h-16 overflow-y-auto'>Voluptate pariatur laboris veniam voluptate veniam ad officia amet sunt ad.</p>
                                </div>

                                <div className='grid grid-cols-2'>

                                    <div className='flex items-center gap-2'>

                                        <p className='text-sm font-medium text-black'>All Tasks:</p>
                                        <p className='text-sm text-black'>20</p>

                                    </div>

                                    <div className='flex items-center gap-2'>

                                        <p className='text-sm font-medium text-black'>Deadline:</p>
                                        <p className='text-sm text-black'>24/3/2025</p>

                                    </div>

                                    <div className='flex items-center gap-2'>

                                        <p className='text-sm font-medium text-black'>Frozen:</p>
                                        <p className='text-sm text-black'>3</p>

                                    </div>

                                    <div className='flex items-center gap-2'>

                                        <p className='text-sm font-medium text-black'>Created on:</p>
                                        <p className='text-sm text-black'>24/3/2025</p>

                                    </div>

                                    <div className='flex items-center gap-2'>

                                        <p className='text-sm font-medium text-black'>Closed:</p>
                                        <p className='text-sm text-black'>5</p>

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

export default Projects


export async function getServerSideProps() {
    return {
        props: {
            data: {}
        }
    }
}