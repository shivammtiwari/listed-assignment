import './App.css';
import LoginPage from './Pages/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './Pages/DashboardPage';
import TransactionPage from './Pages/TransactionPage';
import SchedulesPage from './Pages/SchedulesPage';
import UsersPage from './Pages/UsersPage';
import SettingPage from './Pages/SettingPage';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<DashboardPage />} />
        <Route path='/transactions' element={<TransactionPage/>}/>
        <Route path='/schedules' element={<SchedulesPage/>}/>
        <Route path='/users' element={<UsersPage/>}/>
        <Route path='/setting' element={<SettingPage/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
