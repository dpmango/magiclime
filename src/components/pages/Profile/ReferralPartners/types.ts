import React from 'react';
import { IReferralTree } from 'types/interfaces/referrals';

export interface IRequestPayload {
  id?: number | string;
  program: number;
  level: number;
}
export interface ICrumbsPage {
  icon?: React.FC;
  link: string;
  label: string;
  isActive?: boolean;
}

export interface IBuildTree {
  referralsTree: IReferralTree;
  level: number;
  program: number;
}

export interface IMappedData {
  positions: [number, number];
  root: IReferralTree | null;
  childrens: IReferralTree[];
  crumbs: ICrumbsPage[];
}

export interface IModalProps {
  opened: boolean;
  id: number;
}
