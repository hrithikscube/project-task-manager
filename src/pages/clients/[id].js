import React from 'react';
import Chip from '@/components/Chip';
import { useRouter } from 'next/router';

const ViewClient = () => {

    const Router = useRouter()
    let { id } = Router.query

    return (
        <div className='flex flex-col lg:gap-5 gap-4 w-full h-full overflow-y-auto'>

            <h1 className='lg:text-3xl text-2xl font-medium text-[#121212] capitalize'>Client Name</h1>

            <div className='flex flex-row w-full lg:gap-5 gap-4'>

                <div className='grid grid-cols-2 p-4 w-5/12 h-28 bg-[#f0f0f0] rounded-xl'>
                    <div className='flex items-center gap-2'>

                        <p className='text-sm font-medium text-[#121212]'>Address:</p>
                        <p className='text-sm text-[#121212]'>Bangalore</p>

                    </div>

                    <div className='flex items-center gap-2'>

                        <p className='text-sm font-medium text-[#121212]'>Date added:</p>
                        <p className='text-sm text-[#121212]'>24/3/2025</p>

                    </div>

                    <div className='flex items-center gap-2'>

                        <p className='text-sm font-medium text-[#121212]'>Contacts:</p>
                        <p className='text-sm text-[#121212]'>+91 9731816447</p>

                    </div>

                    <div className='flex items-center gap-2'>

                        <p className='text-sm font-medium text-[#121212]'>Status:</p>
                        <p className='text-sm text-[#121212]'><Chip label="Active" /></p>

                    </div>
                </div>

                <div className='flex flex-col p-4 w-7/12 h-28 bg-[#f0f0f0] rounded-xl'>

                    <p className='text-sm text-[#121212]'>Proident aute culpa irure adipisicing quis exercitation minim.Cillum aliquip non irure nisi irure ullamco consequat tempor esse adipisicing esse est adipisicing.Sint sint amet quis sit irure duis consequat voluptate ex officia sint amet non do.</p>

                </div>

            </div>

            <div className='flex flex-row w-full lg:gap-5 gap-4'>


                <div className='w-8/12 p-4 rounded-xl bg-[#f0f0f0] flex flex-col lg:gap-5 gap-4'>

                    <h2 className='lg:text-base text-sm text-[#121212] font-medium'>Projects</h2>

                    <div className='flex flex-col lg:gap-4 gap-2 h-48 overflow-y-auto'>
                        {
                            [...Array(6)].map(item => (
                                <div className='w-full h-12 flex-shrink-0 rounded-lg bg-[#E0E4EA]' />
                            ))
                        }
                    </div>

                </div>

                <div className='w-4/12 p-4 rounded-xl bg-[#f0f0f0] flex flex-col lg:gap-5 gap-4'>

                    <h2 className='lg:text-base text-sm text-[#121212] font-medium'>Tasks</h2>

                    <div className='flex flex-col lg:gap-4 gap-2 h-48 overflow-y-auto'>
                        {
                            [...Array(6)].map(item => (
                                <div className='w-full h-12 flex-shrink-0 rounded-lg bg-[#E0E4EA]' />
                            ))
                        }
                    </div>

                </div>

            </div>

            <div className='flex flex-row w-full lg:gap-5 gap-4'>


                <div className='w-8/12 p-4 rounded-xl bg-[#f0f0f0] flex flex-col lg:gap-5 gap-4'>

                    <h2 className='lg:text-base text-sm text-[#121212] font-medium'>Payments</h2>

                    <div className='flex flex-col lg:gap-4 gap-2 h-48 overflow-y-auto'>
                        {
                            [...Array(6)].map(item => (
                                <div className='w-full h-12 flex-shrink-0 rounded-lg bg-[#E0E4EA]' />
                            ))
                        }
                    </div>

                </div>

                <div className='w-4/12 p-4 rounded-xl bg-[#f0f0f0] flex flex-col lg:gap-5 gap-4'>

                    <h2 className='lg:text-base text-sm text-[#121212] font-medium'>Documents</h2>

                    <div className='flex flex-col lg:gap-4 gap-2 h-48 overflow-y-auto'>
                        {
                            [...Array(6)].map(item => (
                                <div className='w-full h-12 flex-shrink-0 rounded-lg bg-[#E0E4EA]' />
                            ))
                        }
                    </div>

                </div>

            </div>

        </div>
    )
}

export default ViewClient


export async function getServerSideProps() {
    return {
        props: {
            data: {}
        }
    }
}