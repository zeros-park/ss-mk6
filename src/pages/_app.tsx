import type { AppProps } from 'next/app'
import styled, { ThemeProvider, DefaultTheme } from 'styled-components'
import { Provider } from 'react-redux';
import GlobalStyle from '@/components/globalstyles'

import Config from '@/frame/appArchitecture/config';
import LogoContent from '@/content/frameRoot/logoContent';
import HeaderContent from '@/content/frameRoot/headerContent';
import Aside from '@/frame/appArchitecture/aside';
import { wrapper } from '@/store';
import { dcwStyled } from '@/frame/designComponentWrapper';

// import { ReactElement, ReactNode } from 'react';
// import { NextPage } from 'next';

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
}

const Wrapper = styled.section`${() => dcwStyled(({ layout, colorSet }) => ({
  default: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  darkMode: {
    backgroundColor: colorSet.darkBG,
    color: colorSet.darkFont
  },
}))}`
const VirtualArea = styled.section`${() => dcwStyled(({ layout }) => ({
  default: {
    pointerEvents: 'none',
    position: 'absolute',
    width: '100%',
    height: '100%',
    paddingBottom: layout.headerHeightSize,
  },
}))}`
const ScrolledArea = styled.section<{ isShowScrollbar: boolean }>`${({ isShowScrollbar }) => ({
  overflowX: 'hidden',
  overflowY: 'auto',
  height: '100%',
  ['&::-webkit-scrollbar']: {
    display: `${isShowScrollbar ? 'auto' : 'none'}`
  }
})}`
const HeaderArea = styled.section`${() => dcwStyled(({ layout }) => ({
  default: {
    display: 'flex',
    justifyContent: 'space-between',
    height: layout.headerHeightSize
  },
}))}`
const MainArea = styled.main`${() => dcwStyled(({ layout }) => ({
  default: {
    height: '100%',
    pointerEvents: 'auto',
    position: 'relative',
    marginLeft: `${layout.asideLeftSizeOptions.default}px`,
  },
  simple: {
    marginLeft: `${layout.asideLeftSizeOptions.simple}px`
  },
  minimal: {
    marginLeft: `${layout.asideLeftSizeOptions.minimal}px`
  }
}))}`

// // NEXT.js 가이드에서 제안하는 로직을 추가로 적용하려 했으나, 추후 필요가 생길때 추가 검토하도록 하자
// export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
//   getLayout?: (page: ReactElement) => ReactNode
// }
// type AppPropsWithLayout = AppProps & {
//   Component: NextPageWithLayout
// }


// export default function App({ Component, pageProps }: AppPropsWithLayout) {
export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <GlobalStyle />
          <Config />
          {/* <div> */}
          <Wrapper>
            <section>
              <HeaderArea>
                <LogoContent></LogoContent>
                <HeaderContent></HeaderContent>
              </HeaderArea>
            </section>
            <section>
              <VirtualArea>
                <ScrolledArea isShowScrollbar={false}>
                  <Aside></Aside>
                </ScrolledArea>
              </VirtualArea>
              <VirtualArea>
                <ScrolledArea isShowScrollbar={true}>
                  <MainArea>
                    <Component {...props.pageProps} />
                  </MainArea>
                </ScrolledArea>
              </VirtualArea>
            </section>
          </Wrapper>
          {/* </div> */}
        </Provider>
      </ThemeProvider>
    </>
  )
}
