import './App.css';

import Header from './Header.jsx';
import Introduction from './Introduction.jsx';
import ProfileCard from './ProfileCard.jsx';
import reactLogo from './assets/react.svg';

export default function App() {
  const navLinks = ['Home', 'About', 'Profiles'];

  const aboutText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  const profiles = [
    {
      name: 'John Doe',
      role: 'Web developer',
      imgSrc: reactLogo,
      featured: true,
    },
    {
      name: 'Eva Smith',
      role: 'UX designer',
      imgSrc: reactLogo,
      featured: false,
    },
  ];

  const appClass = 'app'; // dynamic className example

  return (
    <div className={appClass}>
      {/* Header with navigation */}
      <Header title="Profile App" links={navLinks} />

      <main className="main">
        {/* Introduction / About section */}
        <Introduction title="About" summary={aboutText} />

        {/* Profile cards created with array mapping */}
        <section className="cards">
          {profiles.map((p) => (
            <ProfileCard
              key={p.name}
              name={p.name}
              role={p.role}
              imgSrc={p.imgSrc}
              featured={p.featured}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
