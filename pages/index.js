import Head from 'next/head';
import { useState } from 'react';
import Carousel from './Carousel';

export default function Home() {
  const [loop, setLoop] = useState(true);
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button onClick={(e) => setLoop((prev) => !prev)}>Loop Toggle</button>
      <main style={{ minHeight: `calc(100vh - 120px)` }}>
        <Carousel loop={loop} withIndicators duration={3000} />
      </main>

      <footer style={{ textAlign: 'center' }}>
        Stacked Slider &copy; Mahmoud Bekheet
      </footer>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
