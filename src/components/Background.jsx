import {Suspense, useEffect, useRef, useState} from "react";
import {
  useDepthBuffer,
  useGLTF,
} from "@react-three/drei";
import {Canvas, useFrame, useThree} from "@react-three/fiber";
import * as THREE from 'three'
import {MathUtils} from "three";
import {ChromaticAberration, EffectComposer, Scanline} from "@react-three/postprocessing";
import {BlendFunction} from "postprocessing";

const Model = () => {
  const initRotation = [68, 86.5, 0]
  const initPosition = [50,  -220, -110];

  const time = useRef(0);
  const [offsetX, setOffsetX] = useState(0);
  const [showBlur, setShowBlur] = useState(true);
  const allScene = useGLTF('/assets/fbx/Scene.glb');
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
    setRotation([initRotation[0] - 0.02 * window.scrollY, initRotation[1] - 0.02 * window.scrollY, initRotation[2]]);
  };

  useFrame((state, delta) => {
    time.current += delta;

    if (time.current % 7 < 0.15) {
      const temp = offsetX + 0.005;
      if (temp <= 0.02)
        setOffsetX(temp);
    } else if (time.current % 7 < 0.5 && time.current % 7 > 0.3) {
      const temp = offsetX + 0.015;
      if (temp <= 0.05)
        setOffsetX(temp);
    } else {
      setOffsetX(0);
    }
    mixer.update(delta);
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Suspense fallback={null}>
      <ambientLight intensity={10} />
      <pointLight color="red" intensity={20} position={[0, 50, -150]} />


      <directionalLight position={[-150,  150, -150]} intensity={20} color="#B2B16E" />
      <directionalLight position={[-150,  -50, -150]} intensity={20} color="#6AA781" />
      {/*<directionalLight position={[50,  150, -200]} intensity={10} color="#6AA781" />*/}
      {/*<directionalLight position={[100,  -150, -150]} intensity={10} color="#6AA781" />*/}
      <primitive object={allScene.scene} rotation={[MathUtils.degToRad(rotation[0]), MathUtils.degToRad(rotation[1]), MathUtils.degToRad(rotation[2])]}  position={position}/>
      {
        showBlur &&
        <EffectComposer>
          <ChromaticAberration offset={[offsetX, 0]} />
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
    <Canvas style={{position: "fixed", width: "100%", height: "100%", zIndex: -1}}>
      <Model />
    </Canvas>
  );
};

export default Background;
