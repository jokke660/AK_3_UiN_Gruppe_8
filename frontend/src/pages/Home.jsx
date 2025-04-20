import React, { useState, useEffect } from 'react';
import sanityClient from '../client';
import ProfileCard from '../components/ProfileCard';
import LogList from '../components/LogList';
import './Home.css';

const Home = () => {
  const [people, setPeople] = useState([]);
  const [logEntries, setLogEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const peopleData = await sanityClient.fetch(
          `*[_type == "person"]{
            _id,
            firstName,
            lastName,
            email,
            image
          }`
        );
        setPeople(peopleData);

        const logEntriesData = await sanityClient.fetch(
          `*[_type == "logEntry"] | order(_createdAt desc){
            _id,
            task,
            hours,
            date,
            _createdAt,
            person->{
              firstName,
              lastName
            }
          }`
        );
        setLogEntries(logEntriesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home-container">
      <section className="profile-section">
        <h2>Gruppemedlemmer</h2>
        {loading ? (
          <p>Loading</p>
        ) : (
          <div className="profile-grid">
            {people.map((person) => (
              <ProfileCard key={person._id} person={person} />
            ))}
          </div>
        )}
      </section>

      <section className="log-section">
        <h2>Arbeidslogg</h2>
        {loading ? (
          <p>Loading</p>
        ) : (
          <LogList logEntries={logEntries} />
        )}
      </section>
    </div>
  );
};

export default Home;
