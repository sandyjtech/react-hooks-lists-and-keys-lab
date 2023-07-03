import React from "react";

function NavBar(props) {
  const links = ["home", "about", "projects"];
const linkList = links.map((link) => 
<a href={'#' +link} key={link}>{link}</a>
)
  return <nav>{linkList}</nav>;
}

export default NavBar;
