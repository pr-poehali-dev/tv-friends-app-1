import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import ShowIntroNewYear from '@/components/ShowIntroNewYear';
import ShowOutroNewYear from '@/components/ShowOutroNewYear';
import { useNavigate } from 'react-router-dom';

const ShowEpisodeNewYear = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showOutro, setShowOutro] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const navigate = useNavigate();

  const videos = [
    {
      id: 1,
      title: 'Новогодняя ёлка своими руками',
      author: 'Мария Петрова',
      city: 'Москва',
      duration: '1:30',
      thumbnail: 'https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=800&h=600&fit=crop',
      description: 'Делаю красивую ёлку из подручных материалов'
    },
    {
      id: 2,
      title: 'Снеговик из пластиковых стаканчиков',
      author: 'Иван Соколов',
      city: 'Санкт-Петербург',
      duration: '2:10',
      thumbnail: 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=800&h=600&fit=crop',
      description: 'Мастерю большого снеговика из 300 стаканчиков'
    },
    {
      id: 3,
      title: 'Новогодний танец в снегу',
      author: 'Анна Васильева',
      city: 'Казань',
      duration: '1:15',
      thumbnail: 'https://images.unsplash.com/photo-1482235225574-c37692835cf3?w=800&h=600&fit=crop',
      description: 'Танцевальный флешмоб на главной площади'
    },
    {
      id: 4,
      title: 'Готовлю новогодний торт',
      author: 'Дмитрий Кузнецов',
      city: 'Екатеринбург',
      duration: '2:45',
      thumbnail: 'https://images.unsplash.com/photo-1576097449798-7c7f90e1248a?w=800&h=600&fit=crop',
      description: 'Рецепт праздничного торта "Зимняя сказка"'
    },
    {
      id: 5,
      title: 'Сноуборд трюки на горке',
      author: 'Александр Новиков',
      city: 'Новосибирск',
      duration: '1:55',
      thumbnail: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
      description: 'Показываю зимние трюки на сноуборде'
    },
    {
      id: 6,
      title: 'Кот в новогоднем костюме',
      author: 'Елена Морозова',
      city: 'Краснодар',
      duration: '0:50',
      thumbnail: 'https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?w=800&h=600&fit=crop',
      description: 'Мой кот в костюме Деда Мороза'
    },
    {
      id: 7,
      title: 'Фейерверк над городом',
      author: 'Сергей Волков',
      city: 'Сочи',
      duration: '1:40',
      thumbnail: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=800&h=600&fit=crop',
      description: 'Новогодний салют снятый с дрона'
    },
    {
      id: 8,
      title: 'Рисую снежинки на окне',
      author: 'Ольга Смирнова',
      city: 'Нижний Новгород',
      duration: '1:20',
      thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop',
      description: 'Морозные узоры искусственным снегом'
    },
    {
      id: 9,
      title: 'Хоккейные трюки на катке',
      author: 'Артём Козлов',
      city: 'Ростов-на-Дону',
      duration: '1:35',
      thumbnail: 'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800&h=600&fit=crop',
      description: 'Демонстрирую финты на льду'
    },
    {
      id: 10,
      title: 'Украшаем дом гирляндами',
      author: 'Виктория Лебедева',
      city: 'Воронеж',
      duration: '2:20',
      thumbnail: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800&h=600&fit=crop',
      description: 'Создаю новогоднюю атмосферу в доме'
    },
    {
      id: 11,
      title: 'Новогодняя песня от семьи',
      author: 'Михаил Орлов',
      city: 'Самара',
      duration: '1:50',
      thumbnail: 'https://images.unsplash.com/photo-1511268559489-34b624fbfcf5?w=800&h=600&fit=crop',
      description: 'Поём всей семьёй "В лесу родилась ёлочка"'
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
    return <ShowIntroNewYear onComplete={() => setShowIntro(false)} />;
  }

  if (showOutro) {
    return <ShowOutroNewYear onComplete={() => navigate('/')} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 dark:from-blue-950 dark:via-slate-900 dark:to-blue-900">
      <header className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 text-white py-6 shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-white text-xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`
              }}
            >
              ❄️
            </div>
          ))}
        </div>
        <div className="container mx-auto px-4 relative z-10">
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
                <h1 className="text-3xl font-black flex items-center gap-3">
                  🎄 ЭТО НАДО ВИДЕТЬ! 🎄
                </h1>
                <p className="text-white/90 text-sm">Новогодний выпуск • 30 декабря 2025</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              <div className="text-2xl">⭐</div>
              <span className="font-semibold">ПРАЗДНИЧНЫЙ ЭФИР</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="overflow-hidden border-2 border-blue-300 shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-blue-900 to-cyan-700 relative">
                  <img
                    src={currentVideo.thumbnail}
                    alt={currentVideo.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-900/40 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                      <Icon name="Play" size={40} className="text-blue-500 ml-2" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2">
                    <span>🎄</span>
                    <span>Видео {currentVideoIndex + 1} из {videos.length}</span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded text-sm">
                    {currentVideo.duration}
                  </div>
                  <div className="absolute top-4 right-4 text-4xl animate-bounce">
                    ❄️
                  </div>
                </div>
                <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30">
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
                      className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 gap-2"
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

              <Card className="mt-6 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 border-2 border-blue-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MessageCircle" size={24} className="text-blue-600" />
                    Комментарий Максима Зоева
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/90 leading-relaxed italic">
                    "Друзья! С наступающим Новым годом! 🎄 Какое замечательное новогоднее видео! 
                    Именно такие ролики создают праздничное настроение и напоминают нам о главном — 
                    о радости, семье и волшебстве! Давайте смотреть дальше!"
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <Card className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 border-2 border-blue-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span className="text-2xl">🎁</span>
                    Новогоднее голосование
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 mb-4">
                    Лучшее новогоднее видео получит специальный приз! 🎅
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Голосов собрано:</span>
                      <span className="font-bold text-blue-600">2,854</span>
                    </div>
                    <div className="w-full h-2 bg-white/50 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse" style={{ width: '78%' }} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    🎄 Все видео выпуска
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {videos.map((video, index) => (
                    <div
                      key={video.id}
                      className={`p-3 rounded-lg cursor-pointer transition-all ${
                        index === currentVideoIndex
                          ? 'bg-blue-100 dark:bg-blue-900/30 border-2 border-blue-400'
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

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
      `}</style>
    </div>
  );
};

export default ShowEpisodeNewYear;
