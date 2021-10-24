import s from './SocialsLinks.module.scss';

import cn from 'classnames';

import {Link} from '@atomic/atoms/Link/Link';
import {Image} from '@atomic/atoms/Image/Image';

import c from './config.json';

interface SocialsLinksProps {
  className?: string;
}

export function SocialsLinks({className}: SocialsLinksProps): JSX.Element {
  return (
    <div className={cn(s.root, className)}>
      {c.SocialsLinks.map(({linkHref, imageSrc}, index) => (
        <Link key={index} href={linkHref}>
          <Image src={imageSrc} className={s.icon} />
        </Link>
      ))}
    </div>
  );
}
