import { useEffect, useState } from 'react';
import { Play } from 'lucide-react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-white/40 py-2.5' : 'py-4'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-2" aria-label="Dorama Hub — início">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-500 text-white shadow-card">
            <Play className="h-4 w-4 translate-x-0.5 fill-white" />
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight text-slate-900">
            Dorama<span className="text-brand-500"> Hub</span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
          <a href="#trending" className="transition hover:text-brand-600">Em alta</a>
          <a href="#benefits" className="transition hover:text-brand-600">Benefícios</a>
          <a href="#plans" className="transition hover:text-brand-600">Planos</a>
          <a href="#faq" className="transition hover:text-brand-600">Dúvidas</a>
        </nav>
        <a
          href="#plans"
          className="rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-card transition hover:bg-brand-600 active:scale-95"
        >
          Começar
        </a>
      </div>
    </header>
  );
}
