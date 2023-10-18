import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import { PokemonProvider } from './PokemonContext';

function App() {
  return (
    <PokemonProvider>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Page 1</Link>
              </li>
              <li>
                <Link to="/page2">Page 2</Link>
              </li>
            </ul>
          </nav>
          <Route exact path="/" component={FirstPage} />
          <Route path="/page2" component={SecondPage} />
        </div>
      </Router>
    </PokemonProvider>
  );
}

export default App;
