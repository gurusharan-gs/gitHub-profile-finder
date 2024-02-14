import { useState } from "react";

import "./App.css";
import GithubProfile from "./components/GithubProfile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GithubProfile />
    </>
  );
}

export default App;
