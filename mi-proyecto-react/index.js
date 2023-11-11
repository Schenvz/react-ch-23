import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';

function App() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Catalog} />
            <Route path="/product/:id" component={ProductDetail} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
  
ReactDOM.render(<App />, document.getElementById('root'));
