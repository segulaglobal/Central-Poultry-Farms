// src/components/PageHero.tsx
import React from 'react';
import "./Hero.scss";

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-text">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-lg">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;