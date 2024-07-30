Funcionalidades del Encriptador de Texto
1. Interfaz de Usuario
1.1 Entrada de Texto

Un área de texto (textarea) donde el usuario puede ingresar el texto a encriptar o desencriptar.
Placeholder que indica "Escriba su texto aquí".

1.2 Botones de Acción

Encriptar: Convierte el texto ingresado a su versión encriptada.
Desencriptar: Convierte el texto encriptado a su versión original.
Copiar: Copia el texto resultante al portapapeles.

1.3 Área de Resultado

Inicialmente muestra un mensaje e imagen indicando que no se ha encontrado ningún mensaje.
Cambia a mostrar el resultado de la encriptación/desencriptación cuando se procesa el texto.

2. Lógica de Encriptación/Desencriptación
2.1 Reglas de Encriptación

'e' → 'enter'
'i' → 'imes'
'a' → 'ai'
'o' → 'ober'
'u' → 'ufat'

2.2 Proceso de Encriptación

Reemplaza cada vocal en el texto de entrada por su correspondiente secuencia encriptada.

2.3 Proceso de Desencriptación

Revierte el proceso de encriptación, reemplazando cada secuencia encriptada por su vocal original.

3. Validación de Entrada
3.1 Restricciones

Solo acepta letras minúsculas.
No permite acentos ni caracteres especiales.

3.2 Feedback al Usuario

Muestra una alerta si se ingresan caracteres no permitidos.

4. Manejo de la Visualización
4.1 Contenido Inicial vs Resultado

Muestra el contenido inicial cuando el área de entrada está vacía.
Cambia al área de resultado cuando se procesa texto.

4.2 Actualización Dinámica

La interfaz se actualiza en tiempo real según la interacción del usuario.

5. Funcionalidad de Copiado
5.1 Copiar al Portapapeles

Al hacer clic en "Copiar", el texto resultante se copia al portapapeles del sistema.

5.2 Confirmación

Muestra una alerta para confirmar que el texto ha sido copiado.

6. Responsividad

La interfaz se adapta a diferentes tamaños de pantalla (escritorio, tablet, móvil).
Los elementos se reorganizan y redimensionan para mantener la usabilidad en todos los dispositivos.
