import { useState } from 'react';
import { Film, Play, Star } from 'lucide-react';
import type { Drama } from '@/data/dramas';

type PosterImageProps = {
  src: string;
  alt: string;
  eager?: boolean;
  className?: string;
};

/**
 * Real poster image with skeleton shimmer while loading and a neutral
 * dark fallback if the file is missing. Renders object-cover, rounded by parent.
 */
export function PosterImage({ src, alt, eager = false, className = '' }: PosterImageProps) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  return (
    <div className={`relative overflow-hidden bg-slate-200 ${className}`}>
      {status === 'loading' && (
        <div className="absolute inset-0 animate-shimmer bg-[length:200%_100%] bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200" />
      )}
      {status === 'error' && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-slate-800 to-slate-900">
          <Film className="h-7 w-7 text-white/25" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        draggable={false}
        onLoad={() => setStatus('loaded')}
        onError={() => setStatus('error')}
        className={`h-full w-full object-cover transition-opacity duration-500 ${
          status === 'loaded' ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}

export function Poster({ drama, eager = false }: { drama: Drama; eager?: boolean }) {
  return (
    <div className="relative aspect-[2/3] w-full overflow-hidden rounded-2xl bg-slate-200 shadow-soft">
      <PosterImage src={drama.image} alt={drama.title} eager={eager} className="absolute inset-0" />

      {/* Subtle dark gradient overlay at the bottom for title readability */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-3">
        <p
          className="font-display text-sm font-bold leading-tight text-white"
          style={{ textShadow: '0 2px 12px rgba(0,0,0,0.55)' }}
        >
          {drama.title}
        </p>
        <p className="mt-0.5 text-[10px] font-medium text-white/80">
          {drama.episodes} eps · {drama.year}
        </p>
      </div>
    </div>
  );
}

type PosterCardProps = {
  drama: Drama;
  eager?: boolean;
};

export function PosterCard({ drama, eager = false }: PosterCardProps) {
  return (
    <article className="group relative w-[150px] shrink-0 snap-start sm:w-[172px] md:w-[196px]">
      <div className="relative">
        <Poster drama={drama} eager={eager} />

        {/* Hover overlay with play */}
        <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-slate-900/0 opacity-0 transition-all duration-300 group-hover:bg-slate-900/35 group-hover:opacity-100">
          <span className="flex h-12 w-12 scale-75 items-center justify-center rounded-full bg-brand-500 text-white shadow-glow transition-transform duration-300 group-hover:scale-100">
            <Play className="h-5 w-5 translate-x-0.5 fill-white" />
          </span>
        </div>
      </div>

      <div className="mt-2.5 px-0.5">
        <h3 className="clamp-2 text-sm font-semibold text-slate-800">{drama.title}</h3>
        <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
          <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
          <span className="font-semibold text-slate-700">{drama.rating.toFixed(1)}</span>
          <span aria-hidden>·</span>
          <span>{drama.genre}</span>
        </div>
      </div>
    </article>
  );
}
