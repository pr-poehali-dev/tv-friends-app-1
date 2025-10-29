import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import ShowIntro from '@/components/ShowIntro';
import ShowOutro from '@/components/ShowOutro';
import { useNavigate } from 'react-router-dom';

const ShowEpisode = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showOutro, setShowOutro] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const navigate = useNavigate();

  const videos = [
    {
      id: 1,
      title: 'Котик играет с мячиком',
      author: 'Мария Петрова',
      city: 'Москва',
      duration: '0:45',
      thumbnail: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&h=600&fit=crop',
      description: 'Забавный котёнок гоняется за мячиком по квартире'
    },
    {
      id: 2,
      title: 'LEGO башня Бурдж-Халифа',
      author: 'Иван Соколов',
      city: 'Санкт-Петербург',
      duration: '1:20',
      thumbnail: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=600&fit=crop',
      description: 'Процесс сборки башни из Дубая из конструктора LEGO'
    },
    {
      id: 3,
      title: 'Танец под дождём',
      author: 'Анна Васильева',
      city: 'Казань',
      duration: '1:05',
      thumbnail: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800&h=600&fit=crop',
      description: 'Девочка танцует под летним дождём в парке'
    },
    {
      id: 4,
      title: 'Кулинарный эксперимент',
      author: 'Дмитрий Кузнецов',
      city: 'Екатеринбург',
      duration: '2:15',
      thumbnail: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop',
      description: 'Готовлю необычный десерт по семейному рецепту'
    },
    {
      id: 5,
      title: 'Скейтборд трюки для начинающих',
      author: 'Александр Новиков',
      city: 'Новосибирск',
      duration: '1:50',
      thumbnail: 'https://images.unsplash.com/photo-1547447134-cd3f5c716030?w=800&h=600&fit=crop',
      description: 'Показываю простые трюки на скейтборде'
    },
    {
      id: 6,
      title: 'Домашний питомец хомяк',
      author: 'Елена Морозова',
      city: 'Краснодар',
      duration: '1:10',
      thumbnail: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=800&h=600&fit=crop',
      description: 'Мой хомячок показывает свои любимые фокусы'
    },
    {
      id: 7,
      title: 'Закат на море с дрона',
      author: 'Сергей Волков',
      city: 'Сочи',
      duration: '1:35',
      thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      description: 'Невероятные виды заката над Чёрным морем'
    },
    {
      id: 8,
      title: 'Рисую портрет за 60 секунд',
      author: 'Ольга Смирнова',
      city: 'Нижний Новгород',
      duration: '1:00',
      thumbnail: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=600&fit=crop',
      description: 'Скоростное рисование портрета углём'
    },
    {
      id: 9,
      title: 'Футбольный фристайл',
      author: 'Артём Козлов',
      city: 'Ростов-на-Дону',
      duration: '1:25',
      thumbnail: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop',
      description: 'Демонстрирую свои лучшие трюки с мячом'
    },
    {
      id: 10,
      title: 'Превращение комнаты',
      author: 'Виктория Лебедева',
      city: 'Воронеж',
      duration: '2:30',
      thumbnail: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&h=600&fit=crop',
      description: 'Преображаю свою комнату за один день своими руками'
    },
    {
      id: 11,
      title: 'Мой попугай говорит фразы',
      author: 'Михаил Орлов',
      city: 'Самара',
      duration: '0:55',
      thumbnail: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=800&h=600&fit=crop',
      description: 'Попугай Кеша повторяет смешные фразы из фильмов'
    }
  ];

  const currentVideo = videos[currentVideoIndex];

  const handleNextVideo = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else {
      setShowOutro(true);
    }
  };

  const handlePreviousVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };

  if (showIntro) {
    return <ShowIntro onComplete={() => setShowIntro(false)} />;
  }

  if (showOutro) {
    return <ShowOutro onComplete={() => navigate('/')} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <header className="bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={() => navigate('/')}
              >
                <Icon name="ArrowLeft" size={24} />
              </Button>
              <div>
                <h1 className="text-3xl font-black">ЭТО НАДО ВИДЕТЬ!</h1>
                <p className="text-white/90 text-sm">Выпуск #3 • 30 октября 2025</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              <span className="font-semibold">В ЭФИРЕ</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="overflow-hidden border-2 border-orange-300 shadow-2xl">
                <div className="aspect-video bg-black relative">
                  <img
                    src={currentVideo.thumbnail}
                    alt={currentVideo.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                      <Icon name="Play" size={40} className="text-orange-500 ml-2" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Видео {currentVideoIndex + 1} из {videos.length}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded text-sm">
                    {currentVideo.duration}
                  </div>
                </div>
                <CardHeader className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-950/20 dark:to-yellow-950/20">
                  <CardTitle className="text-2xl">{currentVideo.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                    <div className="flex items-center gap-2">
                      <Icon name="User" size={16} />
                      <span>{currentVideo.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="MapPin" size={16} />
                      <span>{currentVideo.city}</span>
                    </div>
                  </div>
                  <p className="text-foreground/80 mt-3">{currentVideo.description}</p>
                </CardHeader>
                <CardContent className="bg-white dark:bg-slate-900 p-6">
                  <div className="flex items-center justify-between">
                    <Button
                      variant="outline"
                      onClick={handlePreviousVideo}
                      disabled={currentVideoIndex === 0}
                      className="gap-2"
                    >
                      <Icon name="ChevronLeft" size={20} />
                      Предыдущее
                    </Button>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <Icon name="ThumbsUp" size={20} />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Icon name="ThumbsDown" size={20} />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Icon name="Share2" size={20} />
                      </Button>
                    </div>
                    <Button
                      className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 gap-2"
                      onClick={handleNextVideo}
                    >
                      {currentVideoIndex === videos.length - 1 ? (
                        <>
                          Завершить
                          <Icon name="Check" size={20} />
                        </>
                      ) : (
                        <>
                          Следующее
                          <Icon name="ChevronRight" size={20} />
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 border-2 border-purple-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MessageCircle" size={24} className="text-purple-600" />
                    Комментарий Максима Зоева
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/90 leading-relaxed italic">
                    "Друзья! Какое классное видео мы только что посмотрели! Это именно то, что мы хотим видеть в нашей программе — 
                    искренность, креативность и позитив! Продолжаем смотреть ваши крутые работы!"
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <Card className="bg-gradient-to-br from-orange-100 to-yellow-100 dark:from-orange-900/20 dark:to-yellow-900/20 border-2 border-orange-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Icon name="Trophy" size={24} className="text-orange-600" />
                    Голосование
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 mb-4">
                    Победитель будет объявлен в четверг после просмотра всех видео!
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Голосов собрано:</span>
                      <span className="font-bold text-orange-600">1,247</span>
                    </div>
                    <div className="w-full h-2 bg-white/50 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse" style={{ width: '65%' }} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Все видео выпуска</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {videos.map((video, index) => (
                    <div
                      key={video.id}
                      className={`p-3 rounded-lg cursor-pointer transition-all ${
                        index === currentVideoIndex
                          ? 'bg-orange-100 dark:bg-orange-900/30 border-2 border-orange-400'
                          : 'bg-secondary hover:bg-secondary/70'
                      }`}
                      onClick={() => setCurrentVideoIndex(index)}
                    >
                      <div className="flex gap-3">
                        <div className="relative w-20 h-14 rounded overflow-hidden flex-shrink-0">
                          <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <Icon name="Play" size={16} className="text-white" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-foreground truncate">{video.title}</p>
                          <p className="text-xs text-muted-foreground">{video.author}</p>
                          <p className="text-xs text-muted-foreground">{video.duration}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ShowEpisode;