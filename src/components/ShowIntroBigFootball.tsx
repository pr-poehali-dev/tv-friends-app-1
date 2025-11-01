import { useEffect, useState } from 'react';

interface ShowIntroBigFootballProps {
  onComplete: () => void;
}

const ShowIntroBigFootball = ({ onComplete }: ShowIntroBigFootballProps) => {
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
      <div className="absolute inset-0 bg-gradient-to-b from-green-600 via-emerald-500 to-green-700">
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute text-4xl opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${-10 + Math.random() * 120}%`,
                animation: `float ${8 + Math.random() * 8}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            >
              ⚽
            </div>
          ))}
        </div>
      </div>

      <div className="relative h-full flex flex-col items-center justify-center p-8">
        {scene === 1 && (
          <div className="animate-fadeIn text-center">
            <div className="text-9xl mb-8 animate-bounce drop-shadow-2xl">⚽</div>
            <div className="grid grid-cols-4 gap-4 max-w-4xl">
              {[...Array(16)].map((_, i) => (
                <div 
                  key={i}
                  className="aspect-video bg-gradient-to-br from-white to-gray-200 rounded-lg flex items-center justify-center text-5xl animate-pulse border-4 border-white shadow-2xl"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {i % 2 === 0 ? '🌸' : '🦁'}
                </div>
              ))}
            </div>
          </div>
        )}

        {scene === 2 && (
          <div className="animate-fadeIn text-center">
            <div className="text-6xl mb-6 font-bold text-white drop-shadow-lg">
              ФИНАЛ ПЕРВОГО СЕЗОНА
            </div>
            <div className="flex gap-8 justify-center items-center">
              {[...Array(2)].map((_, i) => (
                <div 
                  key={i}
                  className="relative"
                  style={{ 
                    animation: `slideUp 0.5s ease-out ${i * 0.3}s both`
                  }}
                >
                  <div className="absolute -top-20 left-1/2 -translate-x-1/2 text-8xl">
                    {i === 0 ? '🌸' : '🦁'}
                  </div>
                  <div className="w-48 h-80 bg-gradient-to-b from-white to-gray-100 rounded-lg border-6 border-white flex items-center justify-center shadow-2xl">
                    <div className="text-center p-4">
                      <div className="text-6xl mb-3">🏟️</div>
                      <div className="text-2xl font-bold text-gray-800">
                        {i === 0 ? 'Малиновые Цветочки' : 'Рыжие Крутышки'}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {scene === 3 && (
          <div className="animate-fadeIn text-center">
            <div className="text-7xl mb-8 font-bold text-white drop-shadow-lg">
              ⚔️ БИТВА ЗА ТРОФЕЙ ⚔️
            </div>
            <div className="flex gap-12 justify-center items-center flex-wrap max-w-5xl">
              <div className="space-y-6">
                <div className="text-9xl animate-bounce">🌸</div>
                <div className="text-4xl font-black text-pink-200 drop-shadow-lg">
                  МАЛИНОВЫЕ<br/>ЦВЕТОЧКИ
                </div>
              </div>
              
              <div className="text-9xl font-black text-white animate-pulse drop-shadow-2xl">
                VS
              </div>
              
              <div className="space-y-6">
                <div className="text-9xl animate-bounce" style={{ animationDelay: '0.2s' }}>🦁</div>
                <div className="text-4xl font-black text-orange-200 drop-shadow-lg">
                  РЫЖИЕ<br/>КРУТЫШКИ
                </div>
              </div>
            </div>
          </div>
        )}

        {scene === 4 && (
          <div className="animate-fadeIn text-center space-y-12">
            <div className="relative">
              <div className="absolute inset-0 bg-white blur-3xl opacity-50 animate-pulse"></div>
              <div className="relative space-y-8">
                <div className="text-9xl mb-4 drop-shadow-2xl animate-bounce">⚽</div>
                <h1 className="text-9xl font-black text-white drop-shadow-2xl tracking-wider mb-6" 
                    style={{ 
                      textShadow: '0 0 40px rgba(255, 255, 255, 0.8), 0 0 80px rgba(16, 185, 129, 0.6)',
                      fontFamily: 'Impact, sans-serif'
                    }}>
                  БОЛЬШОЙ ФУТБОЛ
                </h1>
                <div className="text-6xl font-bold text-yellow-300 mb-8 drop-shadow-lg animate-pulse" 
                     style={{ 
                       textShadow: '0 0 30px rgba(252, 211, 77, 0.9)',
                       letterSpacing: '0.1em'
                     }}>
                  ФИНАЛ ПЕРВОГО СЕЗОНА
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex justify-center items-center gap-8 text-white">
                <div className="text-center">
                  <div className="text-8xl mb-3">🌸</div>
                  <div className="text-3xl font-bold">Малиновые<br/>Цветочки</div>
                </div>
                <div className="text-7xl font-black">⚡</div>
                <div className="text-center">
                  <div className="text-8xl mb-3">🦁</div>
                  <div className="text-3xl font-bold">Рыжие<br/>Крутышки</div>
                </div>
              </div>
              
              <div className="text-5xl font-bold text-yellow-300 drop-shadow-lg">
                🏆 ОДИН ПОБЕДИТЕЛЬ 🏆
              </div>
            </div>

            <div className="flex justify-center gap-6 text-7xl mt-8">
              <span className="animate-bounce" style={{ animationDelay: '0s' }}>⚽</span>
              <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>🏆</span>
              <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🎯</span>
              <span className="animate-bounce" style={{ animationDelay: '0.3s' }}>🥇</span>
              <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>⚽</span>
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
          from { transform: translateY(100vh) rotate(0deg); }
          to { transform: translateY(-100vh) rotate(360deg); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ShowIntroBigFootball;
