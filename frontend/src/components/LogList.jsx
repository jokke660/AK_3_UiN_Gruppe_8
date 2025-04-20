import React from 'react';
import './LogList.css';

const LogList = ({ logEntries }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('no-NO', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  };

  return (
    <div className="log-list">
      {logEntries.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Dato</th>
              <th>Person</th>
              <th>Oppgave</th>
              <th>Timer</th>
            </tr>
          </thead>
          <tbody>
            {logEntries.map((entry) => (
              <tr key={entry._id} className="log-entry">
                <td>{formatDate(entry.date)}</td>
                <td>{entry.person.firstName}</td>
                <td>{entry.task}</td>
                <td>{entry.hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Ingen logginnlegg ennå.</p>
      )}
    </div>
  );
};

export default LogList;
