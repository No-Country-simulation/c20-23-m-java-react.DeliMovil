# Convención de Commits - Equipo Backend

## Estructura de Commits

### Convención de Commits con:
- **Prefijo back**
- **Tipo de Commit**
- **Alcance**
- **Mensaje Breve**
- **Referencia a Historias de Usuario**

### Estructura Propuesta:
`back: <tipo>(<alcance>): <mensaje breve> [ID historia de usuario]`


### Ejemplos:
- `back: feat(order): add endpoint to create new orders [US-123]`
- `back: fix(client): correct null pointer exception in client service`
- `back: refactor(order_detail): optimize query for order details`
- `back: style(delivery): format code according to guidelines`
- `back: test(product): add unit tests for product service`
- `back: docs(api): update API documentation for client endpoints`
- `back: chore: update Spring Boot version`
- `back: perf(restaurant): improve query performance for restaurant search`
- `back: ci: update CI pipeline to include integration tests`
- `back: revert: revert "feat(order): add endpoint to create new orders"`

### Mas Ejemplos:
- `back: feat(order): implement endpoint to create new orders [US-123]`
- `back: fix(client): correct client address validation [US-104]`
- `back: refactor(product): update product search logic [US-205]`
- `back: test(delivery): add integration test for delivery service [US-302]`
- `back: docs(api): update API documentation for order creation [US-150]`

## Tipos de Commits
- **feat**: Nueva funcionalidad o característica.
- **fix**: Corrección de errores.
- **refactor**: Cambios en el código que no afectan la funcionalidad (mejora de código, reestructuración).
- **style**: Cambios de formato, como espacios, puntos y comas, que no afectan el código.
- **test**: Adición o modificación de tests.
- **docs**: Cambios en la documentación.
- **chore**: Tareas de mantenimiento y cambios menores, como actualizaciones de dependencias.
- **perf**: Cambios que mejoran el rendimiento.
- **ci**: Cambios en la configuración del CI/CD.
- **revert**: Revertir un commit anterior.

## Alcance
- **Opcional pero recomendado**: Identificar la parte específica del proyecto donde se hizo el cambio, como `order`, `client`, `delivery`, etc.

## Referencia a la Historia de Usuario
- **Incluye el ID de la historia de usuario entre corchetes al final del mensaje.**
- Cada commit relacionado con una historia de usuario debe incluir el ID correspondiente.
- **Múltiples Commits por Historia:** Si una historia de usuario implica varios cambios, distribuye los commits de manera que cada uno esté asociado a la misma historia pero refleje los cambios específicos.
- **Colaboración:** Si la historia de usuario involucra a más de un desarrollador, cada uno debe incluir el mismo ID de la historia en sus respectivos commits.

## Regla General
- **Haz commits pequeños y frecuentes:** Evita agrupar demasiados cambios en un solo commit.
- **Escribe commits en inglés:** Esto facilita la comprensión si el equipo es internacional o si el proyecto es público.
- **Sigue la convención estrictamente:** Esto ayudará a mantener un historial de cambios limpio y coherente.
