import WelcomePage from 'Pages/WelcomePage/WelcomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/welcomepage' />
        </Route>
        <Route exact path='/welcomepage' component={WelcomePage} />
      </Switch>
    </Router>
  );
}

export default App;
