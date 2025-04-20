import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client';
import { urlFor } from '../imageUrlBuilder';
import LogList from '../components/LogList.jsx';
import './ProfilePage.css';

const ProfilePage = () => {
  const { firstName } = useParams();
  const [personData, setPersonData] = useState(null);
  const [logEntries, setLogEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    async function fetchData() {
      try {
        const person = await sanityClient.fetch(
          `*[_type == "person" && firstName == $firstName][0]{
            _id,
            firstName,
            lastName,
            email,
            image,
            bio,
            interests
          }`,
          { firstName }
        );
        setPersonData(person);

        if (person && person._id) {
          const logs = await sanityClient.fetch(
            `*[_type == "logEntry" && person._ref == $personId] | order(_createdAt desc){
              _id,
              task,
              hours,
              date,
              "person": person->{ firstName, lastName }
            }`,
            { personId: person._id }
          );
          setLogEntries(logs);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [firstName]);

  if (loading) {
    return <div className="loading">Laster...</div>;
  }

  if (!personData) {
    return <div className="not-found">Fant ikke bruker</div>;
  }

  return (
    <div className="profile-page">
      <div className="profile-info">
        {personData.image && (
          <div className="profile-image">
            <img
              src={urlFor(personData.image).width(300).url()}
              alt={`${personData.firstName} ${personData.lastName}`}
            />
          </div>
        )}

        <div className="profile-details">
          <h1>{personData.firstName} {personData.lastName}</h1>
          <p className="email">{personData.email}</p>

          {personData.bio && (
            <div className="bio-section">
              <h2>Biografi</h2>
              <p>{personData.bio}</p>
            </div>
          )}

          {personData.interests && personData.interests.length > 0 && (
            <div className="interests-section">
              <h2>Interesser</h2>
              <ul className="interests-list">
                {personData.interests.map((interest, index) => (
                  <li key={index}>{interest}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <section className="personal-log-section">
        <h2>Logginnlegg</h2>
        <LogList logEntries={logEntries} />
      </section>
    </div>
  );
};

export default ProfilePage;
