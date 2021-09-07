import { IconArrowRight } from '@consta/uikit/IconArrowRight';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Flex from '../../../Common/Flex';
import Typography from '../../../Common/Typography';
import useStyles from './styles';

const NewsItemCard: FC<{ newItem: any }> = ({ newItem }) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Flex justify="space-between" margin="0 0 20px">
        <div>
          <Typography view="link" className={styles.tag}>
            Engineering
          </Typography>
          <Typography margin="0 16px" className={styles.title}>
            Stripe’s payments APIs: the first ten years
          </Typography>
        </div>
        <div>
          <Typography view="secondary" className={styles.tag}>
            December 15, 2020
          </Typography>
          <Flex margin="0 0 0 16px">
            <img
              src="https://s3.nat-geo.ru/images/2019/5/16/c5aec83b51a04a498b4d6ab0821f7ac8.max-1200x800.jpg"
              alt="author"
              className={styles.author}
            />
            <div>
              <Typography>Michelle Bu</Typography>
              <Typography view="secondary">Payments</Typography>
            </div>
          </Flex>
        </div>
      </Flex>
      <Flex>
        <Typography
          size="l"
          view="secondary"
          className={styles.text}
          margin="0 65px 0 16px"
        >
          Abstracting away the complexity of payments has driven the evolution
          of our APIs over the last decade. This post provides the context and
          conceptual frameworks behind our API design—and the milestones that
          led to the
          <br />
          <Link to={`/news/${newItem.id}`} className={styles.readMore}>
            <span>Read more</span>
            <svg
              width="7"
              height="8"
              viewBox="0 0 7 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fillRule="evenodd" clipRule="evenodd" d="M1 0L5 4L1 8" />
            </svg>
          </Link>
        </Typography>
        <div className={styles.banner}>
          <img
            src="https://cherepah.ru/wp-content/uploads/c/5/6/c56eb4eb130e107e74c58a3154f37476.jpeg"
            alt="banner"
          />
        </div>
      </Flex>
    </div>
  );
};

export default NewsItemCard;
