import React from 'react';
import { ThemeProvider as MUIThemeProvider, CssBaseline } from '@mui/material';
import {darkTheme, lightTheme} from './global/modeContext/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import { publicRoutes } from './routes/routes';
import { ModeContext } from './global/modeContext/modeContext'
import { useContext } from 'react';
import { Fragment } from 'react';


function App() {
  const { darkMode } = useContext(ModeContext)

  return (
      <MUIThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div className="App">
        <Router>
        <Routes>
          {
            publicRoutes.map((route, index) => {
              const Page = route.component;
              let Layout = DefaultLayout;

              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }

              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })
          }
        </Routes>
        </Router>
      </div>
    </MUIThemeProvider>
  );
}


export default App;
