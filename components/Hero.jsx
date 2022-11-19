import Image from 'next/image';
import { useState } from 'react';
import Banner from '../public/images/hero.jpg';
import Line from '../public/images/line.png';
import Particle1 from '../public/images/particle1.png';
import Particle2 from '../public/images/particle2.png';
import { Modal } from '../components';

const Hero = () => {
  const [showModal, setShowModal] = useState();
  return (
    <>
      <div className='grid grid-cols-1 items-center lg:grid-cols-2 m-auto gap-10 pt-16 lg:pt-0'>
        <div className='relative flex flex-col gap-4'>
          <h2 className='text-4xl lg:text-5xl font-bold tracking-wider max-w-lg leading-snug lg:leading-snug'>
            Track Your Employees&apos; Time And Automate Your Timesheets.
          </h2>
          <Image src={Line} alt='' />
          <p className='text-gray-500 font-sm max-w-lg'>
            Asiiko helps you track your employees&apos; time and automate
            timesheets. Every day, real-time updates that let you keep on top of
            your team&apos;s job activities.
          </p>
          <div className='flex flex-row items-center gap-6 pt-4'>
            <button
              onClick={() => setShowModal(true)}
              className='bg-primary p-2 px-6 rounded-lg font-medium text-white'
              title='GET STARTED TODAY'
            >
              GET STARTED TODAY
            </button>
            <button
              className='bg-secondary text-gray-700 font-medium p-2 px-6 rounded-lg'
              title='LEARN MORE'
            >
              LEARN MORE
            </button>
          </div>
          <div className='absolute hidden lg:block top-2 right-20'>
            <Image src={Particle1} alt='' />
          </div>
          <div className='absolute hidden lg:block -bottom-16 right-20'>
            <Image src={Particle2} alt='' />
          </div>
        </div>
        <div className=''>
          <Image src={Banner} alt='banner image' />
        </div>
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Hero;
