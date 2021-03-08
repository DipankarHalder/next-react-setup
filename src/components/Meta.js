import Head from 'next/head';
const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />

      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
      <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap" rel="stylesheet" />
    </Head>
  )
}

Meta.defaultProps = { 
  title: 'Dipankar Halder',
  keywords: 'Business related keyword',
  description: 'Business Description'
}

export default Meta;