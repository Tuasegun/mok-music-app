import Home from "./Pages/Home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LandPage from "./Pages/LandPage";


function App() {

  return (  
    <div className="App">
    <Router>
    <Routes>
        <Route exact path="/" element={<LandPage/>} />
        <Route exact path="/home"  element={<Home/>} />
        <Route exact path="/home/search" element={<Home/>}/>
        <Route exact path="/home/favorites" element={<Home/>}/>
        <Route exact path="/home/videos" element={<Home/>}/>
        <Route exact path="/home/buzz" element={<Home/>}/>
        <Route exact path="/home/albums" element={<Home/>}/>
        <Route exact path="/home/about" element={<Home/>}/>
    </Routes>
    </Router>
    
    </div>
  );
}

export default App;
