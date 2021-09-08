import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Flex from '../../../Common/Flex';
import Typography from '../../../Common/Typography';
import useStyles from './styles';

const NewsItemCard: FC<{ newItem: any }> = ({ newItem }) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Flex className={styles.newsFlex} justify="flex-start" margin="0 0 20px">
        <div>
          <Typography weight="semibold" view="link" className={styles.tag}>
            Команда Разработки
          </Typography>
          <Typography margin="0 16px" className={styles.title}>
            Stripe’s payments APIs: the first ten years
          </Typography>
        </div>
        <div>
          <Typography view="secondary" className={styles.tag}>
            8 сентября, 2021 года
          </Typography>
          <Flex margin="0 0 0 16px">
            <img
              src="https://images.ctfassets.net/fzn2n1nzq965/6s4ypZDDqYxacNiyMYYFQc/684e706be67f300bb952affc28d6fb4b/Grace_Goo_HS.png?w=96&h=96"
              alt="author"
              className={styles.author}
            />
            <div>
              <Typography weight="semibold" size="s">
                Мария Кирин
              </Typography>
              <Typography size="s" view="secondary">
                Сотрудник Команды
              </Typography>
            </div>
          </Flex>
        </div>
      </Flex>
      <Flex>
        <Typography className={styles.text} margin="0 65px 0 16px">
          Abstracting away the complexity of payments has driven the evolution
          of our APIs over the last decade. This post provides the context and
          conceptual frameworks behind our API design—and the milestones that
          led to the
          <br />
          <Link to={`/news/${newItem.id}`} className={styles.readMore}>
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
