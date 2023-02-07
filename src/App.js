import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import LayoutPage from './components/LayoutPage';
import HomePage from 'pages/HomePage';
import './assets/scss/app.scss';

function App() {
  return (
    <div className="App">
      <LayoutPage>
        <HomePage />
      </LayoutPage>
    </div>
  );
}

export default App;
