import React, { useState } from "react";

const NoteForm = props => {
        const [teamlist, setteamlist] = useState({
            name: "",
            email: "",
            role: "",
        })
    
 const changeHandler = e => {
     setteamlist({
        ...teamlist,
        [e.target.name]: e.target.value,
     }) 
 }



  return (
    <div className="Form">
      
      <form onSubmit={e => {
          e.preventDefault();
          props.addMember(teamlist)
          console.log(teamlist)
          setteamlist({name: "", email: "", role: ""})
      }}>
          <p>
              <input id='name' type='text' name="name" placeholder="Please enter your name" value={teamlist.name} onChange={changeHandler}/>
              <input id='email' type='email' name="email" placeholder="Enter your email" value={teamlist.email} onChange={changeHandler} />
              <input id='role' type='text' name="role" placeholder="Enter your job role" value={teamlist.role} onChange={changeHandler} />
        </p>
        <p>
            <button type='submit'>Click to add team member</button>
        </p>
      </form>
    <p>Team List</p>
    
    </div>
  );
}

export default NoteForm;
