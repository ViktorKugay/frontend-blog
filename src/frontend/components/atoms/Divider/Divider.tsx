import s from './Divider.module.scss';

import cn from 'classnames';

export interface DividerProps {
  color?: 'white' | 'black' | 'grey';
  margin?: '4' | '8' | '12' | '16';
  height?: '1' | '2' | '4' | '6';
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({
  className,
  color = 'grey',
  height = '2',
  margin = '16',
}) => {
  const classNames = cn(
    s[`color_${color}`],
    s[`height_${height}`],
    s[`margin_${margin}`],
    s.root,
    className,
  );

  return <div className={classNames} />;
};
