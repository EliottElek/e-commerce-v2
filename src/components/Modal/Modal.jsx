import React from "react";
import useStyles from "./styles";
import { Button } from "@material-ui/core";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
const Modal = ({ showModal, hideModal, children }) => {
  const classes = useStyles();

  return (
    showModal && (
      <div className={classes.modalBackground}>
        <ScrollToTop />

        <div className={classes.modalContainer}>
          <div className={classes.buttonDiv}>
            <Button
              className={classes.buttonClose}
              variant="contained"
              type="button"
              color="secondary"
              onClick={() => {
                hideModal();
              }}
            >
              X
            </Button>
          </div>
          <div className={classes.children}>
            {children}
            <div className={classes.buttonDivUnderstand}>
              <Button
                onClick={() => {
                  hideModal();
                }}
                className={classes.button}
                variant="contained"
                type="button"
                color="secondary"
              >
                Compris !
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
