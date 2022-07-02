import { useRouter } from 'next/router';
import Image from 'next/image';

import { ButtonComeBackWrapper } from '../styles/components/ButtonComeBack'
import volte from '../images/volte.png';

export default function ButtonComeBack() {
  const router = useRouter();
  const linkHome = () => {
    router.push('/');
  }

  return (
    <ButtonComeBackWrapper>
      <a onClick={ linkHome }>
          <Image
            src={volte}
            alt="Button_Volte"
          />
          <span>HOME</span>
      </a>
    </ButtonComeBackWrapper>
  );
}