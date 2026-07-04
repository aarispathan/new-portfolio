import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    loadSlim().then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        background: {
          color: "#000000", // Change to solid color to see if it works
        },
        particles: {
          number: {
            value: 100,
          },
          color: {
            value: "#ff7b00",
          },
          links: {
            enable: true,
            color: "#ff7b00",
            distance: 150,
            opacity: 0.5,
          },
          move: {
            enable: true,
            speed: 2,
          },
          size: {
            value: 3,
          },
          opacity: {
            value: 0.8,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
    />
  );
}

export default ParticleBackground;