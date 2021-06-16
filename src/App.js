import "./App.css";
import { Route, Switch, withRouter } from "react-router-dom";
import Auth from "./Authentication/Auth";
import Register from "./Authentication/Auth-Componont/Register";
import Login from "./Authentication/Auth-Componont/Login";
import Coupons from "./Components/Coupons/Coupons";
import Products from "./Components/Products/MarketPlace/Products";
import CreateProduct from "./Components/Products/MyProducts/CreateProduct";
import ProductDescription from "./Components/Products/MyProducts/ProductDescription";
import Dashboard from "./Components/Dashboard/Dashboard";
import Layout from "./Components/Layout";
import AllCategories from "./Components/Category/AllCategories";
import MyProducts from "./Components/Products/MyProducts/MyProducts";
import CreateCoupons from "./Components/Coupons/CreateCoupons";
import AddCategory from "./Components/Category/CreateCategory";
import { Divider } from "@material-ui/core";

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <Divider />
      <Route path={["/admin", "/admin/dashboard"]} component={Layout} />

      <Switch>
        <Route exact path="/auth/login" component={Login} />
        <Route exact path={["/", "/auth"]} component={Auth} />
        <Route exact path="auth/register" component={Register} />
        <Route
          exact
          path="/admin/myproducts/createProduct"
          component={CreateProduct}
        />
        <Route exact path="/admin/myproducts" component={MyProducts} />
        <Route
          exact
          path="/admin/products/:productId"
          component={ProductDescription}
        />
        <Route exact path="/admin/marketplace" component={Products} />

        <Route exact path="/admin/category" component={AllCategories} />
        <Route
          exact
          path="/admin/category/createCategory"
          component={AddCategory}
        />

        <Route exact path="/admin/coupons" component={Coupons} />
        <Route
          exact
          path="/admin/coupons/createCoupon"
          component={CreateCoupons}
        />
        <Route
          exact
          path={["/admin", "/admin/dashboard"]}
          component={Dashboard}
        />
      </Switch>
    </div>
  );
}

export default withRouter(App);
