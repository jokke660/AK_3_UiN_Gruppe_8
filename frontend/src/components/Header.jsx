import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client';
import './Header.css';

const Header = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "person"]{ firstName }
         | order(firstName asc)`
      )
      .then((data) => {
        setPeople(data || []);
      })
      .catch(console.error);
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <h1>Team 8</h1>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/">Hjem</Link>
          </li>
          {people.map((person, idx) => (
            <li key={idx}>
              <Link to={`/profile/${person.firstName}`}>{person.firstName}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;