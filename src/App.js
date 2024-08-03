import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Breakfast from './components/pages/Foods/Breakfast/Breakfast';
import Dinner from './components/pages/Foods/Dinner/Dinner';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import Lunch from './components/pages/Foods/Lunch/Lunch';
import Meals from './components/pages/Meals/Meals/Meals';
import NotFound from './components/pages/NotFound/NotFound';
import Profile from './components/pages/Profile/Profile';
import Register from './components/pages/Register/Register';
import SingleBlog from './components/pages/SingleBlog/SingleBlog';
import initializeAuthentication from './components/Firebase/firebase.initialize';

initializeAuthentication()

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header />
          <Routes>
            <Route exact path="/" element={<Home />}>
            </Route>

            <Route exact path="/home" element={<Home />}>
            </Route>

            <Route exact path="/login" element={<Login />}>
            </Route>

            <Route exact path="/register" element={<Register />}>
            </Route>

            <Route exact path="/profile" element={<Profile/>}>
            </Route>

            <Route exact path="/breakfast" element={<Breakfast />}>
            </Route>

            <Route exact path="/dinner" element={<Dinner />}>
            </Route>

            <Route path="/lunch" element={<Lunch />}>
            </Route>

            <Route path="/meals" element={<Meals />}>
            </Route>

            <Route path="/singleBlog" element={<SingleBlog />}>
            </Route>

            <Route exact path="*" element={<NotFound />}>
            </Route>
         </Routes>
        <Footer />
     </BrowserRouter> 
    </div>
  );
}

export default App;