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
    if (windowWidth >= 755) {
      setHambuger(false);
      setNavState(true);
    } else {
      setHambuger(true);
      setNavState(false);
    }
  }, [windowWidth]);

  return (
    <header>
      <h1>Coding Addict</h1>
      {hambuger && <GiHamburgerMenu onClick={() => setNavState(!navState)} />}
      {navState && <Nav />}
      {!hambuger && (
        <div>
          <BsFacebook />
          <BsTwitter />
          <BsInstagram />
          <BsReddit />
        </div>
      )}
    </header>
  );
}

export default App;
