import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';



function main() {
  const canvas = document.getElementById('canvas');
  // const renderer = new THREE.WebGLRenderer({ canvas });
  //Scene
  const scene = new THREE.Scene();
  scene.backgroud = new THREE.Color('#f0f0f0');

  //Camera
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  //Object
  const geometry = new THREE.DodecahedronGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: '#468585' });
  const dodecahedron = new THREE.Mesh(geometry, material);

  const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
  const boxMaterial = new THREE.MeshBasicMaterial({ color: '#B4B4B3' });
  const box = new THREE.Mesh(boxGeometry, boxMaterial);
  box.position.y = -1.5;

  scene.add(dodecahedron);
  scene.add(box);

  //Lights
  const light = new THREE.SpotLight(0x006769, 100);
  light.position.set(1, 1, 1);
  scene.add(light);

  //Renderer
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);


  //OrbitControls
  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.enableZoom = true;
  controls.enablePan = true;

  //Add Animations
  function animate() {
    requestAnimationFrame(animate);
    dodecahedron.rotation.x += 0.01;
    dodecahedron.rotation.y += 0.01;

    box.rotation.y += 0.005;
    controls.update();

    renderer.render(scene, camera);
  }
}
main();