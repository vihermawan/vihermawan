import React from 'react';
import Routers from '../common/router/router';
import {history} from '../common/router/store';
import '../assets/scss/App.scss';
import {BrowserRouter} from "react-router-dom";

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL} history={history}>
          <Routers/>
        </BrowserRouter>
      </div>
    );
  }
  
}
export default App;
