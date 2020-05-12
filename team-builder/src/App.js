import React, { useState } from "react";

import "./App.css";
import NoteForm from "./Form";
import List from "./List"

function App() {
  const [teamState, setteamState] = useState([
    {
      id: 1,
      name: "Test",
      email: "Test@test.net",
      role: "Dev",
    },
  ]);

  const addMember = (newMember) => {
    setteamState([...teamState, newMember]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <NoteForm addMember={addMember} />
        <List list={teamState}/> 
      </header>
    </div>
  );
}

export default App;
