import React, { useEffect } from "react";

function Navbar() {
  useEffect(() => {
    fetch("/navbar.html")
      .then((response) => response.text())
      .then((html) => {
        document.getElementById("navbar-container").innerHTML = html;
      });
  }, []);

  return <div id="navbar-container"></div>;
}

export default Navbar;
