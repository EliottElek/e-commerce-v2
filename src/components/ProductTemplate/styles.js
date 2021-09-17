import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  grid: {
    maxWidth: "100%",
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    //"@media (max-width: 400px)": { flexDirection: "column" },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  spinner: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    borderRadius: "8px",
    maxWidth: "100%",
    boxShadow: "0px 3px 15px rgba(0,0,0,0.2)",
  },
  actions: {
    marginTop: "40px",
    display: "flex",
    justifyContent: "space-around",
    "@media (max-width: 900px)": {
      flexDirection: "column",
      width: "80%",
      margin: "auto",
    },
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    "@media (max-width: 900px)": {
      marginTop: "30px",
    },
  },
  tableBody: {
    marginTop: "50px",
  },
  gallery:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  imageToClick:{
    cursor:"pointer"
  }
}));
