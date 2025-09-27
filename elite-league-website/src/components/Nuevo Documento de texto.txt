import React from 'react';

function Table({ teams }) {
  return (
    <section id="table" className="mb-6">
      <h2 className="text-3xl mb-4 title">Tabla de Posiciones</h2>
      <table className="w-full text-left border border-gray-700">
        <thead>
          <tr>
            <th>#</th>
            <th>Equipo</th>
            <th>G</th>
            <th>P</th>
            <th>R+</th>
            <th>R-</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={index} className="border-t border-gray-700">
              <td>{index + 1}</td>
              <td>{team.name}</td>
              <td>{team.wins}</td>
              <td>{team.losses}</td>
              <td>{team.roundsFor}</td>
              <td>{team.roundsAgainst}</td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Table;