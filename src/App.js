import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage'
import UserProfile from './components/UserProfile';
import RepositoryList from './components/RepositoryList';
import WrongPath from './components/WrongPath'


function App() {

  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" exact element={<LandingPage/>} />
        <Route path="/user/:username" exact element={<UserProfile/>} />
        <Route path="/user/:username/repositories" element={<RepositoryList/>} />
        <Route path="*" element={<WrongPath/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
