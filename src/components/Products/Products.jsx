import React from "react";
import { Grid, Typography, CircularProgress } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles";
import { Header } from "..";

const Products = ({ products, onAddToCart, version }) => {
  const classes = useStyles();
  document.body.style.overflow = "unset";
  if (!products.length && version !== "produit")
    return (
      <>
        <div className={classes.toolbar} />
        <div className={classes.spinner}>
          <CircularProgress />
        </div>
        <div className={classes.toolbar} />
      </>
    );

  if (products.length === 0 || !products) {
    return (
      <div>
        <Typography variant="h4" gutterBottom>
          Aucun produit trouvé.
        </Typography>
      </div>
    );
  }
  return (
    <div className={classes.root}>
      {version === "boutique" && (
        <>
          <div className={classes.toolbar} />
          <Header />
        </>
      )}
      <main className={classes.content}>
        {version === "boutique" && (
          <Typography variant="h4" gutterBottom>
            Boutique
          </Typography>
        )}
        {version === "produit" && (
          <Typography variant="h4" gutterBottom>
            Produits associés
          </Typography>
        )}
        <Grid container justifyContent="flex-start" spacing={4}>
          {version !== "boutique"
            ? products.map((product) => (
                <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                  <Product product={product} onAddToCart={onAddToCart} />
                </Grid>
              ))
            : products.map((product) => (
                <Grid key={product.id} item xs={12} sm={6} md={4} lg={4}>
                  <Product product={product} onAddToCart={onAddToCart} />
                </Grid>
              ))}
        </Grid>
      </main>
    </div>
  );
};

export default Products;
