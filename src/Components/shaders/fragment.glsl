

varying vec2 vUv;
varying vec3 vPosition;

void main() {

  float strength = mod(vUv.y, 1.) * 1.;

  vec3 blue = vec3(0.6, 0.35, 0.8) ;

  vec3 white = vec3(1.0, 1.0, 1.0);

  vec3 mixColor = mix(blue , white, strength);
  gl_FragColor = vec4(vec3(mixColor), 1.);
}