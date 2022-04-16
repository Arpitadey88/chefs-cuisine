import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import AddFood from "./Components/AddFood/AddFood";
import Home from "./Components/Home/Home/Home";
import OrderDetails from "./Components/Home/OrderDetails/OrderDetails";
import Footer from "./Components/Shared/Footer/Footer";
import Navbar from "./Components/Shared/Navbar/Navbar";

function App() {
  return (
    <div className="App">
     <Router>
       <Route>
         <Navbar></Navbar>
       </Route>
       <Switch>
         <Route path="/home">
           <Home></Home>
         </Route>
         <Route path="/about">
           <Home></Home>
         </Route>
         <Route path="/details/:orderId">
           <OrderDetails></OrderDetails>
         </Route>
         <Route path="/addFoods">
            <AddFood></AddFood>
         </Route>
         <Route path="/">
           <Home></Home>
         </Route>
       </Switch>
       <Footer></Footer>
     </Router>
    </div>
  );
}

export default App;
