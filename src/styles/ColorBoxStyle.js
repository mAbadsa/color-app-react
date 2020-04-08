import chroma from "chroma-js";
import sizes from "./sizes";

export default {
  ColorBox: {
    marginBottom: "-4px",
    width: "20%",
    height: (props) => (props.colorShades ? "50%" : "25%"),
    position: "relative",
    display: "inline-block",
    cursor: "pointer",
    "&:hover button": {
      opacity: 1,
      transition: "opacity 0.2s",
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: (props) => (props.colorShades ? "33.3333%" : "20%"),
    },
    [sizes.down("md")]: {
      width: "50%",
      height: (props) => (props.colorShades ? "20%" : "10%"),
    },
    [sizes.down("xm")]: {
      width: "100%",
      height: (props) => (props.colorShades ? "10%" : "5%"),
    }
  },
  colorText: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.65 ? "#333" : "#eee",
  },

  colorName: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.1 ? "white" : "black",
  },

  seeMore: {
    position: "absolute",
    width: "60px",
    height: "30px",
    bottom: "0px",
    right: "0px",
    color: (props) =>
      chroma(props.background).luminance() >= 0.6 ? "#333" : "#eee",
    border: "none",
    backgroundColor: (props) =>
      chroma(props.background).luminance() >= 0.6
        ? "rgba(255, 255, 255, 0.3)"
        : "rgba(255, 255, 255, 0.3)",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase",
  },
  copyButton: {
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
    backgroundColor: (props) =>
      chroma(props.background).luminance() >= 0.6
        ? "rgba(100, 100, 100, 0.3)"
        : "rgba(255, 255, 255, 0.3)",
    lineHeight: "30px",
    textTransform: "uppercase",
    opacity: 0,
    color: (props) =>
      chroma(props.background).luminance() >= 0.6 ? "#333" : "#eee",
    cursor: "pointer",
    transition: "opacity 0.3s",
  },
  copiedBackground: {
    display: "block",
    marginBottom: "0px",
    padding: "1rem",
    fontSize: "4rem",
    width: "100%",
    fontWeight: 600,
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)",
    backgroundColor: (props) =>
      chroma(props.background).luminance() >= 0.6
        ? "rgba(100, 100, 100, 0.3)"
        : "rgba(255, 255, 255, 0.3)",
    textAlign: "center",
    textTransform: "uppercase",
  },
  boxContent: {
    position: "absolute",
    padding: "10px",
    width: "100%",
    bottom: "0px",
    left: "0px",
    color: "black",
    fontSize: "12px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    boxSizing: "border-box",
  },
  copyOverlay: {
    width: "100%",
    height: "100%",
    opacity: 0,
    zIndex: 0,
    transform: "scale(0.02)",
    transition: "transform 0.6s ease-in-out",
  },
  showOverlay: {
    position: "absolute",
    opacity: 1,
    zIndex: 10,
    transform: "scale(50)",
    transition: "all 0.3s ease-in-out",
  },
  hideOverlay: {
    width: "100%",
    height: "100%",
    transform: "scale(0.0)",
    zIndex: 0,
    transition: "all 0.6s ease",
  },
  copyMsg: {
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "4rem",
    opacity: 0,
    transform: "scale(0.1)",
    "& p": {
      fontSize: "2rem",
    },
  },
  showCopyMsg: {
    opacity: 1,
    zIndex: 25,
    transform: "scale(1)",
    // transitionDelay: "0.2s",
    transition: "all 0.6s ease-in-out",
  },
  hideCopyMsg: {
    width: "100%",
    height: "100%",
    transform: "scale(0.0)",
    opacity: 0,
    zIndex: -1,
    // transitionDelay: "0.3s",
    transition: "all 0.6s ease",
  },
};
