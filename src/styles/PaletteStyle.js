import sizes from './sizes';

export default {
  Palette: {
    height: "100vh",
    [sizes.down('xm')]: {
      height: "200vh",
    }
  },
  PaletteColor: {
    height: "90%"
  },
  goBack: {
    marginBottom: "-4px",
    width: "20%",
    height: "50%",
    position: "relative",
    display: "inline-block",
    backgroundColor: "#000",
    cursor: "pointer",
    opacity: 1,
    [sizes.down('lg')]: {
      width: "75%",
      height: "33.3333%",
    },
    [sizes.down('md')]: {
      width: "50%",
      height: "20%",
    },
    [sizes.down('xm')]: {
      width: "100%",
      height: "10%",
    }
  },
  backButton: {
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100px",
    height: "30px",
    textAlign: "center",
    fontSize: "1rem",
    outline: "none",
    border: "none",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    lineHeight: "30px",
    textTransform: "uppercase",
    color: "white",
    cursor: "pointer",
    textDecoration: "none",
    transition: "all 0.3s",
   
  }
};
