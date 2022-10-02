import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import { Logo } from "./Logo";

function Scene() {
  const camera = useThree((state) => state.camera);

  useEffect(() => {
    camera.lookAt(0, 0, 150);
  }, []);

  return (
    <>
      <Stage environment="city" intensity={0.6}>
        <Suspense fallback={null}>
          <Logo scale={[0.5, 0.5, 0.5]} position={[0, 0, 0]} />
        </Suspense>
      </Stage>
      <OrbitControls autoRotate enableRotate position={[0, 0, 0]} />
    </>
  );
}

export default Scene;
