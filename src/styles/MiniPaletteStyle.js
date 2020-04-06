export default {
  root: {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    "&:hover svg": {
      opacity: 1
    }
  },
  colors: {
    width: "100%",
    height: "150px",
    backgroundColor: "#dae1e4",
    borderRadius: "5px",
    overflow: "hidden",
  },
  title: {
    display: "flex",
    position: "relative",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    margin: "0px",
    alignItems: "center",
    justifyContent: "space-between",
    color: "black",
    "& span": {
      fontSize: "1.2rem",
      marginRight: "0.2rem",
    },
  },
  miniColor: {
    display: "inline-block",
    position: "relative",
    margin: "0 auto",
    marginBottom: "-4px",
    width: "25%",
    height: "20%",
  },
  delete: {},
  deleteIcon: {
    position: "absolute",
    width: "20px",
    height: "20px",
    color: "white",
    backgroundColor: "#eb3f30",
    top: "0px",
    right: "0px",
    zIndex: 10,
    padding: "5px",
    opacity: 0,
    transition: "all 0.3s ease-in-out"
  },
};
