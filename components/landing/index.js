import react from 'react';
import Menu from '../menu';
import Image from 'next/image';
import FooterPage from '../footer';

export default function LandingPage() {
  return (
    <div className='flex flex-col w-full max-w-screen-lg min-h-full p-2 px-4 bg-white md:px-6 md:mx-auto '>
      <Menu />
      {/* Mobile landing Page */}
      <div className='relative flex flex-col md:hidden'>
        <div className='flex flex-col items-center justify-center w-full px-4 mt-6'>
          {/* text */}
          <div className='font-extrabold text-center medium-text'>
            <p>
              Nous vous aidons à sauver des vies en denoncans les abus de tout
              genre
            </p>
          </div>
          <button className='mt-6 focus:outline-none base-text font-bold active:outline-none w-[240px] h-[47px] text-white bg-[#2521E4] rounded-full'>
            Commencer
          </button>
        </div>
      </div>
      {/* desktop view */}
      <div className='items-center justify-between hidden w-full mt-10 md:flex'>
        {/* landing tex */}
        <div className='flex flex-col items-start'>
          <p className='font-bold large-text'>
            Nous vous aidons à sauver des vies en denoncans les abus de tout
            genre
          </p>
          <p className='mt-4 font-thin'>
            Toute vie est sacrée et merite une protection
          </p>

          <button className='mt-12 focus:outline-none bg-[#2521E4] w-[219px] h-[54px] font-semibold normal-text rounded-full text-white '>
            Commencer
          </button>
        </div>
        {/* image */}
        <div>
          <div className='relative h-[422px] lg:w-[581px] md:w-[400px]'>
            <Image
              src='/images/illustration.png'
              layout='fill'
              objectFit='contain'
            />
          </div>
        </div>
      </div>
      <FooterPage />
    </div>
  );
}
