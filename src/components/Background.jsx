import {Suspense, useEffect, useState} from "react";
import {PerspectiveCamera, useGLTF} from "@react-three/drei";
import {Canvas, useFrame} from "@react-three/fiber";
import * as THREE from 'three'
import {MathUtils} from "three";

const Model = () => {
  const initRotation = [68, 86.5, 0]
  const initPosition = [50,  -220, -110];
  const allScene = useGLTF('/assets/fbx/Scene.glb')

  let mixer = new THREE.AnimationMixer(allScene.scene);
  allScene.animations.forEach((clip) => {
    const action = mixer.clipAction(clip);
    action.setDuration(5);
    action.play();
  });

  const [rotation, setRotation] = useState(initRotation);
  const [position, setPosition] = useState(initPosition);
  const handleScroll = () => {
    setRotation([initRotation[0] - 0.02 * window.scrollY, initRotation[1] - 0.02 * window.scrollY, initRotation[2]]);
  };

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Suspense fallback={null}>
      <color attach="background" args={["#152858"]} />
      <ambientLight intensity={10} />
      <primitive object={allScene.scene} rotation={[MathUtils.degToRad(rotation[0]), MathUtils.degToRad(rotation[1]), MathUtils.degToRad(rotation[2])]}  position={position}/>
    </Suspense>
  );
}

const Background = () => {
  return (
    <Canvas style={{position: "fixed", width: "100%", height: "100%"}}>
      <Model />
    </Canvas>
  );
};

export default Background;
