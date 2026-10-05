import React from 'react';
import { Check, Shirt, UserRound } from 'lucide-react';
import { dresscodes } from '../../data/osjurData';
import dresscodeImage from '../../assets/images/dresscode_votech_2026.png';

export const DresscodePage: React.FC = () => (
  <div className="space-y-8 pb-6 md:space-y-12">
    <section className="mx-auto max-w-3xl space-y-3 pt-2 text-center">
      <div className="inline-flex items-center gap-2 rounded-full bg-[#EBF3FF] px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#1865F2]">
        <Shirt className="h-4 w-4" />
        <span>Ketentuan pakaian VOTECH</span>
      </div>
      <h1 className="text-3xl font-black tracking-tight text-[#1A284E] sm:text-5xl">DressCode</h1>
      <div className="mx-auto h-1 w-12 rounded-full bg-[#1865F2]" />
      <p className="mx-auto max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
        Gunakan pakaian berikut saat pelaksanaan VOTECH 2026.
      </p>
    </section>

    <section className="mx-auto grid max-w-5xl grid-cols-1 items-end gap-5 lg:grid-cols-[minmax(0,.85fr)_minmax(18rem,1.15fr)_minmax(0,.85fr)] lg:gap-6">
      <figure className="order-1 flex min-h-[22rem] items-end justify-center overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-b from-[#F4F8FF] to-white px-4 pt-5 shadow-[0_8px_28px_-12px_rgba(15,23,42,0.18)] sm:min-h-[30rem] lg:order-2 lg:min-h-[34rem]">
        <img
          src={dresscodeImage}
          alt="Contoh dresscode putra dan putri VOTECH 2026"
          className="max-h-[30rem] w-full object-contain object-bottom lg:max-h-[33rem]"
        />
      </figure>

      {dresscodes.map((group, index) => (
        <article
          key={group.id}
          className={`overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_8px_28px_-12px_rgba(15,23,42,0.18)] ${
            index === 0 ? 'order-2 lg:order-1' : 'order-3'
          }`}
        >
          <div className="flex items-center gap-3 bg-[#1865F2] px-5 py-4 text-white">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15">
              <UserRound className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-black">{group.title}</h2>
          </div>
          <ul className="space-y-2 p-4 sm:p-5">
            {group.items.map((item) => (
              <li key={item} className="flex min-h-11 items-center gap-3 rounded-xl bg-[#F8FAFE] px-3 py-2.5 text-sm font-bold leading-5 text-[#1A284E]">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E3EEFF] text-[#1865F2]">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  </div>
);
