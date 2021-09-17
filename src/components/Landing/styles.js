import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    marginTop: "3%",
    marginBottom: "2%",
  },
  button: {
    marginLeft: "50px",
  },
}));
