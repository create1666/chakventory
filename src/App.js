import WelcomePage from 'Pages/WelcomePage/WelcomePage.jsx';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/welcomepage' element={<WelcomePage />} />
        <Route path='/' element={<Navigate to='/welcomepage' />} />
      </Routes>
    </Router>
  );
}

export default App;
