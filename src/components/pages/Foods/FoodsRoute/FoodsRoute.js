// import React from 'react';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

// import Breakfast from '../Breakfast/Breakfast';
// import Dinner from '../Dinner/Dinner';
// import FoodHeader from '../FoodHeader/FoodHeader';
// import Lunch from '../Lunch/Lunch';
// import useAuth from '../../../hook/useAuth';



// const FoodsRoute = () => {
//     const { user } = useAuth()
//     return (
//         <div>
//         <BrowserRouter>
//           <Routes>

//            <Route exact path="/home" element={<FoodHeader />}>
//            </Route>

//          <Route exact path="/About" element={<Breakfast />}>
//          </Route>
//          <Route exact path="/blogs" element={<Dinner />}>
//          </Route>
//          <Route path="/profile" element={<Lunch />}>
//          </Route>
//          </Routes>
//      </BrowserRouter> 

//         <div>
//                 {!user?.email ? <Link to="/login"><button className="btn btn-secondary  my-4">Checkout Your Food</button> </Link> :
//                     <Link to="/cart"><button className="btn btn-secondary  my-4">Checkout Your Food</button> </Link>
//                 }
//         </div>
        
//         </div>
//     );
// };

// export default FoodsRoute;