import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { RiMenu3Line } from 'react-icons/ri';
import { VscChromeClose } from 'react-icons/vsc';
import { Modal } from '../components';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState();
  const menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });
  return (
    <>
      <header ref={menuRef}>
        {/* PC Menu */}
        <div className='hidden lg:block'>
          <div className='grid grid-cols-2'>
            <div className='flex flex-row items-center gap-16'>
              <div>
                <Image
                  src='/images/logo.jpg'
                  width={80}
                  height={50}
                  alt='logo'
                />
              </div>
              <ul className='flex flex-row font-medium items-center gap-6'>
                <li>PRODUCT</li>
                <li>WHO WE SERVE</li>
                <li>PRICING</li>
              </ul>
            </div>
            <div className='flex flex-row items-center place-content-end gap-6'>
              <button
                className='bg-primary p-2 px-6 rounded-lg font-semibold text-white'
                title='LOG IN'
              >
                LOG IN
              </button>
              <button
                onClick={() => setShowModal(true)}
                className='bg-secondary text-gray-700 font-semibold p-2 px-6 rounded-lg'
              >
                GET STARTED
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className='lg:hidden'>
          <div className='flex flex-row items-center justify-between'>
            <Image src='/images/logo.jpg' width={80} height={50} alt='logo' />
            <button onClick={() => setIsOpen((prev) => !prev)}>
              {!isOpen ? (
                <RiMenu3Line className='w-8 h-8' />
              ) : (
                <VscChromeClose className='w-8 h-8' />
              )}
            </button>
          </div>
          {isOpen && (
            <div className='flex flex-col gap-8'>
              <ul className='flex flex-col pt-8 gap-5'>
                <li>PRODUCT</li>
                <li>WHO WE SERVE</li>
                <li>PRICING</li>
              </ul>
              <div className='flex flex-row items-center gap-6'>
                <button
                  className='bg-primary p-2 px-6 rounded-lg font-semibold text-white'
                  title='LOG IN'
                >
                  LOG IN
                </button>
                <button
                  onClick={() => setShowModal(true)}
                  className='bg-secondary text-gray-700 font-semibold p-2 px-6 rounded-lg'
                >
                  GET STARTED
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Header;
