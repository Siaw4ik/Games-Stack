/* eslint-disable no-inner-declarations */
/* eslint-disable func-names */
import "./index.css";

export function parallax() {
  const parallaxed = document.querySelector(
    ".parallax_container"
  ) as HTMLElement;

  if (parallaxed) {
    const galaxy = document.querySelector(
      ".images-parallax_galaxy"
    ) as HTMLElement;
    const star = document.querySelector(
      ".images-parallax_death-star"
    ) as HTMLElement;
    const ship = document.querySelector(".images-parallax_ship") as HTMLElement;

    const forGalaxy = 20;
    const forStar = 10;
    const forShip = 0.5;

    const animationSpeed = 0.09;

    let positionX = 0;
    let positionY = 0;
    let coordXpercent = 0;
    let coordYpercent = 0;

    function setMouseParallaxStyle() {
      const distX = coordXpercent - positionX;
      const distY = coordYpercent - positionY;

      positionX += distX * animationSpeed;
      positionY += distY * animationSpeed;

      galaxy.style.cssText = `transform: translate(${positionX / forGalaxy}%,${
        positionY / forGalaxy
      }%);`;

      star.style.cssText = `transform: translate(${positionX / forStar}%,${
        positionY / forStar
      }%);`;

      ship.style.cssText = `transform: translate(${positionX / forShip}%,${
        positionY / forShip
      }%);`;

      requestAnimationFrame(setMouseParallaxStyle);
    }

    setMouseParallaxStyle();

    parallaxed.addEventListener("mousemove", function (e) {
      const parallaxWidth = parallaxed.offsetWidth;
      const parallaxHeight = parallaxed.offsetHeight;

      const coordX = e.pageX - parallaxWidth / 2;
      const coordY = e.pageY - parallaxHeight / 2;

      coordXpercent = (coordX / parallaxWidth) * 100;
      coordYpercent = (coordY / parallaxHeight) * 100;
    });

    function handleOrientation(event: DeviceOrientationEvent) {
      const betta = event.beta;
      const gama = event.gamma;

      if (event && betta !== null && gama !== null) {
        const parallaxWidth = parallaxed.offsetWidth;
        const parallaxHeight = parallaxed.offsetHeight;

        const coordX = gama - parallaxWidth / 4;
        const coordY = betta - parallaxHeight / 4;
        coordXpercent = (coordX / parallaxWidth) * 100;
        coordYpercent = (coordY / parallaxHeight) * 100;
      }
    }

    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", handleOrientation, true);
    } else {
      console.log("DeviceMotionEvent is not supported");
    }
  }
}
