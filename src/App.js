import productApi from "api/productApi";
import SignIn from "features/Auth/pages/SignIn";
import firebase from "firebase";
import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Button } from "reactstrap";
import "./App.scss";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

//Lazy loading router
const Photo = React.lazy(() => import("./features/Photo"));

// Configure Firebase.
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // ...
};
firebase.initializeApp(config);

function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        if (!user) {
          //handle log out....
          console.log("User is not login");
          return;
        }
        console.log("Login user", user.displayName);
        const token = await user.getIdToken();
        console.log("Login user token", token);
      });
    return () => unregisterAuthObserver();
  }, []);

  useEffect(() => {
    const getProductList = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10,
        };
        const response = await productApi.getAll(params);
        console.log(response);
        setProductList(response);
      } catch (error) {
        console.log("Faild to get list product:", error);
      }
    };
    getProductList();
  }, []);

  const handleButtonClickFetchProductList = async () => {
    try {
      const params = {
        _page: 1,
        _limit: 10,
      };
      const response = await productApi.getAll(params);
      console.log(response);
    } catch (error) {
      console.log("Failed to fetch product list: ", error);
    }
  };

  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header></Header>
          <Button onClick={handleButtonClickFetchProductList}>
            Fetch Product List
          </Button>
          <Switch>
            <Redirect exact from="/" to="photos" />

            <Route path="/photos" component={Photo} />
            <Route path="/sign-in" component={SignIn} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
