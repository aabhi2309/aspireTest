import React from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import './index.css';
import CardPage from './components/cardPage';


function App() {
  return (
    <div className="flex">
      <Sidebar/>
      <CardPage/>
    </div>
  );
}

export default App;
