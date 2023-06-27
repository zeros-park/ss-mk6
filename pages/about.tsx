'use client'

import Head from 'next/head'
import Link from 'next/link'
import { Container, Main, Title, Description } from '../components/sharedstyles'

export default function About() {
  return (
    <Container>
      <Head>
        <title>about page csr</title>
        <meta name="description" content="my test by create next app" />
        <link rel="icon" href="/favicon.ico" />
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
