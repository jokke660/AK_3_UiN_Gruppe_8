import React, { useEffect, useState } from "react";
import sanityClient from "./sanityClient"; // Importer Sanity-klienten
import GroupMembers from "./GroupMembers"; // Importer komponenten

const App = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // Henter data fra Sanity
    sanityClient.fetch(`*[_type == "groupMember"]`).then((data) => {
      setMembers(data);
    });
  }, []);

  return (
    <div className="app-container">
      <h1>Velkommen til Medlemsoversikten</h1>
      <GroupMembers members={members} /> {/* Bruker komponenten her */}
    </div>
  );
};

export default App;