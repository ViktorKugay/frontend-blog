import s from './ProjectsList.module.scss';

import {Text} from '@atomic/atoms/Text/Text';
import {Container} from '@atomic/atoms/Container/Container';
import {ProjectCard} from '@atomic/molecules/ProjectCard/ProjectCard';
import {HTMLElementId} from '../../../constants/components';

import c from './config.json';

export const ProjectsList: React.FC = () => {
  return (
    <section className={s.root}>
      <Container
        wrap="wrap"
        justify="center"
        className={s.container}
        id={HTMLElementId.Projects}
      >
        <Text className={s.title} mod="h2" weight="700">
          {c.ProjectsList.title}
        </Text>
        {c.ProjectsList.items.map(
          ({color, description, href, title}, index) => (
            <ProjectCard
              key={index}
              title={title}
              linkUrl={href}
              bgColor={color}
              subtitle={description}
            />
          ),
        )}
      </Container>
    </section>
  );
};
