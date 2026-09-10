import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Carousel } from '@/components/Carousel';
import { PosterCard } from '@/components/Poster';
import { Benefits } from '@/components/Benefits';
import { Pricing } from '@/components/Pricing';
import { Faq } from '@/components/Faq';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { trending, recentlyAdded } from '@/data/dramas';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />

        <section id="trending" className="py-14 sm:py-16 lg:py-20">
          <Carousel title="Doramas em alta" subtitle="Os mais assistidos nesta semana">
            {trending.map((d, i) => (
              <div key={d.id} className="snap-start">
                <PosterCard drama={d} eager={i < 3} />
              </div>
            ))}
          </Carousel>
        </section>

        <section id="recent" className="py-6 pb-14 sm:pb-16 lg:pb-20">
          <Carousel title="Recém adicionados" subtitle="Lançamentos fresquinhos no catálogo">
            {recentlyAdded.map((d) => (
              <div key={d.id} className="snap-start">
                <PosterCard drama={d} />
              </div>
            ))}
          </Carousel>
        </section>

        <Benefits />
        <Pricing />
        <Faq />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
