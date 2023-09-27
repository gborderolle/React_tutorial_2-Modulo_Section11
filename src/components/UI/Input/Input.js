import React, { useEffect, useRef, useImperativeHandle } from 'react';

import classes from './Input.module.css';

// Clase 162: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25599276#search
export const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      // "focus" es cómo se lo llama desde afuera
      // "activate" es la función local
      focus: activate,
    };
  });

  return (
    <div
      className={`${classes.control} ${
        props.propIsValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={props.id}>{props.text}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.enteredValue}
        onChange={props.changeHandler}
        onBlur={props.validateHandler}
        ref={inputRef}
      />
    </div>
  );
});
