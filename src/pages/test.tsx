import Head from 'next/head'
import styled from 'styled-components';
import CounterTestItem from "@/content/test-counter";
import DimdLayerTestItem from "@/content/test-dimdLayer";
import DimdLayerLegacyTestItem from "@/content/test-dimdLayerLegacy";

interface mateImageList {
  ogImage: string,
  twitterImage: string,
}
const TestItem = styled.div`
    min-height: 150px;
    margin: 10px 20px 10px 20px;
    display: block;
    border: 2px solid green;
`
export async function getServerSideProps() {
  const metaImageList: mateImageList = await new Promise((resolve) => setTimeout(() => {
    resolve({
      ogImage: 'https://ss-mk5.vercel.app/asset/img/testimg5.png',
      twitterImage: 'https://ss-mk5.vercel.app/asset/img/testimg6.png'
    })
  }, 100));

  return {
    props: {
      metaImageList,
    },
  };
}

const Test: React.FC<{
  metaImageList: mateImageList
}> = ({ metaImageList }) => {
  return (
    <>
      <Head>
        <title>test page ssr</title>
        <meta name="description" content="my test by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="zeros-park의 test페이지 title, og:title" />
        <meta property="og:description" content="zeros-park의 test페이지 title, og:desc" />
        <meta property="og:image" content={metaImageList.ogImage} />
        <meta name="twitter:title" content="zeros-park의 test페이지 title, twit:title" />
        <meta name="twitter:description" content="zeros-park의 test페이지 title, twit:desc" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image" content={metaImageList.twitterImage} />
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
export default Test;