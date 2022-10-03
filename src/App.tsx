import Header from './components/Layout/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './routes';
import styles from './index.module.css';
import theme from './theme'
import { ChakraProvider } from '@chakra-ui/react'
import {RootState} from 'store'
import {useSelector} from 'store/hooks';
function App() {
  const isLogged = useSelector((state) => state.profile.isLogged);
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Header />
        <main className={styles.main}>
          <Routes>
            {isLogged ? routes.logged.map(({ path, element }) => (
              <Route path={path} element={element} />
            )) : routes.default.map(({ path, element }) => (
              <Route path={path} element={element} />
            ))}
          </Routes>
        </main>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
