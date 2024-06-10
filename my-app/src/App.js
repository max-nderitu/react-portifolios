
import{BrowserRouter as Router,Route,Switch }from "react-router-dom"
import Home from "./Home/Home";
import Project from "./Project/Project";
import Nav from "./Component/Nav";
import Work from "./Project/Work";
import Experience from "./Experience/Experience";

function App() {
  return (
    <div className="App">
<Router><Nav/>
  <Switch>
    <Route exact path="/"><Home/></Route>
    <Route  path="/project"><Project/></Route>
    <Route  path="/experience"><Experience/></Route>
    <Route path="/work"><Work/></Route>
    </Switch></Router>
    </div>
  );
}

export default App;
