import { Button, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const HeroModule = ({ page }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
Simple E-commerce !      </Typography>
      {page !== "custom" ? (
        <Typography variant="body1" className={classes.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati non maxime cupiditate quo repellendus facilis, ipsum placeat ad illum odit, impedit quam soluta distinctio tenetur commodi laudantium itaque voluptatum illo.
        </Typography>
      ) : (
        <Typography variant="body1" className={classes.text}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quia tempora et praesentium, repudiandae provident placeat quod omnis sunt ullam quasi consectetur adipisci perferendis doloribus consequatur. Similique ipsam voluptatibus fugiat!
        </Typography>
      )}
      {page !== "custom" && (
        <div className={classes.buttonsDiv}>
          <Button
            component={Link}
            to="/boutique"
            className={classes.button}
            size="large"
            variant="contained"
            color="primary"
          >
            Visit shop
          </Button>
        </div>
      )}
    </div>
  );
};

export default HeroModule;
