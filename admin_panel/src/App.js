import './App.css';
import Topbar from './components/topbar/Topbar';
import Sitebar from './components/sitebar/Sitebar';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, Switch} from 'react-router-dom'
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductsList from './components/products/ProductsList';
import NewProduct from './components/newProduct/NewProduct';
import Product from './components/product/Product';
import Login from './pages/login/Login';

function App() {
  return (

    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Topbar />
        <div className="container2">
          <Sitebar />
          <Route path="/">
            <Home />
          </Route>
        </div>
      </Switch>
    </Router>

    // <Container><Topbar/>

    //     <Sitebar/></Container>
    // <Router>
    //   <Routes>


    //           <Route path="/login" element={<Login />} />
    //           <Route path="/" element={<Home />} />
    //           <Route path="/users" element={<UserList />} />
    //           <Route path="/user/:id" element={<User />} />
    //           <Route path="/createUser" element={<NewUser />} />
    //           <Route path="/products" element={<ProductsList />} />
    //           <Route path="/product/:productId" element={<Product />} />
    //           <Route path="/newProduct" element={<NewProduct />} />





    //   </Routes>
    // </Router>
    // 

    //  <Router>
    //   <Routes><Route path="/login" element={<Login />} />




    //            <Route path="/" element={<Home />} />
    //            <Route path="/users" element={<UserList />} />
    //            <Route path="/user/:id" element={<User />} />
    //            <Route path="/createUser" element={<NewUser />} />
    //            <Route path="/products" element={<ProductsList />} />
    //            <Route path="/product/:productId" element={<Product />} />
    //            <Route path="/newProduct" element={<NewProduct />} />


    //     {/* </div> */}
    //      </Routes>
    //  </Router>

  );

}

export default App;
