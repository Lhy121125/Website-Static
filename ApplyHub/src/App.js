import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import { jwtDecode } from 'jwt-decode';


function App() {
  //const { user, setUser} = useState({});
  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:"727171404904-pm81065c6uac5c6adngnnvp8gfa110c3.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

  google.accounts.id.renderButton(
    document.getElementById("signInDiv"),
    { theme: "outline", size: "large"}
  );
}, []);
  // If we have no user, we show sign in button
  // If we have a user, we show the sign-out button
  return (
    <div className="App">
      <div id="signInDiv"></div>
      { Object.keys(user).length != 0 &&
          <button onClick={ (e) => handleSignOut(e)}>Sign Out</button>
      }

      { user &&
          <div>
            <img src={user.picture}></img>
            <h3>{user.name}</h3>
          </div>
      }
    </div>
  );
}

export default App;
