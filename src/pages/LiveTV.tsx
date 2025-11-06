import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface TVProgram {
  id: number;
  title: string;
  type: 'show' | 'series' | 'movie' | 'cartoon' | 'news' | 'ad' | 'award';
  duration: number;
  thumbnail: string;
  description: string;
  startTime: string;
  endTime: string;
  ageRating?: string;
  season?: number;
  episode?: number;
}

const timeToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
};

const minutesToTime = (minutes: number): string => {
  const hours = Math.floor(minutes / 60) % 24;
  const mins = minutes % 60;
  return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
};

const schedule: TVProgram[] = [
  {
    id: 1,
    title: 'Ночное кино',
    type: 'movie',
    duration: 120,
    thumbnail: '🎬',
    description: 'Художественный фильм',
    startTime: '00:00',
    endTime: '02:00',
    ageRating: '16+',
  },
  {
    id: 2,
    title: 'Ночные новости',
    type: 'news',
    duration: 30,
    thumbnail: '📰',
    description: 'Итоги дня',
    startTime: '02:00',
    endTime: '02:30',
  },
  {
    id: 3,
    title: 'Документальный фильм',
    type: 'movie',
    duration: 90,
    thumbnail: '🎥',
    description: 'Познавательное кино',
    startTime: '02:30',
    endTime: '04:00',
    ageRating: '12+',
  },
  {
    id: 4,
    title: 'Реклама',
    type: 'ad',
    duration: 5,
    thumbnail: '📺',
    description: 'Рекламная пауза',
    startTime: '04:00',
    endTime: '04:05',
  },
  {
    id: 5,
    title: 'Классика кино',
    type: 'movie',
    duration: 115,
    thumbnail: '🎞️',
    description: 'Золотая коллекция',
    startTime: '04:05',
    endTime: '06:00',
    ageRating: '6+',
  },
  {
    id: 6,
    title: 'Утренние новости',
    type: 'news',
    duration: 30,
    thumbnail: '📰',
    description: 'Главные события дня. Погода, новости региона',
    startTime: '06:00',
    endTime: '06:30',
  },
  {
    id: 7,
    title: 'Смешарики',
    type: 'cartoon',
    duration: 30,
    thumbnail: '🐰',
    description: 'Приключения весёлых друзей в круглом мире',
    startTime: '06:30',
    endTime: '07:00',
    ageRating: '0+',
  },
  {
    id: 8,
    title: 'Три кота',
    type: 'cartoon',
    duration: 30,
    thumbnail: '🐱',
    description: 'Семейный мультсериал о котятах',
    startTime: '07:00',
    endTime: '07:30',
    ageRating: '0+',
  },
  {
    id: 9,
    title: 'Кухня здоровья',
    type: 'show',
    duration: 60,
    thumbnail: '🥗',
    description: 'Полезные рецепты и секреты здорового питания',
    startTime: '07:30',
    endTime: '08:30',
    ageRating: '6+',
  },
  {
    id: 10,
    title: 'Реклама',
    type: 'ad',
    duration: 5,
    thumbnail: '📺',
    description: 'Рекламная пауза',
    startTime: '08:30',
    endTime: '08:35',
  },
  {
    id: 11,
    title: 'Это надо видеть!',
    type: 'show',
    duration: 55,
    thumbnail: '🎬',
    description: 'Хит-парад видеороликов с Максимом Зуевым',
    startTime: '08:35',
    endTime: '09:30',
    ageRating: '12+',
  },
  {
    id: 12,
    title: 'Машины сказки',
    type: 'cartoon',
    duration: 30,
    thumbnail: '👧',
    description: 'Маша рассказывает сказки по-своему',
    startTime: '09:30',
    endTime: '10:00',
    ageRating: '0+',
  },
  {
    id: 13,
    title: 'Фиксики',
    type: 'cartoon',
    duration: 60,
    thumbnail: '🔧',
    description: 'Маленькие человечки, которые живут в технике',
    startTime: '10:00',
    endTime: '11:00',
    ageRating: '0+',
  },
  {
    id: 14,
    title: 'Реклама',
    type: 'ad',
    duration: 5,
    thumbnail: '📺',
    description: 'Рекламная пауза',
    startTime: '11:00',
    endTime: '11:05',
  },
  {
    id: 15,
    title: 'Дом-2',
    type: 'series',
    duration: 55,
    thumbnail: '🏠',
    description: 'Реалити-шоу о жизни участников',
    startTime: '11:05',
    endTime: '12:00',
    ageRating: '16+',
    season: 1,
    episode: 145,
  },
  {
    id: 16,
    title: 'Дневные новости',
    type: 'news',
    duration: 30,
    thumbnail: '📰',
    description: 'Новости в полдень',
    startTime: '12:00',
    endTime: '12:30',
  },
  {
    id: 17,
    title: 'Интерны',
    type: 'series',
    duration: 60,
    thumbnail: '🏥',
    description: 'Комедийный сериал о молодых врачах',
    startTime: '12:30',
    endTime: '13:30',
    ageRating: '16+',
    season: 3,
    episode: 12,
  },
  {
    id: 18,
    title: 'Реклама',
    type: 'ad',
    duration: 5,
    thumbnail: '📺',
    description: 'Рекламная пауза',
    startTime: '13:30',
    endTime: '13:35',
  },
  {
    id: 19,
    title: 'Кухня',
    type: 'series',
    duration: 55,
    thumbnail: '👨‍🍳',
    description: 'Комедия о поварах элитного ресторана',
    startTime: '13:35',
    endTime: '14:30',
    ageRating: '12+',
    season: 5,
    episode: 8,
  },
  {
    id: 20,
    title: 'Лунтик',
    type: 'cartoon',
    duration: 30,
    thumbnail: '🌙',
    description: 'Приключения лунного гостя на Земле',
    startTime: '14:30',
    endTime: '15:00',
    ageRating: '0+',
  },
  {
    id: 21,
    title: 'Барбоскины',
    type: 'cartoon',
    duration: 30,
    thumbnail: '🐕',
    description: 'Семья весёлых собачек',
    startTime: '15:00',
    endTime: '15:30',
    ageRating: '0+',
  },
  {
    id: 22,
    title: 'Реклама',
    type: 'ad',
    duration: 5,
    thumbnail: '📺',
    description: 'Рекламная пауза',
    startTime: '15:30',
    endTime: '15:35',
  },
  {
    id: 23,
    title: 'Форт Боярд',
    type: 'show',
    duration: 85,
    thumbnail: '🏰',
    description: 'Приключенческое шоу в старинной крепости',
    startTime: '15:35',
    endTime: '17:00',
    ageRating: '6+',
  },
  {
    id: 24,
    title: 'Вечерние новости',
    type: 'news',
    duration: 30,
    thumbnail: '📰',
    description: 'Итоги дня',
    startTime: '17:00',
    endTime: '17:30',
  },
  {
    id: 25,
    title: 'Ну, погоди!',
    type: 'cartoon',
    duration: 30,
    thumbnail: '🐺',
    description: 'Классический советский мультфильм',
    startTime: '17:30',
    endTime: '18:00',
    ageRating: '0+',
  },
  {
    id: 26,
    title: 'Реклама',
    type: 'ad',
    duration: 5,
    thumbnail: '📺',
    description: 'Рекламная пауза',
    startTime: '18:00',
    endTime: '18:05',
  },
  {
    id: 27,
    title: 'Крепкий орешек',
    type: 'movie',
    duration: 115,
    thumbnail: '💣',
    description: 'Боевик с Брюсом Уиллисом',
    startTime: '18:05',
    endTime: '20:00',
    ageRating: '16+',
  },
  {
    id: 28,
    title: 'Главные новости',
    type: 'news',
    duration: 30,
    thumbnail: '📰',
    description: 'Главные события дня',
    startTime: '20:00',
    endTime: '20:30',
  },
  {
    id: 29,
    title: 'Реклама',
    type: 'ad',
    duration: 5,
    thumbnail: '📺',
    description: 'Рекламная пауза',
    startTime: '20:30',
    endTime: '20:35',
  },
  {
    id: 30,
    title: 'Премия "Новые друзья TV 2026"',
    type: 'award',
    duration: 145,
    thumbnail: '🏆',
    description: 'Церемония вручения премии. Прямая трансляция из Сферы Радости',
    startTime: '20:35',
    endTime: '23:00',
    ageRating: '6+',
  },
  {
    id: 31,
    title: 'Реклама',
    type: 'ad',
    duration: 5,
    thumbnail: '📺',
    description: 'Рекламная пауза',
    startTime: '23:00',
    endTime: '23:05',
  },
  {
    id: 32,
    title: 'Вызов',
    type: 'movie',
    duration: 115,
    thumbnail: '🚀',
    description: 'Российский фильм о космосе',
    startTime: '23:05',
    endTime: '01:00',
    ageRating: '12+',
  },
];

export default function LiveTV() {
  const [virtualMinutes, setVirtualMinutes] = useState(0);
  const [volume, setVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [speed, setSpeed] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setVirtualMinutes((prev) => (prev + 1) % 1440);
    }, 1000 / speed);
    return () => clearInterval(timer);
  }, [speed]);

  const currentTime = minutesToTime(virtualMinutes);

  const getCurrentProgram = () => {
    const currentMins = virtualMinutes;
    const program = schedule.find((p) => {
      const startMins = timeToMinutes(p.startTime);
      const endMins = timeToMinutes(p.endTime);
      
      if (endMins < startMins) {
        return currentMins >= startMins || currentMins < endMins;
      }
      return currentMins >= startMins && currentMins < endMins;
    });
    return program || schedule[0];
  };

  const getNextPrograms = () => {
    const current = getCurrentProgram();
    const currentIndex = schedule.findIndex((p) => p.id === current.id);
    const result = [];
    for (let i = 1; i <= 3; i++) {
      const nextIndex = (currentIndex + i) % schedule.length;
      result.push(schedule[nextIndex]);
    }
    return result;
  };

  const getProgress = () => {
    const current = getCurrentProgram();
    const startMins = timeToMinutes(current.startTime);
    const endMins = timeToMinutes(current.endTime);
    const currentMins = virtualMinutes;
    
    let elapsed = currentMins - startMins;
    if (elapsed < 0) elapsed += 1440;
    
    let duration = endMins - startMins;
    if (duration <= 0) duration += 1440;
    
    return Math.min(100, Math.max(0, (elapsed / duration) * 100));
  };

  const currentProgram = getCurrentProgram();
  const nextPrograms = getNextPrograms();
  const progress = getProgress();

  const getProgramTypeColor = (type: string) => {
    switch (type) {
      case 'show':
        return 'bg-purple-500';
      case 'series':
        return 'bg-blue-500';
      case 'movie':
        return 'bg-red-500';
      case 'cartoon':
        return 'bg-green-500';
      case 'news':
        return 'bg-orange-500';
      case 'ad':
        return 'bg-gray-500';
      case 'award':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getProgramTypeName = (type: string) => {
    switch (type) {
      case 'show':
        return 'ШОУ';
      case 'series':
        return 'СЕРИАЛ';
      case 'movie':
        return 'ФИЛЬМ';
      case 'cartoon':
        return 'МУЛЬТФИЛЬМ';
      case 'news':
        return 'НОВОСТИ';
      case 'ad':
        return 'РЕКЛАМА';
      case 'award':
        return 'ПРЕМИЯ';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-purple-600 text-white px-8 py-3 rounded-full mb-4 animate-pulse">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-xl font-bold">ПРЯМОЙ ЭФИР</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            НОВЫЕ ДРУЗЬЯ ТВ
          </h1>
          <p className="text-3xl text-purple-300 font-black">{currentTime}</p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="text-white text-sm">Скорость:</span>
            <Button
              size="sm"
              variant={speed === 30 ? 'default' : 'outline'}
              onClick={() => setSpeed(30)}
              className="text-xs"
            >
              30x
            </Button>
            <Button
              size="sm"
              variant={speed === 60 ? 'default' : 'outline'}
              onClick={() => setSpeed(60)}
              className="text-xs"
            >
              60x
            </Button>
            <Button
              size="sm"
              variant={speed === 120 ? 'default' : 'outline'}
              onClick={() => setSpeed(120)}
              className="text-xs"
            >
              120x
            </Button>
          </div>
        </div>

        {currentProgram.type === 'award' && (
          <Card className="mb-6 bg-gradient-to-r from-yellow-100 via-orange-100 to-yellow-100 dark:from-yellow-900/40 dark:to-orange-900/40 border-4 border-yellow-500">
            <CardContent className="p-8">
              <div className="text-center space-y-4">
                <div className="text-8xl mb-4">🏆🎉✨</div>
                <div className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-6 py-3 rounded-xl inline-block">
                  <p className="text-sm font-bold">ПРЯМАЯ ТРАНСЛЯЦИЯ</p>
                </div>
                <h2 className="text-5xl font-black text-yellow-700 leading-tight">
                  ПРЕМИЯ "НОВЫЕ ДРУЗЬЯ TV 2026"
                </h2>
                <div className="bg-white/70 dark:bg-gray-800/70 p-6 rounded-xl max-w-3xl mx-auto">
                  <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                    Церемония вручения премии телеканала
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-lg">
                      <div className="text-4xl mb-2">📍</div>
                      <p className="font-bold text-lg">Место</p>
                      <p className="text-sm">Сфера Радости</p>
                    </div>
                    <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-lg">
                      <div className="text-4xl mb-2">📅</div>
                      <p className="font-bold text-lg">Дата</p>
                      <p className="text-sm">5 мая 2026</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-3">
                    Голосование за лучшие программы, ведущих и проекты года
                  </p>
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg inline-block">
                    <p className="text-sm font-bold">✨ Прямой эфир • 30 мая 2026 ✨</p>
                  </div>
                </div>
                <p className="text-xl font-bold text-yellow-700">
                  🎬 Смотрите церемонию награждения в прямом эфире! 🎬
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        <div className={`mb-6 ${isFullscreen ? 'fixed inset-0 z-50 p-4 bg-black' : ''}`}>
          <Card className="bg-black border-4 border-purple-500 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
                <div className="absolute top-4 left-4 z-10 flex gap-3 flex-wrap">
                  <div className="bg-red-600 px-4 py-2 rounded-lg flex items-center gap-2 animate-pulse">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-white font-bold text-sm">LIVE</span>
                  </div>
                  <div className={`${getProgramTypeColor(currentProgram.type)} px-4 py-2 rounded-lg`}>
                    <span className="text-white font-bold text-sm">
                      {getProgramTypeName(currentProgram.type)}
                    </span>
                  </div>
                  {currentProgram.ageRating && (
                    <div className="bg-white/90 px-4 py-2 rounded-lg">
                      <span className="font-bold text-sm">{currentProgram.ageRating}</span>
                    </div>
                  )}
                </div>

                <div className="absolute top-4 right-4 z-10 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-white font-bold text-xl">{currentTime}</div>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                  <div className="text-9xl mb-6 animate-pulse">{currentProgram.thumbnail}</div>
                  <div className="bg-black/70 backdrop-blur-md p-8 rounded-2xl max-w-3xl text-center">
                    <h2 className="text-4xl md:text-6xl font-black mb-4">
                      {currentProgram.title}
                    </h2>
                    <p className="text-xl md:text-2xl mb-4 text-gray-300">
                      {currentProgram.description}
                    </p>
                    {currentProgram.season && (
                      <p className="text-lg text-purple-300">
                        Сезон {currentProgram.season} • Серия {currentProgram.episode}
                      </p>
                    )}
                    <div className="flex items-center justify-center gap-4 mt-6 text-lg flex-wrap">
                      <span className="bg-purple-600 px-4 py-2 rounded-lg">
                        {currentProgram.startTime}
                      </span>
                      <span>—</span>
                      <span className="bg-purple-600 px-4 py-2 rounded-lg">
                        {currentProgram.endTime}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-white hover:bg-white/20"
                          onClick={() => setIsMuted(!isMuted)}
                        >
                          <Icon name={isMuted ? 'VolumeX' : 'Volume2'} size={24} />
                        </Button>
                        <div className="flex-1 max-w-xs">
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={isMuted ? 0 : volume}
                            onChange={(e) => {
                              setVolume(Number(e.target.value));
                              if (Number(e.target.value) > 0) setIsMuted(false);
                            }}
                            className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer"
                          />
                        </div>
                        <span className="text-white font-bold min-w-[3rem]">
                          {isMuted ? 0 : volume}%
                        </span>
                      </div>
                      <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-white hover:bg-white/20"
                      onClick={() => setIsFullscreen(!isFullscreen)}
                    >
                      <Icon name={isFullscreen ? 'Minimize' : 'Maximize'} size={24} />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="bg-slate-800/50 border-purple-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white">
                <Icon name="Tv" className="text-purple-400" />
                Сейчас в эфире
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-6 rounded-lg border-2 border-purple-400">
                <div className="flex items-start gap-4">
                  <div className="text-6xl">{currentProgram.thumbnail}</div>
                  <div className="flex-1">
                    <div className={`inline-block ${getProgramTypeColor(currentProgram.type)} text-white px-3 py-1 rounded-full text-xs font-bold mb-2`}>
                      {getProgramTypeName(currentProgram.type)}
                    </div>
                    <h3 className="text-2xl font-black text-white mb-2">
                      {currentProgram.title}
                    </h3>
                    <p className="text-gray-300 mb-3">{currentProgram.description}</p>
                    {currentProgram.season && (
                      <p className="text-sm text-purple-300 mb-2">
                        Сезон {currentProgram.season} • Эпизод {currentProgram.episode}
                      </p>
                    )}
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-purple-300 font-bold">
                        {currentProgram.startTime} - {currentProgram.endTime}
                      </span>
                      {currentProgram.ageRating && (
                        <span className="bg-white px-2 py-1 rounded text-xs font-bold">
                          {currentProgram.ageRating}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-purple-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white">
                <Icon name="Clock" className="text-purple-400" />
                Далее в эфире
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {nextPrograms.map((program) => (
                <div
                  key={program.id}
                  className="bg-slate-700/50 p-4 rounded-lg border border-purple-400/30 hover:border-purple-400 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">{program.thumbnail}</div>
                    <div className="flex-1">
                      <div className={`inline-block ${getProgramTypeColor(program.type)} text-white px-2 py-1 rounded text-xs font-bold mb-1`}>
                        {getProgramTypeName(program.type)}
                      </div>
                      <h4 className="text-lg font-bold text-white mb-1">
                        {program.title}
                      </h4>
                      <p className="text-sm text-gray-400 mb-2">
                        {program.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-purple-300 font-bold">
                          {program.startTime} - {program.endTime}
                        </span>
                        {program.ageRating && (
                          <span className="bg-white px-2 py-0.5 rounded font-bold">
                            {program.ageRating}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="bg-slate-800/50 border-purple-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-white">
              <Icon name="Calendar" className="text-purple-400" />
              Телепрограмма на сегодня (00:00 - 23:59)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2 max-h-[600px] overflow-y-auto pr-2">
              {schedule.map((program) => {
                const isCurrent = program.id === currentProgram.id;
                return (
                  <div
                    key={program.id}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      isCurrent
                        ? 'bg-gradient-to-r from-purple-600/50 to-pink-600/50 border-purple-400'
                        : 'bg-slate-700/30 border-slate-600 hover:border-purple-400/50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{program.thumbnail}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="text-purple-300 font-bold">
                            {program.startTime}
                          </span>
                          <div className={`${getProgramTypeColor(program.type)} text-white px-2 py-0.5 rounded text-xs font-bold`}>
                            {getProgramTypeName(program.type)}
                          </div>
                          {program.ageRating && (
                            <span className="bg-white px-2 py-0.5 rounded text-xs font-bold">
                              {program.ageRating}
                            </span>
                          )}
                          {isCurrent && (
                            <span className="bg-red-600 text-white px-2 py-0.5 rounded text-xs font-bold animate-pulse">
                              В ЭФИРЕ
                            </span>
                          )}
                        </div>
                        <h4 className="text-lg font-bold text-white mb-1">
                          {program.title}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {program.description}
                        </p>
                        {program.season && (
                          <p className="text-xs text-purple-300 mt-1">
                            Сезон {program.season} • Эпизод {program.episode}
                          </p>
                        )}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {program.duration} мин
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
