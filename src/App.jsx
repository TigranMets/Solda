import { Routes, Route } from "react-router-dom";
import AuthorizationLayout from "./layouts/AuthorizationLayout";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Login";
import { Vending } from "./pages/Vending/Vending";
import Restore from "./pages/Restore";
import MainPage from "./pages/MainPage/MainPage";
import Automata from "./pages/Automata/Automata";

function App() {
  return (
    <Routes>
      <Route element={<AuthorizationLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/login/restore" element={<Restore />} />
      </Route>
      {/* <Route path="/" element={<MainPage />} /> */}
      <Route path="create_automata" element={<Vending />} />
      <Route path="/automata" element={<Automata />} />
      <Route index element={<MainLayout />}></Route>
    </Routes>
  );
}

export default App;
