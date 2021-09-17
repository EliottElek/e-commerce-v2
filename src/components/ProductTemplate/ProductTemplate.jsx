import React, { useState, useEffect } from "react";
import {
  CssBaseline,
  Grid,
  Typography,
  CircularProgress,
  Button,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import useStyles from "./styles";
import Products from "../Products/Products";
import Header from "../Header/Header";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const ProductTemplate = ({ id, commerce, handleAddToCart }) => {
  const classes = useStyles();
  const [product, setProduct] = useState({});
  const [variants, setVariants] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [mainPicture, setMainPicture] = useState("");

  const handleUpdateProductQty = (quand) => {
    quantity >= 1 && quand === 1 && setQuantity(quantity + quand);
    quantity > 1 && quand === -1 && setQuantity(quantity + quand);
  };

  useEffect(() => {
    async function fetchData() {
      const data = await commerce?.products?.retrieve(id, {
        type: "permalink",
      });
      setProduct(data);
      setVariants(data.variant_groups);
      console.log(data);
      setMainPicture(data?.media?.source);
    }
    fetchData();
  }, [commerce?.products, id, product?.media?.source]);

  const displayAttributes = (variants) => {
    return (
      <div className={classes.tableBody}>
        <Paper>
          <Table className={classes.table} aria-label="customized table">
            <TableBody>
              {variants?.map((variant) => (
                <TableRow key={variant.id}>
                  <StyledTableCell>
                    <strong>{variant?.name}</strong>
                  </StyledTableCell>
                  <StyledTableCell>
                    {variant?.options?.map((option) => (
                      <span>{option?.name}, </span>
                    ))}
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  };

  const displayGallery = () => {
    return (
      <div className={classes.gallery}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          spacing={4}
          className={classes.grid}
        >
          {product?.assets.map((asset) => (
            <Grid
              className={classes.imageToClick}
              onClick={() => {
                setMainPicture(asset.url);
                window.scrollTo({
                  top: 300,
                  behavior: "smooth",
                });
              }}
              item
              key={asset.id}
              xs={6}
              sm={Math.floor(12 / product?.assets.length)}
              md={Math.floor(12 / product?.assets.length)}
              lg={Math.floor(12 / product?.assets.length)}
            >
              <img
                className={classes.image}
                src={asset.url}
                alt={product?.id}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  };

  const ProductDisplay = () => (
    <>
      <CssBaseline />
      <Grid
        container
        direction="row"
        justifyContent="center"
        spacing={4}
        className={classes.grid}
      >
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <img className={classes.image} src={mainPicture} alt={product?.id} />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <div className={classes.cardContent}>
            {product?.categories[0].id === "cat_G6kVw7jral2eDx" ? (
              <Typography gutterBottom variant="h5" component="h2">
                Vous venez de créer... {product?.name} !
              </Typography>
            ) : (
              <Typography gutterBottom variant="h3" component="h2">
                {product?.name}
              </Typography>
            )}
          </div>
          <Typography
            dangerouslySetInnerHTML={{ __html: product?.description }}
            variant="body1"
            color="textSecondary"
            component="p"
          />
          <Typography gutterBottom variant="h4" component="h2">
            {product?.price?.formatted}€
          </Typography>
          <div className={classes.actions}>
            <div className={classes.buttons}>
              <Typography>Quantité :</Typography>
              <Button
                type="button"
                size="small"
                onClick={() => handleUpdateProductQty(-1)}
              >
                -
              </Button>
              <Typography>&nbsp;{quantity}&nbsp;</Typography>
              <Button
                type="button"
                size="small"
                onClick={() => handleUpdateProductQty(1)}
              >
                +
              </Button>
            </div>
            <Button
              className={classes.button}
              variant="contained"
              type="button"
              onClick={() => handleAddToCart(product?.id, quantity)}
              color="primary"
            >
              Ajouter au panier
            </Button>
          </div>
          {variants !== null && variants !== undefined && (
            <div>{displayAttributes(variants)}</div>
          )}
          {product?.categories[0].id !== "cat_G6kVw7jral2eDx" &&
            variants !== null &&
            variants !== undefined && <div>{displayGallery(variants)}</div>}
        </Grid>
      </Grid>
    </>
  );
  return (
    <div className={classes.content}>
      <div className={classes.toolbar} />
      <Header />
      <div className={classes.toolbar} />
      <div className={classes.content}>
        {product?.media !== null && product?.media !== undefined ? (
          <ProductDisplay />
        ) : (
          <div className={classes.spinner}>
            <CircularProgress />
          </div>
        )}
        {product?.related_products !== null &&
          product?.related_products !== undefined && (
            <Products
              onAddToCart={handleAddToCart}
              products={product?.related_products}
              version="produit"
            />
          )}
      </div>
    </div>
  );
};

export default ProductTemplate;
