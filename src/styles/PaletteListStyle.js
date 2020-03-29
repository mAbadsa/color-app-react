export default {
    root: {
      backgroundColor: "#2525a5",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      height: "130vh"
    },
    container: {
      display: "flex",
      alignItems: "flex-start",
      flexDirection: "column",
      flexWrap: "wrap",
      width: "60%"
    },
    nav: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      color: "white",
      alignItems: "center",
      "& a": {
        color: "#fff"
      }
    },
    palettes: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 30%)",
      gridGap: "5%",
      width: "100%",
      boxSizing: "border-box"
    }
  };