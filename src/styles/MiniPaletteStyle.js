export default {
    root: {
      backgroundColor: "white",
      border: "1px solid black",
      borderRadius: "5px",
      padding: "0.5rem",
      position: "relative",
      overflow: "hidden",
      "&:hover": {
        cursor: "pointer"
      }
    },
    colors: {
      width: "100%",
      height: "150px",
      backgroundColor: "#dae1e4",
      borderRadius: "5px",
      overflow: "hidden"
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
        marginRight: "0.2rem"
      }
    },
    miniColor: {
      display: "inline-block",
      position: "relative",
      margin: "0 auto",
      marginBottom: "-4px",
      width: "25%",
      height: "20%"
    }
  };