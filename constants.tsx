
import React from 'react';
import { 
  Play, 
  Puzzle, 
  GraduationCap, 
  Target, 
  Users, 
  Tv, 
  MoreHorizontal, 
  Sun, 
  Zap, 
  Timer, 
  Puzzle as PuzzleIcon,
  MessageCircle
} from 'lucide-react';
import { NavItem, RatingStat } from './types';

export const COLORS = {
  bgMain: '#262421',
  bgSidebar: '#21201d',
  bgCard: '#2b2926',
  chessGreen: '#81b64c',
  chessGreenHover: '#a3d160',
  textSecondary: '#bababa',
  accentBlue: '#3d85c6',
  accentRed: '#fa412d',
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'play', label: 'Jogar', icon: <Play size={20} fill="currentColor" /> },
  { id: 'puzzles', label: 'Problemas', icon: <Puzzle size={20} fill="currentColor" /> },
  { id: 'learn', label: 'Aprender', icon: <GraduationCap size={20} fill="currentColor" /> },
  { id: 'train', label: 'Treinar', icon: <Target size={20} fill="currentColor" /> },
  { id: 'watch', label: 'Assistir', icon: <Tv size={20} fill="currentColor" /> },
  { id: 'community', label: 'Comunidade', icon: <Users size={20} fill="currentColor" /> },
  { id: 'others', label: 'Outros', icon: <MoreHorizontal size={20} /> },
];

export const MOCK_STATS: RatingStat[] = [
  {
    id: 'daily',
    label: 'Diário',
    value: 1560,
    change: 41,
    icon: 'Sun',
    data: [1480, 1490, 1510, 1505, 1530, 1545, 1560],
  },
  {
    id: 'blitz',
    label: 'Blitz',
    value: 1100,
    change: 78,
    icon: 'Zap',
    data: [1000, 1020, 1040, 1060, 1050, 1085, 1100],
  },
  {
    id: 'rapid',
    label: 'Rápida',
    value: 1189,
    change: 37,
    icon: 'Timer',
    data: [1150, 1160, 1175, 1170, 1180, 1185, 1189],
  },
  {
    id: 'puzzles',
    label: 'Problemas',
    value: 1804,
    change: -16,
    icon: 'PuzzleIcon',
    data: [1820, 1830, 1845, 1835, 1825, 1815, 1804],
  },
];
