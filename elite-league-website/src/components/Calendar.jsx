import React from 'react';

function Calendar({ matches }) {
  return (
    <section id="calendar" className="mb-6">
      <h2 className="text-3xl mb-4 title">Calendario de Partidos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {matches.map((match, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded shadow">
            <p className="font-title">{match.teamA} vs {match.teamB}</p>
            <p>Fecha: {match.date}</p>
            <p>Hora: {match.time}</p>
            <p>Resultado: {match.score || "Pendiente"}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Calendar;