// import logo from './logo.svg';
import './App.css';
// import TestComponent from './components/testComponent';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import EmployeeComponent from './components/EmployeeComponent';
// import FooterComponent from './components/FooterComponent';
import { Box } from '@mui/system';

function App() {
  return (
    <React.Fragment>
      <Box display="grid" gridTemplateColumns="repeat(12,fr)" gap={2}>
        <Router>
          <Box gridColumn="span 8">
            <HeaderComponent/>
          </Box>
         <Box sx={{marginTop:'65px'}}>
           <Routes>
              <Route path="/" element={<ListEmployeeComponent/>}></Route>
              <Route path="/view-employee/:id" element={<ViewEmployeeComponent/>}></Route>
              <Route path="/add-employee/_add" element={<EmployeeComponent/>}></Route>
          </Routes>
        </Box>
        </Router>
      </Box>
    </React.Fragment>
  );
}

export default App;