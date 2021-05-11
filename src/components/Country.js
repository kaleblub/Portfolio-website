import * as React from "react";
import useWindowSize from "@rooks/use-window-size";
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce
} from "react-particle-image";

const particleOptions: ParticleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => "#61dafb",
  radius: () => Math.random() * 1.5 + 0.5,
  mass: () => 40,
  friction: () => 0.15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  }
};

const motionForce = (x: number, y: number): ParticleForce => {
  return forces.disturbance(x, y, 5);
};

const CountryParticles = () => {
  const { innerWidth, innerHeight } = useWindowSize();

  return (
    <div className="CountryImage">
      <ParticleImage
        src={"./media/H1N1_Ecuador_map.svg.jpg"}
        width={Number(innerWidth)}
        height={Number(innerHeight)}
        scale={0.5}
        entropy={20}
        maxParticles={4000}
        mouseMoveForce={(x, y) => forces.disturbance(x, y, 6)}
        touchMoveForce={(x, y) => forces.disturbance(x, y, 6)}
        mouseDownForce={(x, y) => forces.disturbance(x, y, 50)}
        backgroundColor="#191D1F"
        particleOptions={{
          mass: () => 40,
          filter: ({ x, y, image }) => {
            const pixel = image.get(x, y);
            return pixel.r === 255;
          },
          color: () => '#f00',
          friction: () => 0.15,
          initialPosition: ({ canvasDimensions }) => {
            return new Vector(
              canvasDimensions.width / 2, 
              canvasDimensions.height / 2
            );
          }
        }}
      />
    </div>
  );
}

export default CountryParticles;