import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const Background = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  return (
    <div className="animatedBackground">
      <Particles
        id="background"
        init={particlesInit}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "repulse",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#4dfffe",
              animation: {
                enable: true,
                speed: 200,
                sync: true,
              },
            },
            lineLinked: {
              blink: false,
              color: "random",
              consent: false,
              enable: true,
              opacity: 0.6,
              width: 0.5,
              distance: 150,
            },
            collisions: {
              enable: false,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
              bounce: false
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.8,
            },
            shape: {
              type: ["circle", "triangle", "edge", "polygon"],
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
          pauseOnBlur: true,
          pauseOnOutsideViewport: true,
        }}
      />
    </div>
  );
};

export default Background;
