import { JSX } from 'react';
import planeScene from '../assets/3d/plane.glb';
import { useGLTF } from '@react-three/drei';

type PlaneProps = JSX.IntrinsicElements['mesh'] & {
  isRotating?: boolean;
};

const Plane = ({ isRotating = false, ...props }: PlaneProps) => {
  const { scene, animations } = useGLTF(planeScene);
  return (
    <mesh {...props}>
      <primitive object={scene}></primitive>
    </mesh>
  );
};

export default Plane;
