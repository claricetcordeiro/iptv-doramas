import { Check, Crown } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

type Plan = {
  id: string;
  name: string;
  price: string;
  period: string;
  checkoutUrl: string;
  badge?: string;
  savings?: string;
  features: string[];
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    id: 'mensal',
    name: 'Mensal',
    price: 'R$10,96',
    period: '/mês',
    checkoutUrl: 'https://serverflow.dad/c/doramahub-mensal',
    features: ['Catálogo completo', 'Acesso pelo celular', 'Atualizações frequentes', 'Cancele quando quiser'],
  },
  {
    id: 'trimestral',
    name: 'Trimestral',
    price: 'R$19,72',
    period: '/3 meses',
    checkoutUrl: 'https://paylume.fans/c/doramahub-trimestral',
    savings: 'Economize 20%',
    features: ['Tudo do plano Mensal', 'Sem cobrança mensal', 'Suporte prioritário', 'Acesso antecipado a novidades'],
  },
  {
    id: 'anual',
    name: 'Anual',
    price: 'R$26,62',
    period: '/ano',
    checkoutUrl: 'https://paylume.fans/c/doramahub-anual',
    badge: 'Melhor Oferta',
    savings: 'Economize 45%',
    features: ['Tudo do plano Trimestral', 'Maior desconto por mês', 'Lançamentos em primeira mão', 'Acesso a clássicos raros'],
    featured: true,
  },
];

export function Pricing() {
  return (
    <section id="plans" className="bg-gradient-to-b from-[#fff7fb] to-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600">Planos</span>
          <h2 className="mt-2 font-display text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
            Escolha seu plano
          </h2>
          <p className="mt-3 text-sm text-slate-500 sm:text-base">
            Acesso imediato. Sem fidelidade, sem burocracia — comece a assistir hoje.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:items-stretch">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 100} className="h-full">
              <article
                className={`relative flex h-full flex-col rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1.5 sm:p-7 ${
                  plan.featured
                    ? 'border-brand-300 bg-white shadow-glow md:scale-[1.04]'
                    : 'border-slate-200 bg-white shadow-soft hover:shadow-card'
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-card">
                    {plan.badge}
                  </span>
                )}

                <div className="flex items-center gap-2">
                  <h3 className="font-display text-xl font-bold text-slate-900">{plan.name}</h3>
                  {plan.featured && <Crown className="h-4 w-4 text-brand-500" />}
                </div>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-display text-3xl font-extrabold text-slate-900">{plan.price}</span>
                  <span className="text-sm font-medium text-slate-400">{plan.period}</span>
                </div>

                {plan.savings && (
                  <span className="mt-2 inline-flex w-fit items-center gap-1 rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">
                    {plan.savings}
                  </span>
                )}

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-brand-100 p-0.5 text-brand-600" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.checkoutUrl}
                  className={`mt-7 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 active:scale-95 ${
                    plan.featured
                      ? 'bg-brand-500 text-white shadow-glow hover:scale-[1.03] hover:bg-brand-600'
                      : 'bg-brand-50 text-brand-700 hover:bg-brand-100'
                  }`}
                >
                  Começar agora
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate-400">
          Pagamento seguro · Acesso imediato após a confirmação · Cancele quando quiser
        </p>
      </div>
    </section>
  );
}
