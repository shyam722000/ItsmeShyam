import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

const Model = () => {
  const { scene } = useGLTF("./desk.glb");
  const groupRef = useRef();
  const targetRotation = useRef(0);
  const currentRotation = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      targetRotation.current = THREE.MathUtils.lerp(0, Math.PI, scrollY / 2000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      currentRotation.current = THREE.MathUtils.lerp(
        currentRotation.current,
        targetRotation.current,
        0.05
      );
      groupRef.current.rotation.y = currentRotation.current;
    }
  });

  return (
    <group ref={groupRef} scale={[5, 5, 5]} position={[0, 0, 0]}>
      <primitive object={scene} />
    </group>
  );
};

const Scroll3DModel = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // background: "#f3ebee",
      }}
    >
      <Canvas camera={{ position: [5, 2, 8], fov: 30 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={6.1} />
        <Model />
        <OrbitControls enableZoom={true} minDistance={10} maxDistance={20} />
      </Canvas>
    </div>
  );
};

export default Scroll3DModel;
