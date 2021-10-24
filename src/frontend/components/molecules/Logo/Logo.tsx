import s from './Logo.module.scss';

import {Link} from '@atomic/atoms/Link/Link';
import {Text} from '@atomic/atoms/Text/Text';

import c from './config.json';

export function Logo(): JSX.Element {
  return (
    <Link href="/" className={s.root} internal>
      <Text color="blue" mod="h2" weight="700">
        {c.Logo.title}
      </Text>
    </Link>
  );
}
