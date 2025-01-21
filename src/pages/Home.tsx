import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import { Island, Sky, Bird, Plane } from '../models';

const Home = () => {
  const [isRotating, setIsRotating] = useState<boolean>(false);
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    const islandRotation = [0.1, 4.7, 0];
    const screenPosition = [0, -6.5, -43];
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, islandRotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale = null;
    let screenPosition = null;
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();
  return (
    <section className="w-full relative h-screen">
      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Sky />
          <Island
            position={islandPosition}
            scale={islandScale}
            islandRotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          />
          <Bird />
          <Plane
            rotation={[0, 20, 0]}
            isRotating={isRotating}
            planeScale={planeScale}
            planePosition={planePosition}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;

{
  /*<div className="absolute top-28 left-0 right-0 z-10 items-center justify-center">*/
}
{
  /*  PopUp*/
}
{
  /*</div>*/
}
