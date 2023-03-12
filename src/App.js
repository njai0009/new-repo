import { useState } from 'react'
import axios from "axios";
//import logo from './logo.svg';
import './App.css';

// function App() {

//    // new line start
//   const [profileData, setProfileData] = useState(null)

//   function getData() {
//     axios({
//       method: "GET",
//       url:"/profile",
//     })
//     .then((response) => {
//       const res =response.data
//       setProfileData(({
//         profile_name: res.name,
//         about_me: res.about}))
//     }).catch((error) => {
//       if (error.response) {
//         console.log(error.response)
//         console.log(error.response.status)
//         console.log(error.response.headers)
//         }
//     })}
//     //end of new line 

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>

//         <p>To get your profile details: </p><button onClick={getData}>Click me</button>
//         {profileData && <div>
//               <p>Profile name: {profileData.profile_name}</p>
//               <p>About me: {profileData.about_me}</p>
//             </div>
//         }
//       </header>
//     </div>
//   );
// }
function App() {
  const [inputValue, setInputValue] = useState('');
  const [flaskResponse, setFlaskResponse] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('inputValue', inputValue);
    axios.post('/profile', formData)
      .then(response => {
        setFlaskResponse(response.data.response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Input Value:
          <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>Flask Response: {flaskResponse}</p>
    </div>
  );
}

export default App;