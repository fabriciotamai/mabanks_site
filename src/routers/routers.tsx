import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';

export default function WebRoutes() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
