export type Drama = {
  id: string;
  title: string;
  image: string;
  genre: string;
  rating: number;
  episodes: number;
  year: number;
};

export const trending: Drama[] = [
  { id: 'moonlight', title: 'The Nice Guy', image: '/images/dramas/1.webp', genre: 'Romance', rating: 8.4, episodes: 14, year: 2025 },
  { id: 'crown', title: "Amor, Tomada Dois", image: '/images/dramas/2.webp', genre: 'Drama e Romance', rating: 9.4, episodes: 12, year: 2025 },
  { id: 'heartbeat', title: 'A Rainha dos Golpes', image: '/images/dramas/3.webp', genre: 'Ação, Crime, Comédia Dramática', rating: 6.9, episodes: 12, year: 2025 },
  { id: 'winter', title: 'Amor de Mentirinha', image: '/images/dramas/4.webp', genre: 'Romance e Comédia', rating: 9.0, episodes: 12, year: 2025 },
  { id: 'ceo', title: '100 Memórias', image: '/images/dramas/5.webp', genre: 'Drama, Amizade e Histórico', rating: 8.7, episodes: 12, year: 2025 },
  { id: 'vow', title: 'Nossos Dias de Glória ', image: '/images/dramas/6.webp', genre: 'Drama Familiar e Romance', rating: 9.3, episodes: 12, year: 2025 },
  { id: 'affair', title: 'Andando na Corda Bamba', image: '/images/dramas/7.webp', genre: 'Thriller e Drama Social', rating: 8.8, episodes: 50, year: 2025 },
  { id: 'secret', title: "Typhoon Family", image: '/images/dramas/8.webp', genre: 'Drama, Comédia Dramática  e Romance', rating: 9.2, episodes: 12, year: 2025 },
];

export const recentlyAdded: Drama[] = [
  { id: 'cherry', title: 'To The Moon', image: '/images/dramas/9.webp', genre: 'Comédia, Drama e Romance', rating: 8.6, episodes: 12, year: 2025 },
  { id: 'midnight', title: 'Desprazer em Te Conhecer', image: '/images/dramas/10.webp', genre: 'Romance, Drama e Comédia', rating: 8.5, episodes: 16, year: 2025 },
  { id: 'starry', title: 'Shins Project ', image: '/images/dramas/11.webp', genre: 'Drama, Comédia e Mistério', rating: 8.4, episodes: 12, year: 2025 },
  { id: 'recipe', title: 'A Vida dos Sonhos do Sr. Kim', image: '/images/dramas/12.webp', genre: 'Drama e Comédia', rating: 8.3, episodes: 12, year: 2025 },
  { id: 'golden', title: 'Minha Estrela Encrenqueira', image: '/images/dramas/13.webp', genre: 'Fantasia, Romance, Comédia e Drama', rating: 8.7, episodes: 12, year: 2025 },
  { id: 'spring', title: 'Segunda Chance no Amor', image: '/images/dramas/14.webp', genre: 'Romance, Comédia e Drama', rating: 9.0, episodes: 12, year: 2025 },
  { id: 'ember', title: 'Meu Secretário Perfeito', image: '/images/dramas/15.webp', genre: 'Romance, Comédia e Drama', rating: 8.9, episodes: 12, year: 2025 },
  { id: 'petal', title: 'A Fada e o Pastor', image: '/images/dramas/16.webp', genre: 'Fantasia, Romance e Drama Juvenil', rating: 8.6, episodes: 12, year: 2025 },
];
