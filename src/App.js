import React from 'react'

import './App.css';
import Header from "./components/Header";
import Start from "./components/Start";

class App extends React.Component {
  render() {
    return (
        <div>
        <Header/>
        <Start/>
        </div>
    );
  }
}

export default App;

