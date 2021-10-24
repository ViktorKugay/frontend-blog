import s from './Biography.module.scss';

import {HTMLElementId} from '@constants/components';
import {Container} from '@atomic/atoms/Container/Container';
import {Image} from '@atomic/atoms/Image/Image';
import {Text} from '@atomic/atoms/Text/Text';
import {Link} from '@atomic/atoms/Link/Link';

import c from './config.json';

export function Biography(): JSX.Element {
  return (
    <Container
      tag="section"
      wrap="nowrap"
      align="center"
      margin="normal"
      id={HTMLElementId.Biography}
      className={s.container}
    >
      <Image src="/avatar.jpeg" className={s.avatar} />
      <Text mod="h4" align="justify" color="main">
        {c.Biography.description}
        <Link internal={false} className={s.link} href={c.Biography.facebook}>
          {'Viktor Kugay'}
        </Link>
        {'.'}
      </Text>
    </Container>
  );
}
