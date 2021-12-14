import MainContainer from 'components/MainContainer'
import NavBar from 'components/NavBar'
import type { AppProps } from 'next/app'
import { Sport } from 'types'

import './styles.scss'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NavBar eventKeys={Object.values(Sport)} />
      <MainContainer>
        {/* <BetSlipContext> */}
        <Component {...pageProps} />
        {/* <BetSlip /> */}
        {/* </BetSlipContext> */}
      </MainContainer>
    </>
  )
}

export default App
