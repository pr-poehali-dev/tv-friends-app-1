import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function UtroNovieDruzia() {
  const [time, setTime] = useState(new Date());
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const logoTimer = setInterval(() => {
      setShowLogo(prev => !prev);
    }, 3000);
    return () => clearInterval(logoTimer);
  }, []);

  const currentHour = time.getHours();
  const isOnAir = currentHour >= 7 && currentHour < 10;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-300 via-yellow-200 to-pink-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,200,100,0.3)_0%,transparent_50%)]"></div>
      
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 via-yellow-400 via-pink-500 to-purple-500 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 via-pink-500 via-yellow-400 to-orange-500 animate-pulse"></div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="text-center mb-12 animate-fade-in">
          <div className={`transition-all duration-1000 ${showLogo ? 'scale-100 opacity-100' : 'scale-95 opacity-80'}`}>
            <h1 className="text-8xl md:text-9xl font-black mb-4 bg-gradient-to-r from-orange-600 via-yellow-500 to-pink-600 bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
              УТРО
            </h1>
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="text-6xl animate-bounce">☀️</div>
              <h2 className="text-5xl md:text-6xl font-bold text-orange-700 drop-shadow-lg">
                Новые друзья
              </h2>
              <div className="text-6xl animate-bounce" style={{animationDelay: '0.3s'}}>🌈</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="text-4xl animate-spin-slow">🌻</div>
            <div className="bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full shadow-2xl border-4 border-yellow-400">
              <p className="text-3xl font-bold text-orange-600">
                Будни с 7:00 до 10:00
              </p>
            </div>
            <div className="text-4xl animate-spin-slow" style={{animationDelay: '1s'}}>☕</div>
          </div>

          <div className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-12 py-6 rounded-2xl shadow-2xl mb-8 animate-bounce">
            <div className="text-6xl font-black mb-2">
              {time.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
            </div>
            <div className="text-xl font-semibold flex items-center justify-center gap-2">
              {isOnAir ? (
                <>
                  <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                  В ЭФИРЕ
                </>
              ) : (
                <>
                  <Icon name="Clock" size={20} />
                  Следующий эфир завтра в 7:00
                </>
              )}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white/80 backdrop-blur-sm border-4 border-orange-400 hover:scale-105 transition-transform">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <span className="text-5xl">👥</span>
                Ведущие
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-orange-100 rounded-lg">
                <span className="text-3xl">👨‍💼</span>
                <div>
                  <p className="font-bold text-lg">Максим Радостный</p>
                  <p className="text-sm text-muted-foreground">Главный ведущий</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-pink-100 rounded-lg">
                <span className="text-3xl">👩‍💼</span>
                <div>
                  <p className="font-bold text-lg">Анна Солнечная</p>
                  <p className="text-sm text-muted-foreground">Со-ведущая</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-yellow-100 rounded-lg">
                <span className="text-3xl">👨‍🍳</span>
                <div>
                  <p className="font-bold text-lg">Игорь Вкусный</p>
                  <p className="text-sm text-muted-foreground">Кулинарный эксперт</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-4 border-yellow-400 hover:scale-105 transition-transform">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <span className="text-5xl">📋</span>
                Программа
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="p-2 bg-gradient-to-r from-orange-100 to-orange-200 rounded">
                <p className="font-bold">7:00 - 7:15</p>
                <p>Доброе утро! Новости дня</p>
              </div>
              <div className="p-2 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded">
                <p className="font-bold">7:15 - 7:30</p>
                <p>Утренняя зарядка с чемпионом</p>
              </div>
              <div className="p-2 bg-gradient-to-r from-pink-100 to-pink-200 rounded">
                <p className="font-bold">7:30 - 8:00</p>
                <p>Завтрак с Игорем: рецепты</p>
              </div>
              <div className="p-2 bg-gradient-to-r from-purple-100 to-purple-200 rounded">
                <p className="font-bold">8:00 - 8:30</p>
                <p>Гости в студии: интервью</p>
              </div>
              <div className="p-2 bg-gradient-to-r from-blue-100 to-blue-200 rounded">
                <p className="font-bold">8:30 - 9:00</p>
                <p>Полезные советы от экспертов</p>
              </div>
              <div className="p-2 bg-gradient-to-r from-green-100 to-green-200 rounded">
                <p className="font-bold">9:00 - 10:00</p>
                <p>Игры и конкурсы, общение</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-4 border-pink-400 hover:scale-105 transition-transform">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <span className="text-5xl">🎯</span>
                Рубрики
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {[
                { icon: '🌤️', title: 'Погода на сегодня' },
                { icon: '🏃', title: 'Спорт и здоровье' },
                { icon: '🍳', title: 'Рецепт дня' },
                { icon: '🎭', title: 'Афиша культуры' },
                { icon: '👶', title: 'Для родителей' },
                { icon: '🐕', title: 'Питомцы недели' },
                { icon: '📱', title: 'Гаджеты и новинки' },
                { icon: '💝', title: 'Истории зрителей' }
              ].map((rubric, i) => (
                <div key={i} className="flex items-center gap-2 p-2 hover:bg-pink-100 rounded transition-colors">
                  <span className="text-2xl">{rubric.icon}</span>
                  <span className="font-semibold">{rubric.title}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-orange-200 to-pink-200 border-4 border-yellow-500 shadow-2xl">
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-4 text-6xl mb-4">
                <span className="animate-bounce">☕</span>
                <span className="animate-bounce" style={{animationDelay: '0.2s'}}>🥐</span>
                <span className="animate-bounce" style={{animationDelay: '0.4s'}}>🍳</span>
                <span className="animate-bounce" style={{animationDelay: '0.6s'}}>🥗</span>
                <span className="animate-bounce" style={{animationDelay: '0.8s'}}>🧃</span>
              </div>
              
              <p className="text-3xl font-black text-orange-700">
                Начни свой день правильно!
              </p>
              
              <p className="text-xl text-orange-600 font-semibold">
                Заряд позитива, полезные советы и отличное настроение каждое утро!
              </p>
              
              <div className="flex items-center justify-center gap-8 mt-6">
                <div className="text-center">
                  <div className="text-4xl mb-2">📺</div>
                  <p className="font-bold text-lg">Канал "Новые друзья ТВ"</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🌐</div>
                  <p className="font-bold text-lg">Онлайн трансляция</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">📱</div>
                  <p className="font-bold text-lg">Мобильное приложение</p>
                </div>
              </div>

              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl mt-6">
                <p className="text-2xl font-bold text-orange-700 mb-3">
                  📞 Звоните в студию!
                </p>
                <p className="text-4xl font-black text-pink-600">
                  8-800-555-УТРО
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Звонок бесплатный по всей России
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <div className="inline-block bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg">
            <p className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              🌟 Мы делаем каждое утро особенным! 🌟
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}
