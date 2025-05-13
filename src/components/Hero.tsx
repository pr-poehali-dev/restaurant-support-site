
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Декоративный фон */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-blue-50/50 to-transparent transform rotate-6 translate-x-1/4 translate-y-[-10%] rounded-3xl" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-orange-50/50 to-transparent transform -rotate-6 translate-x-[-20%] translate-y-[10%] rounded-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text leading-tight">
              IT-решения <br /> для ресторанного бизнеса
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
              Мы помогаем ресторанам и кафе автоматизировать процессы, 
              увеличить продажи и улучшить обслуживание клиентов с помощью 
              современных технологий
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-primary text-white hover:bg-primary/90 text-base py-6">
                Наши решения
                <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white text-base py-6">
                Получить консультацию
              </Button>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-6 sm:gap-12 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="bg-green-100 p-2 rounded-full">
                  <Icon name="Check" className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">7+ лет опыта</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-green-100 p-2 rounded-full">
                  <Icon name="Check" className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">100+ клиентов</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-green-100 p-2 rounded-full">
                  <Icon name="Check" className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">24/7 поддержка</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full max-w-lg mx-auto animate-float">
              <img 
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591" 
                alt="Автоматизация ресторана" 
                className="rounded-2xl shadow-xl mx-auto"
              />
              <div className="absolute -top-4 -right-4 bg-white p-3 rounded-lg shadow-lg">
                <Icon name="Wifi" className="h-6 w-6 text-secondary" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-lg shadow-lg">
                <Icon name="ListChecks" className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
