import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import Breakfast from './components/Pages/Foods/Breakfast/Breakfast';
import Dinner from './components/Pages/Foods/Dinner/Dinner';
import Lunch from './components/Pages/Foods/Lunch/Lunch';
import SeeMore from './components/Pages/SeeMore/SeeMore';
import Meals from './components/Pages/Meals/Meals/Meals';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Profile from './components/Pages/Profile/Profile';
import NotFound from './components/Pages/NotFound/NotFound';
import SingleBlog from './components/Pages/SingleBlog/SingleBlog';
import Register from './components/Pages/Register/Register';


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

            <Route path="/seemore" element={<SeeMore />}>
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