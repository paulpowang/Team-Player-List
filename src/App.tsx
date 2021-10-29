import React, { useState } from "react";
import List from "./components/List";

import "./App.css";

interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      url: "",
      age: 36,
      note: "Allegeric to staying on the same team",
    },
    {
      name: "Kobe James",
      url: "",
      age: 36,
    },
  ]);

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people} />
    </div>
  );
}

export default App;
