import { useState } from 'react';
import * as THREE from 'three';
import { Canvas,useLoader } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const BackpackModel = ({texture, color, metalColor, metalNormal, metalOcclusion}) => {

  const { scene } = useGLTF("/project_webAr/models/backpack.glb"); 

  scene.traverse((obj) => {
    if (obj.isMesh) {
      obj.material.map = texture;
      obj.material.color.set(color);
      
      if (obj.name.includes("metal")) { 
        obj.material.color.set(metalColor);
        obj.material.metalness = 1; 
        obj.material.roughness = 0.2; 
        obj.material.map = metalColor; 
        obj.material.normalMap = metalNormal; 
        obj.material.aoMap = metalOcclusion; 
        obj.material.needsUpdate = true;
      }
      obj.material.needsUpdate = true;
    }
  });
  return <primitive object={scene} scale={[6.5, 6.4, 6.5]} className='back'/>;
};
const Backpack = ({currentTexture, currentColor, currentMetalColor}) => {

  return (
    <div className='backpack'>
      <Canvas className="canvas" style={{marginTop: '50px'}}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} />
        <BackpackModel texture={currentTexture} color={currentColor} metalColor={currentMetalColor}/>
        <OrbitControls  />
      </Canvas>
    </div>
  );
};

export default Backpack;
