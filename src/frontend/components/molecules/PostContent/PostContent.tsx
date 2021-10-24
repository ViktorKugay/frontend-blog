import s from './PostContent.module.scss';

import Prism from 'prismjs';
import {useEffect} from 'react';

import {scrollToElement} from '../../../utils/scrollToElement';

interface Props {
  id: string;
  title: string;
  description: string;
  image: string;
  html: string;
}

const cardId = 'post';

export const PostContent: React.FC<Props> = ({
  id,
  title,
  description,
  image,
  html,
}) => {
  useEffect(() => {
    scrollToElement(cardId);
    Prism.highlightAll();
  }, [id]);

  return (
    <div id={cardId} className={s.container}>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <img src={image} className={s.image} />
      <div dangerouslySetInnerHTML={{__html: html}} />
    </div>
  );
};
