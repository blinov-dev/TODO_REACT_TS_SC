import { GlobalStyle } from '../../themes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "../Header/Header"
import Footer from '../Footer/Footer';
import { MainPage, NotFoundPage } from '../../pages';



function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
