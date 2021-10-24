import cn from 'classnames';

import s from './Button.module.scss';

export interface ButtonProps {
  color: 'purple';
  className?: string;
  fullWidth?: boolean;
  onClick?(evet: any): void;
}

export const Button: React.FC<ButtonProps> = ({
  color,
  className,
  children,
  onClick,
  fullWidth,
}) => {
  const classNames = cn(s.button, className, s[`color_${color}`], {
    [s.fullWidth]: fullWidth,
  });

  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
};
