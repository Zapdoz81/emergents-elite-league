import React, { useState } from 'react';
import Table from './components/Table';
import Calendar from './components/Calendar';
import Header from './components/Header';
import AdminForm from './components/AdminForm';

function App() {
  const [teams, setTeams] = useState([]);
  const [matches, setMatches] = useState([]);

  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-4xl mb-6 title text-accent">Elite League</h1>
        <Table teams={teams} />
        <Calendar matches={matches} />
        <AdminForm setTeams={setTeams} setMatches={setMatches} />
      </main>
    </div>
  );
}

export default App;