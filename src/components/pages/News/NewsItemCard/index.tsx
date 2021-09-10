import moment from 'moment';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Flex from '../../../Common/Flex';
import Typography from '../../../Common/Typography';
import { INewsItem } from '../types';
import useStyles from './styles';

const NewsItemCard: FC<{ newsItem: INewsItem }> = ({ newsItem }) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Flex justify="space-between" margin="0 0 20px">
        <div className={styles.titleContainer}>
          <Typography weight="semibold" view="link" className={styles.tag}>
            Команда Разработки
          </Typography>
          <Typography margin="0 16px" className={styles.title}>
            {newsItem.title}
          </Typography>
        </div>
        <div>
          <Typography view="secondary" className={styles.tag}>
            {moment(newsItem.date).format('D MMMM, YYYY')} года
          </Typography>
          <Flex margin="0 0 0 16px">
            {newsItem.creator.avatar && (
              <img
                src={newsItem.creator.avatar}
                alt="author"
                className={styles.author}
              />
            )}
            <div>
              <Typography weight="semibold" size="s">
                {newsItem.creator.name}
              </Typography>
              <Typography size="s" view="secondary">
                {newsItem.creator.category.title}
              </Typography>
            </div>
          </Flex>
        </div>
      </Flex>
      <Flex>
        <Typography className={styles.text} margin="0 65px 0 16px">
          {newsItem.description}
          <br />
          <Link to={`/news/${newsItem.id}`} className={styles.readMore}>
            <span>Читать далее</span>
            <svg
              width="5"
              height="10"
              viewBox="0 0 5 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.4117 5L0.192693 1.29326C-0.064231 0.997411 -0.064231 0.517741 0.192693 0.221889C0.449617 -0.0739629 0.866173 -0.0739629 1.1231 0.221889L4.80731 4.46431C5.06423 4.76016 5.06423 5.23984 4.80731 5.53569L1.1231 9.77811C0.866173 10.074 0.449617 10.074 0.192693 9.77811C-0.064231 9.48226 -0.064231 9.00259 0.192693 8.70674L3.4117 5Z"
                fill="#0071B3"
              />
            </svg>
          </Link>
        </Typography>
        <div className={styles.banner}>
          <img src={newsItem.image} alt="banner" />
        </div>
      </Flex>
    </div>
  );
};

export default NewsItemCard;
