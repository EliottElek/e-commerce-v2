import { makeStyles } from "@material-ui/core/styles";
import background from "../../assets/background.jpg";

export default makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: "20px",
    height: "40vh",
    width: "100%",
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('" +
      background +
      "')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 900px)": {
      height: "45vh",
    },
  },
  title: {
    color: "white",
    fontWeight: "800",
    textAlign: "center",
    "@media (max-width: 900px)": {
      fontSize: "30px",
    },
  },
  text: {
    fontSize: "20px",
    padding:"6px",
    color: "white",
    fontWeight: "normal",
    textAlign: "center",
    "@media (max-width: 900px)": {
      fontSize: "18px",
      padding:0,

    },
  },
  buttonsDiv: {
    display: "flex",
    width: "500px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    "@media (max-width: 900px)": {
      flexDirection: "column",
      width: "80%",
    },
  },
  button: {
    width: "230px",
    marginTop: "20px",
  },
}));
