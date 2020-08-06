import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdeaCard from "./components/IdeaCard/IdeaCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import IdeaModel from "./models/idea.model";
import CategoryCreator from "./components/CategoryCreator/CategoryCreator";
import IdeaTimelineHolder from "./components/IdeaTimelineHolder/IdeaTimelineHolder";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import IdeaCreator from "./containers/IdeaCreator/IdeaCreator";
import IdeaViewer from "./containers/IdeaViewer/IdeaViewer";

function App() {
  return (
    <div className="App">
        <IdeaViewer />
        <IdeaTimelineHolder />
        <IdeaTimelineHolder />
        <IdeaCreator/>

        <Fab color="primary" aria-label="add" className="Fab">
            <AddIcon />
        </Fab>
    </div>
  );
}

export default App;
