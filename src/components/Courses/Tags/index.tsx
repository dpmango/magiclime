import React, { FC } from 'react';
import cns from 'classnames';

import { TagType } from 'types/interfaces/courses';
import useStyles from './styles';

interface IProps {
  tags: TagType[];
  activeTags: number[];
  handleSelect: (id: number) => void;
}

const Tags: FC<IProps> = ({ tags, activeTags, handleSelect }) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      {tags.map((item) => {
        const active = activeTags.includes(item.id);
        return (
          <span
            key={item.id}
            role="button"
            tabIndex={0}
            onClick={() => handleSelect(item.id)}
            className={cns(styles.button, active && 'active')}
          >
            {item.label}
          </span>
        );
      })}
    </div>
  );
};

export default Tags;
