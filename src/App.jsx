import { Routes, Route } from 'react-router-dom';
import AuthorizationLayout from './layouts/AuthorizationLayout';
import MainLayout from './layouts/MainLayout';
import Login from './pages/Login';
import Restore from './pages/Restore';

function App() {
  return (
    <Routes>
      <Route element={<AuthorizationLayout />}>
        <Route path='/login' element={<Login />} />
        <Route path='/login/restore' element={<Restore />} />
      </Route>
      <Route index element={<MainLayout />}></Route>
    </Routes>
  );
}

export default App;
