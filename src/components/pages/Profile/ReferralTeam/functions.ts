import React from 'react';
import isEmpty from 'lodash/isEmpty';

import ConstaIcons from 'assets/icons/ConstaIcons';
import { IReferralTree } from 'types/interfaces/referrals';
import { IBuildTree, ICrumbsPage, IMappedData } from './types';

const defaultCrumbs: ICrumbsPage[] = [
  {
    icon: ConstaIcons.Lime,
    label: 'Home',
    link: '#',
  },
];

export const buildTree = ({ teamTree }: IBuildTree): IMappedData => {
  return {
    root: !isEmpty(teamTree) ? teamTree : null,
    children: !isEmpty(teamTree) ? teamTree.children : [],
    crumbs: [
      ...defaultCrumbs,
      ...(teamTree.ancestors
        ? teamTree.ancestors.map((a) => ({
            label: a.username || 'unknown',
            link: `${a.id}` || '#',
          }))
        : []),
      ...[
        {
          label: teamTree.username || 'unknown',
          link: `${teamTree.id}` || '#',
          isActive: true,
        },
      ],
    ],
  };
};
