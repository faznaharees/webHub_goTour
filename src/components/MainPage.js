import Body from "./home/body";
import Main from "./home/main";
import {withRouter } from 'react-router-dom'
function MainPage() {
  return (
      <div>
   <Main/>
   <Body/>
   </div>
  );
}

export default withRouter(MainPage);
