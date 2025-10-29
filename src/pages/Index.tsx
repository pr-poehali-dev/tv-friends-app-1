import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { contestVideos } from '@/data/contestVideos';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const programs = [
    { time: '06:00', title: 'Утреннее шоу', category: 'Развлечения' },
    { time: '09:00', title: 'Новости дня', category: 'Новости' },
    { time: '10:00', title: 'Поехали в Город!', category: 'Путешествия', featured: true },
    { time: '10:30', title: 'Завтрак с Максимом', category: 'Образование' },
    { time: '12:00', title: 'Дневные новости', category: 'Новости' },
    { time: '13:00', title: 'Документальный фильм', category: 'Документальное' },
    { time: '15:00', title: 'Спортивный час', category: 'Спорт' },
    { time: '18:00', title: 'Вечерние новости', category: 'Новости' },
    { time: '19:00', title: 'Прайм-тайм шоу', category: 'Развлечения' },
    { time: '21:00', title: 'Ночной эфир', category: 'Развлечения' },
  ];

  const news = [
    {
      title: 'КОНКУРС "Поехали в Город!" — Снимай видео и выигрывай призы!',
      date: '28 октября 2025',
      description: 'Участвуй в конкурсе к премьере 4 сезона! Снимай видео, как развлекаешься или кушаешь, загружай на сайт или ВКонтакте. За лучшие ролики и лайки — призы от телеканала!',
      featured: true,
    },
    {
      title: 'СПЕЦВЫПУСК "Секреты 4 сезона" — узнайте, что было за кадром!',
      date: '27 октября 2025',
      description: '4 января в 14:15 — специальный выпуск "Поехали в Город!". Закулисье съёмок, неудачные дубли и истории, которые не вошли в эфир.',
    },
    {
      title: 'Старт 4 сезона "Поехали в Город!" — 9 городов, 5 стран',
      date: '26 октября 2025',
      description: 'Каждое воскресенье в 10:00 смотрите новый выпуск международного тревел-шоу. От Баку до Екатеринбурга — путешествуйте вместе с нами!',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-secondary border-b border-border/40 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Tv" size={32} className="text-primary" />
              <span className="text-xl font-bold text-primary-foreground">Новые Друзья ТВ</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => scrollToSection('home')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'home' ? 'text-primary' : 'text-primary-foreground/80'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('schedule')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'schedule' ? 'text-primary' : 'text-primary-foreground/80'
                }`}
              >
                Программа передач
              </button>
              <a
                href="/poehali"
                className="text-sm font-medium text-primary-foreground/80 hover:text-primary transition-colors flex items-center gap-1"
              >
                Поехали в Город
                <Icon name="ExternalLink" size={14} />
              </a>
              <button
                onClick={() => scrollToSection('live')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'live' ? 'text-primary' : 'text-primary-foreground/80'
                }`}
              >
                Прямой эфир
              </button>
              <button
                onClick={() => scrollToSection('news')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'news' ? 'text-primary' : 'text-primary-foreground/80'
                }`}
              >
                Новости
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'about' ? 'text-primary' : 'text-primary-foreground/80'
                }`}
              >
                О канале
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'contact' ? 'text-primary' : 'text-primary-foreground/80'
                }`}
              >
                Контакты
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="relative py-20 md:py-32 bg-gradient-to-br from-secondary to-secondary/80">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
                Ваш канал для всей семьи
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
                Новые Друзья ТВ — это качественный контент, интересные программы и круглосуточный эфир для всех возрастов
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => scrollToSection('live')}
              >
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть прямой эфир
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-r from-orange-500/10 via-yellow-500/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto mb-12">
              <Card className="overflow-hidden border-2 border-orange-500/40 shadow-2xl bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-950/20 dark:to-yellow-950/20">
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse flex items-center gap-2">
                      <Icon name="Trophy" size={18} />
                      КОНКУРС
                    </div>
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      НОВИНКА!
                    </div>
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                    Конкурс "Поехали в Город!"
                  </h2>
                  
                  <p className="text-xl text-foreground/90 mb-6 leading-relaxed">
                    Снимай видео, как ты развлекаешься или кушаешь в любом месте, 
                    загружай на сайт или в наше сообщество ВКонтакте — и выиграй призы от телеканала!
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white/50 dark:bg-black/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Video" size={24} className="text-orange-500" />
                        <h3 className="font-bold text-foreground">1. Снимай видео</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Покажи, как ты отдыхаешь, путешествуешь или наслаждаешься едой
                      </p>
                    </div>
                    
                    <div className="bg-white/50 dark:bg-black/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Upload" size={24} className="text-orange-500" />
                        <h3 className="font-bold text-foreground">2. Загружай</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        На сайт телеканала или в сообщество ВКонтакте
                      </p>
                    </div>
                    
                    <div className="bg-white/50 dark:bg-black/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Gift" size={24} className="text-orange-500" />
                        <h3 className="font-bold text-foreground">3. Получай призы!</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Самые крутые видео получат призы от канала
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Zap" size={20} />
                        <p className="font-bold">За лайки — призы!</p>
                      </div>
                      <p className="text-sm opacity-90">
                        Собирай лайки и увеличивай шансы на победу
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Tv" size={20} />
                        <p className="font-bold">Попади на ТВ!</p>
                      </div>
                      <p className="text-sm opacity-90">
                        Лучшие видео покажут в эфире телеканала
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-red-500/10 border-l-4 border-red-500 p-4 rounded mb-6">
                    <div className="flex items-start gap-3">
                      <Icon name="Calendar" size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-foreground mb-1">Важные даты</p>
                        <p className="text-sm text-foreground/80">
                          <strong>Победители каждую неделю</strong> — следи за эфиром!<br />
                          <strong>Финал 15 ноября</strong> — объявление всех победителей сезона
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white" onClick={() => scrollToSection('contact')}>
                      <Icon name="Trophy" size={20} className="mr-2" />
                      Участвовать в конкурсе
                    </Button>
                    <Button size="lg" variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-950/20" asChild>
                      <a href="https://vk.com/novyedruzya_tv" target="_blank" rel="noopener noreferrer">
                        <Icon name="ExternalLink" size={20} className="mr-2" />
                        Сообщество ВКонтакте
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <Card className="overflow-hidden border-2 border-primary/20 shadow-2xl">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative aspect-video md:aspect-auto">
                    <img
                      src="https://cdn.poehali.dev/projects/3478e400-ff84-4126-9411-8f9e5adbc820/files/882ccc88-2d7b-43fc-a77a-df961c88135e.jpg"
                      alt="Завтрак с Максимом"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                      ПРЕМЬЕРА
                    </div>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-background to-primary/5">
                    <div className="space-y-4">
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        Завтрак с Максимом
                      </h2>
                      <div className="flex items-center space-x-2 text-primary font-semibold">
                        <Icon name="Calendar" size={20} />
                        <span>Каждую субботу в 10:00</span>
                      </div>
                      <p className="text-lg text-foreground/80 leading-relaxed">
                        Ведущий <strong>Максим Зуев</strong> научит вас готовить вкусные завтраки, 
                        которые легко повторить всей семьёй. Простые рецепты и полезные советы для идеального утра!
                      </p>
                      <div className="bg-primary/10 border-l-4 border-primary p-4 rounded">
                        <p className="font-bold text-foreground mb-1">Премьера 1 ноября</p>
                        <p className="text-sm text-muted-foreground">По субботам в 10:00 утра</p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                          <a href="/breakfast">
                            <Icon name="Info" size={20} className="mr-2" />
                            Подробнее о программе
                          </a>
                        </Button>
                        <Button size="lg" variant="outline">
                          <Icon name="Bell" size={20} className="mr-2" />
                          Напомнить
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="schedule" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Программа передач</h2>
              <p className="text-muted-foreground">Расписание на сегодня</p>
            </div>

            <Tabs defaultValue="all" className="max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="news">Новости</TabsTrigger>
                <TabsTrigger value="entertainment">Развлечения</TabsTrigger>
                <TabsTrigger value="education">Образование</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4">
                {programs.map((program, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="flex flex-row items-center space-x-4 pb-4">
                      <div className="flex items-center space-x-4 w-full">
                        <div className="flex-shrink-0">
                          <div className="text-2xl font-bold text-primary">{program.time}</div>
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl">{program.title}</CardTitle>
                          <CardDescription>{program.category}</CardDescription>
                        </div>
                        <Button variant="outline" size="sm">
                          <Icon name="Info" size={16} />
                        </Button>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="news" className="space-y-4">
                {programs
                  .filter((p) => p.category === 'Новости')
                  .map((program, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader className="flex flex-row items-center space-x-4 pb-4">
                        <div className="flex items-center space-x-4 w-full">
                          <div className="flex-shrink-0">
                            <div className="text-2xl font-bold text-primary">{program.time}</div>
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-xl">{program.title}</CardTitle>
                            <CardDescription>{program.category}</CardDescription>
                          </div>
                          <Button variant="outline" size="sm">
                            <Icon name="Info" size={16} />
                          </Button>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
              </TabsContent>

              <TabsContent value="entertainment" className="space-y-4">
                {programs
                  .filter((p) => p.category === 'Развлечения')
                  .map((program, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader className="flex flex-row items-center space-x-4 pb-4">
                        <div className="flex items-center space-x-4 w-full">
                          <div className="flex-shrink-0">
                            <div className="text-2xl font-bold text-primary">{program.time}</div>
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-xl">{program.title}</CardTitle>
                            <CardDescription>{program.category}</CardDescription>
                          </div>
                          <Button variant="outline" size="sm">
                            <Icon name="Info" size={16} />
                          </Button>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
              </TabsContent>

              <TabsContent value="education" className="space-y-4">
                {programs
                  .filter((p) => p.category === 'Образование')
                  .map((program, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader className="flex flex-row items-center space-x-4 pb-4">
                        <div className="flex items-center space-x-4 w-full">
                          <div className="flex-shrink-0">
                            <div className="text-2xl font-bold text-primary">{program.time}</div>
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-xl">{program.title}</CardTitle>
                            <CardDescription>{program.category}</CardDescription>
                          </div>
                          <Button variant="outline" size="sm">
                            <Icon name="Info" size={16} />
                          </Button>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="live" className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Прямой эфир</h2>
              </div>
              <p className="text-muted-foreground">Смотрите 1 выпуск 4 сезона "Поехали в Город!"</p>
            </div>

            <div className="max-w-5xl mx-auto mb-16">
              <Card className="overflow-hidden border-2 border-primary/40 shadow-2xl">
                <div className="aspect-video bg-black relative">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&controls=1&rel=0"
                    title="Поехали в Город - Баку (1 выпуск 4 сезона)"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse flex items-center gap-2 pointer-events-none">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    В ЭФИРЕ СЕЙЧАС
                  </div>
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold pointer-events-none">
                    4 СЕЗОН • Эпизод 1
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Icon name="MapPin" size={20} className="text-primary" />
                      <span className="text-sm font-semibold text-muted-foreground">Баку, Азербайджан</span>
                    </div>
                    <span className="text-sm text-muted-foreground">42 мин</span>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl">Огни Баку: между Востоком и Западом</CardTitle>
                  <CardDescription className="text-base">
                    Первый выпуск нового сезона! Отправляемся в столицу Азербайджана — город, где древние традиции встречаются с футуристической архитектурой. 
                    Исследуем Старый город, пробуем национальную кухню и любуемся знаменитыми Огненными башнями.
                  </CardDescription>
                  <div className="mt-4 space-y-4">
                    <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                      <p className="text-sm italic text-foreground/90 leading-relaxed">
                        <strong>Максим в конце выпуска:</strong> "Друзья, сегодня вы посетили один из самых прекрасных городов Азербайджана — это Баку! 
                        Это крутой город, и знаете что — приезжайте в него поскорее! Спасибо вам огромное, путешествуйте вместе со мной! 
                        Я Максим, это «Поехали в Город», и прямо сейчас я отправляюсь в новый город, который вы увидите уже через неделю. Увидимся! Пока-пока!"
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Button className="bg-primary hover:bg-primary/90" asChild>
                        <a href="/poehali">
                          <Icon name="Film" size={20} className="mr-2" />
                          Смотреть все выпуски
                        </a>
                      </Button>
                      <Button variant="outline" onClick={() => scrollToSection('contact')}>
                        <Icon name="Upload" size={20} className="mr-2" />
                        Участвовать в конкурсе
                      </Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>

            <div className="max-w-5xl mx-auto mb-16">
              <Card className="overflow-hidden border-2 border-orange-500/40 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-950/20 dark:to-yellow-950/20">
                <CardHeader className="text-center pb-8">
                  <div className="inline-block mx-auto bg-gradient-to-r from-orange-600 to-yellow-500 text-white px-6 py-3 rounded-full text-lg font-bold mb-6 shadow-lg">
                    <Icon name="Tv" size={24} className="inline mr-2" />
                    НОВАЯ ПЕРЕДАЧА!
                  </div>
                  <CardTitle className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                    ЭТО НАДО ВИДЕТЬ!
                  </CardTitle>
                  <CardDescription className="text-lg text-foreground/80">
                    Самые крутые видеоролики в новом хит-параде
                  </CardDescription>
                </CardHeader>
                <div className="px-6 pb-6">
                  <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg border-2 border-orange-200 dark:border-orange-800">
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="bg-orange-500 text-white p-2 rounded-lg">
                          <Icon name="Calendar" size={24} />
                        </div>
                        <div>
                          <p className="font-bold text-foreground mb-1">Расписание выхода</p>
                          <p className="text-muted-foreground">Понедельник - Четверг</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-yellow-500 text-white p-2 rounded-lg">
                          <Icon name="Clock" size={24} />
                        </div>
                        <div>
                          <p className="font-bold text-foreground mb-1">Время показа</p>
                          <p className="text-muted-foreground">10:00 утра</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-orange-100 to-yellow-100 dark:from-orange-900/30 dark:to-yellow-900/30 rounded-lg mb-6">
                      <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-3 rounded-lg">
                        <Icon name="Radio" size={28} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-1">Смотрите на канале</p>
                        <p className="text-2xl font-bold text-foreground">Новые друзья ТВ</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-800 mb-6">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="bg-blue-500 text-white p-2 rounded-lg">
                          <Icon name="Video" size={24} />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-foreground mb-2">Присылайте свои видеоролики!</h4>
                          <p className="text-foreground/80 leading-relaxed">
                            Максим Зоев вместе с телезрителями будет смотреть крутые видеоролики, которые отправили наши зрители!
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-white dark:bg-slate-900 rounded-lg p-4 mb-4">
                        <p className="font-bold text-foreground mb-3 flex items-center gap-2">
                          <Icon name="Send" size={20} className="text-blue-500" />
                          Как отправить видео:
                        </p>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <p className="text-foreground/80">Загрузите на сайте телеканала <span className="font-semibold">Новые друзья ТВ</span></p>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <p className="text-foreground/80">Или отправьте на почту: <a href="mailto:etonadovidet@novye-druzya-tv.ru" className="font-semibold text-blue-600 hover:underline">etonadovidet@novye-druzya-tv.ru</a></p>
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg p-4 border-2 border-yellow-300 dark:border-yellow-700">
                          <div className="flex items-center gap-2 mb-2">
                            <Icon name="Trophy" size={20} className="text-yellow-600" />
                            <p className="font-bold text-foreground">Выпуск #1</p>
                          </div>
                          <p className="text-sm text-foreground/80 mb-1">🦊 <strong>Большая лиса стала мини-лисёнком</strong></p>
                          <p className="text-xs text-muted-foreground">Победитель первого выпуска</p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg p-4 border-2 border-yellow-300 dark:border-yellow-700">
                          <div className="flex items-center gap-2 mb-2">
                            <Icon name="Trophy" size={20} className="text-yellow-600" />
                            <p className="font-bold text-foreground">Выпуск #2</p>
                          </div>
                          <p className="text-sm text-foreground/80 mb-1">🏗️ <strong>LEGO человечек и башня из Дубая</strong></p>
                          <p className="text-xs text-muted-foreground">Победитель второго выпуска</p>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <Button size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold shadow-lg">
                        <Icon name="Upload" size={20} className="mr-2" />
                        Отправить свой видеоролик
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-block bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                  <Icon name="Trophy" size={16} className="inline mr-2" />
                  ВИДЕО УЧАСТНИКОВ КОНКУРСА
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Видео этой недели</h3>
                <p className="text-muted-foreground">Смотрите работы участников конкурса "Поехали в Город!"</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {contestVideos.map((video) => (
                  <Card key={video.id} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group">
                    <div className="aspect-video bg-secondary relative overflow-hidden">
                      <img 
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                          <Icon name="Play" size={24} className="text-primary ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs">
                        {video.duration}
                      </div>
                      {video.isLeader && (
                        <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">
                          🔥 ЛИДЕР НЕДЕЛИ
                        </div>
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle className="text-base">{video.title}</CardTitle>
                      <CardDescription className="text-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon name="User" size={14} />
                          <div className="flex flex-col">
                            <span className="font-semibold">
                              {video.author.lastName} {video.author.firstName} {video.author.patronymic}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {video.author.age} лет, {video.author.city}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-xs">
                          <span className="flex items-center gap-1">
                            <Icon name="Heart" size={12} className="text-red-500" />
                            {video.likes}
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="Eye" size={12} />
                            {video.views >= 1000 ? `${(video.views / 1000).toFixed(1)}K` : video.views}
                          </span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white"
                  onClick={() => scrollToSection('contact')}
                >
                  <Icon name="Upload" size={20} className="mr-2" />
                  Загрузить своё видео
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="news" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Новости канала</h2>
              <p className="text-muted-foreground">Последние обновления и анонсы</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {news.map((item, index) => (
                <Card 
                  key={index} 
                  className={`hover:shadow-lg transition-all hover:-translate-y-1 ${
                    item.featured ? 'border-2 border-primary shadow-xl' : ''
                  }`}
                >
                  <CardHeader>
                    {item.featured && (
                      <div className="mb-2">
                        <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">
                          НОВИНКА
                        </span>
                      </div>
                    )}
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                      <Icon name="Calendar" size={16} />
                      <span>{item.date}</span>
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">О канале</h2>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <p className="text-lg text-foreground leading-relaxed">
                      <strong>Новые Друзья ТВ</strong> — это современный телеканал, который объединяет людей через качественный контент.
                      Мы создаём программы для всей семьи, от утренних шоу до вечерних развлекательных передач.
                    </p>
                    <p className="text-foreground leading-relaxed">
                      Наша миссия — быть надёжным источником информации и развлечений, сохраняя традиции качественного телевидения
                      и внедряя современные технологии вещания. Мы работаем круглосуточно, чтобы вы всегда могли найти что-то
                      интересное для себя.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 pt-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                        <p className="text-sm text-muted-foreground">Круглосуточное вещание</p>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">50+</div>
                        <p className="text-sm text-muted-foreground">Оригинальных программ</p>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">2M+</div>
                        <p className="text-sm text-muted-foreground">Зрителей ежедневно</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-background to-orange-500/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                  <Icon name="Trophy" size={16} className="inline mr-2" />
                  УЧАСТВУЙ В КОНКУРСЕ
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Загрузи своё видео и выиграй приз!
                </h2>
                <p className="text-muted-foreground text-lg">
                  Заполни форму участия — победители объявляются каждую неделю
                </p>
              </div>

              <Card className="border-2 border-orange-500/40 shadow-xl mb-8">
                <CardContent className="pt-6">
                  <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 p-6 rounded-lg mb-6 border border-orange-200 dark:border-orange-800">
                    <div className="flex items-start gap-3 mb-4">
                      <Icon name="AlertCircle" size={24} className="text-orange-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-foreground mb-2 text-lg">Важная информация для участников</h3>
                        <ul className="space-y-2 text-sm text-foreground/80">
                          <li className="flex items-start gap-2">
                            <span className="text-orange-500 font-bold">•</span>
                            <span><strong>Обязательно укажите ФИО и адрес</strong> — чтобы мы могли связаться с вами при победе</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-orange-500 font-bold">•</span>
                            <span><strong>Победители каждую неделю</strong> — результаты объявляются в эфире</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-orange-500 font-bold">•</span>
                            <span><strong>Финальные итоги 15 ноября</strong> — узнаем всех победителей сезона!</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-orange-500 font-bold">•</span>
                            <span><strong>Лучшие видео покажут по ТВ</strong> — шанс попасть на телевизор!</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                          Фамилия <span className="text-red-500">*</span>
                        </label>
                        <Input id="lastName" placeholder="Иванов" required />
                      </div>
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                          Имя <span className="text-red-500">*</span>
                        </label>
                        <Input id="firstName" placeholder="Иван" required />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="patronymic" className="block text-sm font-medium mb-2">
                        Отчество <span className="text-red-500">*</span>
                      </label>
                      <Input id="patronymic" placeholder="Иванович" required />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <Input id="email" type="email" placeholder="ivan@example.com" required />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Телефон <span className="text-red-500">*</span>
                      </label>
                      <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" required />
                    </div>

                    <div>
                      <label htmlFor="address" className="block text-sm font-medium mb-2">
                        Адрес (улица, дом, квартира) <span className="text-red-500">*</span>
                      </label>
                      <Input id="address" placeholder="ул. Ленина, д. 10, кв. 5" required />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium mb-2">
                          Город <span className="text-red-500">*</span>
                        </label>
                        <Input id="city" placeholder="Москва" required />
                      </div>
                      <div>
                        <label htmlFor="postalCode" className="block text-sm font-medium mb-2">
                          Почтовый индекс <span className="text-red-500">*</span>
                        </label>
                        <Input id="postalCode" placeholder="123456" required />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="videoUrl" className="block text-sm font-medium mb-2">
                        Ссылка на видео <span className="text-red-500">*</span>
                      </label>
                      <Input 
                        id="videoUrl" 
                        type="url" 
                        placeholder="Ссылка на ВКонтакте, YouTube или другой видеохостинг" 
                        required 
                      />
                      <p className="text-xs text-muted-foreground mt-2">
                        Загрузите видео в наше сообщество ВКонтакте или на YouTube и вставьте ссылку
                      </p>
                    </div>

                    <div>
                      <label htmlFor="description" className="block text-sm font-medium mb-2">
                        Описание видео
                      </label>
                      <Textarea 
                        id="description" 
                        placeholder="Расскажите, что вы сняли: где были, что делали, что кушали..." 
                        rows={4} 
                      />
                    </div>

                    <Button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white" size="lg">
                      <Icon name="Upload" size={20} className="mr-2" />
                      Отправить заявку на участие
                    </Button>
                  </form>

                  <div className="mt-8 pt-8 border-t">
                    <div className="text-center mb-4">
                      <h3 className="font-bold text-foreground mb-2">Загружай видео в наше сообщество!</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Присоединяйся к сообществу ВКонтакте — смотри видео других участников, получай лайки и увеличивай шансы на победу
                      </p>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full border-2 border-blue-500 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/20" 
                      size="lg"
                      asChild
                    >
                      <a href="https://vk.com/novyedruzya_tv" target="_blank" rel="noopener noreferrer">
                        <Icon name="ExternalLink" size={20} className="mr-2" />
                        Открыть сообщество ВКонтакте
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Есть вопросы? Свяжитесь с нами</CardTitle>
                  <CardDescription>Мы ответим на все ваши вопросы о конкурсе</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Icon name="Mail" size={20} className="text-primary" />
                      <span>info@noviedruzyatv.ru</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Phone" size={20} className="text-primary" />
                      <span>+7 (495) 123-45-67</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="MapPin" size={20} className="text-primary" />
                      <span>г. Москва, ул. Телевизионная, д. 1</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Tv" size={24} className="text-primary" />
              <span className="font-bold text-primary-foreground">Новые Друзья ТВ</span>
            </div>
            <p className="text-primary-foreground/70 text-sm">© 2025 Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;