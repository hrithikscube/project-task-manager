import React from 'react';
import Chip from '@/components/Chip';
import { useRouter } from 'next/router';

const ViewProject = () => {

    const Router = useRouter()
    let { id } = Router.query

    return (
        <div className='flex flex-col lg:gap-5 gap-4 w-full h-full'>

            <h1 className='lg:text-3xl text-2xl font-medium text-[#121212]'>Project Name</h1>

            <div className='grid grid-cols-4 w-full lg:gap-5 gap-4'>

                <div className='flex flex-col p-4 w-full h-28 bg-[#f0f0f0] rounded-xl gap-2'>
                    <div className='flex items-center gap-2'>

                        <p className='text-sm font-medium text-[#121212]'>Date added:</p>
                        <p className='text-sm text-[#121212]'>24/3/2025</p>

                    </div>

                    <div className='flex items-center gap-2'>

                        <p className='text-sm font-medium text-[#121212]'>Deadline:</p>
                        <p className='text-sm text-[#121212]'>24/3/2025</p>

                    </div>

                    <div className='flex items-center gap-2'>

                        <p className='text-sm font-medium text-[#121212]'>Participants:</p>
                        <p className='text-sm text-[#121212]'>John, Jack, Jim</p>

                    </div>
                </div>

                <div className='flex flex-col p-4 w-full h-28 bg-[#f0f0f0] rounded-xl col-span-2'>

                    <p className='text-sm text-[#121212]'>Proident aute culpa irure adipisicing quis exercitation minim.Cillum aliquip non irure nisi irure ullamco consequat tempor esse adipisicing esse est adipisicing.Sint sint amet quis sit irure duis consequat voluptate ex officia sint amet non do.</p>

                </div>

                <div className='flex flex-col p-4 w-full h-28 bg-[#f0f0f0] rounded-xl gap-2'>

                    <div className='flex items-center gap-2'>

                        <p className='text-sm font-medium text-[#121212]'>All Tasks:</p>
                        <p className='text-sm text-[#121212]'>6</p>

                    </div>

                    <div className='flex items-center gap-2'>

                        <p className='text-sm font-medium text-[#121212]'>Closed:</p>
                        <p className='text-sm text-[#121212]'>0</p>

                    </div>

                    <div className='flex items-center gap-2'>

                        <p className='text-sm font-medium text-[#121212]'>Frozen:</p>
                        <p className='text-sm text-[#121212]'>2</p>

                    </div>

                </div>

            </div>


            <div className='grid grid-cols-4 lg:gap-5 gap-4 w-full h-full'>

                <div className='flex flex-col p-4 rounded-xl bg-[#f0f0f0] lg:gap-5 gap-4 w-full'>

                    <div className='flex items-center justify-between'>

                        <h2 className='lg:text-base text-sm font-medium text-[#121212]'>To do</h2>

                        <button>
                            <img src="/icons/add-green.svg" alt="add-green" className='w-5 h-5' />
                        </button>

                    </div>

                    <div className='h-88 flex flex-col overflow-y-auto lg:gap-4 gap-2'>
                        {
                            [...Array(10)]?.map((item, index) => (
                                <div className='bg-[#E0E4EA] flex flex-col flex-shrink-0 rounded-xl p-4 gap-2'>


                                    <div className='flex items-center gap-2'>
                                        <p className='text-base font-medium text-[#121212]'>Some Task {index + 1}:</p>

                                        <Chip label="High" />
                                    </div>

                                    <div>
                                        <div className='flex items-center gap-2'>

                                            <p className='text-sm font-medium text-[#6C6C6C]'>Participant:</p>
                                            <p className='text-sm text-[#121212]'>John</p>

                                        </div>

                                        <div className='flex items-center gap-2'>

                                            <p className='text-sm font-medium text-[#6C6C6C]'>Date added:</p>
                                            <p className='text-sm text-[#121212]'>24/3/2025</p>

                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>

                <div className='flex flex-col p-4 rounded-xl bg-[#f0f0f0] lg:gap-5 gap-4 w-full'>

                    <div className='flex items-center justify-between'>

                        <h2 className='lg:text-base text-sm font-medium text-[#121212]'>In Progress</h2>

                    </div>

                    <div className='h-88 flex flex-col overflow-y-auto lg:gap-4 gap-2'>
                        {
                            [...Array(2)].map((item, index) => (
                                <div className='bg-[#E0E4EA] flex flex-col flex-shrink-0 rounded-xl p-4 gap-2'>


                                    <div className='flex items-center gap-2'>
                                        <p className='text-base font-medium text-[#121212]'>Some Task {index + 1}:</p>

                                        <Chip label="Medium" />
                                    </div>

                                    <div>
                                        <div className='flex items-center gap-2'>

                                            <p className='text-sm font-medium text-[#6C6C6C]'>Participant:</p>
                                            <p className='text-sm text-[#121212]'>John</p>

                                        </div>

                                        <div className='flex items-center gap-2'>

                                            <p className='text-sm font-medium text-[#6C6C6C]'>Date added:</p>
                                            <p className='text-sm text-[#121212]'>24/3/2025</p>

                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>

                <div className='flex flex-col p-4 rounded-xl bg-[#f0f0f0] lg:gap-5 gap-4 w-full'>

                    <div className='flex items-center justify-between'>

                        <h2 className='lg:text-base text-sm font-medium text-[#121212]'>Closed</h2>

                    </div>

                    <div className='h-88 flex flex-col overflow-y-auto lg:gap-4 gap-2'>
                        {
                            [...Array(1)].map((item, index) => (
                                <div className='bg-[#E0E4EA] flex flex-col flex-shrink-0 rounded-xl p-4 gap-2'>


                                    <div className='flex items-center gap-2'>
                                        <p className='text-base font-medium text-[#121212]'>Some Task {index + 1}:</p>

                                        <Chip label="Medium" />
                                    </div>

                                    <div>
                                        <div className='flex items-center gap-2'>

                                            <p className='text-sm font-medium text-[#6C6C6C]'>Participant:</p>
                                            <p className='text-sm text-[#121212]'>John</p>

                                        </div>

                                        <div className='flex items-center gap-2'>

                                            <p className='text-sm font-medium text-[#6C6C6C]'>Date added:</p>
                                            <p className='text-sm text-[#121212]'>24/3/2025</p>

                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>

                <div className='flex flex-col p-4 rounded-xl bg-[#f0f0f0] lg:gap-5 gap-4 w-full'>

                    <div className='flex items-center justify-between'>

                        <h2 className='lg:text-base text-sm font-medium text-[#121212]'>Frozen</h2>

                    </div>

                    <div className='h-88 flex flex-col overflow-y-auto lg:gap-4 gap-2'>
                        {
                            [...Array(1)].map((item, index) => (
                                <div className='bg-[#E0E4EA] flex flex-col flex-shrink-0 rounded-xl p-4 gap-2'>


                                    <div className='flex items-center gap-2'>
                                        <p className='text-base font-medium text-[#121212]'>Some Task {index + 1}:</p>

                                        <Chip label="Low" />
                                    </div>

                                    <div>
                                        <div className='flex items-center gap-2'>

                                            <p className='text-sm font-medium text-[#6C6C6C]'>Participant:</p>
                                            <p className='text-sm text-[#121212]'>John</p>

                                        </div>

                                        <div className='flex items-center gap-2'>

                                            <p className='text-sm font-medium text-[#6C6C6C]'>Date added:</p>
                                            <p className='text-sm text-[#121212]'>24/3/2025</p>

                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>

            </div>

        </div>
    )
}

export default ViewProject