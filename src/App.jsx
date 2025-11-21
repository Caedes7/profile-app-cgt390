import './App.css';
import reactLogo from './assets/react.svg';

import Header from './header.jsx';
import Introduction from './Introduction.jsx';
import ProfileCard from './ProfileCard.jsx';

export default function App() {
  const aboutText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  const profiles = [
    {
      name: 'John Doe',
      role: 'Web developer',
      imgSrc: reactLogo,
    },
    {
      name: 'Eva Smith',
      role: 'UX designer',
      imgSrc: reactLogo,
    },
  ];

  return (
    <>
      <Header title="Profile App" />

      <main className="main">
        <Introduction summary={aboutText} />

        <section className="cards">
          {profiles.map((p) => (
            <ProfileCard
              key={p.name}
              title={p.name}
              subtitle={p.role}
              imgSrc={p.imgSrc}
            />
          ))}
        </section>
      </main>
    </>
  );
}
