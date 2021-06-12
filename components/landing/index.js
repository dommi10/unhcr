import react from 'react';
import Menu from '../menu';
import FooterPage from '../footer';

export default function LandingPage() {
  return (
    <div className='flex flex-col w-full min-h-full p-2 px-4 bg-white '>
      <Menu />
      {/* Mobile landing Page */}
      <div className='relative flex flex-col'>
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
      <FooterPage />
    </div>
  );
}
