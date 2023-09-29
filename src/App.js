import React, { useContext } from 'react';

import LoginUseReducer from './components/Login/LoginUseReducer';
import LoginUseState from './components/Login/LoginUseState';
import LoginNew from './components/Login/LoginNew';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

import { AuthContext } from './store/auth-context';

function App() {
  const authContext = useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!authContext.isLoggedIn && <LoginUseReducer />}
        {authContext.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
