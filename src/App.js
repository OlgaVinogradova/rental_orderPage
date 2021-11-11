import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import LocationPage from './pages/OrderPage/LocationPage';
import ModelFetch from './pages/OrderPage/ModelFetch';
import Options from './pages/OrderPage/Options';
import Subtotal from './pages/OrderPage/Subtotal';
import OrderBlank from './pages/OrderPage/OrderBlank';

function App() {

  return (
    <div className='wrapper'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/location' exact component={LocationPage} />
          <Route path='/model' component={ModelFetch} />
          <Route path='/option' component={Options} />
          <Route path='/subtotal' component={Subtotal} />
          <Route path='/orderBlank' component={OrderBlank} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;