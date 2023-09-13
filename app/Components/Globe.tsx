import {Link} from '@remix-run/react';
import {useEffect, useRef} from 'react';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

export default function Globe({texture}: {texture: string}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    THREE.ColorManagement.enabled = false;

    /**
     * Base
     */
    // Canvas
    const canvas = canvasRef.current;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#79DFFF');

    /**
     * Textures
     */
    const loadingManager = new THREE.LoadingManager();
    loadingManager.onStart = () => {
      // console.log('loadingManager: loading started');
    };
    loadingManager.onLoad = () => {
      // console.log('loadingManager: loading finished');
    };
    loadingManager.onProgress = () => {
      // console.log('loadingManager: loading progressing');
    };
    loadingManager.onError = () => {
      // console.log('loadingManager: loading error');
    };

    const textureLoader = new THREE.TextureLoader(loadingManager);

    const colorTexture = textureLoader.load(texture);
    colorTexture.wrapS = THREE.MirroredRepeatWrapping;
    colorTexture.wrapT = THREE.MirroredRepeatWrapping;
    colorTexture.generateMipmaps = false;
    colorTexture.minFilter = THREE.NearestFilter;
    colorTexture.magFilter = THREE.NearestFilter;

    /**
     * Object
     */
    const geometry = new THREE.SphereGeometry(0.5, 64, 64);
    const material = new THREE.MeshBasicMaterial({map: colorTexture});
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    /**
     * Sizes
     */
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    window.addEventListener('resize', () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    /**
     * Light
     */
    scene.add(new THREE.AmbientLight(0x333333));

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 3, 5);
    scene.add(light);

    /**
     * Camera
     */
    // Base camera
    const camera = new THREE.PerspectiveCamera(
      38,
      sizes.width / sizes.height,
      0.1,
      100,
    );
    camera.position.x = 1;
    camera.position.y = 1.2;
    camera.position.z = 1.4;
    scene.add(camera);

    // Controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
      canvas,
    });
    renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    /**
     * Animate
     */
    const clock = new THREE.Clock();

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      // Update controls
      controls.update();

      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };

    tick();
  });
  return (
    <div>
      <canvas className="w-full h-full outline-none" ref={canvasRef}></canvas>
      <Link
        to="/"
        className="absolute z-50 top-20 left-20 bg-white px-20 py-10"
      >
        {'< Back'}
      </Link>
    </div>
  );
}
