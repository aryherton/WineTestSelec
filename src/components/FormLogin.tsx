import React, { useState, } from 'react';
import { useRouter } from 'next/router';

import { loginAndRegister } from '../services/api'
import { URL_LOGIN_DB_WINE, URL_REGISTER_USER } from '../services/endPoint';

import { FormLoginWrapper } from '../styles/components/FormLogin';

export default function FormLogin() {
  const router = useRouter();
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
  };

  const getEmail = (event) => {
    setUser({
      ...user,
      email: event.target.value,
    });
  };

  const getPassword = (event) => {
    setUser({
      ...user,
      password: event.target.value,
    });
  };

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
  };

  const getToken = async() => {
    let endPoint: string = '';

    if (user.name) {
      endPoint = URL_REGISTER_USER;
    } else {
      endPoint = URL_LOGIN_DB_WINE;
    }

    const token: string = await loginAndRegister(endPoint, user);
    localStorage.setItem('Token', token);
    router.push('/');
  };

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
          <input
            id="buttonFormLogin"
            type="button"
            value={ inputSubmit.valueSubmit }
            onClick={ getToken }
          />
          <span id="textRegistreSe"><a onClick={ setValueSubmit }>{ inputSubmit.valueTxtLink }</a></span>
        </div>
      </form>
    </FormLoginWrapper>
  );
}