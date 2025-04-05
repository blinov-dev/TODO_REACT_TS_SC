import { GlobalStyle } from '../../themes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "../Header/Header"
import Footer from '../Footer/Footer';
import { MainPage, NotFoundPage } from '../../pages';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>

          <Route path='/' element={<MainPage />} />
          <Route path='*' element={<NotFoundPage />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
