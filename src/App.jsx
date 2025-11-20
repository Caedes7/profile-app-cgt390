import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

import Header from './Header.jsx';
import Introduction from './Introduction.jsx';
import ProfileCard from './ProfileCard.jsx';

export default function App() {
  // Dynamic data used by JSX
  const name = 'Jeeaan Ahmmed';
  const role = 'Student • Developer • Creator';

  const links = [
    { label: 'GitHub', href: 'https://github.com/Caedes7' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com' },
  ];

  const projects = [
    {
      title: 'Profile App (CGT 390)',
      subtitle: 'React + Vite • Components & JSX',
      imgSrc: viteLogo,
      featured: true,
      body: 'A simple profile site demonstrating modular React components and dynamic JSX.',
    },
    {
      title: 'Data Viz (p5.js)',
      subtitle: 'Genre popularity vs. danceability',
      imgSrc: reactLogo,
      body: 'Interactive scatterplots and tooltips built for exploratory analysis.',
    },
    {
      title: 'UE5 Listen Mode',
      subtitle: 'Blueprints • Post-process • Traces',
      body: 'Gameplay utility inspired by The Last of Us to highlight nearby NPCs.',
    },
  ];

  return (
    <div className="container">
      <Header title="My Profile" tagline="Components • JSX • Styling" />

      <Introduction
        name={name}
        role={role}
        summary="I’m building projects across React, C (CS 240), p5.js, and Unreal Engine. This lab demonstrates reusable components, props, conditional rendering, and array mapping."
        links={links}
      />

      <section className="cards">
        {projects.map((p) => (
          <ProfileCard
            key={p.title}
            title={p.title}
            subtitle={p.subtitle}
            imgSrc={p.imgSrc}
            featured={Boolean(p.featured)}
          >
            <p>{p.body}</p>
            {/* Conditional badge */}
            {p.featured && <span className="badge">Featured</span>}
          </ProfileCard>
        ))}
      </section>

      <footer className="footer">
        <small>© {new Date().getFullYear()} {name}</small>
      </footer>
    </div>
  );
}