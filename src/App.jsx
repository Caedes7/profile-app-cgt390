import './App.css';

import Header from './header.jsx';
import Introduction from './Introduction.jsx';
import ProfileCard from './ProfileCard.jsx';
import CardWrapper from './CardWrapper.jsx';
import reactLogo from './assets/react.svg';
import man from './assets/man-art.png';
import woman from './assets/woman-art.png';

export default function App() {
  const navLinks = ['Home', 'About', 'Profiles'];

  const aboutText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  const profiles = [
    {
      name: 'John Doe',
      role: 'Web developer',
      imgSrc: man,
    },
    {
      name: 'Eva Smith',
      role: 'UX designer',
      imgSrc: woman,
    },
  ];

  return (
    <div className="app">
      <Header title="Profile App" links={navLinks} />

      <main className="main">
        <Introduction title="About" summary={aboutText} />

        <CardWrapper title="Profiles">
          {profiles.map((p) => (
            <ProfileCard
              key={p.name}
              name={p.name}
              role={p.role}
              imgSrc={p.imgSrc}
            />
          ))}
        </CardWrapper>
      </main>
    </div>
  );
}
