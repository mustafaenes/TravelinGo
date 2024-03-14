import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes'
import Navbar from './components/Navbar';
import { Divider } from '@mui/material';

function App() {
  return (
    <Router>
      <div>
        <React.Fragment>
          <Navbar />
          <Divider />
        </React.Fragment>
        <AppRoutes />
      </div>
    </Router>
  )
}

export default App;
