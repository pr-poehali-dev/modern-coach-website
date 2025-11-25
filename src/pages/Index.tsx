import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">Психолог-Коуч</div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О себе</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#methods" className="text-foreground hover:text-primary transition-colors">Методы</a>
              <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
              <a href="#blog" className="text-foreground hover:text-primary transition-colors">Блог</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button asChild>
              <a href="#appointment">Записаться</a>
            </Button>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
                Путь к гармонии начинается здесь
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Профессиональная психологическая поддержка и коучинг для достижения ваших целей и внутреннего баланса
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg" asChild>
                  <a href="#appointment">Записаться на консультацию</a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg" asChild>
                  <a href="#services">Узнать больше</a>
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/1d8d0cf0-b4f2-448d-b883-79056a86fbdf/files/456aca93-3ac6-4261-941f-3a800beeeb55.jpg" 
                alt="Психолог-коуч" 
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">О себе</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Я — сертифицированный психолог-коуч с более чем 10-летним опытом работы. 
              Моя миссия — помочь вам раскрыть внутренний потенциал и обрести уверенность в себе.
            </p>
            <p>
              Использую современные методы психотерапии и коучинга, адаптированные под индивидуальные 
              потребности каждого клиента. Работаю как в очном формате, так и онлайн через видеосвязь.
            </p>
            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Award" className="text-primary" size={32} />
                </div>
                <div className="text-2xl font-bold text-foreground">10+</div>
                <div className="text-sm text-muted-foreground">лет опыта</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Users" className="text-primary" size={32} />
                </div>
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">клиентов</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Video" className="text-primary" size={32} />
                </div>
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">онлайн доступ</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">Услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="MessageCircle" className="text-primary" size={24} />
                </div>
                <CardTitle>Индивидуальные консультации</CardTitle>
                <CardDescription>Персональная работа один на один</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Глубокая проработка личных запросов, работа с самооценкой, тревожностью, 
                  отношениями. Сессия 60 минут.
                </p>
                <div className="mt-4 text-2xl font-bold text-primary">от 5000 ₽</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-primary" size={24} />
                </div>
                <CardTitle>Семейная терапия</CardTitle>
                <CardDescription>Работа с парами и семьями</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Решение конфликтов, улучшение коммуникации, восстановление доверия. 
                  Для пар и семей. Сессия 90 минут.
                </p>
                <div className="mt-4 text-2xl font-bold text-primary">от 8000 ₽</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Target" className="text-primary" size={24} />
                </div>
                <CardTitle>Карьерный коучинг</CardTitle>
                <CardDescription>Развитие профессиональных навыков</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Постановка карьерных целей, поиск призвания, управление стрессом на работе, 
                  развитие лидерских качеств.
                </p>
                <div className="mt-4 text-2xl font-bold text-primary">от 6000 ₽</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Video" className="text-primary" size={24} />
                </div>
                <CardTitle>Онлайн-сессии</CardTitle>
                <CardDescription>Консультации через видеосвязь</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Комфортный формат из любой точки мира. Безопасное соединение, 
                  профессиональная платформа для видеосвязи.
                </p>
                <div className="mt-4 text-2xl font-bold text-primary">от 4500 ₽</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Heart" className="text-primary" size={24} />
                </div>
                <CardTitle>Групповая терапия</CardTitle>
                <CardDescription>Поддержка в группе единомышленников</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Тематические группы поддержки: работа с тревожностью, самооценкой, 
                  отношениями. Группы до 8 человек.
                </p>
                <div className="mt-4 text-2xl font-bold text-primary">от 3000 ₽</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Calendar" className="text-primary" size={24} />
                </div>
                <CardTitle>Абонементы</CardTitle>
                <CardDescription>Комплексная программа поддержки</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Пакеты из 5, 10 или 20 сессий с выгодой до 20%. 
                  Системная работа над запросом для достижения результата.
                </p>
                <div className="mt-4 text-2xl font-bold text-primary">от 20000 ₽</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="methods" className="py-20 px-6 bg-accent/20">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">Методы работы</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Brain" className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Когнитивно-поведенческая терапия (КПТ)</h3>
                  <p className="text-muted-foreground">
                    Работа с деструктивными мыслями и поведенческими паттернами. 
                    Научно доказанный метод для работы с тревожностью и депрессией.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Lightbulb" className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Гештальт-терапия</h3>
                  <p className="text-muted-foreground">
                    Осознанность настоящего момента, работа с незавершенными ситуациями, 
                    проработка эмоциональных блоков.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Sparkles" className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Коучинговый подход</h3>
                  <p className="text-muted-foreground">
                    Постановка целей, разработка стратегий достижения, работа с мотивацией 
                    и личностным ростом.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Waves" className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Mindfulness и практики осознанности</h3>
                  <p className="text-muted-foreground">
                    Техники медитации, управление стрессом, развитие эмоционального интеллекта 
                    и внутреннего спокойствия.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">МА</span>
                  </div>
                  <div>
                    <CardTitle className="text-base">Мария</CardTitle>
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={14} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Благодаря работе с психологом я смогла преодолеть тревожность и наладить отношения с семьей. 
                  Онлайн-формат очень удобный, чувствовала себя комфортно."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">АС</span>
                  </div>
                  <div>
                    <CardTitle className="text-base">Алексей</CardTitle>
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={14} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Карьерный коучинг помог мне определиться с направлением развития. 
                  Профессиональный подход, четкие инструменты и поддержка на всех этапах."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">ЕК</span>
                  </div>
                  <div>
                    <CardTitle className="text-base">Екатерина</CardTitle>
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={14} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Групповая терапия открыла для меня новый взгляд на проблемы. 
                  Поддержка группы и профессионализм психолога дали невероятный результат."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">Блог</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20" />
              <CardHeader>
                <CardTitle>Как справиться с тревожностью</CardTitle>
                <CardDescription>15 ноября 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Практические техники управления тревогой в повседневной жизни. 
                  Разбираем научный подход и простые упражнения.
                </p>
                <Button variant="link" className="p-0 h-auto">
                  Читать далее <Icon name="ArrowRight" size={16} className="ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20" />
              <CardHeader>
                <CardTitle>5 признаков эмоционального выгорания</CardTitle>
                <CardDescription>10 ноября 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Как распознать выгорание на ранних стадиях и что делать, 
                  чтобы восстановить энергию и мотивацию.
                </p>
                <Button variant="link" className="p-0 h-auto">
                  Читать далее <Icon name="ArrowRight" size={16} className="ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/40" />
              <CardHeader>
                <CardTitle>Здоровые границы в отношениях</CardTitle>
                <CardDescription>5 ноября 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Почему важно уметь говорить "нет" и как выстраивать личные границы 
                  без чувства вины.
                </p>
                <Button variant="link" className="p-0 h-auto">
                  Читать далее <Icon name="ArrowRight" size={16} className="ml-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="appointment" className="py-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Запись на консультацию</h2>
            <p className="text-xl text-muted-foreground">
              Заполните форму, и я свяжусь с вами в ближайшее время
            </p>
          </div>

          <Card className="shadow-2xl">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя *</Label>
                  <Input
                    id="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите немного о вашем запросе..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div className="flex items-start gap-3 p-4 bg-accent/20 rounded-lg">
                  <Icon name="Video" className="text-primary mt-1" size={20} />
                  <div className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Онлайн-консультации через видеосвязь:</strong> 
                    <br />После записи вы получите ссылку на безопасную платформу для проведения сессии
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full text-lg">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-accent/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">Контакты</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Mail" className="text-primary" size={28} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <a href="mailto:info@psychologist.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@psychologist.com
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Phone" className="text-primary" size={28} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Телефон</h3>
                <a href="tel:+79999999999" className="text-muted-foreground hover:text-primary transition-colors">
                  +7 (999) 999-99-99
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="MessageCircle" className="text-primary" size={28} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Telegram</h3>
                <a href="https://t.me/psychologist" className="text-muted-foreground hover:text-primary transition-colors">
                  @psychologist
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-white rounded-2xl shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Режим работы</h3>
            <p className="text-muted-foreground text-lg">
              Понедельник — Пятница: 10:00 — 20:00
              <br />
              Суббота: 11:00 — 18:00
              <br />
              Воскресенье: выходной
            </p>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border bg-white">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Психолог-Коуч. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
