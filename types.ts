// Fix: Import React to resolve 'React' namespace
import React from 'react';

export interface RatingStat {
  id: string;
  label: string;
  value: number;
  change: number;
  icon: string;
  data: number[];
}

export interface UserProfile {
  username: string;
  fullName: string;
  avatar: string;
  country: string;
  joinedDate: string;
  friendsCount: number;
  viewCount: number;
  lastOnline: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}