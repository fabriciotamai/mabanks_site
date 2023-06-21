import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Pages
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
