import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Episode {
  id: number;
  date: string;
  dayOfWeek: string;
  guests: Array<{ name: string; role: string; icon: string }>;
  songs: Array<{ time: string; artist: string; title: string; type: string }>;
  segments: Array<{ time: string; title: string; host: string; icon: string }>;
  theme: string;
  special?: string;
}

const episodes: Episode[] = [
  {
    id: 1,
    date: '03.11.2025',
    dayOfWeek: 'Понедельник',
    theme: 'Начало недели с хорошим настроением',
    guests: [
      { name: 'Группа "Утренний кофе"', role: 'Живое выступление', icon: '🎸' },
      { name: 'Дмитрий Спортивный', role: 'Фитнес-тренер', icon: '💪' },
    ],
    songs: [
      { time: '7:05', artist: 'Максим Зуев', title: 'Доброе утро, страна!', type: 'Живое выступление' },
      { time: '7:25', artist: 'Группа "Утренний кофе"', title: 'Понедельник - не беда', type: 'Гостевой номер' },
      { time: '8:15', artist: 'Алиса & Максим', title: 'Новый день', type: 'Дуэт' },
      { time: '9:30', artist: 'Зрители', title: 'Караоке: народные хиты', type: 'Караоке' },
    ],
    segments: [
      { time: '7:00', title: 'Музыкальное приветствие', host: 'Максим Зуев', icon: '🎵' },
      { time: '7:15', title: 'Утренняя зарядка под музыку', host: 'Дмитрий Спортивный', icon: '🏃' },
      { time: '7:45', title: 'Мурлыканье Батона: истории о выходных', host: 'Кот Батон', icon: '😺' },
      { time: '8:00', title: 'Концерт группы "Утренний кофе"', host: 'Группа', icon: '🎸' },
      { time: '8:30', title: 'Хит-парад недели', host: 'Алиса', icon: '📊' },
      { time: '9:00', title: 'Угадай мелодию: зрители в эфире', host: 'Все ведущие', icon: '🎯' },
    ],
  },
  {
    id: 2,
    date: '04.11.2025',
    dayOfWeek: 'Вторник',
    theme: 'День единства - музыка объединяет!',
    special: '🇷🇺 День народного единства',
    guests: [
      { name: 'Народный хор "Россияне"', role: 'Патриотические песни', icon: '🎤' },
      { name: 'Историк Иван Знаев', role: 'Рассказ о празднике', icon: '📚' },
    ],
    songs: [
      { time: '7:05', artist: 'Максим Зуев', title: 'Россия - Родина моя', type: 'Живое выступление' },
      { time: '7:30', artist: 'Народный хор', title: 'Катюша', type: 'Хоровое пение' },
      { time: '8:00', artist: 'Алиса', title: 'Широка страна моя родная', type: 'Соло' },
      { time: '8:45', artist: 'Все вместе', title: 'День Победы', type: 'Общий хор' },
      { time: '9:30', artist: 'Зрители', title: 'Караоке: патриотические песни', type: 'Караоке' },
    ],
    segments: [
      { time: '7:00', title: 'Праздничное приветствие', host: 'Максим Зуев', icon: '🎊' },
      { time: '7:20', title: 'История Дня народного единства', host: 'Иван Знаев', icon: '📖' },
      { time: '7:50', title: 'Батон поздравляет с праздником', host: 'Кот Батон', icon: '🐱' },
      { time: '8:15', title: 'Концерт народного хора', host: 'Хор "Россияне"', icon: '🎵' },
      { time: '8:50', title: 'Песни разных народов России', host: 'Алиса', icon: '🌍' },
      { time: '9:15', title: 'Праздничное караоке', host: 'Все ведущие', icon: '🎤' },
    ],
  },
  {
    id: 3,
    date: '05.11.2025',
    dayOfWeek: 'Среда',
    theme: 'Середина недели - время для энергии!',
    guests: [
      { name: 'DJ Миксер', role: 'Танцевальная музыка', icon: '🎧' },
      { name: 'Анна Энерджи', role: 'Инструктор зумбы', icon: '💃' },
    ],
    songs: [
      { time: '7:10', artist: 'Максим Зуев', title: 'Танцуй со мной', type: 'Живое выступление' },
      { time: '7:35', artist: 'DJ Миксер', title: 'Утренний микс', type: 'DJ-сет' },
      { time: '8:20', artist: 'Алиса', title: 'Энергия дня', type: 'Танцевальный хит' },
      { time: '9:00', artist: 'Все ведущие', title: 'Флешмоб в студии', type: 'Групповой танец' },
      { time: '9:35', artist: 'Зрители', title: 'Караоке: танцевальные хиты', type: 'Караоке' },
    ],
    segments: [
      { time: '7:00', title: 'Энергичное приветствие', host: 'Максим Зуев', icon: '⚡' },
      { time: '7:15', title: 'Зумба с Анной', host: 'Анна Энерджи', icon: '💃' },
      { time: '7:40', title: 'Батон танцует (пытается)', host: 'Кот Батон', icon: '😹' },
      { time: '8:00', title: 'DJ-сет от Миксера', host: 'DJ Миксер', icon: '🎧' },
      { time: '8:30', title: 'Танцевальный хит-парад', host: 'Алиса', icon: '💫' },
      { time: '9:00', title: 'Флешмоб со зрителями', host: 'Все ведущие', icon: '🕺' },
    ],
  },
  {
    id: 4,
    date: '06.11.2025',
    dayOfWeek: 'Четверг',
    theme: 'Ретро-утро: хиты прошлых лет',
    guests: [
      { name: 'Виктор Винтаж', role: 'Певец 80-х годов', icon: '🎤' },
      { name: 'Коллекционер Сергей', role: 'Эксперт по ретро-музыке', icon: '📻' },
    ],
    songs: [
      { time: '7:08', artist: 'Максим Зуев', title: 'Ностальгия (кавер)', type: 'Ретро-кавер' },
      { time: '7:28', artist: 'Виктор Винтаж', title: 'Лучшие хиты 80-х', type: 'Медley' },
      { time: '8:10', artist: 'Алиса', title: 'Вечная классика', type: 'Соло' },
      { time: '8:50', artist: 'Все ведущие', title: 'Песни нашей молодости', type: 'Попурри' },
      { time: '9:30', artist: 'Зрители', title: 'Караоке: ретро хиты', type: 'Караоке' },
    ],
    segments: [
      { time: '7:00', title: 'Винтажное приветствие', host: 'Максим Зуев', icon: '📼' },
      { time: '7:20', title: 'История музыки 70-90-х', host: 'Сергей', icon: '📚' },
      { time: '7:45', title: 'Батон вспоминает "старые" времена', host: 'Кот Батон', icon: '😺' },
      { time: '8:00', title: 'Концерт Виктора Винтажа', host: 'Виктор', icon: '🎸' },
      { time: '8:30', title: 'Золотые хиты эфира', host: 'Алиса', icon: '🏆' },
      { time: '9:00', title: 'Ретро-караоке', host: 'Все ведущие', icon: '🎤' },
    ],
  },
  {
    id: 5,
    date: '07.11.2025',
    dayOfWeek: 'Пятница',
    theme: 'Пятничный драйв - встречаем выходные!',
    special: '🎉 Предвыходной день',
    guests: [
      { name: 'Группа "Пятница"', role: 'Рок-группа', icon: '🎸' },
      { name: 'Комик Смешинкин', role: 'Юмор и розыгрыши', icon: '😄' },
    ],
    songs: [
      { time: '7:07', artist: 'Максим Зуев', title: 'Ура, пятница!', type: 'Живое выступление' },
      { time: '7:30', artist: 'Группа "Пятница"', title: 'Выходной зовёт', type: 'Рок-номер' },
      { time: '8:15', artist: 'Алиса', title: 'Танцуй до утра', type: 'Клубный хит' },
      { time: '8:45', artist: 'Все вместе', title: 'Пятничный гимн', type: 'Общее пение' },
      { time: '9:20', artist: 'Зрители', title: 'Караоке: предвыходное настроение', type: 'Караоке' },
    ],
    segments: [
      { time: '7:00', title: 'Пятничное приветствие!', host: 'Максим Зуев', icon: '🎊' },
      { time: '7:20', title: 'Планы на выходные от зрителей', host: 'Алиса', icon: '📅' },
      { time: '7:50', title: 'Батон готовится к выходным', host: 'Кот Батон', icon: '😸' },
      { time: '8:10', title: 'Рок-концерт "Пятницы"', host: 'Группа', icon: '🎸' },
      { time: '8:40', title: 'Смешные истории недели', host: 'Смешинкин', icon: '🤣' },
      { time: '9:00', title: 'Прощальное караоке недели', host: 'Все ведущие', icon: '🎤' },
    ],
  },
];

export default function UtroEpisodes() {
  const [selectedEpisode, setSelectedEpisode] = useState<Episode>(episodes[0]);
  const [currentSegment, setCurrentSegment] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 via-yellow-100 to-pink-200 p-4">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-r from-orange-600 via-yellow-500 to-pink-600 bg-clip-text text-transparent">
            УТРО. Новые друзья
          </h1>
          <p className="text-2xl font-bold text-orange-700 flex items-center justify-center gap-3">
            <Icon name="Music" size={28} />
            Музыкальное утреннее шоу
            <Icon name="Radio" size={28} />
          </p>
          <p className="text-xl text-muted-foreground mt-2">
            Выпуски с 3 по 7 ноября 2025
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-3 mb-8">
          {episodes.map((episode) => (
            <Card
              key={episode.id}
              className={`cursor-pointer transition-all hover:scale-105 ${
                selectedEpisode.id === episode.id
                  ? 'ring-4 ring-orange-500 bg-orange-50 dark:bg-orange-900/30'
                  : 'hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
              onClick={() => {
                setSelectedEpisode(episode);
                setCurrentSegment(0);
              }}
            >
              <CardHeader className="p-4">
                <CardTitle className="text-lg text-center">
                  {episode.dayOfWeek}
                </CardTitle>
                <CardDescription className="text-center font-bold text-lg">
                  {episode.date}
                </CardDescription>
                {episode.special && (
                  <div className="text-center text-sm bg-red-100 dark:bg-red-900/30 rounded px-2 py-1 mt-2">
                    {episode.special}
                  </div>
                )}
              </CardHeader>
            </Card>
          ))}
        </div>

        <Card className="mb-8 bg-gradient-to-br from-orange-100 to-yellow-100 dark:from-orange-900/40 dark:to-yellow-900/40 border-4 border-orange-400">
          <CardHeader>
            <CardTitle className="text-4xl flex items-center gap-3">
              <span className="text-5xl">📺</span>
              Выпуск от {selectedEpisode.date} - {selectedEpisode.dayOfWeek}
            </CardTitle>
            <CardDescription className="text-xl font-semibold text-orange-700">
              {selectedEpisode.theme}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-gradient-to-br from-orange-500 via-yellow-400 to-pink-500 rounded-lg flex flex-col items-center justify-center text-white mb-6 relative overflow-hidden border-4 border-orange-600 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-transparent"></div>
              
              <div className="relative z-10 text-center p-6">
                <div className="text-8xl mb-4 animate-pulse">
                  {selectedEpisode.segments[currentSegment].icon}
                </div>
                <div className="text-4xl font-bold mb-2 drop-shadow-lg">
                  {selectedEpisode.segments[currentSegment].title}
                </div>
                <div className="text-2xl opacity-90 mb-2">
                  {selectedEpisode.segments[currentSegment].host}
                </div>
                <div className="text-xl bg-black/30 px-4 py-2 rounded-lg inline-block">
                  {selectedEpisode.segments[currentSegment].time}
                </div>
              </div>

              <div className="absolute bottom-4 left-4 bg-black/70 px-4 py-2 rounded-lg flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-bold">В ЭФИРЕ</span>
              </div>

              <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 px-4 py-2 rounded-lg">
                <div className="text-sm font-bold text-orange-600">
                  Сегмент {currentSegment + 1} из {selectedEpisode.segments.length}
                </div>
              </div>
            </div>

            <div className="flex gap-3 justify-center flex-wrap mb-6">
              <Button
                onClick={() => setCurrentSegment(Math.max(0, currentSegment - 1))}
                disabled={currentSegment === 0}
                className="bg-orange-600 hover:bg-orange-700 text-white"
              >
                <Icon name="ChevronLeft" className="mr-2" />
                Предыдущий
              </Button>
              <Button
                onClick={() => setCurrentSegment(Math.min(selectedEpisode.segments.length - 1, currentSegment + 1))}
                disabled={currentSegment === selectedEpisode.segments.length - 1}
                className="bg-orange-600 hover:bg-orange-700 text-white"
              >
                Следующий
                <Icon name="ChevronRight" className="ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-2 border-pink-300">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <span className="text-4xl">🎤</span>
                Гости выпуска
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {selectedEpisode.guests.map((guest, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 rounded-lg">
                  <span className="text-4xl">{guest.icon}</span>
                  <div>
                    <p className="font-bold text-lg">{guest.name}</p>
                    <p className="text-sm text-muted-foreground">{guest.role}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-2 border-purple-300">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <span className="text-4xl">🎵</span>
                Музыкальная программа
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {selectedEpisode.songs.map((song, i) => (
                <div key={i} className="p-3 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-orange-600">{song.time}</span>
                    <span className="text-xs bg-orange-200 dark:bg-orange-900/50 px-2 py-1 rounded">{song.type}</span>
                  </div>
                  <p className="font-bold">{song.artist}</p>
                  <p className="text-sm text-muted-foreground">"{song.title}"</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-2 border-yellow-300">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <span className="text-4xl">📋</span>
              Полная программа выпуска
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {selectedEpisode.segments.map((segment, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-lg cursor-pointer transition-all ${
                    currentSegment === i
                      ? 'bg-orange-200 dark:bg-orange-900/50 ring-2 ring-orange-500'
                      : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setCurrentSegment(i)}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{segment.icon}</span>
                    <span className="font-bold text-orange-600">{segment.time}</span>
                  </div>
                  <p className="font-semibold text-sm mb-1">{segment.title}</p>
                  <p className="text-xs text-muted-foreground">{segment.host}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Card className="inline-block bg-gradient-to-r from-orange-200 to-pink-200 border-4 border-yellow-400">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 text-4xl mb-4">
                <span>🎸</span>
                <span>🎤</span>
                <span>😺</span>
                <span>🎵</span>
                <span>🎶</span>
              </div>
              <p className="text-2xl font-bold text-orange-700">
                Каждое утро с 7:00 до 10:00 на Новые друзья ТВ!
              </p>
              <p className="text-lg text-orange-600 mt-2">
                Максим Зуев, Кот Батон и Алиса ждут вас в эфире! 📺
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
