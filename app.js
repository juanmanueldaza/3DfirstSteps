let scene, camera, renderer;

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);

    camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight,1,5000);
    camera.rotation.y = 45/180*Math.PI;
    camera.position.x = 8;
    camera.position.y = 0;
    camera.position.z = 10;
    
    renderer = new THREE.WebGLRenderer({antialias:true});
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', renderer)

    hlight = new THREE.AmbientLight (0x404040, 5);
    scene.add(hlight);

    directionalLight = new THREE.DirectionalLight(0xffffff,30);
    directionalLight.position.set(0,1,0);
    directionalLight.castShadow = true;
    scene.add(directionalLight); 

    
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(renderer.domElement);

    let loader = new THREE.GLTFLoader();
    loader.load('scene.gltf', function(gltf) {
        scene.add(gltf.scene);
        animate();
    });

    function animate() {
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }

}
init();

