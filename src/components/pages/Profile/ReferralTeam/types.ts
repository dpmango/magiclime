import React from 'react';
import { IReferralTeam } from 'types/interfaces/referrals';
import { IPhoto } from '../../../../types/interfaces/common';

export interface IRequestPayload {
  id?: number | string;
}
export interface ICrumbsPage {
  icon?: React.FC;
  link: string;
  label: string;
  isActive?: boolean;
}

export interface IBuildTree {
  teamTree: IReferralTeam;
}

export interface IMappedData {
  root: IReferralTeam | null;
  children: IReferralTeam[];
  crumbs: ICrumbsPage[];
}

export interface IModalProps {
  opened: boolean;
  id: number;
}

export interface IInvitedUser {
  readonly id: number;
  avatar: IPhoto | null;
  date_joined: string;
  email: string;
  level: number;
  name: string;
  username: string;
}
