
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import SearchForm from './Components/SearchForm';
import Detail from './Components/Detail';

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Luke API Walker</h1>
        <SearchForm />
        {/* form shows in all the routes */}

        <Switch>
          {/* create params to pass dynamically  */}
          {/* extract category and id to show on details */}
          {/* import useparams */}
          <Route exact path= "/:category/:id">
            <Detail />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
