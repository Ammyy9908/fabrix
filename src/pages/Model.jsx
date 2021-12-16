/* eslint-disable */
import "../App.css"
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import getFile from "../utils/getFile"
import React from "react";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./test.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={2} />
    </>
  );
};

export default function ThreeModel({id}) {
    console.log(id);

    

  return (
    <div className="App">
      <Canvas style={{ background: "#FFFFFF" }}>
      <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Model />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}
