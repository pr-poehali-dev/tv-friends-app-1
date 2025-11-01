import { useEffect, useState } from 'react';

interface ShowOutroFortBoyardProps {
  onComplete: () => void;
}

const ShowOutroFortBoyard = ({ onComplete }: ShowOutroFortBoyardProps) => {
  const [scene, setScene] = useState(1);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const sceneTimings = [0, 3000, 6000, 9000, 12000];
    
    const timers = sceneTimings.map((delay, index) => {
      return setTimeout(() => {
        if (index === sceneTimings.length - 1) {
          setFadeOut(true);
          setTimeout(onComplete, 1000);
        } else {
          setScene(index + 1);
        }
      }, delay);
    });

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-amber-900 via-yellow-800 to-amber-950">
        <div className="absolute inset-0 opacity-20">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${-10 + Math.random() * 120}%`,
              animation: `float ${10 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            ⚜️
          </div>
        ))}
      </div>

      <div className="relative h-full flex flex-col items-center justify-center p-8">
        {scene === 1 && (
          <div className="animate-fadeIn text-center">
            <div className="text-8xl mb-8 animate-bounce">🏆</div>
            <div className="grid grid-cols-4 gap-4 max-w-4xl">
              {[...Array(16)].map((_, i) => (
                <div 
                  key={i}
                  className="aspect-video bg-gradient-to-br from-yellow-600 to-amber-800 rounded-lg flex items-center justify-center text-4xl animate-pulse border-2 border-yellow-400 shadow-2xl"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  💰
                </div>
              ))}
            </div>
          </div>
        )}

        {scene === 2 && (
          <div className="animate-fadeIn text-center">
            <div className="text-6xl mb-6">⚔️🛡️🏺</div>
            <div className="flex gap-8 justify-center items-end">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i}
                  className="relative"
                  style={{ 
                    animation: `slideUp 0.5s ease-out ${i * 0.2}s both`
                  }}
                >
                  <div className="absolute -top-16 left-1/2 -translate-x-1/2 text-6xl">
                    🗝️
                  </div>
                  <div className="w-32 h-64 bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-full border-4 border-yellow-500 flex items-center justify-center shadow-2xl">
                    <div className="text-6xl">📱</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {scene === 3 && (
          <div className="animate-fadeIn text-center">
            <div className="text-7xl mb-8">🧙⚓🦅</div>
            <div className="flex gap-12 justify-center flex-wrap max-w-4xl">
              {['⚔️', '🏆', '💰', '🔱', '⛵', '🧭'].map((emoji, i) => (
                <div 
                  key={i}
                  className="flex flex-col items-center gap-3"
                  style={{ animation: `bounce 0.6s ease-in-out ${i * 0.15}s infinite` }}
                >
                  <div className="text-8xl">{emoji}</div>
                  <div className="px-6 py-3 bg-gradient-to-r from-yellow-600 to-amber-700 rounded-full border-2 border-yellow-400 shadow-lg">
                    <div className="text-2xl font-bold text-white">@fortboyard_tv</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {scene === 4 && (
          <div className="animate-fadeIn text-center space-y-12">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400 blur-3xl opacity-50 animate-pulse"></div>
              <div className="relative space-y-8">
                <div className="text-6xl font-bold text-yellow-300 drop-shadow-lg">
                  СПАСИБО ЗА ПРОСМОТР!
                </div>
                
                <div className="space-y-4 text-amber-200">
                  <p className="text-3xl font-bold">Следующий выпуск:</p>
                  <p className="text-4xl font-black">Понедельник, 17 ноября</p>
                  <p className="text-3xl">21:30</p>
                </div>

                <div className="text-9xl mb-4 drop-shadow-2xl animate-bounce">🏰</div>
                
                <div className="space-y-2">
                  <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-600 drop-shadow-2xl">
                    ФОРТ БОЯРД
                  </h2>
                  <p className="text-3xl font-bold text-yellow-300">
                    Возвращение легенды
                  </p>
                </div>

                <div className="text-4xl font-bold text-amber-300">
                  📺 Новые Друзья ТВ
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-6 text-6xl">
              <span className="animate-bounce" style={{ animationDelay: '0s' }}>⚔️</span>
              <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>🏆</span>
              <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>💎</span>
              <span className="animate-bounce" style={{ animationDelay: '0.3s' }}>🗝️</span>
              <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>⚜️</span>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(100px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          from { transform: translateY(0) rotate(0deg); }
          to { transform: translateY(100vh) rotate(360deg); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ShowOutroFortBoyard;
