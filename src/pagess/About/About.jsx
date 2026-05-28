import Particles from "react-tsparticles";

function About() {
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: { value: "transparent" },
          },
          particles: {
            color: { value: "#000" },
            links: {
              enable: true,
              color: "#000",
              distance: 150,
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              outModes: {
                default: "out",
              },
            },
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
    </div>
  );
}

export default About;
