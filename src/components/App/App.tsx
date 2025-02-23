import { GlobalStyle } from '../../themes';

import Header from "../Header/Header"
import Footer from '../Footer/Footer';
import { MainPage } from '../../pages';


function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainPage />
      <Footer />
    </>
  )
}

export default App
