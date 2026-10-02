import React from 'react';

interface HmtiLogoProps {
  className?: string;
  showText?: boolean;
}

export const HmtiLogo: React.FC<HmtiLogoProps> = ({ className = 'w-10 h-10', showText = false }) => {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full shrink-0"
        aria-label="Logo HMTI Politeknik Semen Indonesia"
      >
        {/* Background circle subtle glow */}
        <circle cx="100" cy="100" r="96" fill="#FFFFFF" />

        {/* 3 Stars at the top */}
        {/* Left star */}
        <polygon
          points="80,24 82,29 88,29 83,33 85,39 80,35 75,39 77,33 72,29 78,29"
          fill="#0A1A44"
        />
        {/* Middle star (slightly larger) */}
        <polygon
          points="100,16 102.5,23 110,23 104,28 106.5,35 100,30 93.5,35 96,28 90,23 97.5,23"
          fill="#0A1A44"
        />
        {/* Right star */}
        <polygon
          points="120,24 122,29 128,29 123,33 125,39 120,35 115,39 117,33 112,29 118,29"
          fill="#0A1A44"
        />

        {/* Red Lotus Flower */}
        {/* Center petal */}
        <path
          d="M100 40 C97 48 95 56 100 62 C105 56 103 48 100 40 Z"
          fill="#E5252A"
        />
        {/* Middle left petal */}
        <path
          d="M98 43 C91 48 87 56 94 62 C97 58 97 51 98 43 Z"
          fill="#E5252A"
        />
        {/* Middle right petal */}
        <path
          d="M102 43 C109 48 113 56 106 62 C103 58 103 51 102 43 Z"
          fill="#E5252A"
        />
        {/* Far left petal */}
        <path
          d="M93 47 C83 52 79 59 87 63 C92 60 93 54 93 47 Z"
          fill="#E5252A"
        />
        {/* Far right petal */}
        <path
          d="M107 47 C117 52 121 59 113 63 C108 60 107 54 107 47 Z"
          fill="#E5252A"
        />
        {/* Lotus base pedestal */}
        <polygon points="90,63 110,63 100,66" fill="#888888" />

        {/* Golden Laurel Wreath (Daun Emas Kiri & Kanan) */}
        {/* Left Laurel Leaves */}
        <g fill="#D4AF37">
          <ellipse cx="68" cy="46" rx="9" ry="4" transform="rotate(-30 68 46)" />
          <ellipse cx="56" cy="60" rx="9" ry="4" transform="rotate(-15 56 60)" />
          <ellipse cx="48" cy="76" rx="9" ry="4" transform="rotate(5 48 76)" />
          <ellipse cx="45" cy="94" rx="9" ry="4" transform="rotate(25 45 94)" />
          <ellipse cx="47" cy="112" rx="9" ry="4" transform="rotate(45 47 112)" />
          <ellipse cx="54" cy="128" rx="9" ry="4" transform="rotate(65 54 128)" />
          <ellipse cx="66" cy="142" rx="9" ry="4" transform="rotate(80 66 142)" />
          <ellipse cx="80" cy="151" rx="9" ry="4" transform="rotate(95 80 151)" />
        </g>
        {/* Right Laurel Leaves */}
        <g fill="#D4AF37">
          <ellipse cx="132" cy="46" rx="9" ry="4" transform="rotate(30 132 46)" />
          <ellipse cx="144" cy="60" rx="9" ry="4" transform="rotate(15 144 60)" />
          <ellipse cx="152" cy="76" rx="9" ry="4" transform="rotate(-5 152 76)" />
          <ellipse cx="155" cy="94" rx="9" ry="4" transform="rotate(-25 155 94)" />
          <ellipse cx="153" cy="112" rx="9" ry="4" transform="rotate(-45 153 112)" />
          <ellipse cx="146" cy="128" rx="9" ry="4" transform="rotate(-65 146 128)" />
          <ellipse cx="134" cy="142" rx="9" ry="4" transform="rotate(-80 134 142)" />
          <ellipse cx="120" cy="151" rx="9" ry="4" transform="rotate(-95 120 151)" />
        </g>

        {/* Center Circuit "T" Symbol (Teknologi Informasi) */}
        {/* Microchip icon on upper left */}
        <g stroke="#0A1A44" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Chip Body */}
          <rect x="73" y="76" width="16" height="16" rx="3" fill="#FFFFFF" strokeWidth="2.5" />
          <rect x="76" y="79" width="10" height="10" rx="1.5" fill="#0A1A44" />
          {/* Pins Left */}
          <line x1="70" y1="80" x2="73" y2="80" />
          <line x1="70" y1="84" x2="73" y2="84" />
          <line x1="70" y1="88" x2="73" y2="88" />
          {/* Pins Right / Connected */}
          <line x1="89" y1="80" x2="94" y2="80" />
          <line x1="89" y1="84" x2="105" y2="84" />
          <line x1="89" y1="88" x2="100" y2="88" />

          {/* Horizontal Circuit Bar Traces */}
          {/* Top horizontal line */}
          <line x1="94" y1="78" x2="124" y2="78" />
          <circle cx="124" cy="78" r="3" fill="#0A1A44" />

          {/* Middle horizontal line */}
          <line x1="89" y1="84" x2="126" y2="84" />
          <circle cx="126" cy="84" r="3" fill="#0A1A44" />

          {/* Lower horizontal branch */}
          <line x1="89" y1="90" x2="122" y2="90" />
          <circle cx="122" cy="90" r="3" fill="#0A1A44" />

          {/* Vertical Stem of "T" (Double Parallel PCB Traces) */}
          {/* Left Vertical Line */}
          <line x1="96" y1="84" x2="96" y2="135" strokeWidth="3" />
          <circle cx="96" cy="110" r="2.5" fill="#FFFFFF" stroke="#0A1A44" strokeWidth="2" />
          <circle cx="96" cy="135" r="3" fill="#0A1A44" />

          {/* Center Connector Vertical */}
          <line x1="102" y1="88" x2="102" y2="128" strokeWidth="3" />
          <circle cx="102" cy="128" r="3" fill="#0A1A44" />

          {/* Right Vertical Line */}
          <line x1="108" y1="84" x2="108" y2="135" strokeWidth="3" />
          <circle cx="108" cy="104" r="2.5" fill="#FFFFFF" stroke="#0A1A44" strokeWidth="2" />
          <circle cx="108" cy="135" r="3" fill="#0A1A44" />
        </g>

        {/* Year 2024 */}
        <text
          x="100"
          y="166"
          textAnchor="middle"
          fontSize="12"
          fontWeight="700"
          fill="#0A1A44"
          fontFamily="system-ui, sans-serif"
          letterSpacing="0.05em"
        >
          2024
        </text>

        {/* HMTI Bold Text */}
        <text
          x="100"
          y="186"
          textAnchor="middle"
          fontSize="20"
          fontWeight="900"
          fill="#0A1A44"
          fontFamily="system-ui, sans-serif"
          letterSpacing="0.08em"
        >
          HMTI
        </text>
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span className="font-extrabold text-sm text-[#0A1A44] leading-tight">
            HMTI D3 TI
          </span>
          <span className="text-[10px] text-[#4A5A85]">Politeknik Semen Indonesia</span>
        </div>
      )}
    </div>
  );
};
