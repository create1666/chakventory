import WelcomePage from 'Pages/WelcomePage/WelcomePage';
import LoginPage from 'Pages/WelcomePage/LoginPage';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import AuthLoginPage from 'Pages/WelcomePage/AuthLoginPage';
import Home from 'Pages/DashBoard/Home';

function App() {
  const [selectedCompany, setSelectedCompany] = useState({});

  return (
    <Router>
      <Routes>
        <Route
          exact
          path='/welcomepage'
          element={
            <WelcomePage
              selectedCompany={selectedCompany}
              setSelectedCompany={setSelectedCompany}
            />
          }
        />
        <Route
          exact
          path='/login'
          element={
            <LoginPage
              selectedCompany={selectedCompany}
              setSelectedCompany={setSelectedCompany}
            />
          }
        />
        <Route
          exact
          path='/authenticateUserPage'
          element={
            <AuthLoginPage
              selectedCompany={selectedCompany}
              setSelectedCompany={setSelectedCompany}
            />
          }
        />
        <Route
          exact
          path='/dashboard'
          element={
            <Home
              selectedCompany={selectedCompany}
              setSelectedCompany={setSelectedCompany}
            />
          }
        />
        <Route path='/' element={<Navigate to='/welcomepage' />} />
      </Routes>
    </Router>
  );
}

export default App;
