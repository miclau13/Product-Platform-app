import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import ImportDataCard from './components/ImportDataCard';
import SearchCard from './components/SearchCard';
import TreatmentCard from './components/TreatmentCard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* <Route path="/search">
            <SearchCard />
          </Route>
          <Route path="/treatment">
            <TreatmentCard />
          </Route> */}
          <Route path="/import_data">
            <ImportDataCard />
          </Route>
          <Route path="/">
            <ImportDataCard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
