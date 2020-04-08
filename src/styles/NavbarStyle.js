import sizes from "./sizes";

export default {
  Navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "10vh",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `repeating-linear-gradient(
            45deg,
            #f11c3fc0,
            #f11c3fc0 5px,
            #ff35eec0 5px,
            #ff35eec0 10px      
        )`,
    padding: "0 13px",
    width: "20%",
    height: "100%",
    fontFamily: "'Roboto', sans-serif",
    fontSize: "26px",
    textDecoration: "none",
    fontWeight: 500,
    textShadow: "2px 4px 3px #000",
    boxShadow: "0 0 10px 3px #000000",
    "& a": {
      textDecoration: "none",
      color: "#ffffff"
    },
    [sizes.down('xs')]: {
      display: 'none'
    },
    [sizes.down('md')]: {
      fontSize: '22px',
      width: '30%',
      boxSizing: "border-box"
    }
  },
  sliderContainer: {
    height: "100%",
    width: "70%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    fontWeight: "bold",
    backgroundImage: ` repeating-linear-gradient(
            -45deg,
            #525252c0,
            #525252c0 5px,
            #202020c0 5px,
            #202020c0 10px      
        )`,
    "& span": {
      paddingLeft: "10px",
      paddingRight: "10px",
      color: "#e5e5e5"
    }
  },
  slider: {
    margin: "0 10px",
    width: "250px",
    display: "inline-block",
    "& .rc-slider-track": {
      backgroundColor: "rgb(11, 148, 84)",
      height: "12px"
    },
    "& .rc-slider-rail": {
      backgroundColor: "rgb(98, 231, 158)",
      height: "12px",
      boxShadow: "0 3px 15px -2px #252525"
    },
    "& .rc-slider-handle, .rc-slider-handle:focus": {
      marginTop: "-3px",
      backgroundColor: "rgb(149, 149, 149)",
      width: "30px",
      height: "18px",
      outline: "none",
      borderRadius: "5px",
      border: "none",
      boxShadow:
        "inset 0px 3px 6px 2px rgb(165, 164, 164), inset 0 1px 5px 3px rgb(105, 100, 101)"
    },
    [sizes.down('md')]: {

    }
  },
  selectContainer: {
    paddingLeft: "10px",
    paddingRight: "10px",
    height: "100%",
    width: "30%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    backgroundImage: `repeating-linear-gradient(
            -45deg,
            #14bd08c0,
            #14bd08c0 5px,
            #27fa02c0 5px,
            #27fa02c0 10px      
        )`,
    boxShadow: "0 -1px 15px 0px #000000",
    "& .MuiInputBase-root": {
      width: "100%",
      backgroundColor: "#0c8d178f"
    },
    "& .MuiInputBase-input": {
      color: "white !important",
      fontWeight: "500 !important"
    },
    "& .MuiSelect-selectMenu": {
      paddingLeft: "0.8rem !important"
    },
    "& .MuiSelect-icon": {
      color: "white !important"
    },
    [sizes.down('xs')]: {
      width: "50%",
    }
  }
};
