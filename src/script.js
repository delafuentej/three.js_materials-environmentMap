import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import GUI from 'lil-gui';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';


/**
 * Materials 
 */
// Materials are used to put color on each visible pixel of the geometries
// Algorithms that decide on the color of each pixel are writtern in programs
// called SHADERS
//MeshBasicMaterial contains shaders => pre-made shaders

/**
 * Debug
 */
const gui = new GUI();


/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader();

const doorColorTexture = textureLoader.load('./textures/door/color.jpg');
const doorAlphaTexture =  textureLoader.load('./textures/door/alpha.jpg');
const doorAmbientOcclusionTexture =  textureLoader.load('./textures/door/ambientOcclusion.jpg');
const doorHeightTexture =  textureLoader.load('./textures/door/height.jpg');
const doorMetalNessTexture = textureLoader.load('./textures/door/metalness.jpg');
const doorRoughNessTexture = textureLoader.load('./textures/door/roughness.jpg');
const doorNormalTexture = textureLoader.load('./textures/door/normal.jpg');

const matcapTexture = textureLoader.load('./textures/matcaps/3.png');

const gradientTexture = textureLoader.load('./textures/gradients/5.jpg');

// textures used as map and matcap to be encoded in sRGB => THREE.SRGBColorSpace
doorColorTexture.colorSpace = THREE.SRGBColorSpace;
matcapTexture. colorSpace = THREE.SRGBColorSpace;
/**
 * Objects
 */
// ! MeshBasicMaterial
//const material = new THREE.MeshBasicMaterial({map:  doorColorTexture});
//const material = new THREE.MeshBasicMaterial();
//material.map = doorColorTexture;
//material.color = new THREE.Color('red');
//material.wireframe = true;
//material.transparent = true;
//material.opacity= 0.5;
//material.alphaMap = doorAlphaTexture;

// ! MeshNormalMaterial
//const material = new THREE.MeshNormalMaterial();
//material.wireframe = true;
//material.flatShading = true;
//material.side = THREE.DoubleSide

// ! MeshMatcapMaterial
//const material = new THREE.MeshMatcapMaterial;
//material.map = matcapTexture;
//material.transparent = true;
//material.opacity= 0.2;
//material.side = THREE.DoubleSide
// ! MeshDepthMaterial
//const material = new THREE.MeshDepthMaterial;

// ! MeshLambertMaterial => first material that requires lights
//const material = new THREE.MeshLambertMaterial;

// ! MeshPhongMaterial
//const material = new THREE.MeshPhongMaterial;
//material.shininess = 30;
//material.specular = new THREE.Color(0x1188ff); //reflection of the light

// ! MeshToonMaterial
// const material = new THREE.MeshToonMaterial;
// gradientTexture.minFilter = THREE.NearestFilter;
// gradientTexture.magFilter = THREE.NearestFilter;
// gradientTexture.generateMipmaps = false;
// material.gradientMap = gradientTexture;
// ! MeshStandardMaterial
//  const material = new THREE.MeshStandardMaterial;
// material.metalness = 1;
// material.roughness = 1;
// material.map = doorColorTexture;
// material.aoMap = doorAmbientOcclusionTexture;
// material.aoMapIntensity = 1;
// material.displacementMap = doorHeightTexture;
// material.displacementScale = 0.2;
// material.metalnessMap = doorMetalNessTexture;
// material.roughnessMap = doorRoughNessTexture;
// material.normalMap = doorNormalTexture;
// material.normalScale.set(0.5, 0.5);
// material.transparent = true;
// material.alphaMap = doorAlphaTexture;
//material.wireframe = true;
// material.side = THREE.DoubleSide

//gui
// gui.add(material, 'metalness').min(0).max(1).step(0.0001);
// gui.add(material, 'roughness').min(0).max(1).step(0.0001);


// ! MeshPhysicalMaterial
const material = new THREE.MeshPhysicalMaterial;
material.metalness = 0;
material.roughness = 0;
// material.map = doorColorTexture;
// material.aoMap = doorAmbientOcclusionTexture;
// material.aoMapIntensity = 1;
// material.displacementMap = doorHeightTexture;
// material.displacementScale = 0.2;
// material.metalnessMap = doorMetalNessTexture;
// material.roughnessMap = doorRoughNessTexture;
// material.normalMap = doorNormalTexture;
// material.normalScale.set(0.5, 0.5);
// material.transparent = true;
// material.alphaMap = doorAlphaTexture;
//material.wireframe = true;
material.side = THREE.DoubleSide

//gui
gui.add(material, 'metalness').min(0).max(1).step(0.0001);
gui.add(material, 'roughness').min(0).max(1).step(0.0001);

// ! clearcoat Effect
//material.clearcoat = 1;
//material.clearcoatRoughness = 0;

// gui
//gui.add(material, 'clearcoat').min(0).max(1).step(0.0001);
//gui.add(material, 'clearcoatRoughness').min(0).max(1).step(0.0001);

// ! sheen Effect
// material.sheen = 1;
// material.sheenRoughness = 0.25;
// material.sheenColor.set(1,1,1);

//gui
// gui.add(material, 'sheen').min(0).max(1).step(0.0001);
// gui.add(material, 'sheenRoughness').min(0).max(1).step(0.0001);
// gui.addColor(material, 'sheenColor')

// ! iridescence Effect => create color artifacts like a fuel puddle, soap bubbles, laserdisc
// material.iridescence = 1;
// material.iridescenceIOR = 1;
// material.iridescenceThicknessRange = [100, 800]; 

//gui
//  gui.add(material, 'iridescence').min(0).max(1).step(0.0001);
//  gui.add(material, 'iridescenceIOR').min(1).max(2.333).step(0.0001);
//  gui.add(material.iridescenceThicknessRange, '0').min(1).max(1000).step(1);
//  gui.add(material.iridescenceThicknessRange, '1').min(1).max(1000).step(1);

// ! Transmission Effect
material.transmission = 1;
material.ior = 1.5; //indef of refraction diamond: 2.417 / water: 1.333 // ait: 1.000293
material.thickness = 0.5;

//gui
 gui.add(material, 'transmission').min(0).max(1).step(0.0001);
 gui.add(material, 'ior').min(1).max(10).step(0.0001);
 gui.add(material, 'thickness').min(0).max(1).step(0.0001);


const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 64, 64),
    material,
);
sphere.position.x = - 1.5;
const plane = new THREE.Mesh(
    new THREE.PlaneGeometry( 1, 1, 150, 150),
    material,
);
const torus = new THREE.Mesh(
    new THREE.TorusGeometry(0.3, 0.2, 64,128),
    material,
)
torus.position.x = 1.5;




// add objects to the scene
scene.add(sphere, plane, torus);

/**
 * Lights
 */
// const ambientLight = new THREE.AmbientLight(0x15e5cf,1);
// scene.add(ambientLight);

// const pointLight = new THREE.PointLight(0x15e5cf,10);
// pointLight.position.x = 2;
// pointLight.position.y = 3;
// pointLight.position.z = 4;
// scene.add(pointLight);


/**
 * Environment map
 */
const rgbeLoader = new RGBELoader()
rgbeLoader.load('./textures/environmentMap/2k.hdr', (environmentMap)=> {
   environmentMap.mapping = THREE.EquirectangularReflectionMapping;

   scene.background = environmentMap;
   scene.environment = environmentMap;
    })

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 2
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // rotate the objects in the tick function
    sphere.rotation.y = 0.1 * elapsedTime;
    plane.rotation.y = 0.1 * elapsedTime;
    torus.rotation.y = 0.1 * elapsedTime;

    // negative value to rotate toward the sky at first
    sphere.rotation.x = - 0.15 * elapsedTime;
    plane.rotation.x = - 0.15 * elapsedTime;
    torus.rotation.x = - 0.15 * elapsedTime;


    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()