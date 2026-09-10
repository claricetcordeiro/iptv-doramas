import { Film, Heart, Smartphone, Star, Zap } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const BENEFITS = [
  { icon: Film, title: 'Episódios completos', desc: 'Sem cortes, sem "parte 2". O episódio inteiro em um só lugar.' },
  { icon: Heart, title: 'Novos doramas toda semana', desc: 'Catálogo que cresce toda semana com lançamentos e clássicos.' },
  { icon: Smartphone, title: 'Assista em qualquer dispositivo', desc: 'Celular, tablet ou computador. Sua série acompanha você.' },
  { icon: Star, title: 'Plataforma organizada', desc: 'Busca fácil, por gênero, por ano e por status de exibição.' },
  { icon: Zap, title: 'Atualizações frequentes', desc: 'Episódios novos saem rápido, sempre legendados e organizados.' },
];

export function Benefits() {
  return (
    <section id="benefits" className="bg-gradient-to-b from-white to-[#fff7fb] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600">Por que a Dorama Hub</span>
          <h2 className="mt-2 font-display text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
            Feita para quem ama doramas
          </h2>
          <p className="mt-3 text-sm text-slate-500 sm:text-base">
            Tudo o que você sempre quis em um lugar só — sem caça a partes, sem links quebrados.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal key={b.title} delay={i * 80}>
                <article className="group h-full rounded-2.5xl border border-slate-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-card">
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-all duration-300 group-hover:bg-brand-500 group-hover:text-white group-hover:shadow-card">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-slate-900">{b.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{b.desc}</p>
                </article>
              </Reveal>
            );
          })}

          {/* Decorative CTA tile filling the 6th cell */}
          <Reveal delay={5 * 80}>
            <article className="flex h-full flex-col justify-between overflow-hidden rounded-2.5xl bg-gradient-to-br from-brand-500 to-brand-700 p-6 text-white shadow-glow">
              <div>
                <p className="font-display text-xl font-bold leading-tight">Pronto para começar?</p>
                <p className="mt-1.5 text-sm text-white/85">Acesso imediato a todos os episódios completos.</p>
              </div>
              <a
                href="#plans"
                className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-brand-600 transition hover:scale-105 active:scale-95"
              >
                Ver planos
              </a>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
