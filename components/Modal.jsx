import Image from 'next/image';
import { VscChromeClose } from 'react-icons/vsc';
import Store from '../public/images/img3.jpg';

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === 'wrapper') onClose();
  };
  return (
    <>
      <div
        className='flex justify-center items-center fixed inset-0 backdrop-brightness-50 p-4 z-10'
        id='wrapper'
        onClick={handleClose}
      >
        <div className='relative flex flex-col w-full max-w-4xl rounded-lg p-10 gap-10 bg-white'>
          <button
            className='absolute top-6 right-6 select-none'
            onClick={() => onClose()}
          >
            <VscChromeClose className='w-6 h-6' />
          </button>
          <h2 className='flex mx-auto text-center text-2xl max-w-xs font-semibold tracking-wide'>
            Start uisng Asiiko for your team today
          </h2>
          <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
            <div className='flex flex-col bg-lightBlue '>
              <div className='bg-black rounded-t-lg p-3 text-white font-medium text-center'>
                For Organizations
              </div>
              <div className='flex flex-row items-center mx-auto gap-6 p-6 pt-10 pb-10'>
                <button className='bg-primary p-1.5 text-white rounded-md px-6'>
                  LOG IN
                </button>
                <button className='bg-white p-1.5 text-black rounded-md px-6'>
                  SIGN UP
                </button>
              </div>
            </div>
            <div className='flex flex-col bg-lightGreen '>
              <div className='bg-mainGreen rounded-t-lg p-3 text-white font-medium text-center'>
                For Workers
              </div>
              <div className='flex flex-row items-center mx-auto pt-10 pb-10'>
                <Image src={Store} width={200} height={200} alt='store' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
