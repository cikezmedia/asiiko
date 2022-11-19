import { HeadSection, Header, Hero } from '../components/';

const Home = () => {
  return (
    <>
      <HeadSection title='Welcome to Asiiko Task' />
      <div className='flex flex-col bg-white h-screen p-6 lg:px-20'>
        <Header />
        <Hero />
      </div>
    </>
  );
};

export default Home;
