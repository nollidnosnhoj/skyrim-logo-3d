import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Logo } from "./Logo";

function App() {
  return (
    <>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [-10, 10, 40], fov: 40 }}
      >
        <Stage environment="city" intensity={0.6}>
          <Suspense fallback={null}>
            <group position={[0, 0, 0]} scale={[0.5, 0.5, 0.5]}>
              <Logo />
            </group>
          </Suspense>
        </Stage>
        <OrbitControls
          autoRotate
          enableRotate
          rotateSpeed={0.1}
          target={[0, 3.5, 0]}
        />
      </Canvas>
      <footer>
        <span>Skyrim logo created by </span>
        <a href="https://sketchfab.com/saliam0899" target="_blank">
          saliam
        </a>
      </footer>
    </>
  );
}

export default App;
