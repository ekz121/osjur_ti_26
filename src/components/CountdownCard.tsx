import React, { useEffect, useState } from 'react';

export const CountdownCard: React.FC = () => {
  // Initial duration in seconds: 5 days, 12 hours, 30 minutes, 45 seconds
  const initialSeconds = 5 * 86400 + 12 * 3600 + 30 * 60 + 45;
  const [timeLeft, setTimeLeft] = useState<number>(initialSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(timeLeft / 86400);
  const hours = Math.floor((timeLeft % 86400) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const padZero = (n: number) => n.toString().padStart(2, '0');

  const units = [
    { value: padZero(days), label: 'Hari' },
    { value: padZero(hours), label: 'Jam' },
    { value: padZero(minutes), label: 'Menit' },
    { value: padZero(seconds), label: 'Detik' },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-4 gap-2.5 sm:gap-4">
        {units.map((unit) => (
          <div
            key={unit.label}
            className="bg-white rounded-[20px] border border-[#D6E2FF] py-3.5 px-2 sm:py-5 sm:px-4 text-center shadow-xs flex flex-col items-center justify-center"
          >
            <span className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#1A56FF] tabular-nums tracking-tight leading-none">
              {unit.value}
            </span>
            <span className="text-[12px] sm:text-xs font-semibold text-[#4A5A85] mt-1.5 uppercase tracking-wide">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
      <p className="text-center text-xs sm:text-sm font-medium text-[#4A5A85] mt-3">
        Menuju hari pertama OSJUR
      </p>
    </div>
  );
};
