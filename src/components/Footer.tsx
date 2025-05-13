
import React from 'react';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Utensils" className="h-8 w-8 text-secondary" />
              <span className="font-montserrat text-xl font-bold">
                ДиджиРесто
              </span>
            </div>
            <p className="text-gray-300 mb-6">
              ИТ-решения для автоматизации и повышения эффективности ресторанного бизнеса.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <Icon name="Twitter" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <Icon name="Linkedin" className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Компания</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-300 hover:text-secondary transition-colors">О нас</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-secondary transition-colors">Команда</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-secondary transition-colors">Карьера</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-secondary transition-colors">Блог</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-secondary transition-colors">Контакты</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Услуги</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-300 hover:text-secondary transition-colors">Автоматизация ресторанов</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-secondary transition-colors">Мобильные приложения</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-secondary transition-colors">Управление складом</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-secondary transition-colors">Аналитика и отчеты</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-secondary transition-colors">Онлайн-бронирование</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Icon name="MapPin" className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-gray-300">г. Москва, ул. Примерная, д. 123, офис 456</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Phone" className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-gray-300">+7 (800) 123-45-67</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Mail" className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-gray-300">info@digiresto.ru</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Clock" className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-gray-300">Пн-Пт: 9:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} ДиджиРесто. Все права защищены.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-300 hover:text-secondary text-sm transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-gray-300 hover:text-secondary text-sm transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
