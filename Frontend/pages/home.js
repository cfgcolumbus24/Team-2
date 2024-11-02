// Home.js

import React from 'react';

function Logo() {
  return (
    <div className="flex items-center pr-16 text-4xl text-black">
      <span>Net</span>
      <span className="font-bold mx-1">2</span>
      <span>Connect</span>
    </div>
  );
}

function Navigation() {
  const navItems = [
    { label: 'Home', isSelected: true },
    { label: 'About Us', isSelected: false },
    { label: 'Mission Statement', isSelected: false },
  ];

  return (
    <nav className="flex gap-8 items-center">
      {navItems.map((item, index) => (
        <div key={index} className="relative">
          <span className={`text-lg ${item.isSelected ? 'font-semibold text-blue-600' : 'text-gray-700'}`}>
            {item.label}
          </span>
          {item.isSelected && (
            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-400 rounded"></div>
          )}
        </div>
      ))}
    </nav>
  );
}

function LoginButton() {
  return (
    <button className="px-6 py-2 bg-blue-400 text-white text-lg font-semibold rounded-lg shadow-sm">
      Login
    </button>
  );
}

function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-10 bg-gray-100 border-b border-gray-200">
      <Logo />
      <Navigation />
      <LoginButton />
    </header>
  );
}

function WelcomeSection() {
  return (
    <section className="flex items-center px-10 py-8">
      <h1 className="text-4xl font-light text-gray-800 mr-4">
        Welcome <span className="font-bold">Healthcare Professionals</span>
      </h1>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/13c0fa98656ac2c7b478182d37cbfea39bf34973fb3bd0ccbe05ef68a682a8db?placeholderIfAbsent=true&apiKey=3af56025b38749d98683438840135508"
        alt="Stethoscope Icon"
        className="w-8"  
      />
    </section>
  );
}

function FeatureItem({ title, image, text }) {
  return (
    <div className="flex items-center mb-8">
      <img
        src={image}
        alt={title}
        className="w-48 h-48 object-cover rounded-lg shadow-lg mr-6"
      />
      <div className="text-base font-normal text-gray-700">{text}</div> {/* Adjusted font size and weight */}
    </div>
  );
}

function FeatureSection() {
  const features = [
    { title: 'Review Patient Data on the Go', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bcd3c1475acaf8d1cfc9c3e0f9612131334e78dc806ac9e6f7c061252e249e61?placeholderIfAbsent=true&apiKey=3af56025b38749d98683438840135508', text: 'Review Patient Data on the Go' },
    { title: 'Connecting Multiple Databases', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0e60f4c9120aba58c80300b6a81d73308a765cbe4072409c085d60f786412202?placeholderIfAbsent=true&apiKey=3af56025b38749d98683438840135508', text: 'Connecting Multiple Databases' },
    { title: 'Quickly and Securely find Patient Information', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a19852d42154e96c80db621913a529275735a184d851b0691a11c81116e57e42?placeholderIfAbsent=true&apiKey=3af56025b38749d98683438840135508', text: 'Quickly and Securely find Patient Information' },
    { title: 'Healthcare for the Future', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f2c4b8042cf3ecf147582ba128c05beaa7e61765a47d8c59e28339b257348846?placeholderIfAbsent=true&apiKey=3af56025b38749d98683438840135508', text: 'Healthcare for the Future' },
  ];

  return (
    <section className="grid grid-cols-2 gap-8 px-10">
      {features.map((feature, index) => (
        <FeatureItem key={index} title={feature.title} image={feature.image} text={feature.text} />
      ))}
    </section>
  );
}

function MainContent() {
  return (
    <main className="bg-white">
      <WelcomeSection />
      <FeatureSection />
    </main>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <MainContent />
    </div>
  );
}

export default Home;
