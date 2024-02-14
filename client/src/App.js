import Home from "./Pages/Home/Home.js"
import Profile from "./Pages/Profile/Profile.js"
import About from "./Pages/About/About.js"
import {BrowserRouter as Router,Route,Routes as Switch} from "react-router-dom" 

function App() {
  return (
    <div>
      { 
      <Router>
        <Switch>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/about" element={<About/>}/>
        </Switch>
      </Router>
      }
    </div>
  );
}

export default App;
