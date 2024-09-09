import * as THREE from 'three';

// 1 Create the scene

const scene = new THREE.scene();
scene.backgroud = new THREE.Color('#f0f0f0');

// 2 Add the Camera

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1,1000);
camera.position.z = 5;

// 3 Create and add a cubeobject

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambrtMaterial({color: '#3468585', emissive:'#468585'});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 4 Add lighting

const ligh = new THREE.directionalLight(0x9CDBA6, 10);