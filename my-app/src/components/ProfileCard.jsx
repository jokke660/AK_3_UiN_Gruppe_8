const ProfileCard = ({ member }) => {
  return (
    <div className="profile-card">
      <img src={member.image || "default-image.jpg"} alt={member.name} />
      <h3>{member.name}</h3>
      <p>{member.email}</p>
    </div>
  );
};
export default ProfileCard;