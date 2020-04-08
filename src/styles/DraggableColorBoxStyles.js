import sizes from "./sizes";

const styles = {
    root: {
      margin: "-3px auto",
      // marginBottom: "-4px",
      width: "20%",
      height: "25%",
      position: "relative",
      display: "inline-block",
      cursor: "pointer",
      "&:hover svg": {
        color: "white",
        transform: "scale(1.3)"
        // transition: "all 0.3s ease-in-out"
      },
      [sizes.down('lg')]: {
        width: "25%",
        height: "20%"
      },
      [sizes.down('md')]: {
        width: "50%",
        height: "15%"
      },
      [sizes.down('sm')]: {
        width: "100%",
        height: "10%"
      }
    },
    boxContent: {
      display: "flex",
      position: "absolute",
      justifyContent: "space-between",
      width: "100%",
      bottom: 0,
      left: 0,
      padding: "10px",
      color: "rgba(0, 0, 0, 0.5)",
      letterSpacing: "1px",
      textTransform: "uppercase",
      fontSize: "12px"
    },
    deleteIcon: {
      transition: "all 0.3s ease-in-out"
    }
  };

  export default styles;