import Head from 'next/head'
import styled from 'styled-components';
import { getOnceServerSideProps } from '@/frame/pagaWrapper/serverSideProps';
import { useSelector } from 'react-redux';
import { IRootStore } from '@/store';
import { useEffect, useState } from 'react';
import { IReactFC } from '@/types/global';


interface tMateImageList<T> {
  seo: {
    ogImage: string,
    twitterImage: string,
  },
  render: {
    time: string,
    data: T
  }
}
const Content = styled.div`${{
  border: '1px solid red'
}}`

export const getServerSideProps = getOnceServerSideProps(async (context) => {
  const t = new Date()
  console.log('zeros contextcontext: ', context.query.text)
  return {
    props: {
      seo: {
        ogImage: 'https://ss-mk5.vercel.app/asset/img/testimg5.png',
        twitterImage: 'https://ss-mk5.vercel.app/asset/img/testimg6.png',
      },
      render: {
        time: t.toString() + t.getMilliseconds(),
        data: context.query.text
      }
    }
  }
});
const Search: IReactFC<tMateImageList<string>> = ({ seo, render }) => {
  const routerRefreshTrigger = useSelector((state: IRootStore) => state.document.routerRefreshTrigger)
  const [clientTime, setClientTime] = useState('');

  const init = () => {
    const t = new Date();
    setClientTime(t.toString() + t.getMilliseconds())
  }

  useEffect(() => {
    init();
  }, [routerRefreshTrigger])

  return (
    <>
      <Head>
        <title>test page ssr</title>
        <meta name="description" content="my test by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="zeros-park의 test페이지 title, og:title" />
        <meta property="og:description" content="zeros-park의 test페이지 title, og:desc" />
        <meta property="og:image" content={seo.ogImage} />
        <meta name="twitter:title" content="zeros-park의 test페이지 title, twit:title" />
        <meta name="twitter:description" content="zeros-park의 test페이지 title, twit:desc" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image" content={seo.twitterImage} />
      </Head>
      <Content>
        <div>
          <div>서버렌더링시간: {render.time}</div>
          <div>클라이언트시간: {clientTime}</div>
        </div>
      </Content>
      <Content>
        <div>
          <div>검색 쿼리: {render.data}</div>
        </div>
        <div>end</div>
      </Content>
    </>
  )
}

export default Search;

