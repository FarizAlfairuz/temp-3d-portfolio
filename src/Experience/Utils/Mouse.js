import * as THREE from "three"
import Experience from "../Experience"

export default class Mouse {
  constructor() {
    this.instance = new THREE.Vector2()
    this.experience = new Experience()
    this.sizes = this.experience.sizes

    window.addEventListener("mousemove", (event) => {
      this.instance.x =
        (event.clientX / this.sizes.width) * 2 -
        1
      this.instance.y = -(
        (event.clientY / this.sizes.height) * 2 -
        1
      )
    })
  }
}
