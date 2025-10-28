import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

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
              <p className="text-muted-foreground">Смотрите нас онлайн прямо сейчас</p>
            </div>

            <div className="max-w-5xl mx-auto">
              <Card className="overflow-hidden">
                <div className="aspect-video bg-secondary flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="Tv" size={64} className="text-primary mx-auto mb-4" />
                    <p className="text-primary-foreground/80 mb-4">Видеоплеер</p>
                    <Button className="bg-primary hover:bg-primary/90">
                      <Icon name="Play" size={20} className="mr-2" />
                      Запустить трансляцию
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Сейчас в эфире: Утреннее шоу</CardTitle>
                  <CardDescription>
                    Присоединяйтесь к нашей прямой трансляции и будьте в курсе последних событий
                  </CardDescription>
                </CardHeader>
              </Card>
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