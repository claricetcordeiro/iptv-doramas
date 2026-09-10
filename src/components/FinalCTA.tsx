import { Play } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export function FinalCTA() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <Reveal className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 px-6 py-14 text-center shadow-glow sm:px-10 sm:py-16 lg:py-20">
        {/* Decorative glows */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
          <div className="absolute -bottom-12 right-0 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="relative">
          <h2 className="font-display text-2xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Pare de procurar parte 2.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/90 sm:text-lg">
            Comece agora e tenha acesso ao catálogo completo.
          </p>

          <a
            href="#plans"
            className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-brand-600 shadow-float transition-all duration-300 hover:scale-[1.04] active:scale-95"
          >
            <Play className="h-5 w-5 fill-brand-600" />
            Começar a assistir
          </a>

          <p className="mt-4 text-xs text-white/75">Acesso imediato · Sem fidelidade</p>
        </div>
      </Reveal>
    </section>
  );
}
