import logo from './logo.svg';
import './App.css';
import './assets/styles/style.scss'
import Landing from './pages/landing/landing';
import Login from './pages/login/login';
import UserDetails from './pages/userDetails/userDetails';
import Users from './pages/users/users';
import Notfound from './pages/notfound/notfound';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import UsersList from './pages/usersList/usersList';


function App() {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/users' element={<Users/>}/>
      <Route path="/usersList" element={<UsersList/>}/>
      <Route path='/userDetails/:id' element={<UserDetails/>}/>
      {/* <Route path='/users/:id' element={<UserDetails/>}/> */}
      <Route path='*' element={<Notfound/>}/>
    </Routes>
    </div>
  );
}

export default App;
