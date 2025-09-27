import React, { useState } from 'react';

function AdminForm({ setTeams, setMatches }) {
  const [teamName, setTeamName] = useState('');
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [roundsFor, setRoundsFor] = useState(0);
  const [roundsAgainst, setRoundsAgainst] = useState(0);

  const [matchTeamA, setMatchTeamA] = useState('');
  const [matchTeamB, setMatchTeamB] = useState('');
  const [matchDate, setMatchDate] = useState('');
  const [matchTime, setMatchTime] = useState('');
  const [matchScore, setMatchScore] = useState('');

  const addTeam = () => {
    setTeams(prev => [...prev, {
      name: teamName,
      wins: Number(wins),
      losses: Number(losses),
      roundsFor: Number(roundsFor),
      roundsAgainst: Number(roundsAgainst),
      points: Number(wins) * 3
    }]);
    setTeamName(''); setWins(0); setLosses(0); setRoundsFor(0); setRoundsAgainst(0);
  };

  const addMatch = () => {
    setMatches(prev => [...prev, {
      teamA: matchTeamA,
      teamB: matchTeamB,
      date: matchDate,
      time: matchTime,
      score: matchScore
    }]);
    setMatchTeamA(''); setMatchTeamB(''); setMatchDate(''); setMatchTime(''); setMatchScore('');
  };

  return (
    <section className="mb-6">
      <h2 className="text-3xl mb-4 title">Administración</h2>
      <div className="mb-4 p-4 bg-gray-800 rounded">
        <h3 className="mb-2 font-title">Agregar Equipo</h3>
        <input placeholder="Nombre" value={teamName} onChange={e=>setTeamName(e.target.value)} className="p-1 mr-2"/>
        <input placeholder="G" type="number" value={wins} onChange={e=>setWins(e.target.value)} className="p-1 mr-2 w-16"/>
        <input placeholder="P" type="number" value={losses} onChange={e=>setLosses(e.target.value)} className="p-1 mr-2 w-16"/>
        <input placeholder="R+" type="number" value={roundsFor} onChange={e=>setRoundsFor(e.target.value)} className="p-1 mr-2 w-16"/>
        <input placeholder="R-" type="number" value={roundsAgainst} onChange={e=>setRoundsAgainst(e.target.value)} className="p-1 mr-2 w-16"/>
        <button onClick={addTeam} className="bg-accent text-white px-2 py-1 rounded">Agregar</button>
      </div>
      <div className="p-4 bg-gray-800 rounded">
        <h3 className="mb-2 font-title">Agregar Partido</h3>
        <input placeholder="Equipo A" value={matchTeamA} onChange={e=>setMatchTeamA(e.target.value)} className="p-1 mr-2"/>
        <input placeholder="Equipo B" value={matchTeamB} onChange={e=>setMatchTeamB(e.target.value)} className="p-1 mr-2"/>
        <input placeholder="Fecha" type="date" value={matchDate} onChange={e=>setMatchDate(e.target.value)} className="p-1 mr-2"/>
        <input placeholder="Hora" type="time" value={matchTime} onChange={e=>setMatchTime(e.target.value)} className="p-1 mr-2"/>
        <input placeholder="Resultado" value={matchScore} onChange={e=>setMatchScore(e.target.value)} className="p-1 mr-2"/>
        <button onClick={addMatch} className="bg-accent text-white px-2 py-1 rounded">Agregar</button>
      </div>
    </section>
  );
}

export default AdminForm;