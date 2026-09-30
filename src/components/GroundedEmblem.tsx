import React from 'react';

interface EmblemProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withGlow?: boolean;
  interactive?: boolean;
  onClick?: () => void;
  className?: string;
}

export const GroundedEmblem: React.FC<EmblemProps> = ({
  size = 'md',
  withGlow = false,
  interactive = false,
  onClick,
  className = ''
}) => {
  const sizeMap = {
    sm: { width: 44, height: 74, circleR: 16 },
    md: { width: 80, height: 136, circleR: 30 },
    lg: { width: 140, height: 238, circleR: 52 },
    xl: { width: 200, height: 340, circleR: 74 },
  };

  const current = sizeMap[size];
  const cx = current.width / 2;
  const cy = current.circleR + 6;
  const lineStartY = cy + current.circleR;
  const lineEndY = current.height - 18;
  const groundWidth1 = current.width * 0.44;
  const groundWidth2 = current.width * 0.28;
  const groundWidth3 = current.width * 0.14;

  return (
    <div 
      className={`inline-flex flex-col items-center select-none ${interactive ? 'cursor-pointer transition-transform hover:scale-105 active:scale-95' : ''} ${className}`}
      onClick={onClick}
      title="접지회 성표 (장문과 접지선)"
    >
      <svg
        width={current.width}
        height={current.height}
        viewBox={`0 0 ${current.width} ${current.height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <defs>
          <radialGradient id={`emblem-grad-${size}`} cx="45%" cy="40%" r="65%">
            <stop offset="0%" stopColor="#EB784E" />
            <stop offset="60%" stopColor="#D95328" />
            <stop offset="100%" stopColor="#A83917" />
          </radialGradient>
          {withGlow && (
            <filter id={`glow-${size}`} x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#D95328" floodOpacity="0.45" />
            </filter>
          )}
        </defs>

        {/* The Disc: Sun / Palm of Contact (장문) */}
        <circle
          cx={cx}
          cy={cy}
          r={current.circleR}
          fill={`url(#emblem-grad-${size})`}
          filter={withGlow ? `url(#glow-${size})` : undefined}
          className="transition-all duration-300"
        />

        {/* Subtle Palm Texture Rings inside the disc */}
        <path
          d={`M ${cx - current.circleR * 0.45} ${cy + current.circleR * 0.2} C ${cx - current.circleR * 0.2} ${cy - current.circleR * 0.3}, ${cx + current.circleR * 0.2} ${cy - current.circleR * 0.3}, ${cx + current.circleR * 0.45} ${cy + current.circleR * 0.2}`}
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d={`M ${cx - current.circleR * 0.3} ${cy + current.circleR * 0.4} C ${cx - current.circleR * 0.1} ${cy}, ${cx + current.circleR * 0.1} ${cy}, ${cx + current.circleR * 0.3} ${cy + current.circleR * 0.4}`}
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1.1"
          strokeLinecap="round"
          fill="none"
        />

        {/* The Grounding Wire (접지선 - 수직선) */}
        <line
          x1={cx}
          y1={lineStartY}
          x2={cx}
          y2={lineEndY}
          stroke="#D95328"
          strokeWidth={size === 'sm' ? 1.5 : size === 'xl' ? 3 : 2}
          strokeLinecap="round"
        />

        {/* Earth Grounding Bars (대지 마찰선 3단) */}
        {/* Tier 1 */}
        <line
          x1={cx - groundWidth1 / 2}
          y1={lineEndY}
          x2={cx + groundWidth1 / 2}
          y2={lineEndY}
          stroke="#D95328"
          strokeWidth={size === 'sm' ? 1.5 : size === 'xl' ? 3 : 2}
          strokeLinecap="round"
        />
        {/* Tier 2 */}
        <line
          x1={cx - groundWidth2 / 2}
          y1={lineEndY + 5}
          x2={cx + groundWidth2 / 2}
          y2={lineEndY + 5}
          stroke="#D95328"
          strokeWidth={size === 'sm' ? 1.2 : size === 'xl' ? 2.4 : 1.8}
          strokeLinecap="round"
        />
        {/* Tier 3 */}
        <line
          x1={cx - groundWidth3 / 2}
          y1={lineEndY + 10}
          x2={cx + groundWidth3 / 2}
          y2={lineEndY + 10}
          stroke="#D95328"
          strokeWidth={size === 'sm' ? 1 : size === 'xl' ? 2 : 1.5}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
