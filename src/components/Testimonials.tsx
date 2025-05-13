
import React, { useEffect, useRef } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const testimonials = [
  {
    id: 1,
    content: "Внедрение системы автоматизации от ДиджиРесто позволило нам сократить время обслуживания клиентов на 30% и увеличить средний чек на 15%. Сотрудники быстро освоили систему и теперь работают гораздо эффективнее.",
    author: "Анна Смирнова",
    position: "Владелец ресторана «Тоскана»",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    id: 2,
    content: "Мобильное приложение, разработанное командой ДиджиРесто, помогло нам привлечь новых клиентов и сделать постоянных еще более лояльными. Заказы через приложение составляют уже 40% от всех доставок.",
    author: "Дмитрий Ковалев",
    position: "Директор сети кафе «КофеМания»",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
  },
  {
    id: 3,
    content: "Благодаря системе управления складом мы смогли минимизировать списания и оптимизировать закупки. За первые 3 месяца использования мы сэкономили около 15% на закупках при том же объеме продаж.",
    author: "Елена Петрова",
    position: "Финансовый директор «ГастроПаб»",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
  },
  {
    id: 4,
    content: "Работаем с ДиджиРесто уже 3 года. За это время они не только внедрили комплексную систему автоматизации, но и постоянно ее совершенствуют. Техподдержка всегда реагирует быстро, а новые обновления выходят регулярно.",
    author: "Сергей Иванов",
    position: "Шеф-повар ресторана «Морская волна»",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
  }
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
            elements?.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="clients" className="py-16 md:py-24 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Что говорят наши <span className="text-secondary">клиенты</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-on-scroll">
            Мы гордимся отзывами наших клиентов и постоянно совершенствуем 
            наши решения на основе их обратной связи
          </p>
        </div>

        <div className="animate-on-scroll">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2 p-4">
                  <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <Icon name="Quote" className="h-8 w-8 text-secondary/30" />
                      </div>
                      <p className="text-gray-700 mb-6">{testimonial.content}</p>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                          <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.author}</p>
                          <p className="text-sm text-gray-500">{testimonial.position}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-6">
              <CarouselPrevious className="static transform-none border-primary text-primary" />
              <CarouselNext className="static transform-none border-primary text-primary" />
            </div>
          </Carousel>
        </div>

        <div className="mt-20 animate-on-scroll">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Готовы улучшить ваш ресторанный бизнес?</h3>
                <p className="text-gray-600">
                  Запишитесь на бесплатную консультацию и узнайте, как наши технологии 
                  могут помочь вашему заведению
                </p>
              </div>
              <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap flex items-center gap-2">
                Получить консультацию
                <Icon name="ArrowRight" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
