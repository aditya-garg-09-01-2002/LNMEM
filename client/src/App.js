import Home from "./Pages/Home/Home.js"
import Profile from "./Pages/Profile/Profile.js"
import {BrowserRouter as Router,Route,Routes as Switch} from "react-router-dom" 

function App() {
  return (
    <div>
      {/* <Router>
        <Switch>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Switch>
      </Router> */}
      <Home/>
    </div>
  );
}

export default App;
