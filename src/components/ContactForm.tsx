
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { toast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Здесь будет логика отправки формы на сервер
    // Имитируем задержку сервера
    setTimeout(() => {
      toast({
        title: "Заявка отправлена",
        description: "Мы свяжемся с вами в ближайшее время",
      });
      setIsSubmitting(false);
      setFormState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Свяжитесь с <span className="text-secondary">нами</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Готовы начать преобразование вашего ресторанного бизнеса? 
              Заполните форму, и наши специалисты свяжутся с вами для обсуждения 
              ваших потребностей и предложения оптимального решения.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Ваше имя *
                  </label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="Иван Иванов" 
                    required
                    value={formState.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email *
                  </label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="ivan@example.com" 
                    required
                    value={formState.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Телефон
                  </label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    placeholder="+7 (999) 123-45-67"
                    value={formState.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Название заведения
                  </label>
                  <Input 
                    id="company" 
                    name="company" 
                    placeholder="Ресторан «Название»"
                    value={formState.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Сообщение *
                </label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Расскажите о вашем проекте или задайте вопрос" 
                  rows={5}
                  required
                  value={formState.message}
                  onChange={handleChange}
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
                    Отправка...
                  </>
                ) : (
                  "Отправить сообщение"
                )}
              </Button>
            </form>
          </div>

          <div className="w-full lg:w-1/2 bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-6">Наши контакты</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon name="MapPin" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Адрес</h4>
                  <p className="text-gray-600">г. Москва, ул. Примерная, д. 123, офис 456</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <Icon name="Phone" className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Телефон</h4>
                  <p className="text-gray-600">+7 (800) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Icon name="Mail" className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Email</h4>
                  <p className="text-gray-600">info@digiresto.ru</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Icon name="Clock" className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Режим работы</h4>
                  <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4">Мы в социальных сетях</h3>
              <div className="flex gap-4">
                <a href="#" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
                  <Icon name="Facebook" className="h-5 w-5 text-blue-600" />
                </a>
                <a href="#" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
                  <Icon name="Instagram" className="h-5 w-5 text-pink-600" />
                </a>
                <a href="#" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
                  <Icon name="Twitter" className="h-5 w-5 text-blue-400" />
                </a>
                <a href="#" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
                  <Icon name="Linkedin" className="h-5 w-5 text-blue-800" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
