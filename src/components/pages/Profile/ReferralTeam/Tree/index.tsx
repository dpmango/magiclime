import React, { FC, useCallback, useMemo } from 'react';
import cln from 'classnames';
import { v4 as uuid } from 'uuid';
import { IReferralTeam } from '../../../../../types/interfaces/referrals';
import ReferralUser from '../ReferralUser';
import useStyles from './styles';

interface IProps {
  tree: IReferralTeam[];
  clickFunc?: (id: number) => void;
  level?: number;
}

const Tree: FC<IProps> = ({ tree, clickFunc, level = 0 }) => {
  const styles = useStyles({ level });

  const withChildren = useCallback((item: IReferralTeam): boolean => {
    return item.children && item.children.length !== 0;
  }, []);

  return (
    <>
      {tree.map((item: IReferralTeam) => (
        <div
          key={item.id || uuid()}
          className={cln(styles.referralGroup, {
            [styles.last]: !withChildren(item),
          })}
        >
          <ReferralUser
            data={item}
            onReferralClick={clickFunc}
            nestedLevel={level}
          />
          {withChildren(item) && (
            <Tree
              tree={item.children}
              clickFunc={clickFunc}
              level={level + 1}
            />
          )}
        </div>
      ))}
    </>
  );
};

export default Tree;
