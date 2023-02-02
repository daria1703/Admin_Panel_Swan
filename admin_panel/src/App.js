import './App.css';
import Topbar from './components/topbar/Topbar';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, Switch } from 'react-router-dom'
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import Sitebar from './components/sitebar/Sitebar';
import NewProduct from './components/newProduct/NewProduct';
import Product from './components/product/Product';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import ProductsList from './components/products/ProductsList'
import { useSelector } from "react-redux";

function App() {

  // const admin = useSelector((state) => state.user.currentUser.isAdmin);
  return (

    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
          <>
            <Topbar />
            <div className="container2">
              <Sitebar />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/products">
                <ProductsList />
              </Route>
              <Route path="/product/:productId">
                <Product />
              </Route>
              <Route path="/newproduct">
                <NewProduct />
              </Route>
            </div>
          </>
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
