import { Play, Check, Sparkles } from 'lucide-react';
import { trending } from '@/data/dramas';
import { PosterImage } from '@/components/Poster';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-[#fff7fb] via-[#ffe9f2] to-white pt-24 pb-14 sm:pt-28 lg:pt-32 lg:pb-20">
      {/* Blurred drama poster backdrop */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-16 top-10 h-44 w-32 rotate-[-12deg] opacity-50 blur-2xl animate-float-slow">
          <PosterImage src={trending[0].image} alt={trending[0].title} eager className="h-full w-full rounded-2xl" />
        </div>
        <div className="absolute right-0 top-2 h-52 w-36 rotate-[10deg] opacity-45 blur-2xl animate-float sm:right-6">
          <PosterImage src={trending[2].image} alt={trending[2].title} eager className="h-full w-full rounded-2xl" />
        </div>
        <div className="absolute left-1/4 top-40 h-40 w-28 rotate-[6deg] opacity-30 blur-2xl animate-float-slow">
          <PosterImage src={trending[5].image} alt={trending[5].title} eager className="h-full w-full rounded-2xl" />
        </div>
        <div className="absolute right-1/4 top-52 h-48 w-32 rotate-[-8deg] opacity-35 blur-2xl animate-float sm:right-1/3">
          <PosterImage src={trending[7].image} alt={trending[7].title} eager className="h-full w-full rounded-2xl" />
        </div>
        <div className="absolute -bottom-8 left-1/2 h-44 w-32 -translate-x-1/2 rotate-[4deg] opacity-25 blur-2xl animate-float">
          <PosterImage src={trending[3].image} alt={trending[3].title} eager className="h-full w-full rounded-2xl" />
        </div>
        {/* Soft ambient glows */}
        <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-brand-300/40 blur-3xl" />
        <div className="absolute -right-20 top-32 h-96 w-96 rounded-full bg-brand-200/50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        {/* Badge */}
        <div className="mb-6 inline-flex animate-fade-in items-center gap-1.5 rounded-full border border-brand-200 bg-white/70 px-3.5 py-1.5 text-xs font-semibold text-brand-700 shadow-soft backdrop-blur">
          <Sparkles className="h-3.5 w-3.5" />
          Episódios completos · sem cortes
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up font-display text-[1.9rem] font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-4xl lg:text-[3.25rem]">
          Você encontrou os episódios completos{' '}
          <span className="inline-block animate-pulse-soft text-brand-500">❤</span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-4 max-w-xl animate-fade-up text-base text-slate-600 sm:text-lg [animation-delay:120ms] opacity-0">
          Assista aos doramas sem precisar procurar parte 2.
        </p>

        {/* CTA */}
        <div className="mt-8 flex animate-fade-up flex-col items-center gap-3 [animation-delay:240ms] opacity-0">
          <a
            href="#plans"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-brand-500 px-7 py-3.5 text-base font-bold text-white shadow-glow transition-all duration-300 hover:scale-[1.03] hover:bg-brand-600 active:scale-95"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <Play className="h-5 w-5 fill-white" />
            Começar a assistir
          </a>

          <ul className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs font-medium text-slate-600 sm:text-sm">
            {['Atualizações frequentes', 'Catálogo organizado', 'Assista pelo celular'].map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 rounded-full bg-brand-100 p-0.5 text-brand-600" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Social proof */}
        <div className="mt-9 flex animate-fade-up items-center justify-center gap-3 [animation-delay:360ms] opacity-0">
          <div className="flex -space-x-2">
            {trending.slice(0, 4).map((d) => (
              <span
                key={d.id}
                className="inline-block h-7 w-7 overflow-hidden rounded-full border-2 border-white shadow-soft"
              >
                <PosterImage src={d.image} alt={d.title} eager className="h-full w-full" />
              </span>
            ))}
          </div>
          <p className="text-xs text-slate-500">
            <span className="font-semibold text-slate-700">+12.000 fãs</span> assistindo agora
          </p>
        </div>
      </div>
    </section>
  );
}
