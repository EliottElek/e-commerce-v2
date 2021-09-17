import React, { useState, useEffect } from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import CookieConsent from "react-cookie-consent";
import { Link } from "react-router-dom";
import {
  ProductTemplate,
  Landing,
  Navbar,
  Products,
  Cart,
  Checkout,
  ScrollToTop,
  LoginForm,
} from "./components";
import { commerce } from "./lib/commerce";
const theme = createTheme({
  palette: {
    primary: {
      main: "#95ADF9",
    },
    secondary: {
      main: "#F9A795",
    },
  },
});
const App = () => {
  console.log(commerce);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [fewProducts, setFewProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["boutique"],
    });

    setProducts(data);
  };
  const fetchFewProducts = async () => {
    const { data } = await commerce.products.list({
      limit: 4,
      category_slug: ["boutique"],
    });

    setFewProducts(data);
  };
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };
  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchFewProducts();
    fetchCart();
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <div style={{ display: "flex" }}>
          <CssBaseline />
          <Navbar
            totalItems={cart.total_items}
            handleDrawerToggle={handleDrawerToggle}
          />
          <CookieConsent
            location="bottom"
            buttonText="J'accepte"
            declineButtonText="Je refuse"
            cookieName="myAwesomeCookieName"
            style={{ background: "whitesmoke", color: "#2B373B" }}
            declineButtonStyle={{
              background: "#F9A795",
              borderRadius: "4px",
              color: "#2B373B",
              fontSize: "13px",
            }}
            buttonStyle={{
              background: "#95ADF9",
              borderRadius: "4px",
              color: "#2B373B",
              fontSize: "13px",
            }}
            expires={150}
            enableDeclineButton
          >
            Nous utilisons des cookies pour optimiser notre site et nos
            services.
            <span>
              {" "}
              <Link to="/">Notre politique de cookies</Link>
            </span>
          </CookieConsent>
          <Switch>
            <Route exact path="/">
              <Landing
                products={fewProducts}
                onAddToCart={handleAddToCart}
                handleUpdateCartQty
              />
            </Route>
            <Route exact path="/boutique">
              <Products
                products={products}
                onAddToCart={handleAddToCart}
                version="boutique"
              />
            </Route>
            <Route exact path="/panier">
              <Cart
                cart={cart}
                onUpdateCartQty={handleUpdateCartQty}
                onRemoveFromCart={handleRemoveFromCart}
                onEmptyCart={handleEmptyCart}
              />
            </Route>
            <Route exact path="/connexion">
              <LoginForm commerce={commerce} />
            </Route>
            <Route path="/checkout" exact>
              <Checkout
                cart={cart}
                order={order}
                onCaptureCheckout={handleCaptureCheckout}
                error={errorMessage}
              />
            </Route>
            <Route
              exact
              path="/produit/:id"
              render={(props) => (
                <ProductTemplate
                  id={props.match.params.id}
                  commerce={commerce}
                  handleAddToCart={handleAddToCart}
                  key={props.location.key}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
