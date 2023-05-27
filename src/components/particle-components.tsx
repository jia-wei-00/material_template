import React, { useCallback } from "react";
import Particles from "react-particles";
import type { Engine, ISourceOptions } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import "../styles/components/particles.scss";
import { observer } from "mobx-react-lite";
import { modeStore } from "../stores";
import "../styles/components/particles.scss";

// Particle config files
import configDark from "../config/particlesjs-config-dark.json";
import configLight from "../config/particlesjs-config-light.json";

const ParticleComponent: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="particle-wrapper">
      <Particles
        options={
          modeStore.mode === "light"
            ? (configLight as ISourceOptions)
            : (configDark as ISourceOptions)
        }
        init={particlesInit}
      />
    </div>
  );
};

export default observer(ParticleComponent);
