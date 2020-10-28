import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Switch,Redirect,
  Route,
  Link, withRouter
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
          <Route exact path="/home" component={MainPage}/>
          <Route exact path="/webHub_goTour" render={() => <Redirect to="/home" />} exact={true} />

        </Switch>
      </BrowserRouter>
    
    </div>
  );
}
}

export default App;
ReactDOM.render(<App/>,document.getElementById("root"))