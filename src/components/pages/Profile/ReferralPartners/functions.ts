import React from 'react';
import isEmpty from 'lodash/isEmpty';

import ConstaIcons from 'assets/icons/ConstaIcons';
import { IReferralTree } from 'types/interfaces/referrals';
import { ISelectOption } from 'types/interfaces/common';
import { IBuildTree, ICrumbsPage, IMappedData } from './types';

const defaultCrumbs: ICrumbsPage[] = [
  {
    icon: ConstaIcons.Lime,
    label: 'Home',
    link: '#',
  },
];

export const programOptions: ISelectOption[] = [
  { id: 1, label: 'BITLIME' },
  { id: 2, label: 'AUTO_STANDARD' },
  { id: 3, label: 'AUTO_BUSINESS' },
  { id: 4, label: 'AUTO_PREMIUM' },
  { id: 5, label: 'HOUSE' },
  { id: 6, label: 'LIME' },
];

export const getInitialLevel = (id: number): number => {
  return [2, 3, 4, 5].includes(id) ? 0 : 1;
};

export const buildMatrixLevels = (programId: number): number[] => {
  let levels = 0;
  let fromZero = true;
  switch (programId) {
    case 1:
      levels = 17;
      fromZero = false;
      break;
    case 2:
      levels = 6;
      break;
    case 3:
      levels = 6;
      break;
    case 4:
      levels = 6;
      break;
    case 5:
      levels = 7;
      break;
    case 6:
      levels = 11;
      fromZero = false;
      break;
    default:
      break;
  }

  return [...Array(levels).keys()].map((x) => x + (fromZero ? 0 : 1));
};

const matrixPositionPlaces = (
  level: number,
  program: number
): [number, number] => {
  let count: [number, number] = [2, 2];

  if (level === 0) {
    count = [3, 0];
  }

  // lime matrix have specific positions
  if (program === 6) {
    if ([8, 9, 10].includes(level)) {
      count = [3, 0];
    } else if (level === 11) {
      count = [2, 0];
    }
  }

  return count;
};

export const buildTree = ({
  referralsTree,
  level,
  program,
}: IBuildTree): IMappedData => {
  const count = matrixPositionPlaces(level, program);

  const withClones = (childs: IReferralTree[]) => {
    let childsCopy = childs;

    const mainClone = {
      is_clone: true,
      clone_id: referralsTree.id,
      clone_enabled: false,
      price: referralsTree.price,
      children: [],
    };

    let haveAnyOneFilled = false;
    let haveAnyTwoFilled = false;

    try {
      haveAnyOneFilled = childs[0].children.length > 0;
    } catch (e) {
      haveAnyOneFilled = false;
    }

    try {
      haveAnyTwoFilled = childs[1].children.length > 0;
    } catch (e) {
      haveAnyTwoFilled = false;
    }

    // firstly, create space wrapper for direct referal based on array length
    // some programs have 0 level, it means 3 direct referrals with no sub-refs
    // if program starts with 1 level, only 2 direct referrals allowed and each one inclues 2 sub-refs

    if (count[0] === 2) {
      if (childs.length === 0) {
        childsCopy = [{ ...mainClone, clone_enabled: true }, mainClone];
      }

      if (childs.length === 1) {
        childsCopy = [...childsCopy, { ...mainClone, clone_enabled: true }];
      }
    } else if (count[0] === 3) {
      if (childs.length === 0) {
        childsCopy = [
          { ...mainClone, clone_enabled: true },
          mainClone,
          mainClone,
        ];
      }

      if (childs.length === 1) {
        childsCopy = [
          ...childsCopy,
          { ...mainClone, clone_enabled: true },
          mainClone,
        ];
      }
      if (childs.length === 2) {
        childsCopy = [...childsCopy, { ...mainClone, clone_enabled: true }];
      }
    }

    // then append child clones
    if (count[1] === 2) {
      childsCopy = [
        ...childsCopy.map((x, mainIdx) => {
          let clones: any[] = [];
          const clone = {
            is_clone: true,
            clone_id: x.id || referralsTree.id,
            clone_enabled: mainIdx === 0 ? haveAnyOneFilled : haveAnyTwoFilled,
            price: referralsTree.price,
          };

          if (x.children && x.children.length === 0) {
            clones = [
              {
                ...clone,
                clone_enabled:
                  mainIdx === 0 ? childs.length > 0 : childs.length > 1,
              },
              clone,
            ];
          } else if (x.children && x.children.length < 2) {
            clones = [clone];
          }
          return {
            ...x,
            children: [...x.children, ...clones],
          };
        }),
      ];
    }

    return childsCopy;
  };

  return {
    positions: count,
    root: !isEmpty(referralsTree) ? referralsTree : null,
    childrens: !isEmpty(referralsTree)
      ? withClones(referralsTree.children)
      : [],
    crumbs: [
      ...defaultCrumbs,
      ...(referralsTree.ancestors
        ? referralsTree.ancestors.map((a) => ({
            label: a.username || 'unknown',
            link: `${a.id}` || '#',
          }))
        : []),
      ...[
        {
          label: referralsTree.username || 'unknown',
          link: `${referralsTree.id}` || '#',
          isActive: true,
        },
      ],
    ],
  };
};
