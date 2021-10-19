import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFacebook, BsTwitter, BsInstagram, BsReddit } from "react-icons/bs";
import Nav from "./components/Nav";

function App() {
  const [hambuger, setHambuger] = useState(true);
  const [navState, setNavState] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        setWindowWidth(window.innerWidth);
      },
      []
    );

    return () => {
      window.removeEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
      });
    };
  });

  useEffect(() => {
    if (windowWidth >= 800) {
      setHambuger(false);
      setNavState(true);
    } else {
      setHambuger(true);
      setNavState(false);
    }
  }, [windowWidth]);

  return (
    <header className="header">
      <h1 className="heading">
        Coding <span>Addict</span>
      </h1>
      {hambuger && (
        <GiHamburgerMenu
          onClick={() => setNavState(!navState)}
          className="hambuger"
        />
      )}
      {navState && <Nav />}
      {!hambuger && (
        <div className="social-icons">
          <BsFacebook className="s-facebook" />
          <BsTwitter className="s-twitter" />
          <BsInstagram className="s-instagram" />
          <BsReddit className="s-reddit" />
        </div>
      )}
    </header>
  );
}

export default App;
