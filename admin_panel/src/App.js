import './App.css';
import Topbar from './components/topbar/Topbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import Sitebar from './components/sitebar/Sitebar';
import NewProduct from './components/newProduct/NewProduct';
import Product from './components/product/Product';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import ProductsList from './components/products/ProductsList'
import OrderList from './components/orderList/OrderList';

function App() {

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
              <Route path="/users/:userId">
                <User />
              </Route>
              <Route path="/createUser">
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
              <Route path="/orders">
                <OrderList />
              </Route>
            </div>
          </>
      </Switch>
    </Router>
  );

}

export default App;
