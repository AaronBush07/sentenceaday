import "./App.css";

import { Container } from "@mui/material";

import AddSentence from "./components/AddSentence";
import Sentences from "./components/Sentences";
import { useSelector } from "react-redux";

function App() {

  return (
    <div className="App">
      <Container align="center">
        <h2 align="center">A Sentence a day</h2>
        <AddSentence/>
        <Sentences/>
      </Container>
    </div>
  );
}

export default App;
