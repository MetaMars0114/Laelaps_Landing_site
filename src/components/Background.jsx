import {Suspense, useEffect, useState} from "react";
import {useAnimations, useGLTF} from "@react-three/drei";
import {Canvas, useFrame} from "@react-three/fiber";
import * as THREE from 'three'
import {MathUtils} from "three";

const Model = () => {
  const initRotation = [68, 86.5, 0]
  const initPosition = [50,  -220, -110];
  const initCoinPosition = [-1500,  -100, 300];
  const initCoinRotation = [0, 60, 0];
  const character = useGLTF('/assets/fbx/Character.glb')
  const coins = useGLTF('/assets/fbx/Coins.glb')
  const portal = useGLTF('/assets/fbx/Portal.glb')
  let characterMixer = new THREE.AnimationMixer(character.scene);
  character.animations.forEach((clip) => {
    const action = characterMixer.clipAction(clip);
    action.play();
  });

  let portalMixer = new THREE.AnimationMixer(portal.scene);
  portal.animations.forEach((clip) => {
    const action = portalMixer.clipAction(clip);
    action.play();
  });

  const [rotation, setRotation] = useState(initRotation);
  const [position, setPosition] = useState(initPosition);
  const [coinPosition, setCoinPosition] = useState(initCoinPosition);
  const [coinRotation, setCoinRotation] = useState(initCoinRotation);

  const handleScroll = () => {
    console.log(window.scrollY);
    setRotation([initRotation[0]  - 0.02 * window.scrollY, initRotation[1] - 0.02 * window.scrollY, initRotation[2]]);
    setCoinPosition([initCoinPosition[0] + 0.3 * window.scrollY, initCoinPosition[1], initCoinPosition[2] - 0.02 * window.scrollY]);
    setCoinRotation([initCoinRotation[0] , initCoinRotation[1] - 0.01 * window.scrollY, initCoinRotation[2]]);
  };

  useFrame((state, delta) => {
    characterMixer.update(delta);
    portalMixer.update(delta);
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Suspense fallback={null}>
      <color attach="background" args={["#152858"]} />
      <ambientLight intensity={5} />
      <primitive object={character.scene} rotation={[MathUtils.degToRad(rotation[0]), MathUtils.degToRad(rotation[1]), MathUtils.degToRad(rotation[2])]} position={position} />
      <primitive object={coins.scene} rotation={[MathUtils.degToRad(coinRotation[0]), MathUtils.degToRad(coinRotation[1]), MathUtils.degToRad(coinRotation[2])]} position={coinPosition} />
      <primitive object={portal.scene} />
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
