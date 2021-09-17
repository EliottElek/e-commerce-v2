import React from "react";
import useStyles from "./styles";
import { Products } from "../../components";
import ContactForm from "../ContactForm/ContactForm";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const Landing = ({ products, onAddToCart }) => {
  const classes = useStyles();
  document.body.style.overflow = "unset";
  return (
    <div className={classes.content}>
      <Products
        products={products}
        onAddToCart={onAddToCart}
        version="landing"
      />
      <Button
        className={classes.button}
        component={Link}
        to={"/boutique"}
        variant="contained"
        type="button"
        color="secondary"
      >
        <Typography variant="h6">Voir plus de produits</Typography>
      </Button>
      <ContactForm />
    </div>
  );
};

export default Landing;
