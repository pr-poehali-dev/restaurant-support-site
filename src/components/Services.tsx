
import React, { useEffect, useRef } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
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
    <section id="services" className="py-16 md:py-24 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Наши <span className="text-secondary">IT-решения</span> для ресторанов
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-on-scroll">
            Мы предлагаем комплексные технологические решения, которые упрощают управление
            рестораном и повышают эффективность бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="animate-on-scroll">
            <ServiceCard
              title="Системы автоматизации"
              description="Полностью интегрированные POS-системы для приема заказов, управления столиками и работы с персоналом"
              icon="Store"
              iconBg="bg-blue-50"
              iconColor="text-primary"
            />
          </div>

          <div className="animate-on-scroll">
            <ServiceCard
              title="Мобильные приложения"
              description="Создание мобильных приложений для заказа еды, бронирования столиков и программ лояльности"
              icon="Smartphone"
              iconBg="bg-orange-50"
              iconColor="text-secondary"
            />
          </div>

          <div className="animate-on-scroll">
            <ServiceCard
              title="Управление складом"
              description="Автоматизация учета ингредиентов, управления запасами и контроля сроков годности"
              icon="BarChart3"
              iconBg="bg-green-50"
              iconColor="text-green-600"
            />
          </div>

          <div className="animate-on-scroll">
            <ServiceCard
              title="Онлайн-бронирование"
              description="Системы для бронирования столиков через сайт, интеграция с популярными агрегаторами"
              icon="Calendar"
              iconBg="bg-purple-50"
              iconColor="text-purple-600"
            />
          </div>

          <div className="animate-on-scroll">
            <ServiceCard
              title="Аналитика и отчеты"
              description="Бизнес-аналитика, отчеты о продажах, анализ эффективности меню и работы персонала"
              icon="PieChart"
              iconBg="bg-red-50"
              iconColor="text-red-500"
            />
          </div>

          <div className="animate-on-scroll">
            <ServiceCard
              title="Интеграция с CRM"
              description="Управление отношениями с клиентами, программы лояльности и маркетинговые кампании"
              icon="Users"
              iconBg="bg-indigo-50"
              iconColor="text-indigo-600"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
