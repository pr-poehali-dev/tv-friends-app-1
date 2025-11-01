import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface AdBreakProps {
  onSkip: () => void;
}

const AdBreak = ({ onSkip }: AdBreakProps) => {
  const [currentAd, setCurrentAd] = useState(0);
  const [timeLeft, setTimeLeft] = useState(400);

  const ads = [
    {
      title: "🎭 СУПЕР АВАТАР",
      description: "Новое грандиозное шоу! Звезды скрываются под масками!",
      tagline: "Угадай, кто поёт!",
      emoji: "🎤🎭✨"
    },
    {
      title: "🎭 СУПЕР АВАТАР - Премьера!",
      description: "Самые известные артисты в невероятных костюмах!",
      tagline: "Каждую субботу в 21:00",
      emoji: "⭐🎪🎵"
    },
    {
      title: "🎭 СУПЕР АВАТАР",
      description: "Зрелищное вокальное шоу с загадками!",
      tagline: "Смотрите уже сегодня!",
      emoji: "🎬🌟💫"
    },
    {
      title: "🎭 СУПЕР АВАТАР",
      description: "Кто скрывается под маской Дракона? Феникса? Единорога?",
      tagline: "Разгадка совсем скоро!",
      emoji: "🐉🦄🔥"
    },
    {
      title: "🎭 СУПЕР АВАТАР - Голосование!",
      description: "Голосуйте за своего любимого участника!",
      tagline: "Ваш голос решает всё!",
      emoji: "📱👍❤️"
    },
    {
      title: "🎭 СУПЕР АВАТАР",
      description: "Невероятные выступления, сногсшибательные костюмы!",
      tagline: "Шоу №1 в стране!",
      emoji: "🏆✨🎉"
    },
    {
      title: "🎭 СУПЕР АВАТАР - Сюрпризы!",
      description: "В новом выпуске - неожиданные разоблачения!",
      tagline: "Не пропустите сенсацию!",
      emoji: "😱🎊🎭"
    },
    {
      title: "🎭 СУПЕР АВАТАР",
      description: "Лучшие голоса страны в одном шоу!",
      tagline: "Смотрите с семьёй!",
      emoji: "👨‍👩‍👧‍👦📺💕"
    }
  ];

  useEffect(() => {
    const adInterval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % ads.length);
    }, 5000);

    const timerInterval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerInterval);
          clearInterval(adInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(adInterval);
      clearInterval(timerInterval);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative z-10 max-w-4xl w-full mx-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 bg-red-600 text-white px-6 py-3 rounded-full text-xl font-bold mb-4 animate-pulse">
            <Icon name="Tv" size={24} />
            РЕКЛАМНАЯ ПАУЗА
          </div>
          <div className="text-white text-3xl font-bold">
            До продолжения: {formatTime(timeLeft)}
          </div>
        </div>

        <Card className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-8 shadow-2xl border-4 border-yellow-400 transform hover:scale-105 transition-transform">
          <div className="text-center space-y-6">
            <div className="text-8xl animate-bounce">
              {ads[currentAd].emoji}
            </div>
            
            <h2 className="text-6xl font-black text-white drop-shadow-lg">
              {ads[currentAd].title}
            </h2>
            
            <p className="text-3xl text-white/90 font-semibold">
              {ads[currentAd].description}
            </p>
            
            <div className="bg-yellow-400 text-purple-900 text-4xl font-black py-4 px-8 rounded-xl inline-block transform rotate-1 shadow-xl">
              {ads[currentAd].tagline}
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {ads.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentAd ? 'bg-yellow-400 w-8' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </Card>

        <div className="text-center mt-8">
          <Button
            onClick={onSkip}
            size="lg"
            variant="outline"
            className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur"
          >
            <Icon name="FastForward" className="mr-2" size={20} />
            Пропустить рекламу
          </Button>
        </div>

        <div className="mt-6 text-center text-white/70 text-sm">
          Показано {currentAd + 1} из {ads.length} рекламных роликов
        </div>
      </div>
    </div>
  );
};

export default AdBreak;
