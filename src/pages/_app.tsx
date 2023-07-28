import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import { Provider } from 'react-redux';
import GlobalStyle from '@/components/globalstyles'

import Config from '@/frame/appArchitecture/config';
import Logo from '@/frame/appArchitecture/logo';
import Header from '@/frame/appArchitecture/header';
import Aside from '@/frame/appArchitecture/aside';
import Main from '@/frame/appArchitecture/main';
import FloatingLayerLegacy from '@/frame/appArchitecture/floatingLayerLegacy/floatingLayerLegacy';

import AsideContent from '@/content/frameRoot/asideContent';
import HeaderContent from '@/content/frameRoot/headerContent';
import LogoContent from '@/content/frameRoot/logoContent';
import { wrapper } from '@/store';
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
export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <GlobalStyle />
          <Config />
          <div>
            <FloatingLayerLegacy>
              <span>yyes!!!</span>
            </FloatingLayerLegacy>

            <Logo>
              <LogoContent></LogoContent>
            </Logo>
            <Header>
              <HeaderContent></HeaderContent>
            </Header>
            <Aside>
              <AsideContent></AsideContent>
            </Aside>
            <Main>
              <Component {...props.pageProps} />
            </Main>
          </div>
        </Provider>
      </ThemeProvider>
    </>
  )
}
