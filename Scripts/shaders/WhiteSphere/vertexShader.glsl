			uniform float u_time;

			varying vec3 vPosition;
			varying vec3 vNormal;
			varying vec2 vUv;
			varying float vDisplacement;


			#define PI 3.1415926535897932284626433832795
		  
			float smoothMod(float axis, float amp, float rad) {
			  float top = cos(PI * (axis / amp)) * sin(PI * (axis / amp));
			  float bottom = pow(sin(PI * (axis / amp)), 2.0) + pow(rad, 2.0);
			  float at = atan(top / bottom);
			  return amp * (1.0 / 2.0) - (1.0 / PI) * at;
			}
		  
			// Escala parámetros
			float fit(float unscaled, float originalMin, float originalMax, float minAllowed, float maxAllowed) {
			  return (maxAllowed - minAllowed) * (unscaled - originalMin) / (originalMax - originalMin) + minAllowed;
			}
		  
			float wave(vec3 position) {
			  vec3 coords = position;
			  coords.y += u_time;
			  return fit(smoothMod(coords.y * 7.0, 1.0, 1.5), 0.35, 0.6, 0.0, 1.0);
			}

void main() {
				vec3 coords = normal;
			  	float pattern = wave(coords);

				//varyings
				vPosition = position;
				vNormal = normal;
				vUv = uv;
				vDisplacement = pattern;

				//MVP
				float displacement = vDisplacement / 0.5;
				vec3 newPosition = position + normal  * displacement; //Esta linea, junto con la de abajo genera el desplasamiento
				vec4 modelViewPosition = modelViewMatrix * vec4( newPosition, 1.0);
				vec4 projectedPosition = projectionMatrix * modelViewPosition;
				gl_Position = projectedPosition;
			}