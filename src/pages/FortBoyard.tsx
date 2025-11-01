import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import ShowIntroFortBoyard from '@/components/ShowIntroFortBoyard';
import ShowOutroFortBoyard from '@/components/ShowOutroFortBoyard';

const FortBoyard = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [showOutro, setShowOutro] = useState(false);

  const challenges = [
    {
      id: 1,
      title: "Испытание с ключами",
      thumbnail: "🗝️",
      description: "Команда ищет ключи в темных подземельях форта"
    },
    {
      id: 2,
      title: "Башня с сокровищами",
      thumbnail: "💰",
      description: "Участник забирается на башню за золотыми монетами"
    },
    {
      id: 3,
      title: "Загадка Старца Фура",
      thumbnail: "🧙",
      description: "Мудрый старец задает команде хитрую загадку"
    },
    {
      id: 4,
      title: "Водное испытание",
      thumbnail: "🌊",
      description: "Прохождение через затопленный тоннель форта"
    },
    {
      id: 5,
      title: "Комната тигров",
      thumbnail: "🐅",
      description: "Добыча ключа из клетки с тиграми"
    },
    {
      id: 6,
      title: "Подвесной мост",
      thumbnail: "🌉",
      description: "Переход по веревочному мосту над пропастью"
    },
    {
      id: 7,
      title: "Сокровищница",
      thumbnail: "💎",
      description: "Финальное испытание - собрать максимум золота"
    },
    {
      id: 8,
      title: "Встреча с хранителем",
      thumbnail: "🏰",
      description: "Последняя загадка от хранителя форта"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-yellow-50 dark:from-gray-900 dark:to-amber-950">
      {showIntro && <ShowIntroFortBoyard onComplete={() => setShowIntro(false)} />}
      {showOutro && <ShowOutroFortBoyard onComplete={() => setShowOutro(false)} />}

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="text-[20rem]">🏰</div>
          </div>
          
          <div className="relative z-10">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute text-2xl opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${15 + Math.random() * 10}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              >
                ⚜️
              </div>
            ))}
            
            <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600 mb-4 drop-shadow-lg">
              🏰 ФОРТ БОЯРД
            </h1>
            <p className="text-3xl font-bold text-amber-700 dark:text-amber-400 mb-2">
              Возвращение легенды
            </p>
            <p className="text-xl text-amber-600 dark:text-amber-500 mb-8">
              Премьера • 10 ноября • Понедельники в 21:30
            </p>
            
            <div className="flex gap-4 justify-center mb-12">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold shadow-xl"
                onClick={() => setShowIntro(true)}
              >
                <Icon name="Play" className="mr-2" />
                Заставка шоу
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-amber-600 text-amber-700 hover:bg-amber-50 dark:text-amber-400 dark:hover:bg-amber-950 font-bold"
                onClick={() => window.location.href = '/'}
              >
                <Icon name="Home" className="mr-2" />
                На главную
              </Button>
            </div>
          </div>
        </div>

        <Card className="mb-12 bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900/50 dark:to-yellow-900/50 border-2 border-amber-400">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3">
              <span className="text-5xl">⚔️</span>
              О шоу
            </CardTitle>
            <CardDescription className="text-lg text-foreground/80">
              Легендарное приключенческое шоу возвращается на экраны!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-lg">
            <p className="leading-relaxed">
              <strong className="text-amber-700 dark:text-amber-400">Форт Боярд</strong> - это грандиозное приключение, где команды участников 
              проходят невероятные испытания в настоящей крепости на острове. Физические и интеллектуальные задания, 
              встречи со старцем Фуром, поиски ключей и золота - всё это ждёт смелых искателей приключений!
            </p>
            <div className="flex gap-4 flex-wrap text-2xl justify-center py-4">
              <span>🗝️ Ключи</span>
              <span>💰 Золото</span>
              <span>🧙 Загадки</span>
              <span>⚔️ Испытания</span>
              <span>🏆 Победа</span>
            </div>
          </CardContent>
        </Card>

        <div className="mb-8">
          <h2 className="text-4xl font-bold text-center mb-8 text-amber-700 dark:text-amber-400 flex items-center justify-center gap-3">
            <span className="text-5xl">🎬</span>
            Испытания первого выпуска
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge) => (
              <Card 
                key={challenge.id}
                className="hover:scale-105 transition-transform cursor-pointer bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/30 dark:to-yellow-900/30 border-2 border-amber-300 hover:border-amber-500"
              >
                <CardHeader>
                  <div className="text-7xl text-center mb-2">{challenge.thumbnail}</div>
                  <CardTitle className="text-xl text-center">{challenge.title}</CardTitle>
                  <CardDescription className="text-center text-sm">
                    {challenge.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-gradient-to-br from-yellow-100 to-amber-100 dark:from-yellow-900/50 dark:to-amber-900/50 border-2 border-yellow-400">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3">
              <span className="text-5xl">👥</span>
              Команда первого выпуска
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Капитан Алексей', 'Спортсменка Мария', 'Умник Дмитрий', 'Силач Иван', 'Акробатка Анна', 'Стратег Елена'].map((member, i) => (
                <div key={i} className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg border-2 border-amber-300">
                  <div className="text-5xl mb-2">
                    {i % 2 === 0 ? '🧑' : '👩'}
                  </div>
                  <p className="font-bold text-amber-700 dark:text-amber-400">{member}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white font-bold text-xl px-8 py-6 shadow-2xl"
            onClick={() => setShowOutro(true)}
          >
            <Icon name="Film" className="mr-2" size={28} />
            Финальная заставка
          </Button>
        </div>
      </div>

      <style>{`
        @keyframes float {
          from { transform: translateY(0) rotate(0deg); }
          to { transform: translateY(-100vh) rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default FortBoyard;
