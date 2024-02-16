import Home from "./Pages/Home/Home.js"
import {BrowserRouter as Router,Route,Routes as Switch} from "react-router-dom" 

function App() {
  return (
    <div>
      { 
      <Router>
        <Switch>
          <Route path="/" element={<Home/>}/>
        </Switch>
      </Router>
      }
    </div>
  );
}

export default App;
