import CategoryCard from '../components/CategoryCard'; // Componenta pentru cardurile de categorie
import Footer from '../components/Footer';
import Header from '../components/Header';
import React from 'react';

function HomePage() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Header />
      <section className="text-center py-12 bg-gradient-to-b from-gray-900 to-gray-950">
        <h2 className="text-3xl font-semibold mb-4">Conținut video românesc, fără reclame</h2>
        <p className="mb-6 text-gray-300">Auto, educație, călătorii, gătit, pescuit, imobiliare, educație financiară</p>
        <div className="flex justify-center gap-4">
          <button className="bg-yellow-400 text-black px-6 py-2 rounded font-semibold">Explorează gratuit</button>
          <button className="border border-yellow-400 px-6 py-2 rounded text-yellow-400">Devino susținător</button>
        </div>
      </section>

      <section className="px-4 py-8">
        <h3 className="text-xl font-bold mb-4">Categorii populare</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {['Auto', 'Educație', 'Gătit', 'Pescuit', 'Călătorii', 'Imobiliare', 'Educație financiară'].map((cat) => (
            <CategoryCard key={cat} category={cat} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;
