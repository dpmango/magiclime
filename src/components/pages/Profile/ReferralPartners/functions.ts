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
      levels = 5;
      break;
    case 3:
      levels = 5;
      break;
    case 4:
      levels = 5;
      break;
    case 5:
      levels = 6;
      fromZero = false;
      break;
    case 6:
      levels = 7;

      break;
    default:
      break;
  }

  return [...Array(levels).keys()].map((x) => x + (fromZero ? 0 : 1));
};

export const buildTree = ({ referralsTree }: IBuildTree): IMappedData => {
  const withClones = (childs: IReferralTree[]) => {
    let childsCopy = childs;

    const mainClone = {
      is_clone: true,
      clone_id: referralsTree.id,
      clone_enabled: false,
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

    // firstly, create space wrapper for main referal based on array length
    if (childs.length === 0) {
      childsCopy = [{ ...mainClone, clone_enabled: true }, mainClone];
    }

    if (childs.length === 1) {
      childsCopy = [...childsCopy, { ...mainClone, clone_enabled: true }];
    }

    // then append child clones if < 2 items
    childsCopy = [
      ...childsCopy.map((x, mainIdx) => {
        let clones: any[] = [];
        const clone = {
          is_clone: true,
          clone_id: x.id || referralsTree.id,
          clone_enabled: mainIdx === 0 ? haveAnyOneFilled : haveAnyTwoFilled,
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

    return childsCopy;
  };

  return {
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
