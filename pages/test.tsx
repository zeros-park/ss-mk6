import Head from 'next/head'
import styled from 'styled-components';
import CounterTestItem from "@/content/test-counter";
import DimdLayerTestItem from "@/content/test-dimdLayer";
import DimdLayerLegacyTestItem from "@/content/test-dimdLayerLegacy";


const TestItem = styled.div`
    min-height: 150px;
    margin: 10px 20px 10px 20px;
    display: block;
    border: 2px solid green;
`

export default function About() {
  return (
    <>
      <Head>
        <title>test page ssr</title>
        <meta name="description" content="my test by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <TestItem>
          <CounterTestItem />
        </TestItem>
        <TestItem>
          <DimdLayerTestItem></DimdLayerTestItem>
        </TestItem>
        <TestItem>
          <DimdLayerLegacyTestItem></DimdLayerLegacyTestItem>
        </TestItem>
        <TestItem>Main1</TestItem>
        <TestItem>Main2</TestItem>
        <TestItem>Main3</TestItem>
        <TestItem>Main4</TestItem>
        <TestItem>Main5</TestItem>
        <TestItem>Main6</TestItem>
        <TestItem>Main7</TestItem>
        <TestItem>Main8</TestItem>
        <div>end</div>
      </div>
    </>
  )
}
