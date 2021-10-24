import s from './NavLinks.module.scss';

import {Link} from '@atomic/atoms/Link/Link';
import {Text} from '@atomic/atoms/Text/Text';

import c from './config.json';

export function NavLinks(): JSX.Element {
  return (
    <nav className={s.root}>
      {c.NavLinks.map(({href, title}, index) => (
        <Link key={index} href={href} className={s.link} internal>
          <Text mod="h4" color="blue" weight="700">
            {title}
          </Text>
        </Link>
      ))}
    </nav>
  );
}
