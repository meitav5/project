import React, { useState } from "react";
import {users} from '../data'

function Login({connectUser, returnToHomePage}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsvalid] = useState(true);

  const validateUser = (currentUser) => {
    const userComparison = (user) => (currentUser.username == user.name && currentUser.password == user.password);
    return users.some(userComparison);
  }
    
  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      username,
      password
    };

    if(validateUser(user)){
        connectUser(user);
        returnToHomePage();
    }
    else{
        setIsvalid(false);
    }
  };

  return (
    <div>
      <h1>Log-in</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="User name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">connect</button>
        {!isValid && (<div> The user information is incorrect. Check again if the username or password is correct. </div>)}
      </form>
    </div>
  );
}

export default Login;