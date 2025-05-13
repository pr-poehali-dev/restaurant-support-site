
import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

const AboutUs = () => {
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
    <section id="about" className="py-16 md:py-24" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9" 
                alt="Наша команда" 
                className="rounded-2xl shadow-xl w-full max-w-lg mx-auto"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-[200px] animate-on-scroll">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Rocket" className="h-5 w-5 text-secondary" />
                  <span className="font-semibold text-primary">Инновации</span>
                </div>
                <p className="text-sm text-gray-600">
                  Используем передовые технологии для решения задач ресторанного бизнеса
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
              Почему <span className="text-secondary">рестораны</span> выбирают нас
            </h2>
            <p className="text-gray-600 mb-8 animate-on-scroll">
              Мы специализируемся исключительно на IT-решениях для ресторанного бизнеса. 
              Наша команда имеет более 7 лет опыта работы в этой сфере и глубокое понимание потребностей 
              ресторанов, кафе, баров и других заведений общественного питания.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-on-scroll">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <Icon name="Shield" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Надежность</h3>
                  <p className="text-gray-600">Наши решения работают 24/7 с высоким уровнем отказоустойчивости</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-50 p-3 rounded-lg">
                  <Icon name="Clock" className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Скорость</h3>
                  <p className="text-gray-600">Быстрое внедрение и минимальное время на обучение персонала</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-50 p-3 rounded-lg">
                  <Icon name="Lock" className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Безопасность</h3>
                  <p className="text-gray-600">Защита персональных данных и финансовых операций</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-50 p-3 rounded-lg">
                  <Icon name="Settings" className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Гибкость</h3>
                  <p className="text-gray-600">Индивидуальная настройка под потребности вашего заведения</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 animate-on-scroll">
              <div className="flex items-center gap-1">
                <span className="text-4xl font-bold text-primary">100+</span>
                <span className="text-gray-600 text-sm ml-1">Довольных<br />клиентов</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-4xl font-bold text-primary">7+</span>
                <span className="text-gray-600 text-sm ml-1">Лет<br />опыта</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-4xl font-bold text-primary">25+</span>
                <span className="text-gray-600 text-sm ml-1">IT<br />специалистов</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
