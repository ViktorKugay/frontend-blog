import cn from 'classnames';

import {Link} from '@atomic/atoms/Link/Link';
import {Text} from '@atomic/atoms/Text/Text';
import {Image} from '@atomic/atoms/Image/Image';

import s from './PostCard.module.scss';

interface Props {
  slug: string;
  title: string;
  image: string;
  description: string;
  className?: string;
}

export const PostCard: React.FC<Props> = ({
  slug,
  title,
  image,
  description,
  className,
}) => {
  return (
    <Link
      internal
      as={`/post/${slug}`}
      href={`/post/[postSlug]`}
      className={cn(s.root, className)}
    >
      <Image className={s.image} src={image} internal={false} />
      <div className={s.container}>
        <Text mod="h3" margin="normal">
          {title}
        </Text>
        <Text mod="h4" align="justify">
          {description}
        </Text>
      </div>
    </Link>
  );
};
