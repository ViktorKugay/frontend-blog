import {PropsWithChildren} from 'react';
import NextLink from 'next/link';

import {scrollToElement} from '../../../utils/scrollToElement';

type LinkRel = 'noopener noreferrer';
type LinkTarget = '_blank';

export interface LinkProps {
  rel?: LinkRel;
  href: string;
  className?: string;
  target?: LinkTarget;
  internal?: boolean;
  as?: string;
}

const regExp = /(.+)#(\w+)/;

export function Link({
  internal,
  className,
  children,
  target,
  href,
  rel,
  as,
}: PropsWithChildren<LinkProps>): JSX.Element {
  const handleClick = (event: any) => {
    const {pathname} = window.location;
    const parsedHref = href.match(regExp);
    if (parsedHref && pathname === parsedHref[1]) {
      event.preventDefault();
      scrollToElement(parsedHref[2]);
    }
  };

  if (internal) {
    return (
      <NextLink href={href} as={as}>
        <a href={href} onClick={handleClick} className={className}>
          {children}
        </a>
      </NextLink>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
