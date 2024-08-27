# Convención de Ramas - Equipo Backend

## Rama Principal de Desarrollo
- `back-develop`: Para el desarrollo del backend.
  - Esta rama sirve como integradores para el equipo, permitiendo que las funcionalidades estén completamente desarrolladas y probadas antes de fusionarse con main.

- `main`: Esta rama refleja la versión estable y lista para producción de todo el proyecto, tanto frontend como backend.
  - Idealmente, ningún código se debería fusionar directamente aquí sin pasar por un proceso de revisión y pruebas.

### Feature Branches:
- **Backend Features (`back/feature/...`)**: Estas ramas se crean desde `back-develop` para trabajar en nuevas funcionalidades del backend.

### Flujo de Trabajo Sugerido:
1) **Crear Feature Branch:**
   - Cuando inicias una nueva funcionalidad en el backend, creas una rama como `back/feature/nombre-feature` a partir de `back-develop`.
2) **Desarrollo y Pruebas:**
   - Desarrollas la funcionalidad en la feature branch y realizas las pruebas necesarias.
3) **Merge a Develop:**
   - Una vez completada y probada la funcionalidad, haces un pull request (PR) para fusionar la rama `back/feature/nombre-feature` en `back-develop`.
   - El código en `back-develop` debería ser estable y estar listo para ser integrado con otras funcionalidades.
4) **Preparación para Release:**
   - Cuando se tenga una versión estable en `back-develop`, y se considere que está lista para ser integrada en la rama `main`, se fusiona `back-develop` con `main` o con una `rama release`, dependiendo del flujo de trabajo.

## Estructura de Ramas

### Convención de Ramas con:
- **Prefijo:** `back`
- **Tipo de Rama**
- **Descripción**
- **Referencia a Historias de Usuario (Opcional)**

### Estructura Propuesta:

`<equipo>/<tipo>/<descripción-corta>-<id-historia-usuario>`


### Ejemplos:
- `back/feature/order-creation-US-123`
- `back/bugfix/fix-client-service-null-pointer`
- `back/refactor/improve-query-performance`
- `back/chore/update-spring-version`

## Tipos de Ramas Comunes

- **feature:** Para nuevas funcionalidades.
    - Ejemplo: `back/feature/order-creation` o `back/feature/user-authentication-US-123`
- **bugfix:** Para corregir errores.
    - Ejemplo: `back/bugfix/fix-order-total-calculation` o `back/bugfix/fix-login-issue-US-104`
- **hotfix:** Para correcciones urgentes en producción.
    - Ejemplo: `back/hotfix/fix-critical-security-vulnerability`
- **refactor:** Para mejoras de código que no alteran la funcionalidad.
    - Ejemplo: `back/refactor/improve-query-performance` o `back/refactor/order-service-refactor`
- **release:** Para preparar una nueva versión.
    - Ejemplo: `back/release/1.0.0`
- **test:** Para pruebas o experimentos.
    - Ejemplo: `back/test/new-caching-strategy`
- **chore:** Para tareas de mantenimiento o configuración.
    - Ejemplo: `back/chore/update-dependencies`

## Buenas Prácticas

- **Usa Descripciones Claras:** Asegúrate de que la descripción sea lo suficientemente clara para que cualquier miembro del equipo pueda entender de qué se trata la rama.
    - Ejemplo: `back/feature/client-registration` es más claro que `back/feature/client`
- **Mantén los Nombres Cortos:** Intenta que los nombres de las ramas sean concisos pero informativos.
- **Incluye el ID de la Historia de Usuario (Opcional):** Si estás trabajando en una historia de usuario específica, puedes incluir el ID al final del nombre de la rama.
    - Ejemplo: `back/feature/order-creation-US-123`
- **Usa Guiones (-) para Separar Palabras:** Esto mejora la legibilidad.
- **Evita Caracteres Especiales:** Limita el uso de caracteres especiales para evitar problemas de compatibilidad.
- **Prefijos Estándar:** Usa prefijos consistentes como `feature/`, `bugfix/`, etc., para facilitar la identificación del propósito de la rama.

### Ejemplos de Nombres de Ramas
- `back/feature/add-payment-integration`
- `back/bugfix/fix-null-pointer-exception`
- `back/hotfix/patch-payment-issue`
- `back/refactor/simplify-order-processing`
- `back/release/1.2.0`
- `back/chore/cleanup-unused-dependencies`

## Integración con Historias de Usuario

- Si una historia de usuario abarca varias ramas, considera agregar el ID de la historia al final de las ramas relevantes.
    - Ejemplo: `back/feature/add-discount-feature-US-105`

## Ramificación para Releases

- **Main Branches:** `main` o `master` para la versión estable y `develop` para la versión en desarrollo.
- **Release Branches:** Crea ramas como `release/1.0.0` cuando estés preparando una nueva versión.

## Consideraciones de Flujo de Trabajo

- **Evita Ramas Temporales:** Si necesitas hacer experimentos o pruebas, usa ramas claramente marcadas y elimínalas después.
    - Ejemplo: `back/test/new-feature-experiment`

## Beneficios de esta Convención

- **Claridad:** Es fácil identificar si una rama pertenece al backend o al frontend solo con ver su nombre.
- **Organización:** Mantiene el repositorio más organizado, especialmente en proyectos grandes donde hay múltiples ramas activas.
- **Búsqueda y Filtrado:** Puedes usar herramientas de búsqueda y filtrado en Git para encontrar ramas específicas del backend o frontend rápidamente.
- **Evita Confusiones:** Minimiza la posibilidad de que alguien accidentalmente mezcle cambios de backend en una rama de frontend y viceversa.

