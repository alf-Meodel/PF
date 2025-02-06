import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { ThreeElements } from '@react-three/fiber';

const BusinessCard = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Load textures with local files
  const textures = useTexture({
    front: '/img/meodel_f.jpg',
    back: '/img/meodel_b.jpg',
    frontBlack: '/img/meodel_f_black.jpg',
    backBlack: '/img/meodel_b_black.jpg',
    frontWhite: '/img/meodel_f_white.jpg',
    backWhite: '/img/meodel_b_white.jpg',
    logo: '/img/meodellogo.png'
  });

  // Material properties
  const materialProps = {
    roughness: 0.5,
    metalness: 0.7,
    bumpScale: 0.15
  };

  // Create materials array for the cube
  const materials = [
    new THREE.MeshStandardMaterial({ map: textures.logo }),
    new THREE.MeshStandardMaterial({ map: textures.logo }),
    new THREE.MeshStandardMaterial({ map: textures.logo }),
    new THREE.MeshStandardMaterial({ map: textures.logo }),
    new THREE.MeshStandardMaterial({
      map: textures.front,
      metalness: materialProps.metalness,
      roughness: materialProps.roughness,
      bumpScale: materialProps.bumpScale,
    }),
    new THREE.MeshStandardMaterial({
      map: textures.back,
      metalness: materialProps.metalness,
      roughness: materialProps.roughness,
      bumpScale: materialProps.bumpScale,
    })
  ];

  useFrame(() => {
    if (meshRef.current) {
      // Add any animations here if needed
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[90, 50, 0.45]} />
      {materials.map((material, index) => (
        <primitive object={material} attach={`material-${index}`} key={index} />
      ))}
    </mesh>
  );
};

export default BusinessCard; 