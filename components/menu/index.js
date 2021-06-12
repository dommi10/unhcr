import react, { useState, useContext } from 'react';
import Image from 'next/image';
import { Context } from '../../lib/state';
import classNames from 'classnames';
import { OPEN_OR_CLOSE_MENU } from '../../lib/actions';

export default function Menu() {
  const context = useContext(Context);
  const { state, dispatch } = context;
  // mobile
  return (
    <div
      className={classNames('flex flex-col w-full', {
        'mb-20': state.isMenuOpen,
        'mb-2': !state.isMenuOpen,
        'h-screen': state.isMenuOpen,
      })}
    >
      <div className='flex justify-end w-full'>
        <button
          onClick={() =>
            dispatch({
              type: OPEN_OR_CLOSE_MENU,
            })
          }
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-14 h-14 '
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            {state.isMenuOpen ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            )}
          </svg>
        </button>
      </div>
      <div
        className={classNames(
          { hidden: !state.isMenuOpen },
          'h-[99%]  pl-8 pr-4 pb-10',
        )}
      >
        {/* menu */}
        <div className='flex flex-col justify-center flex-1 w-full h-3/4'>
          <a href='/' className='flex items-center justify-start w-full'>
            <div className='w-10 h-10'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                />
              </svg>
            </div>
            <h2 className='ml-4 font-semibold medium-text'>Home</h2>
          </a>
          <a
            href='/new'
            className='flex items-center justify-start w-full mt-[41px]'
          >
            <div className='w-10 h-10'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
                />
              </svg>
            </div>
            <h2 className='ml-4 font-semibold medium-text'>Identification</h2>
          </a>
          <a
            href='/'
            className='flex items-center justify-start w-full mt-[41px]'
          >
            <div className='w-10 h-10'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
            <h2 className='ml-4 font-semibold medium-text'>About</h2>
          </a>
        </div>
        <div className='inset-x-0 bottom-0 h-1/4'>
          {/* avatar */}
          <div className='flex items-center justify-start w-full'>
            <div className='relative w-[61px] h-[61px] p-10 bg-red-300 rounded-full border-6'>
              <Image
                src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                layout='fill'
                objectFit='cover'
                className='rounded-full'
              />
            </div>
            <h2 className='ml-2 font-semibold normal-text'>Admin</h2>
          </div>
          {/* button */}
          <button className='w-[322px] mr-4 h-[51px] normal-text font-bold rounded-3xl mt-4 bg-[#2521E4] text-white '>
            Deconnexion
          </button>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
