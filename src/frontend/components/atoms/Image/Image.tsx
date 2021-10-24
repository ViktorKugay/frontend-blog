import s from './Image.module.scss';

import ImageNext from 'next/image';
import cn from 'classnames';

import c from './config.json';

export interface ImageProps {
  src: string;
  alt?: string;
  internal?: boolean;
  className?: string;
}

export function Image({
  src,
  className,
  internal = true,
  alt = c.Image.defaultProps.alt,
}: ImageProps): JSX.Element {
  return (
    <div className={cn(s.root, className)}>
      {internal ? (
        <ImageNext
          src={src}
          alt={alt}
          className={className}
          layout="fill"
          placeholder="blur"
          blurDataURL={c.Image.blurDataURL}
        />
      ) : (
        <img src={src} alt={alt} className={className} />
      )}
    </div>
  );
}
