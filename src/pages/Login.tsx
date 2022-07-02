import Header from '../components/Header';
import FormLogin from '../components/FormLogin';

import { LogineWrapper } from '../styles/pages/Login';

export default function Login() {
  return (
    <LogineWrapper>
      <Header />
      <FormLogin />
    </LogineWrapper>
  );
}