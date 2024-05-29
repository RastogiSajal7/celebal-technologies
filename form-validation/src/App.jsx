import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './pages/Form.jsx';
import Show from './pages/Show.jsx';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/show" element={<Show />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;