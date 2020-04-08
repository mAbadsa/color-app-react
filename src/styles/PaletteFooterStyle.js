import sizes from "./sizes";

export default {
  PaletteFooter: {
    display: "flex",
    height: "10vh",
    paddingRight: "1rem",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundImage: `repeating-linear-gradient(
          90deg,
          #2284f3c0,
          #2284f3c0 5px,
          #114f95c0 5px,
          #114f95c0 10px      
      )`,
    color: "rgb(251, 251, 251)",
    fontSize: "1.2rem",
    fontWeight: "bold",
    boxShadow: "inset 0 3px 15px rgb(0, 0, 0)",
    textShadow: "2px 4px 3px #000",
    "& span": {
      paddingLeft: "0.5rem",
      fontSize: "1.5rem",
      color: "yellow"
    },
    [sizes.down('xs')]: {
      justifyContent: "center",
      fontSize: "1.8rem",
    }
  }
};
