import Head from 'next/head'
import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
} from '@/components/sharedstyles'
import Cards from '@/components/cards'
import { getOnceServerSideProps } from '@/frame/pagaWrapper/serverSideProps';

export const getServerSideProps = getOnceServerSideProps();

export default function Home() {
  return (
    <>
      <Head>
        <title>zeros next.js home !!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="zeros-park의 home페이지 title, og:title"
        />
        <meta
          property="og:description"
          content="zeros-park의 home페이지 title, og:desc"
        />
        <meta
          property="og:image"
          content="https://ss-mk5.vercel.app/asset/img/testimg1.png"
        />
        <meta
          name="twitter:title"
          content="zeros-park의 home페이지 title, twit:title"
        />
        <meta
          name="twitter:description"
          content="zeros-park의 home페이지 title, twit:desc"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:image"
          content="https://ss-mk5.vercel.app/asset/img/testimg2.png"
        />
      </Head>
      <Main
        style={{
          height: "100%",
          backgroundColor: "#b3dbb3",
          borderRadius: "100px",
        }}
      >
        <Title>
          Welcome to <a href="https://nextjs.org">Next.js! 25.1.17</a>
        </Title>

        <Description>
          Get started by editing
          <CodeTag>pages/index.tsx</CodeTag>
        </Description>

        <Cards />
      </Main>
    </>
  );
}
