import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {Card} from './components/Card';
import {List} from './components/List';
import { Summary } from './components/Summary';
function App() {
  return (
    <>
    <Header/>
    <List/>
    <Summary/>
    <Card/>
    <Footer/>
    </>
  );
}

export default App;
