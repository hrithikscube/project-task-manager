import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PageNotFound from '../PageNotFound';

const menu_items = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'Projects',
    link: '/projects'
  },
  {
    name: 'Contacts',
    link: '/contacts'
  },
]

const Layout = ({ children }) => {

  const Router = useRouter()

  if (Router.pathname === '/_error') {
    return <PageNotFound />;
  }

  return (
    <div className='flex flex-row w-full h-screen'>

      <div className='w-[20%] bg-[#f0f0f0] lg:px-10 px-4 flex flex-col lg:gap-16 gap-4 items-center justify-start lg:py-20'>

        <h1 className='w-full uppercase font-semibold tracking-wide lg:text-xl'>Simple Task Manager</h1>

        <div className='flex flex-col lg:gap-6 gap-4 w-full'>
          {
            menu_items?.map(item => (
              <Link href={item?.link} className='w-full'>{item?.name}</Link>
            ))
          }

        </div>
      </div>


      <div className='w-full flex flex-col'>

        <div className='w-full h-20 shadow p-4 flex items-center justify-end lg:gap-6 gap-4'>

          <button>
            <img src="/icons/bell.svg" alt="bell" className='w-5 h-5' />
          </button>

          <button>
            <img src="/icons/mail.svg" alt="mail" className='w-5 h-5' />
          </button>

          <button className='flex items-center gap-2'>
            <img src="/icons/avatar.svg" alt="avatar" className='w-8 h-8' />

            <div className='flex items-center gap-2'>
              <p className='text-sm text-[#121212]'>Hrithik</p>
              <img src="/icons/acc-arrow.svg" alt="acc-arrow" className='w-4 h-4' />
            </div>

          </button>

        </div>

        <div className='lg:p-6 p-4 flex flex-col h-full overflow-y-auto'>

          {children}

        </div>

      </div>

    </div>
  )
}

export default Layout