import { useRef, useEffect, useState } from "react";
import { useThree, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three";
import { useScrollValue } from "../../hooks/useScrollValue";
import ResImagesRoute from "../../assets/images/ResImagesRoute";

const animateThreshold = 1;

export default function FlutteringCloth() {
  const meshRef = useRef();
  const { camera, size } = useThree();
  const value = useScrollValue();
  const [x, setX] = useState(0);
  const [geometrySize, setGeometrySize] = useState([1, 1]);

  useEffect(() => {
    setX(value);
  }, [value]);

  const texture = useLoader(TextureLoader, ResImagesRoute.table_5356682_1920);

  useEffect(() => {
    if (!texture?.image) return;

    const texW = texture.image.width;
    const texH = texture.image.height;
    const [planeW, planeH] = geometrySize;

    const texRatio = texW / texH;
    const planeRatio = planeW / planeH;

    const repeatX = texRatio > planeRatio ? planeRatio / texRatio : 1;
    const repeatY = texRatio < planeRatio ? texH / texW : 1; // or planeRatio / texRatioの逆

    texture.repeat.set(repeatX, repeatY);
    texture.offset.set((1 - repeatX) / 2, (1 - repeatY) / 2);
    texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.center.set(0.5, 0);
    texture.needsUpdate = true;
  }, [texture, geometrySize]);

  useEffect(() => {
    const fovRad = (camera.fov * Math.PI) / 180;
    const height = 2 * Math.tan(fovRad / 2) * camera.position.z;
    const width = height * (size.width / size.height);
    setGeometrySize([width, height]);
  }, [camera, size]);

  useFrame(() => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const position = mesh.geometry.attributes.position;
    const count = position.count;

    for (let i = 0; i < count; i++) {
      const px = position.getX(i);
      const py = position.getY(i);
      const wave =
        value <= animateThreshold + 1.5
          ? 0
          : Math.sin(px * 3 + x * 2) * 0.1 + Math.sin(py * 4 + x * 1.5) * 0.05;
      position.setZ(i, wave);
    }

    position.needsUpdate = true;
    mesh.geometry.computeVertexNormals();
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[geometrySize[0], geometrySize[1], 80, 80]} />
      <meshStandardMaterial
        map={texture}
        side={THREE.DoubleSide}
        roughness={0.8}
      />
    </mesh>
  );
}
