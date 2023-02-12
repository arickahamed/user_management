import { Provider } from "react-redux";
import {
  BrowserRouter as Router
} from "react-router-dom";
import "./App.css";
import Home from './components/Home/Home';
import store from "./redux/store";

function App() {

  return (
    <Provider store={store} >
    <Router>
    <div>
      <Home />
    </div>
    </Router>
    </Provider>
  )
}

export default App
