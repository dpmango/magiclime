import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { Tag } from '@consta/uikit/Tag';
import { IconCheck } from '@consta/uikit/IconCheck';
import { IArticle } from 'types/interfaces/article';

import useStyles from './styles';

interface IProps {
  data: IArticle;
}

const ArticleCard: FC<IProps> = ({ data }) => {
  const styles = useStyles();

  return (
    <Link to={`/article/${data.id}`} className={styles.root}>
      <Flex direction="column" className={styles.image}>
        {data.image && <img src={data.image.image} alt={data.title} />}
      </Flex>
      <div className={styles.content}>
        <Flex wrap="wrap">
          {data.tags &&
            data.tags.map((tag) => (
              <Tag
                key={tag.id}
                label={tag.title}
                size="m"
                mode="link"
                href={`/faq/category/${tag.id}`}
                className={styles.tag}
                icon={IconCheck}
                onClick={(e) => e.stopPropagation()}
              />
            ))}
        </Flex>
        <Typography size="m" weight="semibold">
          {data.title}
        </Typography>
        <Typography margin="2px 0 0" size="xs" view="secondary" lineHeight="s">
          {data.subtitle}
        </Typography>
      </div>
    </Link>
  );
};

export default ArticleCard;
