import s from './Header.module.scss';

import {HTMLElementId} from '@constants/components';
import {Container} from '@atomic/atoms/Container/Container';
import {NavLinks} from '@atomic/molecules/NavLinks/NavLinks';
import {Logo} from '@atomic/molecules/Logo/Logo';

export const Header: React.FC = () => {
  return (
    <header id={HTMLElementId.Header} className={s.root}>
      <Container justify="space-between" className={s.container}>
        <Logo />
        <NavLinks />
      </Container>
    </header>
  );
};
