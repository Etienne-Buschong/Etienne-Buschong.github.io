class CanvasHandler {

    constructor(parentElement) {
        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera( 75, parentElement.clientWidth / parentElement.clientHeight, 0.1, 1000 );
        this.renderer = new THREE.WebGLRenderer({alpha: true});
        console.log(parentElement.width, parentElement.innerWidth)
        this.renderer.setSize( parentElement.clientWidth, parentElement.clientHeight );
        parentElement.appendChild( this.renderer.domElement );
        var geometry = new THREE.BoxGeometry();
        var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        this.cube = new THREE.Mesh( geometry, material );
        this.scene.add( this.cube );

        this.camera.position.z = 5;
        this.animate();

    }

    animate() {
        requestAnimationFrame( this.animate.bind(this) );
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
        this.renderer.render( this.scene, this.camera );
    }

}

module.exports = CanvasHandler;