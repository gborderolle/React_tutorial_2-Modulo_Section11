import React, { useState, useEffect, useRef } from 'react';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import { Input } from '../UI/Input/Input';

import classes from './Login.module.css';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  // Clase 145: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25599216#overview
  // Uso de useEffect()
  useEffect(() => {
    const timerHandler = setTimeout(() => {
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
    }, 500);

    return () => {
      clearTimeout(timerHandler);
      // "Cleanup function" función que limpia un proceso. Sirve para validar si ya existe el email en el back (con un request), por ej.
    };
    // Clase 147: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25599220#search
    // Hago la validación sólo si no se apreta ninguna tecla luego de 500 ms (no en cada teclazo)
  }, [enteredEmail, enteredPassword]); // useEffect() se ejecuta sólo si al menos una de las dependencias cambia. Puedo pasarle consts o funciones

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes('@')
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!emailIsValid) {
      emailInputRef.current.focus(); // focus() función definida en el ImperativeRef de Input.js
      return;
    }
    if (!passwordIsValid) {
      passwordInputRef.current.focus();
      return;
    }
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          enteredValue={enteredEmail}
          changeHandler={emailChangeHandler}
          validateHandler={validateEmailHandler}
          propIsValid={emailIsValid}
          type='email'
          id='email'
          text='Email'
          ref={emailInputRef}
        />
        <Input
          enteredValue={enteredPassword}
          changeHandler={passwordChangeHandler}
          validateHandler={validatePasswordHandler}
          propIsValid={passwordIsValid}
          type='password'
          id='password'
          text='Contraseña'
          ref={passwordInputRef}
        />

        <div className={classes.actions}>
          <Button type='submit' className={classes.btn}>
            {/* <Button type='submit' className={classes.btn} disabled={!formIsValid}> */}
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};
export default Login;
