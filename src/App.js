import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,Redirect,
  Route,
  Link, BrowserRouter
} from "react-router-dom";
import Questions from './components/survey/qns'
import MainPage from './components/MainPage';
window.React = React

class App extends React.Component{
  render(){
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/survey/:id" component={Questions}/>
          <Route path="/home" component={MainPage}/>
          <Route exact path="/" render={() => <Redirect to="/survey/1" />} exact={true} />

        </Switch>
      </BrowserRouter>
    
    </div>
  );
}
}

export default App;
