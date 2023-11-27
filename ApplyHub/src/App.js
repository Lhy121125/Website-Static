import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';


function App() {

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:"727171404904-pm81065c6uac5c6adngnnvp8gfa110c3.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })
  

  google.accounts.id.renderButton(
    document.getElementById("signInDiv"),
    { theme: "outline", size: "large"}
  );
  
}, []);

  return (
    <div className="App">
      <div id="signInDiv"></div>
    </div>
  );
}

export default App;
