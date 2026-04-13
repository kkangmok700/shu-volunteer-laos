export function KoreaFlag({ className = "w-16 h-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 900 600" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* White background */}
      <rect width="900" height="600" fill="#FFFFFF" />
      {/* Taegeuk circle */}
      <circle cx="450" cy="300" r="150" fill="#C60C30" />
      <path d="M450,300 a75,75 0 0,1 0,-150 a150,150 0 0,1 0,300 a75,75 0 0,1 0,-150" fill="#003478" />
      {/* Trigrams - simplified */}
      {/* Top-left (건/Geon) */}
      <g transform="translate(450,300) rotate(-56)">
        <rect x="190" y="-45" width="120" height="18" fill="#000" />
        <rect x="190" y="-15" width="120" height="18" fill="#000" />
        <rect x="190" y="15" width="120" height="18" fill="#000" />
      </g>
      {/* Bottom-right (곤/Gon) */}
      <g transform="translate(450,300) rotate(124)">
        <rect x="190" y="-45" width="55" height="18" fill="#000" />
        <rect x="255" y="-45" width="55" height="18" fill="#000" />
        <rect x="190" y="-15" width="55" height="18" fill="#000" />
        <rect x="255" y="-15" width="55" height="18" fill="#000" />
        <rect x="190" y="15" width="55" height="18" fill="#000" />
        <rect x="255" y="15" width="55" height="18" fill="#000" />
      </g>
      {/* Top-right (감/Gam) */}
      <g transform="translate(450,300) rotate(56)">
        <rect x="190" y="-45" width="120" height="18" fill="#000" />
        <rect x="190" y="-15" width="55" height="18" fill="#000" />
        <rect x="255" y="-15" width="55" height="18" fill="#000" />
        <rect x="190" y="15" width="120" height="18" fill="#000" />
      </g>
      {/* Bottom-left (리/Ri) */}
      <g transform="translate(450,300) rotate(-124)">
        <rect x="190" y="-45" width="55" height="18" fill="#000" />
        <rect x="255" y="-45" width="55" height="18" fill="#000" />
        <rect x="190" y="-15" width="120" height="18" fill="#000" />
        <rect x="190" y="15" width="55" height="18" fill="#000" />
        <rect x="255" y="15" width="55" height="18" fill="#000" />
      </g>
    </svg>
  );
}

export function LaosFlag({ className = "w-16 h-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 900 600" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Red top stripe */}
      <rect width="900" height="150" y="0" fill="#CE1126" />
      {/* Blue middle band */}
      <rect width="900" height="300" y="150" fill="#002868" />
      {/* Red bottom stripe */}
      <rect width="900" height="150" y="450" fill="#CE1126" />
      {/* White circle (moon) */}
      <circle cx="450" cy="300" r="100" fill="#FFFFFF" />
    </svg>
  );
}
