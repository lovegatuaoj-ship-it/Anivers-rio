
import React from 'react';
import { Sun, Zap, Timer, Puzzle as PuzzleIcon, ArrowUp, ArrowDown } from 'lucide-react';
import { RatingStat } from '../types';
import Sparkline from './Sparkline';

const ICON_MAP: Record<string, any> = {
  Sun,
  Zap,
  Timer,
  PuzzleIcon,
};

const RatingCard: React.FC<{ stat: RatingStat }> = ({ stat }) => {
  const Icon = ICON_MAP[stat.icon];
  const isPositive = stat.change > 0;

  return (
    <div className="bg-[#312e2b] rounded-sm p-4 hover:bg-[#363330] transition-colors cursor-pointer border-b-4 border-[#21201d]">
      <div className="flex items-center gap-2 mb-2 text-gray-400">
        <Icon size={18} className={isPositive ? 'text-yellow-500' : 'text-orange-500'} />
        <span className="text-xs font-bold uppercase tracking-wider">{stat.label}</span>
      </div>
      
      <div className="flex items-end justify-between mb-4">
        <span className="text-2xl font-bold font-chess">{stat.value}</span>
        <div className={`flex items-center text-xs font-bold ${isPositive ? 'text-[#81b64c]' : 'text-red-500'}`}>
          {isPositive ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
          <span>{Math.abs(stat.change)}</span>
        </div>
      </div>

      <div className="mt-auto opacity-70">
        <Sparkline data={stat.data} color={isPositive ? "#81b64c" : "#fa412d"} />
      </div>
    </div>
  );
};

export default RatingCard;
