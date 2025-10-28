import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Episode {
  id: number;
  season: number;
  episode: number;
  title: string;
  city: string;
  country: string;
  date: string;
  duration: string;
  description: string;
  thumbnail: string;
  isInternational?: boolean;
  rating?: number;
}

export default function Poehali() {
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);
  const [selectedSeason, setSelectedSeason] = useState<string>('all');

  const episodes: Episode[] = [
    {
      id: 1,
      season: 4,
      episode: 1,
      title: 'Город ветров и огня',
      city: 'Баку',
      country: 'Азербайджан',
      date: '3 ноября 2024',
      duration: '30 мин',
      description: 'Первый выпуск! Современные башни Flame Towers и древний Ичери-Шехер. Каспийская набережная, азербайджанский плов и нефтяные фонтаны. Огненная земля гостеприимства.',
      thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
      isInternational: true,
      rating: 5.0,
    },
    {
      id: 2,
      season: 4,
      episode: 2,
      title: 'Нефтяная столица Сибири',
      city: 'Тюмень',
      country: 'Россия',
      date: '10 ноября 2024',
      duration: '30 мин',
      description: 'Первый русский город за Уралом. Набережная Туры, Цветной бульвар и горячие источники. Сибирская кухня, история освоения и современное развитие.',
      thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
      rating: 4.7,
    },
    {
      id: 3,
      season: 4,
      episode: 3,
      title: 'Город будущего в пустыне',
      city: 'Дубай',
      country: 'ОАЭ',
      date: '17 ноября 2024',
      duration: '30 мин',
      description: 'Бурдж-Халифа, искусственные острова и роскошные моллы. Пустынное сафари, золотой рынок и небоскребы будущего. Восточная роскошь и технологии.',
      thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
      isInternational: true,
      rating: 5.0,
    },
    {
      id: 4,
      season: 4,
      episode: 4,
      title: 'Столица развлечений',
      city: 'Лас-Вегас',
      country: 'США',
      date: '24 ноября 2024',
      duration: '30 мин',
      description: 'Город огней в пустыне Невада. Казино, шоу мирового уровня и знаменитый Стрип. Гранд-Каньон поблизости и американская мечта в неоновых огнях.',
      thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
      isInternational: true,
      rating: 4.9,
    },
    {
      id: 5,
      season: 4,
      episode: 5,
      title: 'Сказка Аравийского полуострова',
      city: 'Маскат',
      country: 'Оман',
      date: '1 декабря 2024',
      duration: '30 мин',
      description: 'Султанат Оман — восточная экзотика без суеты. Мечеть султана Кабуса, старинные форты и рынки с благовониями. Пустыня, горы и Аравийское море.',
      thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
      isInternational: true,
      rating: 4.8,
    },
    {
      id: 6,
      season: 4,
      episode: 6,
      title: 'Южная столица России',
      city: 'Краснодар',
      country: 'Россия',
      date: '8 декабря 2024',
      duration: '30 мин',
      description: 'Город, где всегда тепло. Улица Красная, парки Галицкого и современные проекты. Кубанская кухня, казачья культура и южное гостеприимство.',
      thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
      rating: 4.7,
    },
    {
      id: 7,
      season: 4,
      episode: 7,
      title: 'Священное озеро Сибири',
      city: 'Байкал',
      country: 'Россия',
      date: '15 декабря 2024',
      duration: '30 мин',
      description: 'Самое глубокое озеро планеты. Остров Ольхон, шаманские места силы и чистейшая вода. Байкальская рыба, буряты и природа мирового значения.',
      thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
      rating: 5.0,
    },
    {
      id: 8,
      season: 4,
      episode: 8,
      title: 'Город на Тереке',
      city: 'Владикавказ',
      country: 'Россия',
      date: '22 декабря 2024',
      duration: '30 мин',
      description: 'Столица Северной Осетии у подножия Кавказских гор. Осетинские пироги, горские традиции и военно-грузинская дорога. Кавказское гостеприимство.',
      thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
      rating: 4.8,
    },
    {
      id: 9,
      season: 4,
      episode: 9,
      title: 'Уральская столица',
      city: 'Екатеринбург',
      country: 'Россия',
      date: '29 декабря 2024',
      duration: '30 мин',
      description: 'Граница Европы и Азии. Храм на Крови, Плотинка и уральские самоцветы. Стрит-арт, современная архитектура и история династии Романовых.',
      thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
      rating: 4.9,
    },
    {
      id: 10,
      season: 4,
      episode: 11,
      title: 'Секреты 4 сезона',
      city: 'Спецвыпуск',
      country: 'За кадром',
      date: '4 января 2025',
      duration: '45 мин',
      description: 'СПЕЦИАЛЬНЫЙ ВЫПУСК! Узнайте, что происходило за кадром 4 сезона программы "Поехали в Город!". Неудачные дубли, забавные моменты и закулисье съёмок. Эксклюзивные интервью и истории, которые не вошли в эфир.',
      thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
      rating: 5.0,
    },
  ];

  const filteredEpisodes = selectedSeason === 'all' 
    ? episodes 
    : episodes.filter(ep => ep.season === parseInt(selectedSeason));

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <Icon name="ArrowLeft" size={24} className="text-primary" />
            <span className="text-xl font-bold text-foreground">Вернуться на главную</span>
          </a>
        </div>
      </header>

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <div className="mb-6">
              <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 text-lg font-bold animate-pulse">
                МЕЖДУНАРОДНЫЙ ПРОЕКТ
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Поехали в Город!
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Первое российское тревел-шоу, которое стало международным! 
              4 сезон: от России до Ближнего Востока и Америки — путешествие по самым удивительным городам планеты.
            </p>
            <div className="flex items-center justify-center gap-3 mb-8 bg-primary/5 p-4 rounded-lg max-w-md mx-auto">
              <Icon name="User" size={24} className="text-primary" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Ведущий программы</p>
                <p className="font-bold text-foreground text-lg">Максим</p>
              </div>
            </div>
            <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-lg">
                <div className="flex items-center gap-3 text-foreground">
                  <Icon name="Tv" size={24} className="text-primary" />
                  <div>
                    <div className="font-bold text-lg">Каждое воскресенье в 10:00</div>
                    <div className="text-sm text-muted-foreground">Длительность: 30 минут</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-red-500 to-orange-500 border-l-4 border-red-600 p-6 rounded-lg animate-pulse">
                <div className="flex items-center gap-3 text-white">
                  <Icon name="Star" size={24} />
                  <div>
                    <div className="font-bold text-lg">СПЕЦВЫПУСК!</div>
                    <div className="text-sm">Суббота, 4 января в 14:15</div>
                    <div className="text-xs font-semibold">Секреты 4 сезона</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-primary/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-primary mb-1">10</div>
                <div className="text-sm text-muted-foreground">Выпусков</div>
              </div>
              <div className="bg-primary/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-primary mb-1">9</div>
                <div className="text-sm text-muted-foreground">Городов</div>
              </div>
              <div className="bg-primary/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-primary mb-1">5</div>
                <div className="text-sm text-muted-foreground">Стран</div>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden border-2 border-primary/20">
              <div className="aspect-video bg-secondary flex items-center justify-center relative">
                <img
                  src="https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg"
                  alt="Поехали в Город"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Icon name="Play" size={32} className="mr-2" />
                    Смотреть лучшие моменты
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Все выпуски программы
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                От Баку до Екатеринбурга — 9 городов + специальный выпуск о секретах сезона
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {episodes.map((episode) => (
                <Card
                  key={episode.id}
                  className={`hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group ${
                    episode.episode === 11 ? 'border-2 border-orange-500 shadow-xl' : ''
                  }`}
                  onClick={() => setSelectedEpisode(episode)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={episode.thumbnail}
                      alt={episode.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    {episode.episode === 11 ? (
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold animate-pulse">
                          <Icon name="Star" size={12} className="mr-1" />
                          СПЕЦВЫПУСК
                        </Badge>
                      </div>
                    ) : (
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold">
                          <Icon name="Globe" size={12} className="mr-1" />
                          {episode.country}
                        </Badge>
                      </div>
                    )}
                    <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-sm font-semibold">
                      {episode.duration}
                    </div>
                    {episode.rating && (
                      <div className="absolute top-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-sm font-semibold flex items-center gap-1">
                        <Icon name="Star" size={14} className="fill-yellow-400 text-yellow-400" />
                        {episode.rating}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                          <Icon name="Play" size={32} className="text-primary-foreground ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                      <div className="flex items-center space-x-2">
                        <Icon name="MapPin" size={16} />
                        <span>{episode.city}</span>
                      </div>
                      <span className="text-xs">Эпизод {episode.episode}</span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {episode.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="line-clamp-2">
                      {episode.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Icon name="Plane" size={64} className="text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Путешествуйте вместе с нами!
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Следите за новыми выпусками и анонсами следующих сезонов программы "Поехали в Город!"
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Bell" size={20} className="mr-2" />
                Подписаться на новости
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Share2" size={20} className="mr-2" />
                Поделиться программой
              </Button>
            </div>
          </div>
        </div>
      </section>

      {selectedEpisode && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedEpisode(null)}
        >
          <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-video">
              <img
                src={selectedEpisode.thumbnail}
                alt={selectedEpisode.title}
                className="w-full h-full object-cover"
              />
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 bg-background/90"
                onClick={() => setSelectedEpisode(null)}
              >
                <Icon name="X" size={20} />
              </Button>
              {selectedEpisode.isInternational && (
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg">
                    <Icon name="Globe" size={16} className="mr-1" />
                    {selectedEpisode.country}
                  </Badge>
                </div>
              )}
            </div>
            <CardHeader>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center space-x-2">
                  <Icon name="Calendar" size={16} />
                  <span>{selectedEpisode.date}</span>
                </div>
                <span>•</span>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} />
                  <span>{selectedEpisode.duration}</span>
                </div>
                <span>•</span>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>{selectedEpisode.city}, {selectedEpisode.country}</span>
                </div>
                {selectedEpisode.rating && (
                  <>
                    <span>•</span>
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{selectedEpisode.rating}</span>
                    </div>
                  </>
                )}
              </div>
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="outline">Эпизод {selectedEpisode.episode}</Badge>
              </div>
              <CardTitle className="text-3xl">{selectedEpisode.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {selectedEpisode.description}
              </p>
              <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                <Icon name="Play" size={24} className="mr-2" />
                Смотреть выпуск
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      <footer className="border-t py-8 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-foreground font-bold text-lg">Поехали в Город!</p>
              <p className="text-muted-foreground text-sm">Часть семьи Новые Друзья ТВ</p>
            </div>
            <Button variant="outline" onClick={scrollToTop}>
              <Icon name="ArrowUp" size={16} className="mr-2" />
              Наверх
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}