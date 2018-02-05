import * as THREE from 'three'
import styles from './app.less';


const initRenderer = (id) => {
    const canvas = document.getElementById(id),
        canvasWidth = canvas.clientWidth,
        canvasHeight = canvas.clientHeight
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(canvasWidth, canvasHeight);
    canvas.appendChild(renderer.domElement);
    return renderer
}

const initCamera = () => {
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5;
    return camera
}

/**
 * 画一个正方体
 */
const createCube = () => {
    const geometry = new THREE.CubeGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0xeeeeee })
    const cube = new THREE.Mesh(geometry, material)
    return cube
}
/**
 * 画一根线
 */
const createLine = () => {
    const geometry = new THREE.Geometry();
    const material = new THREE.LineBasicMaterial({ vertexColors: true });
    const color1 = new THREE.Color(0x444444), color2 = new THREE.Color(0xFF0000);

    // 线的材质可以由2点的颜色决定
    const p1 = new THREE.Vector3(-100, 0, 100);
    const p2 = new THREE.Vector3(100, 0, -100);
    geometry.vertices.push(p1);
    geometry.vertices.push(p2);
    geometry.colors.push(color1, color2);

    const line = new THREE.Line(geometry, material, THREE.LinePieces);
    return line
}


const renderer = initRenderer("canvas")
const scene = new THREE.Scene()
const camera = initCamera()

const cube = createCube()
scene.add(cube);

const line=createLine()
scene.add(line);

function render() {
    requestAnimationFrame(render);
    cube.rotation.x += 0.001;
    cube.rotation.y += 0.001;
    renderer.render(scene, camera);
}
render();