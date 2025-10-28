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
    // Сезон 1
    {
      id: 1,
      season: 1,
      episode: 1,
      title: 'Золотое кольцо начинается здесь',
      city: 'Владимир',
      country: 'Россия',
      date: '15 января 2023',
      duration: '42 мин',
      description: 'Первый выпуск программы! Знакомимся с древним Владимиром — воротами Золотого кольца. Успенский собор, Золотые ворота и секретные места, о которых не пишут в путеводителях.',
      thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
      rating: 4.8,
    },
    {
      id: 2,
      season: 1,
      episode: 2,
      title: 'Город мастеров',
      city: 'Суздаль',
      country: 'Россия',
      date: '22 января 2023',
      duration: '38 мин',
      description: 'Погружаемся в атмосферу русской провинции. Деревянное зодчество, музей огурца и лучшая медовуха в регионе. Где остановиться и что попробовать.',
      thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
      rating: 4.9,
    },
    {
      id: 3,
      season: 1,
      episode: 3,
      title: 'Колыбель династии Романовых',
      city: 'Кострома',
      country: 'Россия',
      date: '29 января 2023',
      duration: '40 мин',
      description: 'Исследуем исторический центр Костромы. Ипатьевский монастырь, Сусанинская площадь и местные деликатесы. Встречаемся с мастерами народных промыслов.',
      thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
      rating: 4.7,
    },
    {
      id: 4,
      season: 1,
      episode: 4,
      title: 'Город на семи холмах',
      city: 'Ярославль',
      country: 'Россия',
      date: '5 февраля 2023',
      duration: '45 мин',
      description: 'Открываем Ярославль — жемчужину Золотого кольца. Волжская набережная, Спасо-Преображенский монастырь и легенда о медведе. Лучшие рестораны с видом на Волгу.',
      thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
      rating: 4.8,
    },
    {
      id: 5,
      season: 1,
      episode: 5,
      title: 'Город-музей',
      city: 'Переславль-Залесский',
      country: 'Россия',
      date: '12 февраля 2023',
      duration: '36 мин',
      description: 'Родина Александра Невского встречает древними храмами и необычными музеями. Плещеево озеро, музей утюга и ботик Петра I.',
      thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
      rating: 4.6,
    },
    {
      id: 6,
      season: 1,
      episode: 6,
      title: 'Финифть и ростовские звоны',
      city: 'Ростов Великий',
      country: 'Россия',
      date: '19 февраля 2023',
      duration: '41 мин',
      description: 'Завершаем первый сезон в одном из древнейших городов России. Ростовский кремль, мастера финифти и знаменитая уха по-ростовски.',
      thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
      rating: 4.9,
    },

    // Сезон 2
    {
      id: 7,
      season: 2,
      episode: 1,
      title: 'Северная столица России',
      city: 'Санкт-Петербург',
      country: 'Россия',
      date: '10 сентября 2023',
      duration: '52 мин',
      description: 'Открываем второй сезон! Петербург во всей красе: Эрмитаж, разводные мосты, крыши Питера и секретные дворики. Где найти лучшие пышки и настоящий петербургский дух.',
      thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
      rating: 5.0,
    },
    {
      id: 8,
      season: 2,
      episode: 2,
      title: 'Город трёх революций',
      city: 'Казань',
      country: 'Россия',
      date: '17 сентября 2023',
      duration: '48 мин',
      description: 'Казань — место встречи Востока и Запада. Казанский кремль, мечеть Кул-Шариф и татарская кухня. Пробуем эчпочмак, чак-чак и местное пиво.',
      thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
      rating: 4.9,
    },
    {
      id: 9,
      season: 2,
      episode: 3,
      title: 'Столица Урала',
      city: 'Екатеринбург',
      country: 'Россия',
      date: '24 сентября 2023',
      duration: '46 мин',
      description: 'Граница Европы и Азии. Храм на Крови, Плотинка и уральские самоцветы. Встречаемся с местными художниками и изучаем стрит-арт.',
      thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
      rating: 4.7,
    },
    {
      id: 10,
      season: 2,
      episode: 4,
      title: 'Сибирские Афины',
      city: 'Томск',
      country: 'Россия',
      date: '1 октября 2023',
      duration: '43 мин',
      description: 'Город студентов и деревянного зодчества. Резные наличники, научные музеи и атмосфера молодежного города в сердце Сибири.',
      thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
      rating: 4.6,
    },
    {
      id: 11,
      season: 2,
      episode: 5,
      title: 'Ворота на Байкал',
      city: 'Иркутск',
      country: 'Россия',
      date: '8 октября 2023',
      duration: '50 мин',
      description: 'Отправная точка для путешествия на Байкал. 130-й квартал, Знаменский монастырь и поездка на остров Ольхон. Бурятская кухня и шаманские практики.',
      thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
      rating: 5.0,
    },
    {
      id: 12,
      season: 2,
      episode: 6,
      title: 'Город у моря',
      city: 'Владивосток',
      country: 'Россия',
      date: '15 октября 2023',
      duration: '47 мин',
      description: 'Финал второго сезона на берегу Тихого океана. Золотой мост, Токаревский маяк и морепродукты на каждом шагу. Дальневосточная экзотика и портовая романтика.',
      thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
      rating: 4.9,
    },

    // Сезон 3 - Страны СНГ
    {
      id: 13,
      season: 3,
      episode: 1,
      title: 'Жемчужина Востока',
      city: 'Ташкент',
      country: 'Узбекистан',
      date: '1 марта 2024',
      duration: '55 мин',
      description: 'Открываем третий сезон в Узбекистане! Современный Ташкент: метро-дворец, Чорсу базар и узбекский плов. Встречаемся с мастерами керамики.',
      thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
      isInternational: true,
      rating: 4.9,
    },
    {
      id: 14,
      season: 3,
      episode: 2,
      title: 'Город-сказка Шахерезады',
      city: 'Самарканд',
      country: 'Узбекистан',
      date: '8 марта 2024',
      duration: '58 мин',
      description: 'Регистан, мавзолей Гур-Эмир и обсерватория Улугбека. Погружаемся в эпоху Тамерлана и пробуем самаркандские лепёшки из тандыра.',
      thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
      isInternational: true,
      rating: 5.0,
    },
    {
      id: 15,
      season: 3,
      episode: 3,
      title: 'Горная столица',
      city: 'Алматы',
      country: 'Казахстан',
      date: '15 марта 2024',
      duration: '52 мин',
      description: 'Город у подножия Заилийского Алатау. Медео, Чимбулак и яблоневые сады. Казахская кухня: бешбармак, курт и кумыс.',
      thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
      isInternational: true,
      rating: 4.8,
    },
    {
      id: 16,
      season: 3,
      episode: 4,
      title: 'Город контрастов',
      city: 'Тбилиси',
      country: 'Грузия',
      date: '22 марта 2024',
      duration: '50 мин',
      description: 'Старый город, серные бани и канатная дорога к крепости Нарикала. Грузинское застолье с хачапури, хинкали и домашним вином.',
      thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
      isInternational: true,
      rating: 5.0,
    },
    {
      id: 17,
      season: 3,
      episode: 5,
      title: 'Розовый город',
      city: 'Ереван',
      country: 'Армения',
      date: '29 марта 2024',
      duration: '48 мин',
      description: 'Каскад, площадь Республики и музей Матенадаран. Армянский коньяк, лаваш и вид на Арарат. История древнейшей христианской цивилизации.',
      thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
      isInternational: true,
      rating: 4.9,
    },
    {
      id: 18,
      season: 3,
      episode: 6,
      title: 'Город ветров',
      city: 'Баку',
      country: 'Азербайджан',
      date: '5 апреля 2024',
      duration: '54 мин',
      description: 'Финал третьего сезона! Современные башни и древний Ичери-Шехер. Каспийская набережная, Flame Towers и азербайджанский плов. Огненная земля гостеприимства.',
      thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
      isInternational: true,
      rating: 4.9,
    },

    // Сезон 4 - Международный
    {
      id: 19,
      season: 4,
      episode: 1,
      title: 'Город на Босфоре',
      city: 'Стамбул',
      country: 'Турция',
      date: '1 сентября 2024',
      duration: '60 мин',
      description: 'МЕЖДУНАРОДНЫЙ СЕЗОН СТАРТУЕТ! Город двух континентов. Айя-София, Голубая мечеть и Гранд-базар. Турецкий завтрак, балык-экмек и круиз по Босфору.',
      thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
      isInternational: true,
      rating: 5.0,
    },
    {
      id: 20,
      season: 4,
      episode: 2,
      title: 'Вечный город',
      city: 'Рим',
      country: 'Италия',
      date: '8 сентября 2024',
      duration: '62 мин',
      description: 'Колизей, Ватикан и фонтан Треви. Настоящая итальянская паста, джелато и эспрессо в барах, где не бывает туристов. Секреты Рима от местных жителей.',
      thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
      isInternational: true,
      rating: 5.0,
    },
    {
      id: 21,
      season: 4,
      episode: 3,
      title: 'Город на воде',
      city: 'Венеция',
      country: 'Италия',
      date: '15 сентября 2024',
      duration: '58 мин',
      description: 'Гранд-канал, площадь Сан-Марко и прогулка на гондоле. Венецианское стекло Мурано, острова лагуны и цикетти — местные тапас с бакаро.',
      thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
      isInternational: true,
      rating: 4.9,
    },
    {
      id: 22,
      season: 4,
      episode: 4,
      title: 'Столица моды',
      city: 'Париж',
      country: 'Франция',
      date: '22 сентября 2024',
      duration: '65 мин',
      description: 'Эйфелева башня, Лувр и Монмартр. Французские круассаны, сыры и вино. Прогулка по Сене и секретные сады Парижа.',
      thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
      isInternational: true,
      rating: 5.0,
    },
    {
      id: 23,
      season: 4,
      episode: 5,
      title: 'Готическая жемчужина',
      city: 'Барселона',
      country: 'Испания',
      date: '29 сентября 2024',
      duration: '59 мин',
      description: 'Саграда Фамилия, парк Гуэль и работы Гауди. Тапас-бары, паэлья и сангрия. Пляжи Барселоны и ночная жизнь Готического квартала.',
      thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
      isInternational: true,
      rating: 4.9,
    },
    {
      id: 24,
      season: 4,
      episode: 6,
      title: 'Город контрастов',
      city: 'Прага',
      country: 'Чехия',
      date: '6 октября 2024',
      duration: '56 мин',
      description: 'Карлов мост, Пражский Град и астрономические часы. Чешское пиво, трдельники и вепрево колено. Магия средневековой Праги.',
      thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
      isInternational: true,
      rating: 4.8,
    },
    {
      id: 25,
      season: 4,
      episode: 7,
      title: 'Музыкальная столица',
      city: 'Вена',
      country: 'Австрия',
      date: '13 октября 2024',
      duration: '57 мин',
      description: 'Дворец Шёнбрунн, Венская опера и кофейни с захер-тортом. Классическая музыка и имперская роскошь австрийской столицы.',
      thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
      isInternational: true,
      rating: 4.9,
    },
    {
      id: 26,
      season: 4,
      episode: 8,
      title: 'Столица на Дунае',
      city: 'Будапешт',
      country: 'Венгрия',
      date: '20 октября 2024',
      duration: '54 мин',
      description: 'Финал международного сезона! Термальные купальни, Рыбацкий бастион и круиз по Дунаю. Венгерский гуляш, лангош и токайское вино.',
      thumbnail: 'https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg',
      isInternational: true,
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
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Первое российское тревел-шоу, которое стало международным! 
              4 сезона, 26 городов, 3 страны и миллионы зрителей по всему миру.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="bg-primary/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-primary mb-1">4</div>
                <div className="text-sm text-muted-foreground">Сезона</div>
              </div>
              <div className="bg-primary/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-primary mb-1">26</div>
                <div className="text-sm text-muted-foreground">Городов</div>
              </div>
              <div className="bg-primary/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-primary mb-1">20+</div>
                <div className="text-sm text-muted-foreground">Часов видео</div>
              </div>
              <div className="bg-primary/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-primary mb-1">15+</div>
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
                26 городов, 4 сезона путешествий — от древних городов России до европейских столиц
              </p>
            </div>

            <Tabs value={selectedSeason} onValueChange={setSelectedSeason} className="mb-8">
              <TabsList className="grid w-full grid-cols-5 max-w-3xl mx-auto mb-12">
                <TabsTrigger value="all">Все сезоны</TabsTrigger>
                <TabsTrigger value="1">Сезон 1</TabsTrigger>
                <TabsTrigger value="2">Сезон 2</TabsTrigger>
                <TabsTrigger value="3">Сезон 3</TabsTrigger>
                <TabsTrigger value="4">
                  Сезон 4
                  <Icon name="Globe" size={16} className="ml-1" />
                </TabsTrigger>
              </TabsList>

              <TabsContent value={selectedSeason} className="space-y-8">
                {[1, 2, 3, 4].map((season) => {
                  const seasonEpisodes = filteredEpisodes.filter(ep => ep.season === season);
                  if (seasonEpisodes.length === 0) return null;

                  return (
                    <div key={season} className="mb-12">
                      <div className="flex items-center gap-3 mb-6">
                        <h3 className="text-2xl font-bold text-foreground">
                          Сезон {season}
                        </h3>
                        {season === 4 && (
                          <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                            <Icon name="Globe" size={14} className="mr-1" />
                            Международный
                          </Badge>
                        )}
                        {season === 3 && (
                          <Badge variant="outline" className="border-primary text-primary">
                            Страны СНГ
                          </Badge>
                        )}
                      </div>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {seasonEpisodes.map((episode) => (
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
                              {episode.isInternational && (
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
                                <span className="text-xs">S{episode.season}E{episode.episode}</span>
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
                  );
                })}
              </TabsContent>
            </Tabs>
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
                <Badge variant="outline">Сезон {selectedEpisode.season}</Badge>
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
