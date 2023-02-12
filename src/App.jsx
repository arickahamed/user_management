import {
  BrowserRouter as Router
} from "react-router-dom";
import "./App.css";
import Home from './components/Home/Home';

function App() {

  return (
    <Router>
    <div>
      <Home />
    </div>
    </Router>
  )
}

export default App
