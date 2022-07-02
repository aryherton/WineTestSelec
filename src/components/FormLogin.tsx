import React, { useState, } from 'react';

import { FormLoginWrapper } from '../styles/components/FormLogin';

export default function FormLogin() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [inputSubmit, setInputSubmit] = useState({
    valueSubmit: 'Entrar',
    valueTxtLink: 'Registre-se'
  });

  const getName = (event) => {
    setUser({
      ...user,
      name: event.target.value,
    });
  }

  const getEmail = (event) => {
    setUser({
      ...user,
      email: event.target.value,
    });
  }

  const getPassword = (event) => {
    setUser({
      ...user,
      password: event.target.value,
    });
  }

  const setValueSubmit = async () => {
    if (inputSubmit.valueTxtLink === 'Registre-se') {
      setInputSubmit({
        valueSubmit: 'Registrar',
        valueTxtLink: 'Login'
      });
    } else {
      setInputSubmit({
        valueSubmit: 'Entrar',
        valueTxtLink: 'Registre-se'
      });
    }
  }

  return (
    <FormLoginWrapper>
      <form id="formLogin">
        <div id="divInputsLogin">
          {inputSubmit.valueSubmit !== 'Entrar'
            && <input
                id="inputLoginName"
                type="text"
                onChange={ getName }
                placeholder="Digite seu nome"
              />}
          <input
            id="inputLoginEmail"
            type="email"
            onChange={ getEmail }
            placeholder="Digite seu email"
          />
          <input
            id="inputLoginPassword"
            type="password"
            onChange={ getPassword }
            placeholder="Digite uma senha"
          />
        </div>
        <div id="divButtonEnterRegister">
          <input id="buttonFormLogin" type="submit" value={ inputSubmit.valueSubmit } />
          <span id="textRegistreSe"><a onClick={ setValueSubmit }>{ inputSubmit.valueTxtLink }</a></span>
        </div>
      </form>
    </FormLoginWrapper>
  );
}