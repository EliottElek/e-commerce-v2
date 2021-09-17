import React from "react";
import useStyles from "./styles";
import { Button, TextField, Paper, Typography } from "@material-ui/core";

const ContactForm = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Paper className={classes.paper}>
            <div className={classes.text}>
            <Typography variant= "h5">Une question ou une demande particulière ?</Typography>
            <Typography variant= "h5">Contactez-nous !</Typography>
            </div>
      <form className={classes.form}>
        <div className={classes.grid}>
          <TextField
            className={classes.input}
            required
            name="nom"
            placeholder="Votre nom"
          />
          <TextField
            className={classes.input}
            required
            name="prenom"
            placeholder="Votre prénom"
          />
        </div>
        <div className={classes.grid}>
          <TextField
            className={classes.input}
            requiredname="email"
            placeholder="Votre email"
          />
          <TextField
            className={classes.input}
            name="telephone"
            placeholder="Votre numéro de téléphone"
          />
        </div>
        <div className={classes.message}>
          <TextField
            className={classes.messageaArea}
            placeholder="Votre message..."
          />
        </div>
        <Button  variant="contained" color="secondary" type = "submit" className={classes.button}>Envoyer</Button>
      </form>
      </Paper>
    </div>
  );
};

export default ContactForm;
