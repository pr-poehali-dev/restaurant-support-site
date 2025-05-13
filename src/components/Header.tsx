
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Icon name="Utensils" className="h-8 w-8 text-secondary" />
          <span className="font-montserrat text-xl font-bold text-primary">
            ДиджиРесто
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#services">Услуги</NavLink>
          <NavLink href="#about">О нас</NavLink>
          <NavLink href="#clients">Клиенты</NavLink>
          <NavLink href="#contact">Контакты</NavLink>
        </nav>

        <div className="hidden md:flex gap-4 items-center">
          <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
            Войти
          </Button>
          <Button className="bg-primary text-white hover:bg-primary/90">
            Связаться
          </Button>
        </div>

        <button 
          className="md:hidden flex items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Icon 
            name={isMobileMenuOpen ? "X" : "Menu"} 
            className="h-6 w-6 text-primary" 
          />
        </button>
      </div>

      {/* Мобильное меню */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <MobileNavLink href="#services" onClick={() => setIsMobileMenuOpen(false)}>
              Услуги
            </MobileNavLink>
            <MobileNavLink href="#about" onClick={() => setIsMobileMenuOpen(false)}>
              О нас
            </MobileNavLink>
            <MobileNavLink href="#clients" onClick={() => setIsMobileMenuOpen(false)}>
              Клиенты
            </MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              Контакты
            </MobileNavLink>
            <div className="flex gap-4 mt-2">
              <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white">
                Войти
              </Button>
              <Button className="w-full bg-primary text-white hover:bg-primary/90">
                Связаться
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a
      href={href}
      className="text-gray-700 hover:text-secondary font-medium transition-colors"
    >
      {children}
    </a>
  );
};

const MobileNavLink = ({ 
  href, 
  children, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <a
      href={href}
      className="text-gray-700 hover:text-secondary font-medium py-2 border-b border-gray-100 transition-colors"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Header;
