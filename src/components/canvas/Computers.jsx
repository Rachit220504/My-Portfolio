import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  Environment,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  // Improve material properties for better brightness and reflectivity
  computer.scene.traverse((child) => {
    if (child.isMesh) {
      child.material.metalness = 0.8;
      child.material.roughness = 0.2;
      child.material.needsUpdate = true;
    }
  });

  return (
    <mesh>
      {/* Better lighting setup */}
      <hemisphereLight intensity={0.5} groundColor="black" />
      <pointLight intensity={2} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.3}
        penumbra={0.5}
        intensity={2}
        castShadow
        shadow-mapSize={2048}
      />
      <directionalLight position={[10, 10, 5]} intensity={2} castShadow />

      {/* 3D Model */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.52 : 0.7}
        position={isMobile ? [-3, -3, -2.2] : [0, -3.7, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />

      {/* Adding HDRI Environment for better lighting */}
      <Environment preset="sunset" />
    </Canvas>
  );
};

export default ComputersCanvas;
