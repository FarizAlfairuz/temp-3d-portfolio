import * as THREE from "three"
import Experience from "../Experience.js"
import Environment from "./Environment.js"
import Floor from "./Floor.js"
import Fox from "./Fox.js"
import TestBox from "./TestBox.js"

export default class World {
  constructor() {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.resources = this.experience.resources
    this.raycaster = this.experience.raycaster

    let stencilRef = 1

    // Wait for resources
    this.resources.on("ready", () => {
      // Setup
      this.stencil = new TestBox()
      this.stencil.mesh.scale.set(1.5, 1.5, 1.5)

      this.stencil.material.stencilWrite = true
      this.stencil.material.stencilRef = stencilRef
      this.stencil.material.stencilFunc = THREE.AlwaysStencilFunc
      this.stencil.material.stencilZPass = THREE.ReplaceStencilOp

      // testbox front
      this.testBox2 = new TestBox()
      
      // setup front
      this.testBox2.mesh.rotation.x = 1
      this.testBox2.mesh.position.x = -1
      this.testBox2.mesh.position.z = 3
      
      this.testBoxBlack = new TestBox()
      this.testBoxBlack.material.color = new THREE.Color('#1e1a20')
      this.testBoxBlack.material.stencilWrite = true
      this.testBoxBlack.material.stencilRef = stencilRef
      this.testBoxBlack.material.stencilFunc = THREE.EqualStencilFunc

      this.testBoxBlack.mesh.rotation.x = 1
      this.testBoxBlack.mesh.position.x = -1
      this.testBoxBlack.mesh.position.z = 3


      this.environment = new Environment()
    })
  }

  update() {
  
  }
}
