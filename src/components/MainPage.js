import Body from "./home/body";
import Main from "./home/main";
import {withRouter } from 'react-router-dom'
// function MainPage() {
//   return (
//       <div>
//    <Main/>
//    <Body/>
//    </div>
//   );
// }

// export default withRouter(MainPage);
import ReactDOM from 'react-dom'
import React, { Component } from 'react'

class MainPage extends Component {
  render() {
    return <div id="home">

        <Main/>
        <Body/>
    </div>
  }
}
export default withRouter(MainPage);

 ReactDOM.render(<MainPage/>,document.getElementById("root"))