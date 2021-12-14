import { BetSlipProvider } from '../context/BetSlip'
import type { AppProps } from 'next/app'

import BetSlip from '../components/BetSlip'
import MainContainer from '../components/MainContainer'
import NavBar from '../components/NavBar'

import { Sport } from '../types'

import './styles.scss'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NavBar eventKeys={Object.values(Sport)} />
      <MainContainer>
        <BetSlipProvider>
          <Component {...pageProps} />
          <BetSlip />
        </BetSlipProvider>
      </MainContainer>
    </>
  )
}

export default App
