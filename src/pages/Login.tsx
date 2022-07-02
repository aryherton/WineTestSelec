import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import Header from '../components/Header';
import FormLogin from '../components/FormLogin';
import ButtonComeBack from '../components/ButtonComeBack';

import { LogineWrapper } from '../styles/pages/Login';

export default function Login() {
  const router = useRouter();

  const checkToken = () => {
    const token = localStorage.getItem('Token');
    if (token) {
      router.push('/');
    }
  }

  useEffect(() => {
    checkToken();
  }, []);
  
  return (
    <LogineWrapper>
      <Header />
      <ButtonComeBack />
      <FormLogin />
    </LogineWrapper>
  );
}