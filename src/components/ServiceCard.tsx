
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { LucideProps } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  iconBg?: string;
  iconColor?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon,
  iconBg = "bg-blue-50",
  iconColor = "text-primary" 
}) => {
  return (
    <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover-scale h-full">
      <CardHeader>
        <div className={`${iconBg} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
          <Icon name={icon} className={`h-6 w-6 ${iconColor}`} />
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <CardDescription className="text-gray-500 mt-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <Icon name="Check" className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
            <span className="text-gray-600">Индивидуальная настройка</span>
          </li>
          <li className="flex items-start gap-2">
            <Icon name="Check" className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
            <span className="text-gray-600">Интеграция с вашими системами</span>
          </li>
          <li className="flex items-start gap-2">
            <Icon name="Check" className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
            <span className="text-gray-600">Техническая поддержка</span>
          </li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full border-gray hover:border-secondary">
          Подробнее
          <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
