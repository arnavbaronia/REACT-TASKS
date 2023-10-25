import React from 'react';
import './App.css';

const profiles = [
  {
    id: 1,
    firstName: "Terry",
    lastName: "Medhurst",
    gender: "male",
    email: "atuny0@sohu.com",
    username: "atuny0",
    domain: "slashdot.org",
    ip: "117.29.86.254",
    university: "Capitol University",
    image: "https://robohash.org/hicveldicta.png",
  },
  {
    id: 2,
    firstName: "Sheldon",
    lastName: "Quigley",
    gender: "male",
    email: "hbingley1@plala.or.jp",
    username: "hbingley1",
    domain: "51.la",
    ip: "253.240.20.181",
    university: "Stavropol State Technical University",
    image: "https://robohash.org/doloremquesintcorrupti.png",
  },
  {
    id: 3,
    firstName: "Terrill",
    lastName: "Hills",
    gender: "male",
    email: "rshawe2@51.la",
    username: "rshawe2",
    domain: "example.com",
    ip: "117.29.86.254",
    university: "Capitol University",
    image: "https://robohash.org/consequunturautconsequatur.png",
  },
  // Add more profiles here...
];

function App() {
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Profile Pic</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>E-mail</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile, index) => (
            <tr key={profile.id}>
              <td>{index + 1}</td>
              <td>
                <img src={profile.image} alt="Profile Pic" style={{ maxWidth: '50px' }} />
              </td>
              <td>{profile.firstName}</td>
              <td>{profile.lastName}</td>
              <td>{profile.gender}</td>
              <td>{profile.email}</td>
              <td>{profile.username}</td>
              <td>{profile.domain}</td>
              <td>{profile.ip}</td>
              <td>{profile.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
