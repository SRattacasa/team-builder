import React, { useState } from "react";

import "./App.css";
import NoteForm from './Form'

function App() {
  const [teamState, setteamState] = useState([
    {
      id: 1,
      name: "Test",
      email: "Test@test.net",
      role: "Dev",
    }
  ]);

  const addMember = (newMember) => { 
    setteamState([...teamState, newMember])
}
  return (
    <div className="App">
      <header className="App-header">
        <NoteForm addMember={addMember} />
       
        
      </header>
    </div>
  );
}

export default App;
