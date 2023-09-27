import React, { useState, useEffect } from 'react';

// Lógica completa de isLoggedIn
// Clase 158: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25599262#search
export const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Se ejecuta por única vez al cargar el componente (luego de todo) cuando cambia la dependecia "[]"
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    if (storedIsLoggedIn === '1') {
      setIsLoggedIn(true);
    }
  }, []); // "dependencia"

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
