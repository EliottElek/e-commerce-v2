import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "3%",
    marginBottom: "2%",
  },
  paper: {
    width: "50%",
    margin: "auto",
    padding: "30px",
    "@media (max-width: 900px)": {
      width: "95%",
    },
  },
  text: {
    marginBottom: "20px",
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  grid: {
    width: "100%",
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "45% 45%",
    gridGap: "10%",
    "@media (max-width: 900px)": {
      gridTemplateColumns: "100%",
      gridGap: "0%",
    },
  },
  message: {
    width: "100%",
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "100%",
  },
  button: {
    width: "230px",
    display: "grid",
    gridTemplateColumns: "30%",
    justifySelf: "flex-start",
    marginTop:"20px",
  },
  input: {
    height: "55px",
  },
  messageaArea: {
    paddingTop: "65px",
  },
}));
