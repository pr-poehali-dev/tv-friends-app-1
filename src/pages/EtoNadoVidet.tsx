import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Video {
  id: number;
  title: string;
  author: string;
  description: string;
  category: string;
  thumbnail: string;
  views: number;
  votes: number;
  isWinner?: boolean;
  maximComment?: string;
}

interface Episode {
  id: number;
  number: number;
  date: string;
  videos: Video[];
}

const episodes: Episode[] = [
  {
    id: 1,
    number: 1,
    date: '03.11.2025',
    videos: [
      { id: 1, title: 'Кот-музыкант играет на пианино', author: 'Мария Котова', description: 'Мой кот научился играть простые мелодии!', category: 'Питомцы', thumbnail: '🐱🎹', views: 45000, votes: 8500, isWinner: true, maximComment: 'Друзья, это невероятно! Кот играет на пианино! Мария, ваш питомец - настоящий музыкант! Это надо видеть! 🎹' },
      { id: 2, title: 'Экстремальный паркур в городе', author: 'Влад Прыгунов', description: 'Невероятные трюки на крышах', category: 'Спорт', thumbnail: '🏃‍♂️🏙️', views: 38000, votes: 7200, maximComment: 'Влад, ты супергерой! Такие трюки - это просто космос! Зрители, держитесь за стулья! 🔥' },
      { id: 3, title: 'Танец бабушки на свадьбе', author: 'Алёна Семёнова', description: 'Моя бабушка зажгла на свадьбе внучки!', category: 'Семья', thumbnail: '👵💃', views: 52000, votes: 6800, maximComment: 'Вот это энергия! Бабушка танцует лучше молодых! Алёна, спасибо за эти эмоции! 💃' },
      { id: 4, title: 'Самодельный робот убирает квартиру', author: 'Игорь Технов', description: 'Собрал робота из подручных материалов', category: 'Технологии', thumbnail: '🤖🏠', views: 31000, votes: 5900, maximComment: 'Игорь, ты гений! Робот из подручных средств - это высший пилотаж! Я такого хочу! 🤖' },
      { id: 5, title: 'Ребёнок поёт оперу', author: 'Ольга Певцова', description: 'Моему сыну 5 лет, а он поёт как профи!', category: 'Таланты', thumbnail: '👦🎤', views: 47000, votes: 5500, maximComment: 'Ольга, ваш сын - будущая звезда! В 5 лет петь оперу - это талант! Браво! 🎤' },
      { id: 6, title: 'Невероятный фокус с исчезновением', author: 'Денис Маг', description: 'Фокус, который удивит каждого!', category: 'Фокусы', thumbnail: '🎩✨', views: 29000, votes: 4800, maximComment: 'Денис, как ты это делаешь?! Я пересмотрел 10 раз и не понял! Настоящая магия! ✨' },
      { id: 7, title: 'Собака спасает котёнка', author: 'Пётр Добрый', description: 'Наша собака спасла котёнка из воды', category: 'Питомцы', thumbnail: '🐕🐱', views: 61000, votes: 4500, maximComment: 'Пётр, ваша собака - герой! Как трогательно! У меня прямо слёзы на глазах! 🐕❤️' },
      { id: 8, title: 'Рисую портрет за 60 секунд', author: 'Анна Художница', description: 'Скоростное рисование портретов', category: 'Искусство', thumbnail: '🎨👤', views: 25000, votes: 3900, maximComment: 'Анна, 60 секунд?! Невероятная скорость и талант! Мне бы так научиться! 🎨' },
      { id: 9, title: 'Готовлю торт без духовки', author: 'Лена Кулинар', description: 'Невероятный рецепт торта!', category: 'Кулинария', thumbnail: '🎂👩‍🍳', views: 33000, votes: 3600, maximComment: 'Лена, торт без духовки - это же мечта! Выглядит потрясающе! Обязательно попробую! 🎂' },
      { id: 10, title: 'Приколы на работе', author: 'Команда офиса', description: 'Подборка смешных моментов', category: 'Юмор', thumbnail: '😂💼', views: 28000, votes: 3200, maximComment: 'Команда, я ржу! Офисный юмор - это классика! В студии все смеются! 😂' },
      { id: 11, title: 'Закат с дрона над морем', author: 'Сергей Пилот', description: 'Красивейшие кадры с высоты', category: 'Природа', thumbnail: '🌅🚁', views: 22000, votes: 2800, maximComment: 'Сергей, какая красота! Эти кадры завораживают! Природа - лучший художник! 🌅' },
    ],
  },
  {
    id: 2,
    number: 2,
    date: '04.11.2025',
    videos: [
      { id: 12, title: 'Попугай разговаривает фразами', author: 'Ирина Птичкина', description: 'Мой попугай говорит целыми предложениями!', category: 'Питомцы', thumbnail: '🦜💬', views: 56000, votes: 9200, isWinner: true, maximComment: 'Ирина, это просто фантастика! Попугай говорит целыми фразами! Я в шоке! Такой умница! 🦜💚' },
      { id: 13, title: 'BMX трюки для новичков', author: 'Максим Велик', description: 'Учу простым трюкам на BMX', category: 'Спорт', thumbnail: '🚴‍♂️⭐', views: 34000, votes: 6700, maximComment: 'Максим, ты крутой! Учишь других - это настоящее дело! Продолжай в том же духе! 🚴‍♂️🔥' },
      { id: 14, title: 'Папа делает причёски дочке', author: 'Андрей Папочка', description: 'Папа справляется лучше мамы!', category: 'Семья', thumbnail: '👨‍👧💇', views: 48000, votes: 6400, maximComment: 'Андрей, вот это папа! Такие причёски - это мастерство! Дочка счастлива! Браво! 👨‍👧💕' },
      { id: 15, title: 'Умный дом своими руками', author: 'Виктор Техник', description: 'Автоматизация квартиры за копейки', category: 'Технологии', thumbnail: '🏡🔧', views: 39000, votes: 5800, maximComment: 'Виктор, автоматизация за копейки?! Ты волшебник! Покажи мне, как! Гениально! 🏡⚡' },
      { id: 16, title: 'Девочка танцует балет', author: 'Светлана Мама', description: 'Первое выступление дочки', category: 'Таланты', thumbnail: '👧🩰', views: 41000, votes: 5300, maximComment: 'Светлана, какая грация! Ваша дочка - будущая балерина! Первое выступление - на отлично! 🩰✨' },
      { id: 17, title: 'Карточные фокусы мастера', author: 'Артём Карты', description: 'Профессиональные трюки с картами', category: 'Фокусы', thumbnail: '🃏✨', views: 27000, votes: 4600, maximComment: 'Артём, руки быстрее взгляда! Профессионал высшего класса! Это надо видеть! 🃏🎩' },
      { id: 18, title: 'Хомяк проходит лабиринт', author: 'Катя Хомячок', description: 'Построила лабиринт для хомяка', category: 'Питомцы', thumbnail: '🐹🎯', views: 44000, votes: 4200, maximComment: 'Катя, твой хомячок - гений! Он прошёл лабиринт быстрее меня! Умничка! 🐹🏆' },
      { id: 19, title: 'Граффити за 5 минут', author: 'Саша Стрит', description: 'Быстрое создание граффити', category: 'Искусство', thumbnail: '🎨🖌️', views: 31000, votes: 3800, maximComment: 'Саша, 5 минут и шедевр готов! Уличное искусство в лучшем виде! Респект! 🎨💥' },
      { id: 20, title: 'Десерт из 3 ингредиентов', author: 'Юля Сладкая', description: 'Простейший рецепт вкусняшки', category: 'Кулинария', thumbnail: '🍰✨', views: 36000, votes: 3500, maximComment: 'Юля, три ингредиента и такая вкуснятина! Просто, быстро, гениально! Хочу попробовать! 🍰😋' },
      { id: 21, title: 'Неудачи на тренировках', author: 'Спортзал №5', description: 'Смешные моменты в зале', category: 'Юмор', thumbnail: '😅💪', views: 29000, votes: 3100, maximComment: 'Спортзал №5, я плачу от смеха! Тренировки бывают и такими! Позитив зашкаливает! 😂💪' },
      { id: 22, title: 'Северное сияние в 4K', author: 'Николай Север', description: 'Снял сияние в Мурманске', category: 'Природа', thumbnail: '🌌✨', views: 25000, votes: 2900, maximComment: 'Николай, северное сияние в 4K - это космос! Мурманск показал всю красоту! Волшебно! 🌌💫' },
    ],
  },
  {
    id: 3,
    number: 3,
    date: '05.11.2025',
    videos: [
      { id: 23, title: 'Малыш делает первые шаги', author: 'Елена Мамочка', description: 'Самый трогательный момент!', category: 'Семья', thumbnail: '👶👣', views: 68000, votes: 10500, isWinner: true, maximComment: 'Елена, это чудо! Первые шаги малыша - самый трогательный момент! Слёзы счастья! 👶💖' },
      { id: 24, title: 'Скейтборд-трюки в парке', author: 'Олег Скейтер', description: 'Новые трюки на скейте', category: 'Спорт', thumbnail: '🛹🔥', views: 42000, votes: 7800, maximComment: 'Олег, ты разрываешь парк! Такие трюки на скейте - это огонь! Продолжай катать! 🛹⚡' },
      { id: 25, title: 'Дедушка учится TikTok', author: 'Семья Ивановых', description: 'Деду 75, а он в тренде!', category: 'Семья', thumbnail: '👴📱', views: 55000, votes: 7100, maximComment: 'Семья Ивановых, дедушка в тренде! 75 лет - не помеха! Вот это молодость души! 👴🔥' },
      { id: 26, title: '3D-принтер печатает игрушки', author: 'Дмитрий 3D', description: 'Печатаю игрушки для детей', category: 'Технологии', thumbnail: '🖨️🎁', views: 37000, votes: 6200, maximComment: 'Дмитрий, 3D-принтер творит чудеса! Игрушки получаются шикарные! Технологии будущего! 🖨️🚀' },
      { id: 27, title: 'Мальчик играет на барабанах', author: 'Рок-семья', description: 'Ему 7 лет, а играет как профи!', category: 'Таланты', thumbnail: '👦🥁', views: 46000, votes: 5900, maximComment: 'Рок-семья, в 7 лет барабанит как рокер! Будущая звезда! Зал встаёт! 👦🥁🤘' },
      { id: 28, title: 'Левитация с помощью магнитов', author: 'Илья Физик', description: 'Научный эксперимент дома', category: 'Фокусы', thumbnail: '🧲✨', views: 32000, votes: 5100, maximComment: 'Илья, физика - это магия! Левитация дома - невероятно! Наука рулит! 🧲🔬' },
      { id: 29, title: 'Кролик играет в футбол', author: 'Миша Ушастик', description: 'Мой кролик - футболист!', category: 'Питомцы', thumbnail: '🐰⚽', views: 49000, votes: 4700, maximComment: 'Миша, кролик-футболист! Такого я ещё не видел! Забирайте его в сборную! 🐰⚽' },
      { id: 30, title: 'Рисую песком на стекле', author: 'Вера Песочница', description: 'Искусство рисования песком', category: 'Искусство', thumbnail: '🏖️🎨', views: 28000, votes: 4100, maximComment: 'Вера, рисование песком - это волшебство! Каждое движение - произведение искусства! 🏖️✨' },
      { id: 31, title: 'Блины с начинкой: 5 видов', author: 'Таня Блинчик', description: 'Секреты идеальных блинов', category: 'Кулинария', thumbnail: '🥞😋', views: 40000, votes: 3900, maximComment: 'Таня, пять видов блинов! Секреты раскрыты! Я уже голоден! Шикарно! 🥞🔥' },
      { id: 32, title: 'Кот vs огурец', author: 'Смешные моменты', description: 'Реакция котов на огурцы', category: 'Юмор', thumbnail: '😹🥒', views: 51000, votes: 3400, maximComment: 'Друзья, коты против огурцов - классика жанра! Я смеюсь до слёз! Это надо видеть! 😹🥒' },
      { id: 33, title: 'Водопад в горах', author: 'Путешественник Коля', description: 'Красота Кавказа', category: 'Природа', thumbnail: '💧🏔️', views: 24000, votes: 3000, maximComment: 'Коля, Кавказ во всей красе! Водопад завораживает! Природа - лучший режиссёр! 💧🏔️' },
    ],
  },
];

export default function EtoNadoVidet() {
  const [selectedEpisode, setSelectedEpisode] = useState<Episode>(episodes[0]);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const sortedVideos = [...selectedEpisode.videos].sort((a, b) => b.votes - a.votes);
  const winner = selectedEpisode.videos.find(v => v.isWinner);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-200 to-orange-200 p-4">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-white px-8 py-2 rounded-full mb-4 text-xl font-bold animate-pulse">
            🎬 ВИРТУАЛЬНАЯ СТУДИЯ 🎬
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent drop-shadow-2xl">
            ЭТО НАДО ВИДЕТЬ!
          </h1>
          <p className="text-3xl font-bold text-purple-700 mb-2">
            Крутой хит-парад видеороликов
          </p>
          <p className="text-xl text-muted-foreground mb-4">
            Ведущий: Максим Зуев
          </p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-xl shadow-xl">
              <p className="text-sm font-semibold">Главный приз</p>
              <p className="text-3xl font-black">50 000 ₽</p>
              <p className="text-xs">на развитие блогерства</p>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl shadow-xl">
              <p className="text-sm font-semibold">Специальный приз</p>
              <p className="text-2xl font-black">💻 Ноутбук</p>
              <p className="text-xs">для победителя</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {episodes.map((episode) => (
            <Card
              key={episode.id}
              className={`cursor-pointer transition-all hover:scale-105 ${
                selectedEpisode.id === episode.id
                  ? 'ring-4 ring-purple-500 bg-purple-50 dark:bg-purple-900/30'
                  : 'hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
              onClick={() => {
                setSelectedEpisode(episode);
                setCurrentVideo(0);
                setShowResults(false);
              }}
            >
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Выпуск #{episode.number}
                </CardTitle>
                <CardDescription className="text-center font-bold">
                  {episode.date}
                </CardDescription>
                <div className="text-center text-sm text-muted-foreground">
                  11 роликов
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Card className="mb-8 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 border-4 border-purple-400">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-3xl flex items-center gap-3">
                <span className="text-5xl">🎬</span>
                Выпуск #{selectedEpisode.number} от {selectedEpisode.date}
              </CardTitle>
              <Button
                onClick={() => setShowResults(!showResults)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                {showResults ? 'Смотреть видео' : 'Итоги голосования'}
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {!showResults ? (
              <>
                <div className="aspect-video bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 rounded-lg flex flex-col items-center justify-center text-white mb-6 relative overflow-hidden border-4 border-purple-600 shadow-2xl">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_3s_linear_infinite]"></div>
                  
                  <div className="absolute top-4 left-4 bg-red-600 px-4 py-2 rounded-lg flex items-center gap-2 animate-pulse">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-sm font-bold">ВИРТУАЛЬНАЯ СТУДИЯ</span>
                  </div>

                  <div className="relative z-10 text-center p-6">
                    <div className="text-9xl mb-4 animate-bounce">
                      {selectedEpisode.videos[currentVideo].thumbnail}
                    </div>
                    <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl mb-4">
                      <div className="text-4xl font-black mb-2">
                        {selectedEpisode.videos[currentVideo].title}
                      </div>
                      <div className="text-2xl opacity-90 mb-2">
                        Автор: {selectedEpisode.videos[currentVideo].author}
                      </div>
                      <div className="text-lg opacity-80">
                        {selectedEpisode.videos[currentVideo].description}
                      </div>
                    </div>
                    <div className="flex gap-4 justify-center items-center flex-wrap">
                      <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                        <Icon name="Eye" className="inline mr-2" size={20} />
                        {selectedEpisode.videos[currentVideo].views.toLocaleString()} просмотров
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                        <Icon name="ThumbsUp" className="inline mr-2" size={20} />
                        {selectedEpisode.videos[currentVideo].votes.toLocaleString()} голосов
                      </div>
                      <div className="bg-purple-600 px-4 py-2 rounded-lg font-bold">
                        {selectedEpisode.videos[currentVideo].category}
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-gray-800/90 px-4 py-2 rounded-lg">
                    <div className="text-2xl font-black text-purple-600">
                      {currentVideo + 1}/11
                    </div>
                  </div>
                </div>

                {selectedEpisode.videos[currentVideo].maximComment && (
                  <Card className="mb-6 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/40 dark:to-cyan-900/40 border-4 border-blue-400">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="text-7xl flex-shrink-0">🎤</div>
                        <div>
                          <p className="text-sm font-bold text-blue-700 dark:text-blue-400 mb-2">
                            МАКСИМ ЗУЕВ ГОВОРИТ:
                          </p>
                          <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200 italic">
                            "{selectedEpisode.videos[currentVideo].maximComment}"
                          </p>
                        </div>
                        <div className="text-5xl flex-shrink-0 animate-pulse">💬</div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <div className="flex gap-3 justify-center flex-wrap mb-6">
                  <Button
                    onClick={() => setCurrentVideo(Math.max(0, currentVideo - 1))}
                    disabled={currentVideo === 0}
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    <Icon name="ChevronLeft" className="mr-2" />
                    Предыдущий
                  </Button>
                  <Button
                    onClick={() => setCurrentVideo(Math.min(10, currentVideo + 1))}
                    disabled={currentVideo === 10}
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    Следующий
                    <Icon name="ChevronRight" className="ml-2" />
                  </Button>
                </div>
              </>
            ) : (
              <div className="space-y-4">
                <div className="text-center mb-6">
                  <h2 className="text-4xl font-black text-purple-700 mb-2">
                    🏆 ИТОГИ ГОЛОСОВАНИЯ 🏆
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Выпуск #{selectedEpisode.number} от {selectedEpisode.date}
                  </p>
                </div>

                {winner && (
                  <Card className="bg-gradient-to-r from-yellow-200 to-orange-200 dark:from-yellow-900/50 dark:to-orange-900/50 border-4 border-yellow-500 mb-6">
                    <CardHeader>
                      <CardTitle className="text-4xl text-center flex items-center justify-center gap-3">
                        <span className="text-6xl">👑</span>
                        ПОБЕДИТЕЛЬ!
                        <span className="text-6xl">👑</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                      <div className="text-8xl mb-4">{winner.thumbnail}</div>
                      <h3 className="text-3xl font-black">{winner.title}</h3>
                      <p className="text-2xl font-bold text-orange-700">Автор: {winner.author}</p>
                      <p className="text-xl text-muted-foreground">{winner.description}</p>
                      <div className="flex gap-4 justify-center items-center flex-wrap text-xl">
                        <div className="bg-white/70 px-6 py-3 rounded-lg font-bold">
                          👁️ {winner.views.toLocaleString()} просмотров
                        </div>
                        <div className="bg-white/70 px-6 py-3 rounded-lg font-bold">
                          👍 {winner.votes.toLocaleString()} голосов
                        </div>
                      </div>
                      <div className="pt-4">
                        <div className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-xl text-2xl font-black mb-3">
                          💰 50 000 рублей на развитие блогерства
                        </div>
                        <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl text-2xl font-black ml-4">
                          💻 Ноутбук в подарок!
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <div className="space-y-3">
                  {sortedVideos.map((video, index) => (
                    <Card
                      key={video.id}
                      className={`${
                        video.isWinner
                          ? 'bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 border-4 border-yellow-500'
                          : index < 3
                          ? 'bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 border-2 border-purple-300'
                          : 'bg-white/80 dark:bg-gray-800/80'
                      }`}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-4">
                          <div className={`text-5xl font-black ${
                            index === 0 ? 'text-yellow-600' :
                            index === 1 ? 'text-gray-400' :
                            index === 2 ? 'text-orange-600' :
                            'text-gray-600'
                          }`}>
                            {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index + 1}.`}
                          </div>
                          <div className="text-6xl">{video.thumbnail}</div>
                          <div className="flex-1">
                            <CardTitle className="text-xl flex items-center gap-2">
                              {video.title}
                              {video.isWinner && <span className="text-3xl">👑</span>}
                            </CardTitle>
                            <CardDescription className="text-lg">
                              {video.author} • {video.category}
                            </CardDescription>
                          </div>
                          <div className="text-right">
                            <div className="text-3xl font-black text-purple-600">
                              {video.votes.toLocaleString()}
                            </div>
                            <div className="text-sm text-muted-foreground">голосов</div>
                            <div className="text-sm text-muted-foreground">
                              👁️ {video.views.toLocaleString()}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-11 gap-2 mb-8">
          {selectedEpisode.videos.map((video, index) => (
            <Card
              key={video.id}
              className={`cursor-pointer transition-all hover:scale-105 ${
                currentVideo === index && !showResults
                  ? 'ring-4 ring-purple-500 bg-purple-50 dark:bg-purple-900/30'
                  : video.isWinner
                  ? 'bg-gradient-to-br from-yellow-200 to-orange-200 dark:from-yellow-900/30 dark:to-orange-900/30'
                  : 'hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
              onClick={() => {
                setCurrentVideo(index);
                setShowResults(false);
              }}
            >
              <CardHeader className="p-2">
                <div className="text-4xl text-center mb-1">
                  {video.thumbnail}
                  {video.isWinner && <div className="text-2xl">👑</div>}
                </div>
                <div className="text-xs text-center font-bold">{index + 1}/11</div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-900/50 dark:to-pink-900/50 border-4 border-purple-500">
          <CardContent className="p-8 text-center">
            <div className="text-5xl mb-4">🎬📺🎥</div>
            <p className="text-3xl font-black text-purple-700 mb-3">
              Хочешь участвовать в шоу?
            </p>
            <p className="text-xl text-purple-600 mb-4">
              Отправь свой ролик Максиму Зуеву!
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <div className="bg-white/70 px-6 py-3 rounded-lg">
                <p className="font-bold text-lg">📧 video@nadovidet.tv</p>
              </div>
              <div className="bg-white/70 px-6 py-3 rounded-lg">
                <p className="font-bold text-lg">📱 Телефон: 8-800-555-ВИДЕО</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Каждую неделю новые выпуски на Новые друзья ТВ!
            </p>
          </CardContent>
        </Card>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: -100% 0; }
          100% { background-position: 100% 0; }
        }
      `}</style>
    </div>
  );
}
