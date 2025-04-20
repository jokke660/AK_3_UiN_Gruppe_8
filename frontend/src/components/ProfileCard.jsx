import React from 'react';
import { Link } from 'react-router-dom';
import { urlFor } from '../imageUrlBuilder';
import './ProfileCard.css';

const ProfileCard = ({ person }) => {
  return (
    <Link to={`/profile/${person.firstName}`} className="profile-card">
      {person.image && (
        <img 
          src={urlFor(person.image).width(200).url()} 
          alt={`${person.firstName} ${person.lastName}`} 
        />
      )}
      <h3>{person.firstName} {person.lastName}</h3>
      <p>{person.email}</p>
    </Link>
  );
};

export default ProfileCard;
