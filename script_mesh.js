import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.152.0/build/three.module.js";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.152.0/examples/jsm/controls/OrbitControls.js";
import { OBJLoader } from "https://cdn.jsdelivr.net/npm/three@0.152.0/examples/jsm/loaders/OBJLoader.js";

// Scene, Camera, Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 800 / 600, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(800, 600);
document.getElementById("viewer-container").appendChild(renderer.domElement);

// Orbit Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(1, 1, 2).normalize();
scene.add(directionalLight);

// Load OBJ Model
const loader = new OBJLoader();
let mesh;


loader.load(
    "D:/Callisto/repo/maximedieudonne.github.io/brain_project.glb",
    (object) => {
        console.log("Mesh loaded successfully:", object);
        mesh = object;
        scene.add(mesh);
    },
    (xhr) => console.log(`Loading progress: ${(xhr.loaded / xhr.total) * 100}%`),
    (error) => console.error("Error loading OBJ file:", error)
);

// Camera Position
camera.position.z = 3;

// Update Renderer
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();

// Color Slider
document.getElementById("color-slider").addEventListener("input", (event) => {
    const newColor = event.target.value;
    if (mesh) {
        mesh.traverse((child) => {
            if (child.isMesh) {
                child.material.color.set(newColor);
            }
        });
    }
});
