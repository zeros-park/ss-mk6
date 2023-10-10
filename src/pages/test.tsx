import Head from 'next/head'
import styled from 'styled-components';
import CounterTestItem from "@/content/test-counter";
import DimdLayerTestItem from "@/content/test-dimdLayer";
import { getOnceServerSideProps } from '@/frame/pagaWrapper/serverSideProps';
import { useSelector } from 'react-redux';
import { IRootStore } from '@/store';
import { useEffect, useState } from 'react';
import SearchContent from '@/content/searchContent';


interface mateImageList {
  ogImage: string,
  twitterImage: string,
  time: string,
}
const TestItem = styled.div`
    min-height: 150px;
    margin: 10px 20px 10px 20px;
    display: block;
    border: 2px solid green;
`
const Content = styled.div`${{
  border: '1px solid red'
}}`

export const getServerSideProps = getOnceServerSideProps(async () => {
  const t = new Date()
  return {
    props: {
      metaImageList: {
        ogImage: 'https://ss-mk5.vercel.app/asset/img/testimg5.png',
        twitterImage: 'https://ss-mk5.vercel.app/asset/img/testimg6.png',
        time: t.toString() + t.getMilliseconds()
      }
    }
  }
});
const Test: React.FC<{ metaImageList: mateImageList }> = ({ metaImageList }) => {
  const colorMode = useSelector((state: IRootStore) => state.document.colorMode);
  const routerRefreshTrigger = useSelector((state: IRootStore) => state.document.routerRefreshTrigger)
  const [clientTime, setClientTime] = useState('');

  const init = () => {
    const t = new Date();
    setClientTime(t.toString() + t.getMilliseconds())
  }

  useEffect(() => {
    init();
  }, [routerRefreshTrigger])
  // }, [])

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
      <Content>
        <TestItem>
          <>
            <div>서버렌더링시간: {metaImageList.time}</div>
            <div>클라이언트시간: {clientTime}</div>
            <div>store data check</div>
            <CounterTestItem />
            <div>layout -  colorMode: {colorMode}</div>
          </>
        </TestItem>
        <TestItem>
          <DimdLayerTestItem></DimdLayerTestItem>
        </TestItem>
        <TestItem>
          <SearchContent></SearchContent>
        </TestItem>
        <TestItem>Main2</TestItem>
        <TestItem>Main3</TestItem>
        <TestItem>Main4</TestItem>
        <TestItem>Main5</TestItem>
        <TestItem>Main6</TestItem>
        <TestItem>Main7</TestItem>
        <TestItem>Main8</TestItem>
        <div>end</div>
      </Content>
    </>
  )
}

export default Test;

