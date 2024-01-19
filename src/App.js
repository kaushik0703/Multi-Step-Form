import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MultiStepForm from './components/MultiStepForm';
import SuccessPage from './components/SuccessPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MultiStepForm/>} />
        <Route exact path="/success" element={<SuccessPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
