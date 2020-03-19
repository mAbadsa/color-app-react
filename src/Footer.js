import React from "react";
import "./Footer.css";

function Footer(props) {
  const { paletteName, emoji } = props;
  console.log(props);
  return (
    <div className="Palette-footer">
      {paletteName}
      <span className="emoji">{emoji}</span>
    </div>
  );
}

export default Footer;
