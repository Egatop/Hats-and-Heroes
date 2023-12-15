import { GLTFLoader } from '../js/examples/jsm/loaders/GLTFLoader.js';
var loader = new GLTFLoader();
            
loader.load( 'hat.glb', function ( gltf )
{
    sword = gltf.scene;  // sword 3D object is loaded
    sword.scale.set(2, 2, 2);
    sword.position.y = 4;
    scene.add(sword);
} );