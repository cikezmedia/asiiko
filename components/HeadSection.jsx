import Head from 'next/head';

const HeadSection = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name='description' content='Asiiko Task Designed by Victor' />
        <link rel='icon' href='/images/favicon.png' />
      </Head>
    </>
  );
};

export default HeadSection;
