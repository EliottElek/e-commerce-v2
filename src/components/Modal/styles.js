import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  modalBackground: {
    position: "absolute",
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(0,0,0, 0.5)",
    zIndex: 500,
  },
  modalContainer: {
    backgroundColor: "white",
    marginTop: "25px",
    width: "60%",
    height: "75%",
    zIndex: 501,
    "@media (max-width: 900px)": {
      width: "85%",
      marginTop: "55px",
      height: "60%",
    },
    borderRadius: "8px",
    boxShadow: "0px 3px 15px rgba(0,0,0,0.2)",
  },
  children: {
    backgroundColor: "white",
    maxHeight: "90%",
    zIndex: 501,
    borderRadius: "8px",
    overflowY: "auto",
    "@media (max-width: 900px)": {
      maxHeight: "85%",
    },
  },
  buttonDiv: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  buttonDivUnderstand: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  button: {
    width: "30%",
    margin: "auto",
    marginBottom: "20px",
    "@media (max-width: 900px)": {
      width: "90%",
    },
  },
  buttonClose: {
    marginBottom: "2px",
  },
}));
