import sizes from './sizes';
import bg from './bg.svg';

export default {
    root: {
      // backgroundColor: "#2525a5",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      height: "130vh",
      backgroundColor: "#330000",
      backgroundImage: `url(${bg})`,
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      overflowY: "scroll"
    },
    container: {
      display: "flex",
      alignItems: "flex-start",
      flexDirection: "column",
      flexWrap: "wrap",
      width: "60%",
      [sizes.down('lg')]: {
        width: "70%"
      },
      [sizes.down('md')]: {
        width: "80%"
      },
      [sizes.down('sm')]: {
        width: "90%"
      },
      [sizes.down('xs')]: {
        width: "70%",
      }
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
      boxSizing: "border-box",
      [sizes.down('sm')]: {
        gridTemplateColumns: "repeat(2, 47.5%)",
      },
      [sizes.down('xs')]: {
        gridTemplateColumns: "repeat(1, 100%)",
        gridGap: "1%",
        margin: "0 auto"
      }
    }
  };