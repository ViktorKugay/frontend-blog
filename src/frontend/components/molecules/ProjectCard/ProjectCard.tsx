import React from 'react';
import {ArrowForward} from '@material-ui/icons';
import {Text} from '@atomic/atoms/Text/Text';

import s from './ProjectCard.module.scss';

interface Props {
  title: string;
  subtitle: string;
  linkUrl: string;
  bgColor: string;
}

export const ProjectCard: React.FC<Props> = ({
  title,
  subtitle,
  linkUrl,
  bgColor,
}) => {
  return (
    <a
      href={linkUrl}
      target="_blank"
      className={s.root}
      rel="noopener noreferrer"
    >
      <div style={{background: bgColor}} className={s.left_side_color} />
      <div className={s.content}>
        <Text mod="h3" weight="700" className={s.title}>
          {title}
        </Text>
        <Text mod="p" whiteSpace="preWrap">
          {subtitle}
        </Text>
        <ArrowForward className={s.arrow} />
      </div>
    </a>
  );
};
