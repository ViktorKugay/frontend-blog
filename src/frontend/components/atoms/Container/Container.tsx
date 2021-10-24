import s from './Container.module.scss';

import cn from 'classnames';

interface Props {
  className?: string;
  justify?: 'center' | 'space-between' | 'flex-start';
  align?: 'center' | 'baseline' | 'start';
  margin?: 'normal' | 'dense';
  wrap?: 'wrap' | 'nowrap';
  tag?: 'div' | 'section';
  id?: string;
}

export const Container: React.FC<Props> = ({
  margin = 'normal',
  justify = 'center',
  align = 'center',
  wrap = 'wrap',
  tag = 'div',
  className,
  children,
  id,
}) => {
  const Tag = tag;

  const classNames = cn(
    s.root,
    s[`wrap_${wrap}`],
    s[`justify_${justify}`],
    s[`align_${align}`],
    s[`margin_${margin}`],
    className,
  );

  return (
    <Tag id={id} className={classNames}>
      {children}
    </Tag>
  );
};
