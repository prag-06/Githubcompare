import React, { useState } from "react";
import InputBar from "./components/InputBar/InputBar";
import ProfileCard from "./components/ProfileCard/ProfileCard";

function App() {
  const [githubData, setGithubData] = useState([]);

  async function fetchGitHubData(user) {
    const res = await fetch(`https://api.github.com/users/${user}`);
    const data = await res.json();
    setGithubData([...githubData, data]);
  }

  const handleSearch = (user) => {
    fetchGitHubData(user);
  };

  return (
    <div className="App">
      <InputBar handleSearch={handleSearch} />
      {githubData.length > 0 ? (
        githubData.map((data) => <ProfileCard data={data} />)
      ) : (
        <h1
          style={{
            textAlign: "center",
            margin: "100px auto",
          }}
        >
          Add a GitHub use to Compare them.
        </h1>
      )}
    </div>
  );
}

export default App;
