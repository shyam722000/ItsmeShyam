import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const DeskModel = () => {
  const { scene } = useGLTF("/sitting_at_desk.glb"); // Replace with your model's path
  return <primitive object={scene} scale={1.5} />;
};

export default function ThreeDDesk() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      {/* Canvas for 3D rendering */}
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 5]} />
        <Suspense fallback={null}>
          <DeskModel />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
