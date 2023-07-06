	uniform float u_time;

	varying vec3 vPosition;
	varying vec3 vNormal;
	varying vec2 vUv;
	varying float vDisplacement;
			
void main() {
			  // Iluminación difusa
			  vec3 lightDirection1 = normalize(vec3(0.0, 1.0, 1.0));  // Dirección de la primera luz
			  vec3 lightDirection2 = normalize(-lightDirection1); // Dirección opuesta a la primera luz
			  
			  // Direcciones de las luces perpendiculares
			  vec3 lightDirection3 = normalize(vec3(1.0, 0.0, 1.0));
			  vec3 lightDirection4 = normalize(-lightDirection3);
			  vec3 lightDirection5 = normalize(vec3(-1.0, 0.0, 1.0));
			  vec3 lightDirection6 = normalize(-lightDirection5);
			  
			  float diffuse1 = max(0.0, dot(vNormal, lightDirection1));  // Factor de iluminación difusa para la primera luz
			  float diffuse2 = max(0.0, dot(vNormal, lightDirection2));  // Factor de iluminación difusa para la segunda luz
			  float diffuse3 = max(0.0, dot(vNormal, lightDirection3));  // Factor de iluminación difusa para la tercera luz
			  float diffuse4 = max(0.0, dot(vNormal, lightDirection4));  // Factor de iluminación difusa para la cuarta luz
			  float diffuse5 = max(0.0, dot(vNormal, lightDirection5));  // Factor de iluminación difusa para la quinta luz
			  float diffuse6 = max(0.0, dot(vNormal, lightDirection6));  // Factor de iluminación difusa para la sexta luz
			  
			  // Reflexión especular
			  float shininess = 32.0; 
			  vec3 viewDirection = normalize(vec3(0.0, 0.0, 1.0));  // Dirección de la vista
			  
			  vec3 reflectDirection1 = reflect(-lightDirection1, vNormal);  // Dirección de reflexión para la primera luz
			  vec3 reflectDirection2 = reflect(-lightDirection2, vNormal);  // Dirección de reflexión para la segunda luz
			  vec3 reflectDirection3 = reflect(-lightDirection3, vNormal);  // Dirección de reflexión para la tercera luz
			  vec3 reflectDirection4 = reflect(-lightDirection4, vNormal);  // Dirección de reflexión para la cuarta luz
			  vec3 reflectDirection5 = reflect(-lightDirection5, vNormal);  // Dirección de reflexión para la quinta luz
			  vec3 reflectDirection6 = reflect(-lightDirection6, vNormal);  // Dirección de reflexión para la sexta luz
			  
			  float specular1 = pow(max(0.0, dot(viewDirection, reflectDirection1)), shininess)*2.0;  // Factor de iluminación especular para la primera luz
			  float specular2 = pow(max(0.0, dot(viewDirection, reflectDirection2)), shininess)*2.0;  // Factor de iluminación especular para la segunda luz
			  float specular3 = pow(max(0.0, dot(viewDirection, reflectDirection3)), shininess)*2.0;  // Factor de iluminación especular para la tercera luz
			  float specular4 = pow(max(0.0, dot(viewDirection, reflectDirection4)), shininess)*2.0;  // Factor de iluminación especular para la cuarta luz
			  float specular5 = pow(max(0.0, dot(viewDirection, reflectDirection5)), shininess)*2.0;  // Factor de iluminación especular para la quinta luz
			  float specular6 = pow(max(0.0, dot(viewDirection, reflectDirection6)), shininess)*2.0;  // Factor de iluminación especular para la sexta luz
			  
			  // Ajusta la intensidad de la reflexión especular multiplicándola por un factor
			  float specularIntensity1 = specular1 * 2.0;
			  float specularIntensity2 = specular2 * 2.0;
			  float specularIntensity3 = specular3 * 2.0;
			  float specularIntensity4 = specular4 * 2.0;
			  float specularIntensity5 = specular5 * 2.0;
			  float specularIntensity6 = specular6 * 2.0;
			  
			  // Color resultante
			  vec3 baseColor = vec3(vDisplacement);  // Color base
			  vec3 finalColor = (baseColor/15.0) * (diffuse1 + diffuse2 + diffuse3 + diffuse4 + diffuse5 + diffuse6 + specularIntensity1 + specularIntensity2 + specularIntensity3 + specularIntensity4 + specularIntensity5 + specularIntensity6);  // Color final con iluminación
			  
			  gl_FragColor = vec4(finalColor, 1.0);
			}