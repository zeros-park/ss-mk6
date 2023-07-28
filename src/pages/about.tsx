import Head from 'next/head'
import Link from 'next/link'
import { Container, Main, Title, Description } from '@/components/sharedstyles'
import { getOnceServerSideProps } from '@/frame/pagaWrapper/serverSideProps'

export const getServerSideProps = getOnceServerSideProps();

export default function About() {
  return (
    <Container>
      <Head>
        <title>about page csr</title>
        <meta name="description" content="my test by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="zeros-park의 about페이지 title, og:title" />
        <meta property="og:description" content="zeros-park의 about페이지 title, og:desc" />
        <meta property="og:image" content="https://ss-mk5.vercel.app/asset/img/testimg3.png" />
        <meta name="twitter:title" content="zeros-park의 about페이지 title, twit:title" />
        <meta name="twitter:description" content="zeros-park의 about페이지 title, twit:desc" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image" content="https://ss-mk5.vercel.app/asset/img/testimg4.png" />
      </Head>
      <Main>
        <Title>About Page</Title>
        <Description>
          <Link href="/">&larr; Go Home</Link>
        </Description>
      </Main>
    </Container>
  )
}