import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

import skyScene from "../assets/3d/sky.glb"
import { useFrame } from '@react-three/fiber';
const Sky = ( {isRotating} ) => {
    const sky = useGLTF(skyScene);
    const skyRef = useRef();

    useFrame((_,delta)=>{
      if(isRotating)
      skyRef.current.rotation.y += 0.15 * delta;
    })

  return (
    // <div></div>  agr ye hota mesh ki jgah toh island hi gayab ho jata bcz mesh is geometry material
    <mesh ref={skyRef} >        { /*this uses something known as PRIMITIVE ELEMENT NOTE:- Island is not a primitive element as it is made up of no. of meshes but our sky is primitive that means we can simply consume our 3D model */}
      
      <primitive object={sky.scene}/>
    </mesh>
  )
}

export default Sky
