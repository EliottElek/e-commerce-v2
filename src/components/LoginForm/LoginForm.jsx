import React, { useEffect } from "react";
import useStyles from "./styles";

const LoginForm = ({ commerce }) => {
  const classes = useStyles();
  document.body.style.overflow = "unset";
  useEffect(() => {
    async function fetchData() {
      //   commerce.customer
      //   .login("eliott.morcillo@gmail.com", "http://localhost:3000/connexion")
      //   .then((token) => console.log(token))
      //   .catch(() => console.log("rien trouvé"));
      // commerce.customer
      //   .getToken("f21550dd-e329-49e3-ae24-80677b2fa7ed")
      //   .then((jwt) => console.log(jwt));
      // commerce.customer.about().then((customer) => console.log(customer));
      //console.log(commerce.customer);
    }
    fetchData();
  }, [commerce.customer]);

  return (
    <div className={classes.root}>
      <h1 className={classes.h1}>LoginForm</h1>
    </div>
  );
};

export default LoginForm;
