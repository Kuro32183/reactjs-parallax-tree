import base from "./assets/base.png";
import smTree from "./assets/sm-tree.png";
import mdTree from "./assets/md-tree.png";
import lgTree from "./assets/lg-tree.png";
import xlTree from "./assets/xl-tree.png";
import stars from "./assets/stars.png";
import moon from "./assets/moon.png";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useState } from "react";

function App() {
  let element: IParallax | null;
  const [buttonMessage, setButtonMessage] = useState("Down");

  // Scroll Down & Up
  const handleClick = () => {
    // Change the button text to Down and
    // send the the user to the end of the page.
    if (buttonMessage === "Down") {
      setButtonMessage("Up");
      element?.scrollTo(2);
    }
    // Change the button text to Up and
    // send the the user to the top of the page.
    if (buttonMessage === "Up") {
      setButtonMessage("Down");
      element?.scrollTo(0);
    }
  };

  return (
    <div className={"w-full h-full"}>
      <Parallax pages={1.45} ref={(ref) => (element = ref)}>
        {/* Layer 7 */}
        <ParallaxLayer
          offset={0}
          speed={0.5}
          factor={2}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></ParallaxLayer>
        {/* Layer 6 */}
        <ParallaxLayer
          offset={0}
          speed={0.8}
          factor={2}
          style={{
            backgroundImage: `url(${stars})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></ParallaxLayer>
        {/* Layer 5 */}
        <ParallaxLayer
          offset={0.9999}
          speed={1.5}
          factor={1.1}
          style={{
            backgroundImage: `url(${xlTree})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></ParallaxLayer>
        {/* Layer 4 */}
        <ParallaxLayer
          offset={0.9999}
          speed={3}
          factor={2.1}
          style={{
            backgroundImage: `url(${lgTree})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></ParallaxLayer>
        {/* Layer 3 */}
        <ParallaxLayer
          offset={0}
          speed={2}
          factor={4}
          style={{
            backgroundImage: `url(${mdTree})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        ></ParallaxLayer>
        {/* Layer 2 */}
        <ParallaxLayer
          offset={0.87}
          speed={1}
          factor={1}
          style={{
            backgroundImage: `url(${smTree})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></ParallaxLayer>
        {/* Layer 1 */}
        <ParallaxLayer
          offset={0.9}
          speed={1}
          factor={1}
          style={{
            backgroundImage: `url(${base})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></ParallaxLayer>
        {/* Button */}
        <ParallaxLayer sticky={{ start: 0, end: 1 }} speed={10} factor={1} onClick={() => handleClick()}>
          <div className="w-screen h-screen   flex font-bold items-center justify-center">
            <div className="w-2/6 py-8 text-center rounded backdrop-blur-sm backdrop-grayscale bg-violet/30 border-2 border-white cursor-pointer">
              <h1 className="text-6xl text-violet-600">{buttonMessage}</h1>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
