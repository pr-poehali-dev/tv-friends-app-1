import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Episode {
  id: number;
  title: string;
  date: string;
  duration: string;
  description: string;
  thumbnail: string;
  isNew?: boolean;
}

export default function Breakfast() {
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);

  const episodes: Episode[] = [
    {
      id: 1,
      title: 'Премьерный выпуск: Идеальные панкейки',
      date: '1 ноября 2025',
      duration: '25 мин',
      description: 'Максим научит готовить воздушные американские панкейки с ягодным соусом. Узнаете секреты идеального теста и правильной температуры сковороды.',
      thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
      isNew: true,
    },
    {
      id: 2,
      title: 'Французские круассаны за 30 минут',
      date: '8 ноября 2025',
      duration: '28 мин',
      description: 'Ускоренная версия классических круассанов. Максим покажет лайфхаки для занятых, как приготовить слоёную выпечку без лишних хлопот.',
      thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
    },
    {
      id: 3,
      title: 'Энергетические боулы для всей семьи',
      date: '15 ноября 2025',
      duration: '22 мин',
      description: 'Полезные и красочные боулы с йогуртом, гранолой и свежими фруктами. Идеальный вариант для здорового семейного завтрака.',
      thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
    },
    {
      id: 4,
      title: 'Яйца-бенедикт: классика и вариации',
      date: '22 ноября 2025',
      duration: '30 мин',
      description: 'Максим раскроет секрет идеального голландского соуса и покажет три авторские вариации классического рецепта.',
      thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
    },
    {
      id: 5,
      title: 'Завтрак по-английски',
      date: '29 ноября 2025',
      duration: '35 мин',
      description: 'Традиционный английский завтрак: яичница, бекон, фасоль в томате, тосты и грибы. Готовим всё одновременно без стресса.',
      thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
    },
    {
      id: 6,
      title: 'Смузи-боулы: 5 рецептов',
      date: '6 декабря 2025',
      duration: '20 мин',
      description: 'Яркие и вкусные смузи-боулы для детей и взрослых. Максим покажет, как сделать завтрак не только полезным, но и красивым.',
      thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
    },
  ];

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
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="mb-6">
              <Badge className="bg-red-500 text-white px-4 py-2 text-sm font-bold">
                ПРЕМЬЕРА 1 НОЯБРЯ
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Завтрак с Максимом
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              Каждую субботу в 10:00 утра ведущий Максим Зуев научит вас готовить вкусные завтраки, 
              которые легко повторить всей семьёй
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 text-foreground">
                <Icon name="Calendar" size={20} className="text-primary" />
                <span className="font-semibold">По субботам в 10:00</span>
              </div>
              <div className="flex items-center space-x-2 text-foreground">
                <Icon name="Clock" size={20} className="text-primary" />
                <span className="font-semibold">20-35 минут</span>
              </div>
              <div className="flex items-center space-x-2 text-foreground">
                <Icon name="ChefHat" size={20} className="text-primary" />
                <span className="font-semibold">Ведущий: Максим Зуев</span>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto mb-16">
            <Card className="overflow-hidden border-2 border-primary/20">
              <div className="aspect-video bg-secondary flex items-center justify-center relative">
                <img
                  src="https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg"
                  alt="Завтрак с Максимом"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Icon name="Play" size={24} className="mr-2" />
                    Смотреть трейлер
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Расписание выпусков
              </h2>
              <p className="text-muted-foreground">
                Все серии программы — рецепты, которые сделают ваше утро особенным
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {episodes.map((episode) => (
                <Card
                  key={episode.id}
                  className="hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group"
                  onClick={() => setSelectedEpisode(episode)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={episode.thumbnail}
                      alt={episode.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    {episode.isNew && (
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-red-500 text-white font-bold">
                          НОВИНКА
                        </Badge>
                      </div>
                    )}
                    <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-sm font-semibold">
                      {episode.duration}
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                          <Icon name="Play" size={32} className="text-primary-foreground ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                      <Icon name="Calendar" size={16} />
                      <span>{episode.date}</span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
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
            <Icon name="Bell" size={64} className="text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Не пропустите премьеру!
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Настройте напоминание и будьте среди первых зрителей новой кулинарной программы
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Icon name="Bell" size={20} className="mr-2" />
              Напомнить о премьере 1 ноября
            </Button>
          </div>
        </div>
      </section>

      {selectedEpisode && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedEpisode(null)}
        >
          <Card className="max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
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
            </div>
            <CardHeader>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                <Icon name="Calendar" size={16} />
                <span>{selectedEpisode.date}</span>
                <span>•</span>
                <Icon name="Clock" size={16} />
                <span>{selectedEpisode.duration}</span>
              </div>
              <CardTitle className="text-2xl">{selectedEpisode.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">{selectedEpisode.description}</p>
              <Button className="w-full bg-primary hover:bg-primary/90">
                <Icon name="Play" size={20} className="mr-2" />
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
              <p className="text-foreground font-bold text-lg">Завтрак с Максимом</p>
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
