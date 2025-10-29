import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

interface ShowIntroNewYearProps {
  onComplete?: () => void;
}

const ShowIntroNewYear = ({ onComplete }: ShowIntroNewYearProps) => {
  const [scene, setScene] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const sceneTimings = [3500, 3500, 3500, 3000];
    const totalDuration = sceneTimings.reduce((a, b) => a + b, 0);

    const sceneTimers = [
      setTimeout(() => setScene(2), sceneTimings[0]),
      setTimeout(() => setScene(3), sceneTimings[0] + sceneTimings[1]),
      setTimeout(() => setScene(4), sceneTimings[0] + sceneTimings[1] + sceneTimings[2]),
      setTimeout(() => {
        if (onComplete) onComplete();
      }, totalDuration)
    ];

    return () => sceneTimers.forEach(timer => clearTimeout(timer));
  }, [isPlaying, onComplete]);

  const handleSkip = () => {
    setIsPlaying(false);
    if (onComplete) onComplete();
  };

  const Snowflake = ({ delay = 0, duration = 10 }: { delay?: number; duration?: number }) => (
    <div
      className="absolute text-white text-2xl opacity-70 animate-fall"
      style={{
        left: `${Math.random() * 100}%`,
        top: '-20px',
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`
      }}
    >
      ❄️
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-blue-600 via-blue-400 to-cyan-300 overflow-hidden">
      <audio autoPlay loop>
        <source src="https://cdn.poehali.dev/newyear-music.mp3" type="audio/mpeg" />
      </audio>

      {[...Array(30)].map((_, i) => (
        <Snowflake key={i} delay={i * 0.5} duration={8 + Math.random() * 4} />
      ))}

      <button
        onClick={handleSkip}
        className="absolute top-6 right-6 z-10 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm transition-colors"
      >
        Пропустить заставку
      </button>

      {scene === 1 && (
        <div className="absolute inset-0 flex items-center justify-center animate-in fade-in duration-500">
          <div className="grid grid-cols-4 gap-4 p-8">
            {[...Array(16)].map((_, i) => (
              <div
                key={i}
                className="relative w-32 h-32 bg-white/30 rounded-2xl backdrop-blur-md animate-in zoom-in duration-700 shadow-2xl border-2 border-white/50"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="absolute inset-2 bg-gradient-to-br from-blue-100/40 to-cyan-100/30 rounded-xl flex items-center justify-center">
                  <Icon name="Video" size={32} className="text-white animate-pulse" />
                </div>
                <div className="absolute bottom-2 left-2 right-2 h-1 bg-white/40 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-white/80 rounded-full animate-pulse"
                    style={{ width: `${Math.random() * 100}%` }}
                  />
                </div>
                <div className="absolute -top-2 -right-2 text-xl">🎄</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {scene === 2 && (
        <div className="absolute inset-0 flex items-center justify-center animate-in fade-in duration-500">
          <div className="flex gap-8 items-center justify-center">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="relative animate-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="w-24 h-48 bg-white/30 rounded-3xl backdrop-blur-md shadow-2xl border-4 border-white/50 relative overflow-hidden">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/50 rounded-full" />
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-12 bg-white/40 rounded-full" />
                  <div className="absolute inset-4 flex flex-col gap-2 justify-center">
                    <div className="h-2 bg-white/50 rounded animate-pulse" />
                    <div className="h-2 bg-white/50 rounded animate-pulse" style={{ animationDelay: '200ms' }} />
                    <div className="h-2 bg-white/50 rounded animate-pulse" style={{ animationDelay: '400ms' }} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-100/20 via-transparent to-cyan-100/20" />
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-2xl">🎅</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {scene === 3 && (
        <div className="absolute inset-0 flex items-center justify-center animate-in fade-in duration-500">
          <div className="relative w-96 h-[500px] perspective-1000">
            <div className="absolute inset-0 animate-in flip-in-y duration-1000">
              <div className="w-full h-full bg-white/30 rounded-3xl backdrop-blur-md shadow-2xl border-4 border-white/50 p-8">
                <div className="grid grid-cols-3 gap-6 h-full">
                  {[
                    { icon: 'MessageCircle', color: 'from-blue-400 to-blue-600', label: 'WhatsApp', emoji: '🎁' },
                    { icon: 'Send', color: 'from-sky-400 to-blue-500', label: 'Telegram', emoji: '⛄' },
                    { icon: 'Camera', color: 'from-purple-400 to-pink-500', label: 'Instagram', emoji: '🎄' },
                    { icon: 'Play', color: 'from-red-500 to-red-600', label: 'YouTube', emoji: '🎅' },
                    { icon: 'Music', color: 'from-slate-700 to-slate-900', label: 'TikTok', emoji: '⭐' },
                    { icon: 'Facebook', color: 'from-blue-600 to-blue-700', label: 'Facebook', emoji: '🔔' }
                  ].map((social, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center justify-center gap-2 animate-in zoom-in duration-500"
                      style={{ animationDelay: `${i * 150}ms` }}
                    >
                      <div className={`w-20 h-20 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform relative`}>
                        <Icon name={social.icon as any} size={32} className="text-white" />
                        <div className="absolute -top-2 -right-2 text-lg">{social.emoji}</div>
                      </div>
                      <span className="text-white text-xs font-semibold">{social.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {scene === 4 && (
        <div className="absolute inset-0 flex items-center justify-center animate-in zoom-in duration-1000">
          <div className="text-center space-y-8 relative">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 text-6xl animate-bounce">⭐</div>
            <div className="absolute top-0 left-10 text-4xl animate-spin-slow">❄️</div>
            <div className="absolute top-10 right-10 text-4xl animate-spin-slow">❄️</div>
            
            <div className="relative">
              <div className="absolute inset-0 blur-3xl bg-white/40 animate-pulse" />
              <div className="relative bg-white/20 backdrop-blur-xl rounded-3xl p-12 border-4 border-white/50 shadow-2xl">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Icon name="Eye" size={64} className="text-white animate-bounce" />
                  <div className="text-5xl">🎄</div>
                  <Icon name="Sparkles" size={48} className="text-yellow-200 animate-pulse" />
                </div>
                
                <div className="mb-4">
                  <div className="text-red-600 font-black text-4xl mb-2 drop-shadow-lg">
                    🎅 НОВОГОДНИЙ ВЫПУСК 🎅
                  </div>
                  <div className="text-white text-2xl font-bold">30 декабря 2025</div>
                </div>
                
                <h1 className="text-7xl font-black text-white mb-4 tracking-tight drop-shadow-lg">
                  ЭТО НАДО
                </h1>
                <h2 className="text-8xl font-black text-white tracking-tight drop-shadow-lg">
                  ВИДЕТЬ!
                </h2>
                <div className="mt-8 flex items-center justify-center gap-3">
                  <div className="text-3xl animate-bounce" style={{ animationDelay: '0ms' }}>🎁</div>
                  <div className="text-3xl animate-bounce" style={{ animationDelay: '150ms' }}>⛄</div>
                  <div className="text-3xl animate-bounce" style={{ animationDelay: '300ms' }}>🎄</div>
                </div>
              </div>
            </div>
            <div className="text-white text-2xl font-bold animate-pulse">
              Новые друзья ТВ
            </div>
          </div>
        </div>
      )}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {[1, 2, 3, 4].map((s) => (
          <div
            key={s}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              s === scene ? 'bg-white w-8' : 'bg-white/40'
            }`}
          />
        ))}
      </div>

      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-fall {
          animation: fall linear infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ShowIntroNewYear;
