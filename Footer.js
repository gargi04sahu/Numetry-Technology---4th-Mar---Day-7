import React, { useEffect } from "react";

function Footer() {
  useEffect(() => {
    fetch("/footer.html")
      .then((response) => response.text())
      .then((html) => {
        document.getElementById("footer-container").innerHTML = html;
      });
  }, []);

  return <div id="footer-container"></div>;
}

export default Footer;
