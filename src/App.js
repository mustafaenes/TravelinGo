import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes'
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <React.Fragment>
          <Navbar />
        </React.Fragment>
        <AppRoutes />
      </div>
    </Router>
  )
}

export default App;
