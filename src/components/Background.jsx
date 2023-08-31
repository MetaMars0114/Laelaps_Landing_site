import {Suspense, useEffect, useRef, useState} from "react";
import {
  useDepthBuffer,
  useGLTF
} from "@react-three/drei";
import {Canvas, useFrame, useThree} from "@react-three/fiber";
import * as THREE from 'three'
import {MathUtils} from "three";
import {Bloom, ChromaticAberration, EffectComposer, Scanline} from "@react-three/postprocessing";
import {BlendFunction} from "postprocessing";

const Model = () => {
  const initRotation = [68, 86.5, 0]
  const initPosition = [50,  -220, -110];
  const [showBlur, setShowBlur] = useState(false);
  const allScene = useGLTF('/assets/fbx/Scene.glb')
  const depthBuffer = useDepthBuffer({ frames: 1 })

  let mixer = new THREE.AnimationMixer(allScene.scene);
  allScene.animations.forEach((clip) => {
    const action = mixer.clipAction(clip);
    action.setDuration(15);
    action.play();
  });

  const [rotation, setRotation] = useState(initRotation);
  const [position, setPosition] = useState(initPosition);

  const handleScroll = () => {
    if ((window.scrollY > 1000 && window.scrollY <= 2000) || (window.scrollY > 3000 && window.scrollY <= 4000))
      setShowBlur(true);
    else
      setShowBlur(false);
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
      <directionalLight position={[-150,  50, -300]} intensity={1} color="#D5C57F" />
      <directionalLight position={[-150,  -50, -200]} color="#75C097" />
      <directionalLight position={[50,  150, -200]} intensity={2} color="#75C097" />
      <directionalLight position={[100,  -150, -150]} color="#73D7E9" />
      <primitive object={allScene.scene} rotation={[MathUtils.degToRad(rotation[0]), MathUtils.degToRad(rotation[1]), MathUtils.degToRad(rotation[2])]}  position={position}/>
      {
        showBlur &&
        <EffectComposer>
          <ChromaticAberration offset={[0.001, 0]} />
          <Scanline
            blendFunction={BlendFunction.OVERLAY} // blend mode
            density={1.25} // scanline density
          />
        </EffectComposer>
      }
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
