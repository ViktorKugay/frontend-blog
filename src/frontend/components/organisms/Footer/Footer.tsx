import s from './Footer.module.scss';

import {HTMLElementId} from '@constants/components';
import {SubscribeForm} from '@atomic/molecules/SubscribeForm/SubscribeForm';
import {SocialsLinks} from '@atomic/molecules/SocialsLinks/SocialsLinks';
import {Container} from '@atomic/atoms/Container/Container';
import {Divider} from '@atomic/atoms/Divider/Divider';

export const Footer: React.FC = () => {
  return (
    <Container
      wrap="wrap"
      align="start"
      justify="space-between"
      id={HTMLElementId.Newsletter}
      className={s.root}
    >
      <Container className={s.divider}>
        <Divider color="black" />
      </Container>
      <SubscribeForm />
      <SocialsLinks />
    </Container>
  );
};
