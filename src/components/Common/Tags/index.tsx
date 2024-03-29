import React, { FC } from 'react';
import { Button } from '@consta/uikit/Button';
import { ITag } from 'types/interfaces/meta';
import useStyles from './styles';

interface IProps {
  tags: ITag[];
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
          <Button
            key={item.id}
            label={item.title}
            form="round"
            view={active ? 'primary' : 'ghost'}
            onClick={() => handleSelect(item.id)}
            className={styles.button}
          />
        );
      })}
    </div>
  );
};

export default Tags;
