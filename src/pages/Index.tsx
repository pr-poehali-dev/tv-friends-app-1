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
      title: 'Старт сезона "Поехали в Город!" — 9 городов, 5 стран',
      date: '28 октября 2025',
      description: 'Каждое воскресенье в 10:00 смотрите новый выпуск международного тревел-шоу. От Баку до Екатеринбурга — путешествуйте вместе с нами!',
      featured: true,
    },
    {
      title: 'Премьера! "Завтрак с Максимом" — новая кулинарная программа',
      date: '27 октября 2025',
      description: 'Каждую субботу в 10:00 утра ведущий Максим Зуев научит вас готовить вкусные завтраки для всей семьи. Премьера 1 ноября!',
    },
    {
      title: 'Запуск нового сезона "Утреннего шоу"',
      date: '25 октября 2025',
      description: 'Встречайте обновлённый формат вашей любимой утренней программы с новыми ведущими и рубриками.',
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

        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
          <div className="container mx-auto px-4">
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

        <section id="contact" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Контакты</h2>
                <p className="text-muted-foreground">Свяжитесь с нами для любых вопросов</p>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Имя
                      </label>
                      <Input id="name" placeholder="Ваше имя" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Сообщение
                      </label>
                      <Textarea id="message" placeholder="Ваше сообщение..." rows={5} />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить сообщение
                    </Button>
                  </form>

                  <div className="mt-8 pt-8 border-t space-y-4">
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