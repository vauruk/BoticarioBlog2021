/**
 * @format
 */

import React from 'react';
import RouterNavigation from '../../routes/router';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import rootStore from '../../store';
import { Provider } from 'react-redux';

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={rootStore}>
          <RouterNavigation />
        </Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
