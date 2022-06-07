import Home    from "./pages/home/Home";
import Login   from "./pages/login/Login";
import List    from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import {
  BrowserRouter, 
  Routes,
  Route,
} from "react-router-dom";

import './components/style/dark.scss';

function App() {
  const MONTH = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]; 

  // const [ userState, setUserState ] = useState([])
  
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element = {<Home />} />
            <Route path="login" element = {<Login/>}/>
            <Route path="user">
              <Route index element = {<List />} />
              <Route path=":userId" element = {<Single />} />
              <Route path="new" element = {<New />} />
            </Route>
            <Route path="products">
              <Route index element = {<List />} />
              <Route path=":productId" element = {<Single />} />
              <Route path="new" element = {<New />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
