import React from 'react';
import Header from './components/Header'
import Nav from './components/Nav'
import './App.css';
import Body from './components/Body';
import Customers from './components/CustomerTable'
import Availables from './components/AvailablesTable'
import { Container } from 'semantic-ui-react';


function App() {
  return (
    <Container fluid style={{ backgroundColor: '#f9faf4' }}>
      <Header />
      <div style={{ backgroundColor: '#fff' }}>
        <Nav />
      </div>
      <Body />
      <Customers />
      <Availables />
    </Container>
  );
}

export default App;
