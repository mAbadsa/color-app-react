const styles = {
    root: {
      margin: "0 auto",
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