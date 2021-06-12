import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function FooterPage() {
  return (
    // for mobile view
    <div className='w-full px-4 mt-[4rem]'>
      {/* contact */}
      <div className='flex items-center w-full'>
        {/* rounded image */}
        <div className='relative h-[65px]  rounded-full w-[65px]'>
          <Image
            src='/images/logo1.png'
            layout='fill'
            objectFit='cover'
            className='rounded-full'
          />
        </div>
        {/* societe info */}
        <div className='flex flex-col items-start ml-4'>
          <div className='flex flex-col'>
            <p className='font-bold base-text'>Societe Name</p>
            <p className='font-thin base-text'>Grevelias, Goma, RDC</p>
          </div>
          <div className='flex flex-col mt-2'>
            <p className='font-medium base-text'>societe@gmail.com</p>
            <p className='font-medium base-text'>(243) 9000000000</p>
          </div>
        </div>
      </div>
      {/* Navigation */}
      <div className='flex flex-col w-full mt-12'>
        <a href='/' className='font-bold'>
          Home
        </a>
        <a href='/' className='mt-2 font-bold'>
          Identification
        </a>
        <a href='/' className='mt-2 font-bold'>
          About
        </a>
      </div>
      {/* social Media  */}
      <div className='flex flex-col w-full mt-4'>
        <p className='font-medium'>Reseau Sociaux</p>
        {/* icons */}
        <div className='flex items-center mt-2'>
          <Link href='https://wwww.facebook.com'>
            <div className='w-6 h-6 mr-1 font-bold'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'></path>
              </svg>
            </div>
          </Link>
          <Link href='https://wwww.instagram.com'>
            <div className='w-6 h-6 mr-1 font-bold'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <rect x='2' y='2' width='20' height='20' rx='5' ry='5'></rect>
                <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
                <line x1='17.5' y1='6.5' x2='17.51' y2='6.5'></line>
              </svg>
            </div>
          </Link>
          <Link href='https://wwww.twitter.com'>
            <div className='w-6 h-6 mr-1 font-bold'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z'></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>
      {/* COpy right */}
      <div className='flex justify-center mt-10'>
        <p className='text-xs font-bold'>
          copyright 2021 by conebase, All right reserved
        </p>
      </div>
    </div>
  );
}

export default FooterPage;
