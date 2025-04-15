const GroupMembers = ({ members }) => {
    return (
      <div className="group-members">
        <h2>Gruppemedlemmer</h2>
        <div className="cards">
          {members.map((member, index) => (
            <ProfileCard key={index} member={member} />
          ))}
        </div>
      </div>
    );
  };
  
  export default GroupMembers;