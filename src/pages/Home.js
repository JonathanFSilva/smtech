import React from 'react';

import ServiceCard from '../components/ServiceCard';

import { services } from '../variables';

const Home = () => (
  <>
    <section className="heading">
      <h1>SMTech</h1>
      <h2>Conectamos você ao seu público!</h2>
    </section>

    <section id="services">
      <div className="section-title">
        <h1>O que podemos fazer por você?</h1>
      </div>
      <div className="section-content">
        {services.map((service, key) => (
          <ServiceCard
            key={key}
            serviceIcon={service.icon}
            serviceTitle={service.title}
            serviceDescription={service.description}
          />
        ))}

        {/* <ServiceCard
          serviceIcon="fas fa-desktop fa-3x"
          serviceTitle="Aplicações Web"
          serviceDescription="Criação de Web Sites exclusivos, dinâmicos e modernos. Aumente
                as possibilidades de negócio com um site bonito, bem
                apresentável que convença seus clientes que a seu negócio é a
                melhor opção para eles."
        />
        <ServiceCard
          serviceIcon="fas fa-desktop fa-3x"
          serviceTitle="Aplicações Web"
          serviceDescription="Criação de Web Sites exclusivos, dinâmicos e modernos. Aumente
                as possibilidades de negócio com um site bonito, bem
                apresentável que convença seus clientes que a seu negócio é a
                melhor opção para eles."
        /> */}
      </div>
    </section>
  </>
);

export default Home;
