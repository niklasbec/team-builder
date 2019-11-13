import React, { useState } from 'react';
import './App.css';
import Form from './Form'

function App() {
  const [teamMember, newTeamMember] = useState({
    name: '',
    email: '',
    select: null
  })
 

  return (
    <div className="App">
      <h1>Hello</h1>
      <Form teamMember={teamMember} newTeamMember={newTeamMember} />
      <p>{teamMember.name}</p>
    </div>
  );
}

export default App;
