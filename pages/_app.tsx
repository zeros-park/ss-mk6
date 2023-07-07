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

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
}

export default function App({ Component, pageProps }: AppProps) {
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
            <Logo layout={layout}></Logo>
            <Header layout={layout}></Header>
            <Aside layout={layout}></Aside>
            <Main layout={layout}>
              <Component {...pageProps} />
            </Main>
          </div>

        </Provider>
      </ThemeProvider>
    </>
  )
}
