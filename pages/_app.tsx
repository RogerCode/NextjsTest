import '../styles/global.css'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../store/store'
import React from 'react'
import AuthProvider from '../contexts/auth-context'

export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  </Provider>
}
