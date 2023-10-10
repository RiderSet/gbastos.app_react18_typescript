import reactLogo from './assets/react.svg'
import viteLogo from '../src/assets/logo.png'
import { Button } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './Routes';
import { AppThemeProvider, AuthProvider, DrawerProvider } from './crossCutting/context';
import { Login } from '@mui/icons-material';
import { MenuLateral } from './crossCutting/components';
import './App.css';

export const App = () => {
  return (
    <>
    <AuthProvider>
      <AppThemeProvider>
        <Login>
          <DrawerProvider>
            <BrowserRouter>
              <MenuLateral>
                <AppRoutes />
              </MenuLateral>
            </BrowserRouter>
          </DrawerProvider>
        </Login>
                  <div>
                    <a href="https://vitejs.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://react.dev" target="_blank">
                      <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                  </div>
                  <h1>React18 + Typescript Demo</h1>
                  <div className="card">
                    <Button variant="contained" color="primary" >
                      Clique aqui!
                    </Button>
                    <p>
                      Clique no botão acima e você será direcionado a página inicial do App.
                    </p>
                  </div>
                  <p className="read-the-docs">
                    Você pode também clicar no logo <code>GBastos</code> acima.
                  </p>
      </AppThemeProvider>
    </AuthProvider>
    </>
  )
}
