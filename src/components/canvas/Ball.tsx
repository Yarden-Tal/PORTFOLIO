import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../loaders/Loader";

const Ball = (props: { imgUrl: string }): JSX.Element => {
  const [decal] = useTexture<string[]>([props.imgUrl]);

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 1, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 15]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={0.95}
          map={decal}
          //@ts-ignore
          flatShading
        />
        <Decal
          position={[0, 0, -1]}
          rotation={[0, Math.PI, 0]}
          scale={1.08}
          map={decal}
          //@ts-ignore
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }: { icon: string }): JSX.Element => {
  return (
    <Canvas
      className="cursor-grab"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
