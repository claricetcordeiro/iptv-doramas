import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FaqItem = { q: string; a: string };

const FAQS: FaqItem[] = [
  {
    q: 'Como funciona?',
    a: 'Escolha um plano, finalize o cadastro e receba acesso imediato ao catálogo completo. Você assiste direto pelo navegador, sem precisar baixar nada.',
  },
  {
    q: 'Preciso baixar aplicativo?',
    a: 'Não. A plataforma roda direto no navegador do celular, tablet ou computador. Se quiser, você pode adicionar um atalho à tela inicial e acessar como um app.',
  },
  {
    q: 'Posso assistir pelo celular?',
    a: 'Sim. Toda a experiência é mobile-first e otimizada para dados móveis. Assista em qualquer lugar, a qualquer hora, com qualidade adaptativa.',
  },
  {
    q: 'Como recebo acesso?',
    a: 'O acesso é liberado automaticamente logo após a confirmação do pagamento. Você recebe um e-mail com o link de entrada e pode começar a assistir na hora.',
  },
  {
    q: 'Como cancelar?',
    a: 'Você pode cancelar quando quiser em poucos cliques, sem burocracia. O acesso continua ativo até o fim do período já pago.',
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="mb-10 text-center">
        <h2 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
          Perguntas frequentes
        </h2>
        <p className="mt-2 text-sm text-slate-500">Tudo o que você precisa saber antes de começar.</p>
      </div>

      <ul className="space-y-3">
        {FAQS.map((item, i) => {
          const isOpen = open === i;
          return (
            <li
              key={item.q}
              className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                isOpen ? 'border-brand-200 shadow-card' : 'border-slate-200 shadow-soft'
              }`}
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-display text-base font-semibold text-slate-900">{item.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-brand-500 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className="grid transition-all duration-300 ease-out"
                style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-4 text-sm leading-relaxed text-slate-600">{item.a}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
