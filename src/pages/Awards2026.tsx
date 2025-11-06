import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface Nominee {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
}

interface Category {
  id: number;
  title: string;
  icon: string;
  nominees: Nominee[];
}

const categories: Category[] = [
  {
    id: 1,
    title: 'Лучшая развлекательная программа',
    icon: '🎭',
    nominees: [
      { id: 1, name: 'Это надо видеть!', description: 'Хит-парад видеороликов с Максимом Зуевым', thumbnail: '🎬' },
      { id: 2, name: 'Форт Боярд', description: 'Приключенческое шоу в крепости', thumbnail: '🏰' },
      { id: 3, name: 'Голос', description: 'Музыкальное шоу талантов', thumbnail: '🎤' },
      { id: 4, name: 'Поехали в Город!', description: 'Международное тревел-шоу', thumbnail: '✈️' },
    ],
  },
  {
    id: 2,
    title: 'Лучший ведущий',
    icon: '🎙️',
    nominees: [
      { id: 5, name: 'Максим Зуев', description: 'Ведущий "Это надо видеть!"', thumbnail: '👨‍💼' },
      { id: 6, name: 'Анна Светлова', description: 'Ведущая утренних новостей', thumbnail: '👩‍💼' },
      { id: 7, name: 'Дмитрий Весёлый', description: 'Шоумен "Форт Боярд"', thumbnail: '🎩' },
      { id: 8, name: 'Елена Кулинарова', description: 'Ведущая "Кухня здоровья"', thumbnail: '👩‍🍳' },
    ],
  },
  {
    id: 3,
    title: 'Лучший сериал',
    icon: '📺',
    nominees: [
      { id: 9, name: 'Кухня', description: 'Комедия о поварах элитного ресторана', thumbnail: '👨‍🍳' },
      { id: 10, name: 'Интерны', description: 'Комедийный сериал о врачах', thumbnail: '🏥' },
      { id: 11, name: 'Дом-2', description: 'Реалити-шоу о жизни участников', thumbnail: '🏠' },
      { id: 12, name: 'Следствие ведут колобки', description: 'Детективная комедия', thumbnail: '🔍' },
    ],
  },
  {
    id: 4,
    title: 'Лучший мультфильм',
    icon: '🎨',
    nominees: [
      { id: 13, name: 'Смешарики', description: 'Приключения в круглом мире', thumbnail: '🐰' },
      { id: 14, name: 'Фиксики', description: 'Человечки в технике', thumbnail: '🔧' },
      { id: 15, name: 'Три кота', description: 'Семейный мультсериал', thumbnail: '🐱' },
      { id: 16, name: 'Лунтик', description: 'Лунный гость на Земле', thumbnail: '🌙' },
    ],
  },
  {
    id: 5,
    title: 'Лучшая образовательная программа',
    icon: '📚',
    nominees: [
      { id: 17, name: 'Кухня здоровья', description: 'Полезные рецепты', thumbnail: '🥗' },
      { id: 18, name: 'Завтрак с Максимом', description: 'Утренняя познавательная программа', thumbnail: '☕' },
      { id: 19, name: 'Мир науки', description: 'Научно-популярное шоу', thumbnail: '🔬' },
      { id: 20, name: 'История вокруг нас', description: 'Исторические факты', thumbnail: '📜' },
    ],
  },
  {
    id: 6,
    title: 'Лучшая новостная программа',
    icon: '📰',
    nominees: [
      { id: 21, name: 'Главные новости', description: 'Главные события дня', thumbnail: '🗞️' },
      { id: 22, name: 'Утренние новости', description: 'Новости с утра', thumbnail: '🌅' },
      { id: 23, name: 'Вечерний выпуск', description: 'Итоги дня', thumbnail: '🌆' },
      { id: 24, name: 'Новости спорта', description: 'Спортивные события', thumbnail: '⚽' },
    ],
  },
  {
    id: 7,
    title: 'Лучший актёр',
    icon: '🎭',
    nominees: [
      { id: 25, name: 'Иван Петров', description: 'Роль в сериале "Кухня"', thumbnail: '👨' },
      { id: 26, name: 'Сергей Комиков', description: 'Главная роль в "Интерны"', thumbnail: '🧑' },
      { id: 27, name: 'Алексей Смешной', description: 'Комедийные роли', thumbnail: '😄' },
      { id: 28, name: 'Николай Драматов', description: 'Драматические роли', thumbnail: '🎬' },
    ],
  },
  {
    id: 8,
    title: 'Лучшая актриса',
    icon: '👸',
    nominees: [
      { id: 29, name: 'Мария Звёздная', description: 'Роль в "Кухня"', thumbnail: '👩' },
      { id: 30, name: 'Анастасия Яркая', description: 'Главная роль', thumbnail: '💃' },
      { id: 31, name: 'Ольга Талантова', description: 'Комедийные роли', thumbnail: '😊' },
      { id: 32, name: 'Екатерина Прекрасная', description: 'Драматические роли', thumbnail: '🌟' },
    ],
  },
  {
    id: 9,
    title: 'Прорыв года',
    icon: '🚀',
    nominees: [
      { id: 33, name: 'Молодой комик Артём', description: 'Новое комедийное шоу', thumbnail: '🎤' },
      { id: 34, name: 'Певица Алина', description: 'Музыкальный проект', thumbnail: '🎵' },
      { id: 35, name: 'Танцор Максим', description: 'Танцевальное шоу', thumbnail: '💃' },
      { id: 36, name: 'Программа "Новый взгляд"', description: 'Инновационный формат', thumbnail: '📺' },
    ],
  },
  {
    id: 10,
    title: 'Лучший музыкальный проект',
    icon: '🎵',
    nominees: [
      { id: 37, name: 'Голос', description: 'Вокальное шоу', thumbnail: '🎤' },
      { id: 38, name: 'Танцы', description: 'Танцевальное шоу', thumbnail: '💃' },
      { id: 39, name: 'Музыкальная битва', description: 'Соревнование групп', thumbnail: '🎸' },
      { id: 40, name: 'Народная песня', description: 'Фольклорная программа', thumbnail: '🎻' },
    ],
  },
  {
    id: 11,
    title: 'Лучший спортивный проект',
    icon: '⚽',
    nominees: [
      { id: 41, name: 'Большой футбол', description: 'Футбольная программа', thumbnail: '⚽' },
      { id: 42, name: 'Спортивная арена', description: 'Обзор всех видов спорта', thumbnail: '🏟️' },
      { id: 43, name: 'Экстрим-зона', description: 'Экстремальные виды', thumbnail: '🏂' },
      { id: 44, name: 'Олимпийский вестник', description: 'Олимпийские новости', thumbnail: '🥇' },
    ],
  },
  {
    id: 12,
    title: 'Лучший документальный фильм',
    icon: '🎥',
    nominees: [
      { id: 45, name: 'Тайны природы', description: 'О дикой природе', thumbnail: '🦁' },
      { id: 46, name: 'История России', description: 'Исторический фильм', thumbnail: '🏛️' },
      { id: 47, name: 'Космос рядом', description: 'О космических исследованиях', thumbnail: '🚀' },
      { id: 48, name: 'Великие открытия', description: 'Научные достижения', thumbnail: '🔬' },
    ],
  },
  {
    id: 13,
    title: 'Лучший игровой фильм',
    icon: '🎬',
    nominees: [
      { id: 49, name: 'Вызов', description: 'Российский фильм о космосе', thumbnail: '🚀' },
      { id: 50, name: 'Крепкий орешек', description: 'Боевик с Брюсом Уиллисом', thumbnail: '💣' },
      { id: 51, name: 'Семейная комедия', description: 'Весёлый фильм для всех', thumbnail: '😄' },
      { id: 52, name: 'Драма года', description: 'Трогательная история', thumbnail: '💔' },
    ],
  },
  {
    id: 14,
    title: 'Лучшая детская программа',
    icon: '🧸',
    nominees: [
      { id: 53, name: 'Утро с друзьями', description: 'Утреннее детское шоу', thumbnail: '🌈' },
      { id: 54, name: 'Мир игрушек', description: 'Обзор игрушек', thumbnail: '🎁' },
      { id: 55, name: 'Сказки на ночь', description: 'Вечерняя программа', thumbnail: '🌙' },
      { id: 56, name: 'Умники и умницы', description: 'Интеллектуальная викторина', thumbnail: '🎓' },
    ],
  },
  {
    id: 15,
    title: 'Лучшая юмористическая программа',
    icon: '😂',
    nominees: [
      { id: 57, name: 'Камеди Клаб', description: 'Стендап шоу', thumbnail: '🎤' },
      { id: 58, name: 'Смех без правил', description: 'Комедийное шоу', thumbnail: '😆' },
      { id: 59, name: 'Приколы на ТВ', description: 'Забавные моменты', thumbnail: '🤣' },
      { id: 60, name: 'Вечер юмора', description: 'Юмористический вечер', thumbnail: '😄' },
    ],
  },
  {
    id: 16,
    title: 'Лучший оператор',
    icon: '📹',
    nominees: [
      { id: 61, name: 'Владимир Объективов', description: 'Оператор "Форт Боярд"', thumbnail: '🎥' },
      { id: 62, name: 'Светлана Кадрова', description: 'Операторская работа', thumbnail: '📸' },
      { id: 63, name: 'Игорь Съёмкин', description: 'Документальные съёмки', thumbnail: '🎬' },
      { id: 64, name: 'Анна Фокусова', description: 'Художественные съёмки', thumbnail: '📷' },
    ],
  },
  {
    id: 17,
    title: 'Лучший режиссёр',
    icon: '🎬',
    nominees: [
      { id: 65, name: 'Алексей Постановщиков', description: 'Режиссёр шоу', thumbnail: '🎭' },
      { id: 66, name: 'Мария Сценова', description: 'Режиссёр сериалов', thumbnail: '📺' },
      { id: 67, name: 'Дмитрий Киношник', description: 'Режиссёр фильмов', thumbnail: '🎥' },
      { id: 68, name: 'Ольга Творцова', description: 'Творческая режиссура', thumbnail: '🌟' },
    ],
  },
  {
    id: 18,
    title: 'Лучший сценарист',
    icon: '✍️',
    nominees: [
      { id: 69, name: 'Пётр Писателев', description: 'Сценарист комедий', thumbnail: '📝' },
      { id: 70, name: 'Елена Сюжетова', description: 'Сценарист драм', thumbnail: '📖' },
      { id: 71, name: 'Иван Фантазёров', description: 'Оригинальные сценарии', thumbnail: '✨' },
      { id: 72, name: 'Наталья Идейкина', description: 'Креативные идеи', thumbnail: '💡' },
    ],
  },
  {
    id: 19,
    title: 'Телеканал года',
    icon: '🏆',
    nominees: [
      { id: 73, name: 'Новые друзья ТВ', description: 'Наш любимый канал!', thumbnail: '📺' },
      { id: 74, name: 'Первый канал', description: 'Главный канал страны', thumbnail: '1️⃣' },
      { id: 75, name: 'Россия 1', description: 'Федеральный канал', thumbnail: '🇷🇺' },
      { id: 76, name: 'НТВ', description: 'Информационный канал', thumbnail: '📰' },
    ],
  },
];

export default function Awards2026() {
  const [votes, setVotes] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const { toast } = useToast();

  const handleVote = (categoryId: number, nomineeId: number) => {
    setVotes((prev) => ({
      ...prev,
      [categoryId]: nomineeId,
    }));
    
    toast({
      title: 'Голос учтён!',
      description: 'Ваш выбор сохранён в этой номинации',
    });
  };

  const handleSubmit = () => {
    const votedCategories = Object.keys(votes).length;
    
    if (votedCategories === 0) {
      toast({
        title: 'Выберите номинантов',
        description: 'Проголосуйте хотя бы в одной номинации',
        variant: 'destructive',
      });
      return;
    }
    
    toast({
      title: '🎉 Спасибо за участие!',
      description: `Вы проголосовали в ${votedCategories} номинациях из 19`,
    });
    
    setShowResults(true);
  };

  const getVoteCount = () => Object.keys(votes).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-950 dark:via-orange-950 dark:to-red-950 p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-start mb-6">
          <Button variant="ghost" asChild>
            <a href="/">
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              На главную
            </a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="/live-tv">
              <Icon name="Tv" size={20} className="mr-2" />
              Прямой эфир
            </a>
          </Button>
        </div>

        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-full mb-4 text-sm font-bold">
            ГОЛОСОВАНИЕ ОТКРЫТО
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
            ПРЕМИЯ "НОВЫЕ ДРУЗЬЯ TV 2026"
          </h1>
          <p className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">
            Голосование за лучшие программы и проекты
          </p>
          <div className="flex items-center justify-center gap-6 flex-wrap text-lg">
            <div className="flex items-center gap-2">
              <Icon name="Trophy" className="text-yellow-600" size={24} />
              <span className="font-bold">19 номинаций</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="MapPin" className="text-orange-600" size={24} />
              <span className="font-bold">Сфера Радости</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Calendar" className="text-red-600" size={24} />
              <span className="font-bold">5 мая 2026</span>
            </div>
          </div>
        </div>

        <Card className="mb-8 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 border-4 border-blue-400">
          <CardContent className="p-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-lg font-bold mb-1">
                  Проголосовано: {getVoteCount()} / 19 номинаций
                </p>
                <p className="text-sm text-muted-foreground">
                  Церемония вручения: 30 мая 2026 в прямом эфире
                </p>
              </div>
              <Button
                onClick={handleSubmit}
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
                disabled={getVoteCount() === 0}
              >
                <Icon name="Send" size={20} className="mr-2" />
                Отправить голоса
              </Button>
            </div>
            <div className="mt-4 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 transition-all duration-300"
                style={{ width: `${(getVoteCount() / 19) * 100}%` }}
              ></div>
            </div>
          </CardContent>
        </Card>

        {showResults && (
          <Card className="mb-8 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40 border-4 border-green-500">
            <CardContent className="p-8 text-center">
              <div className="text-7xl mb-4">🎉</div>
              <h2 className="text-4xl font-black text-green-700 dark:text-green-400 mb-3">
                Спасибо за участие!
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
                Ваши голоса учтены. Результаты будут объявлены на церемонии вручения премии.
              </p>
              <p className="text-lg font-bold text-green-600 dark:text-green-400">
                📺 Смотрите церемонию 30 мая 2026 в 20:35 на телеканале "Новые друзья ТВ"
              </p>
            </CardContent>
          </Card>
        )}

        <div className="space-y-8">
          {categories.map((category) => (
            <Card key={category.id} className="overflow-hidden border-2 border-orange-200 dark:border-orange-800 hover:border-orange-400 transition-all">
              <CardHeader className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <span className="text-4xl">{category.icon}</span>
                  {category.title}
                  {votes[category.id] && (
                    <Icon name="CheckCircle2" className="text-green-600 ml-auto" size={28} />
                  )}
                </CardTitle>
                <CardDescription className="text-base">
                  Выберите одного номинанта
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {category.nominees.map((nominee) => {
                    const isSelected = votes[category.id] === nominee.id;
                    return (
                      <Card
                        key={nominee.id}
                        className={`cursor-pointer transition-all hover:scale-105 ${
                          isSelected
                            ? 'bg-gradient-to-r from-yellow-200 to-orange-200 dark:from-yellow-900/50 dark:to-orange-900/50 border-4 border-yellow-500'
                            : 'hover:bg-gray-50 dark:hover:bg-gray-800 border-2'
                        }`}
                        onClick={() => handleVote(category.id, nominee.id)}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="text-5xl">{nominee.thumbnail}</div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                {nominee.name}
                                {isSelected && (
                                  <Icon name="Star" className="text-yellow-600" size={20} />
                                )}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {nominee.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 border-4 border-purple-400">
          <CardContent className="p-8 text-center">
            <div className="text-6xl mb-4">🏆✨🎉</div>
            <h2 className="text-3xl font-black mb-4">Церемония вручения премии</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white/70 dark:bg-gray-800/70 p-6 rounded-lg">
                <div className="text-4xl mb-2">📅</div>
                <p className="font-bold text-lg mb-1">Голосование</p>
                <p className="text-sm text-muted-foreground">До 5 мая 2026</p>
              </div>
              <div className="bg-white/70 dark:bg-gray-800/70 p-6 rounded-lg">
                <div className="text-4xl mb-2">📍</div>
                <p className="font-bold text-lg mb-1">Место</p>
                <p className="text-sm text-muted-foreground">Сфера Радости</p>
              </div>
              <div className="bg-white/70 dark:bg-gray-800/70 p-6 rounded-lg">
                <div className="text-4xl mb-2">📺</div>
                <p className="font-bold text-lg mb-1">Трансляция</p>
                <p className="text-sm text-muted-foreground">30 мая 2026, 20:35</p>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Icon name="ArrowUp" size={20} className="mr-2" />
              Вернуться к голосованию
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
