import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeBackgroundProps {
  scrollY: number;
  onLoaded: () => void;
}

export const ThreeBackground: React.FC<ThreeBackgroundProps> = ({ scrollY, onLoaded }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Create floating geometric shapes (like code blocks and devices)
    const shapes: THREE.Mesh[] = [];

    // Create various geometric shapes
    const geometries = [
      new THREE.BoxGeometry(1.2, 0.8, 0.3), // Laptop-like
      new THREE.CylinderGeometry(0.5, 0.7, 0.2, 6), // Phone-like
      new THREE.BoxGeometry(0.6, 0.6, 0.1), // Tablet-like
      new THREE.TorusGeometry(0.5, 0.2, 8, 16), // Abstract shapes
    ];

    const colors = [0x00ff88, 0x0088ff, 0xff0088, 0x88ff00, 0xff8800];

    for (let i = 0; i < 15; i++) {
      const geometry = geometries[i % geometries.length];
      const material = new THREE.MeshPhongMaterial({
        color: colors[i % colors.length],
        transparent: true,
        opacity: 0.6,
        shininess: 100,
      });

      const shape = new THREE.Mesh(geometry, material);
      shape.position.set(
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15 - 10,
      );
      shape.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
      );

      scene.add(shape);
      shapes.push(shape);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(10, 10, 5);
    scene.add(directionalLight);

    const pointLight1 = new THREE.PointLight(0x00ff88, 2, 100);
    pointLight1.position.set(15, 15, 15);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x0088ff, 2, 100);
    pointLight2.position.set(-15, -15, 15);
    scene.add(pointLight2);

    camera.position.z = 12;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.008 + index * 0.001;
        shape.rotation.y += 0.012 + index * 0.002;
        shape.position.y += Math.sin(Date.now() * 0.001 + index * 0.5) * 0.015;
        shape.position.x += Math.cos(Date.now() * 0.0008 + index * 0.3) * 0.01;
      });

      // Camera movement based on scroll
      camera.position.y = scrollY * 0.003;
      camera.rotation.x = scrollY * 0.0003;
      camera.position.x = Math.sin(scrollY * 0.0005) * 2;

      renderer.render(scene, camera);
    };

    animate();
    onLoaded();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [scrollY, onLoaded]);

  return <div ref={mountRef} />;
};
