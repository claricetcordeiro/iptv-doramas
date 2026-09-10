import { Play, Send, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <div className="text-center md:text-left">
            <a href="#top" className="inline-flex items-center gap-2" aria-label="Dorama Hub">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-500 text-white shadow-card">
                <Play className="h-4 w-4 translate-x-0.5 fill-white" />
              </span>
              <span className="font-display text-lg font-extrabold tracking-tight text-slate-900">
                Dorama<span className="text-brand-500"> Hub</span>
              </span>
            </a>
            <p className="mt-3 max-w-xs text-sm text-slate-500">
              Os doramas completos em um só lugar. Sem procurar parte 2.
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-600">
            <a href="#" className="transition hover:text-brand-600">Política de Privacidade</a>
            <a href="#" className="transition hover:text-brand-600">Termos</a>
            <a href="#" className="transition hover:text-brand-600">Suporte</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Telegram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-soft transition hover:border-brand-300 hover:text-brand-600"
            >
              <Send className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-soft transition hover:border-brand-300 hover:text-brand-600"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-100 pt-6 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Dorama Hub. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
