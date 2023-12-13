import * as THREE from "three"
import Experience from "../Experience.js"
// import testVertexShader from "../../shaders/test/vertex.glsl"
// import testFragmentShader from "../../shaders/test/fragment.glsl"

export default class TestBox {
  constructor() {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.resources = this.experience.resources

    // Setup
    this.setGeometry()
    this.setTexture()
    this.setMaterial()
    this.setMesh()
  }

  setGeometry() {
    this.geometry = new THREE.TorusGeometry(1, 0.4, 16, 60)
  }

  setTexture() {
    this.textures = {}
    this.textures.color = new THREE.Color("#ffeded")
    this.textures.gradientMap =
      this.resources.items.gradient3Texture
    this.textures.gradientMap.magFilter =
      THREE.NearestFilter
  }

  setMaterial() {
    this.material = new THREE.MeshToonMaterial({
      color: this.textures.color,
      gradientMap: this.textures.gradientMap,
    })
  }

  setMesh() {
    this.mesh = new THREE.Mesh(this.geometry, this.material)
    this.scene.add(this.mesh)
  }
}
