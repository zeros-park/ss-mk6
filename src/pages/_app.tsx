import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import { Provider } from 'react-redux';
import store from '@/store';
import GlobalStyle from '@/components/globalstyles'

import { ILayout } from '@/types/global';
import Logo from '@/frame/logo';
import Header from '@/frame/header';
import Aside from '@/frame/aside';
import Main from '@/frame/main';
import FloatingLayerLegacy from '@/frame/floatingLayerLegacy/floatingLayerLegacy';
import AsideContent from '@/content/frameRoot/asideContent';
import HeaderContent from '@/content/frameRoot/headerContent';
import LogoContent from '@/content/frameRoot/logoContent';
// import { ReactElement, ReactNode } from 'react';
// import { NextPage } from 'next';

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
}

// // NEXT.js 가이드에서 제안하는 로직을 추가로 적용하려 했으나, 추후 필요가 생길때 추가 검토하도록 하자
// export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
//   getLayout?: (page: ReactElement) => ReactNode
// }
// type AppPropsWithLayout = AppProps & {
//   Component: NextPageWithLayout
// }

// export default function App({ Component, pageProps }: AppPropsWithLayout) {
export default function App({ Component, pageProps }: AppProps) {
  /**
   * 다크모드 설정과 함께 해당 정보도 redux로 넘기는게 맞을듯?
   */
  const layout: ILayout = {
    mediaWidthOptions: {
      minimal: 300,
      simple: 600,
    },
    asideLeftSizeOptions: {
      minimal: null,
      simple: 60,
      default: 200,
    },
    headerHeightSize: 50,
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <GlobalStyle />
          <div>

            <FloatingLayerLegacy>
              <span>yyes!!!</span>
            </FloatingLayerLegacy>

            <Logo layout={layout}>
              <LogoContent></LogoContent>
            </Logo>
            <Header layout={layout}>
              <HeaderContent></HeaderContent>
            </Header>
            <Aside layout={layout}>
              <AsideContent></AsideContent>
            </Aside>
            <Main layout={layout}>
              <Component {...pageProps} />
            </Main>
          </div>
        </Provider>
      </ThemeProvider>
    </>
  )
}
