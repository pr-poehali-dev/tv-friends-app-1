import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import ShowIntroBigFootball from '@/components/ShowIntroBigFootball';

const BigFootballFinal = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = [
    {
      id: 1,
      title: "Прибытие команд на стадион",
      thumbnail: "🚌",
      description: "Малиновые Цветочки и Рыжие Крутышки прибывают на стадион",
      moment: "Напряжение в воздухе!"
    },
    {
      id: 2,
      title: "Разминка команд",
      thumbnail: "🏃",
      description: "Обе команды готовятся к решающему матчу сезона",
      moment: "Последние приготовления"
    },
    {
      id: 3,
      title: "Торжественное открытие финала",
      thumbnail: "🎺",
      description: "Гимн турнира и представление команд",
      moment: "Зрители на ногах!"
    },
    {
      id: 4,
      title: "Начало первого тайма",
      thumbnail: "⚽",
      description: "Судья дает свисток - матч начался!",
      moment: "Свисток! Игра началась!"
    },
    {
      id: 5,
      title: "Первая атака Малиновых",
      thumbnail: "💨",
      description: "Малиновые Цветочки идут в наступление",
      moment: "Опасный момент у ворот!"
    },
    {
      id: 6,
      title: "Контратака Рыжих",
      thumbnail: "🔥",
      description: "Рыжие Крутышки переходят в контратаку",
      moment: "Быстрый прорыв!"
    },
    {
      id: 7,
      title: "ГОЛ! Малиновые открывают счет!",
      thumbnail: "🎯",
      description: "Невероятный удар! 1:0 в пользу Малиновых!",
      moment: "ГОООООЛ! 1:0!"
    },
    {
      id: 8,
      title: "Рыжие давят на ворота",
      thumbnail: "⚡",
      description: "Рыжие Крутышки пытаются сравнять счет",
      moment: "Опасные моменты!"
    },
    {
      id: 9,
      title: "Перерыв между таймами",
      thumbnail: "⏸️",
      description: "Команды уходят на перерыв. Счет 1:0",
      moment: "Половина пути пройдена"
    },
    {
      id: 10,
      title: "Начало второго тайма",
      thumbnail: "🔄",
      description: "Рыжие выходят с новыми силами",
      moment: "Второй тайм - последний шанс!"
    },
    {
      id: 11,
      title: "ГОЛ! Рыжие сравнивают счет!",
      thumbnail: "💥",
      description: "Точный удар! Счет 1:1!",
      moment: "ГОООООЛ! 1:1!"
    },
    {
      id: 12,
      title: "Напряженная середина тайма",
      thumbnail: "😰",
      description: "Борьба в центре поля, никто не хочет уступать",
      moment: "Кто окажется сильнее?"
    },
    {
      id: 13,
      title: "Опасный штрафной Малиновых",
      thumbnail: "🦵",
      description: "Штрафной удар у ворот Рыжих",
      moment: "Все замерли!"
    },
    {
      id: 14,
      title: "Невероятный сейв вратаря!",
      thumbnail: "🧤",
      description: "Вратарь Рыжих делает сейв матча!",
      moment: "Фантастическая игра!"
    },
    {
      id: 15,
      title: "Последние минуты матча",
      thumbnail: "⏱️",
      description: "Осталось 3 минуты до конца. Счет 1:1",
      moment: "Время истекает!"
    },
    {
      id: 16,
      title: "ГОЛ НА ПОСЛЕДНЕЙ МИНУТЕ!",
      thumbnail: "🌟",
      description: "Невероятно! Малиновые забивают победный гол! 2:1!",
      moment: "ГОООООЛ! ПОБЕДА!"
    },
    {
      id: 17,
      title: "Финальный свисток",
      thumbnail: "🎊",
      description: "Матч окончен! Малиновые Цветочки - чемпионы!",
      moment: "2:1 - МАЛИНОВЫЕ ПОБЕЖДАЮТ!"
    },
    {
      id: 18,
      title: "Награждение победителей",
      thumbnail: "🏆",
      description: "Вручение главного трофея сезона",
      moment: "Поднятие кубка!"
    },
    {
      id: 19,
      title: "Речь капитана",
      thumbnail: "🎤",
      description: "Капитан Малиновых благодарит команду и болельщиков",
      moment: "Слова победителя"
    },
    {
      id: 20,
      title: "Празднование на поле",
      thumbnail: "🎉",
      description: "Малиновые Цветочки празднуют победу в первом сезоне",
      moment: "Незабываемые эмоции!"
    }
  ];

  const goToVideo = (index: number) => {
    setCurrentVideo(index);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {showIntro && <ShowIntroBigFootball onComplete={() => setShowIntro(false)} />}

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="text-[20rem]">⚽</div>
          </div>
          
          <div className="relative z-10">
            <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-4 drop-shadow-lg">
              ⚽ БОЛЬШОЙ ФУТБОЛ
            </h1>
            <p className="text-3xl font-bold text-green-700 dark:text-green-400 mb-2">
              Финал первого сезона
            </p>
            <p className="text-2xl text-muted-foreground mb-8">
              Малиновые Цветочки 🌸 vs Рыжие Крутышки 🦁
            </p>
            
            <div className="flex gap-4 justify-center mb-8">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold shadow-xl"
                onClick={() => setShowIntro(true)}
              >
                <Icon name="Play" className="mr-2" />
                Заставка финала
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-green-600 text-green-700 hover:bg-green-50 dark:text-green-400 dark:hover:bg-green-950 font-bold"
                onClick={() => window.location.href = '/'}
              >
                <Icon name="Home" className="mr-2" />
                На главную
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gradient-to-br from-pink-100 to-fuchsia-100 dark:from-pink-900/30 dark:to-fuchsia-900/30 border-4 border-pink-400">
            <CardHeader>
              <CardTitle className="text-4xl flex items-center gap-3">
                <span className="text-6xl">🌸</span>
                Малиновые Цветочки
              </CardTitle>
              <CardDescription className="text-xl text-foreground/80 font-bold">
                ПОБЕДИТЕЛИ СЕЗОНА! 🏆
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <div className="text-4xl mb-2">⚽</div>
                  <p className="font-bold text-2xl text-pink-600">2</p>
                  <p className="text-sm text-muted-foreground">Голы</p>
                </div>
                <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <div className="text-4xl mb-2">🏆</div>
                  <p className="font-bold text-2xl text-pink-600">1 место</p>
                  <p className="text-sm text-muted-foreground">Финал</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-lg">Состав команды:</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {['Капитан Анна', 'Нападающая Мария', 'Защитница Елена', 'Вратарь Ольга', 'Полузащитница Ирина', 'Форвард Светлана'].map((player, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 bg-pink-200/50 dark:bg-pink-800/30 rounded">
                      <span>🌸</span>
                      <span>{player}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/30 dark:to-amber-900/30 border-4 border-orange-400">
            <CardHeader>
              <CardTitle className="text-4xl flex items-center gap-3">
                <span className="text-6xl">🦁</span>
                Рыжие Крутышки
              </CardTitle>
              <CardDescription className="text-xl text-foreground/80 font-bold">
                Достойные финалисты!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <div className="text-4xl mb-2">⚽</div>
                  <p className="font-bold text-2xl text-orange-600">1</p>
                  <p className="text-sm text-muted-foreground">Голы</p>
                </div>
                <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <div className="text-4xl mb-2">🥈</div>
                  <p className="font-bold text-2xl text-orange-600">2 место</p>
                  <p className="text-sm text-muted-foreground">Финал</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-lg">Состав команды:</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {['Капитан Алексей', 'Нападающий Иван', 'Защитник Дмитрий', 'Вратарь Сергей', 'Полузащитник Михаил', 'Форвард Андрей'].map((player, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 bg-orange-200/50 dark:bg-orange-800/30 rounded">
                      <span>🦁</span>
                      <span>{player}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3">
              <span className="text-5xl">🎬</span>
              Сейчас смотрим: {videos[currentVideo].title}
            </CardTitle>
            <CardDescription className="text-xl">
              {videos[currentVideo].description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex flex-col items-center justify-center text-white mb-6 relative overflow-hidden border-4 border-green-600 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-transparent"></div>
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              <div className="relative z-10 text-center">
                <div className="text-9xl mb-6 animate-bounce drop-shadow-2xl">
                  {videos[currentVideo].thumbnail}
                </div>
                <div className="text-4xl font-bold mb-4 drop-shadow-lg">
                  {videos[currentVideo].moment}
                </div>
                <div className="text-2xl opacity-90">
                  Видео {currentVideo + 1} из {videos.length}
                </div>
              </div>

              <div className="absolute bottom-4 left-4 bg-black/70 px-4 py-2 rounded-lg flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-bold">LIVE</span>
              </div>

              <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 px-4 py-2 rounded-lg">
                <div className="text-3xl font-black text-pink-600">2</div>
                <div className="text-xl font-bold text-gray-600 dark:text-gray-300">-</div>
                <div className="text-3xl font-black text-orange-600">1</div>
              </div>
            </div>

            <div className="flex gap-3 justify-center flex-wrap">
              <Button 
                onClick={() => goToVideo(Math.max(0, currentVideo - 1))}
                disabled={currentVideo === 0}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <Icon name="ChevronLeft" className="mr-2" />
                Предыдущее
              </Button>
              <Button 
                onClick={() => goToVideo(Math.min(videos.length - 1, currentVideo + 1))}
                disabled={currentVideo === videos.length - 1}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Следующее
                <Icon name="ChevronRight" className="ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mb-8">
          <h2 className="text-4xl font-bold text-center mb-8 text-green-700 dark:text-green-400">
            📺 Все моменты финала
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {videos.map((video, index) => (
              <Card 
                key={video.id}
                className={`cursor-pointer transition-all hover:scale-105 ${
                  currentVideo === index 
                    ? 'ring-4 ring-green-500 bg-green-50 dark:bg-green-900/30' 
                    : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
                onClick={() => goToVideo(index)}
              >
                <CardHeader className="p-4">
                  <div className="text-5xl text-center mb-2">{video.thumbnail}</div>
                  <CardTitle className="text-sm text-center leading-tight">{video.title}</CardTitle>
                  <CardDescription className="text-xs text-center">
                    {index + 1}/{videos.length}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-gradient-to-br from-yellow-100 to-amber-100 dark:from-yellow-900/30 dark:to-amber-900/30 border-4 border-yellow-400">
          <CardHeader>
            <CardTitle className="text-4xl flex items-center gap-3 justify-center">
              <span className="text-6xl">🏆</span>
              Малиновые Цветочки - ЧЕМПИОНЫ!
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="text-6xl">🎊🌸🏆🌸🎊</div>
            <p className="text-2xl font-bold text-foreground">
              Невероятная победа со счетом 2:1!
            </p>
            <p className="text-xl text-muted-foreground">
              Первый сезон турнира "Большой футбол" завершен!
            </p>
            <div className="text-4xl animate-bounce">
              👏 Поздравляем победителей! 👏
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BigFootballFinal;
