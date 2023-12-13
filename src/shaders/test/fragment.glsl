precision mediump float;

uniform vec3 uColor;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform bool uIntersect;

void main() {
  gl_FragColor = vec4(uColor, 1.0);
  // if(uIntersect) {
  //   gl_FragColor = vec4(uColorA, 1.0);
  // } else {
  //   gl_FragColor = vec4(uColorB, 1.0);

  // }
}