import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from './components/Pages/Login/Login';
import Header from './components/pages/Header/Header';
// import Home from './components/Pages/Home/Home';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header />
          <Routes>
            <Route exact path="/" element={<Home />}>
            </Route>
           {/* <Route exact path="/home" element={<Home />}> */}
           {/* </Route> */}
         <Route exact path="/login" element={<Login />}>
         </Route>
         </Routes>
     </BrowserRouter> 
    </div>
  );
}

export default App;
