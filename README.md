# CRUD Sencillo en JavaScript

## 1. Descripción del Proyecto

Este proyecto es una aplicación CRUD (Crear, Leer, Actualizar, Eliminar) sencilla para gestionar tareas. La aplicación está desarrollada en JavaScript, HTML y un mínimo de CSS opcional. Utiliza una estructura de componentes modulares para facilitar la mantenibilidad y expansión del código.

## 2. Estructura de Archivos

El proyecto tiene la siguiente estructura de archivos:

```angular2html
crud/
    index.html # Contenedor principal de la aplicación
    data.js # Datos iniciales de la lista de tareas
    script.js # Lógica del CRUD
    components/
        Table.js # Componente de la tabla de tareas
        Form.js # Componente del formulario de tareas
```

### Archivo `index.html`

Contiene el HTML básico y carga los scripts y estilos necesarios para la aplicación.

### Archivo `data.js`

Contiene un array de objetos que representa las tareas iniciales de la aplicación.

### Archivo `script.js`

Este archivo contiene la lógica principal del CRUD:
- `addTask`: Agrega una nueva tarea al array `tasks`.
- `updateTask`: Actualiza una tarea existente basada en el título de la tarea.
- `deleteTask`: Elimina una tarea buscando por su título.
- `editTask`: Rellena el formulario con los datos de la tarea para su edición.

### Componentes `Table.js` y `Form.js`

- **`Table.js`**: Renderiza la lista de tareas en una tabla con opciones de edición y eliminación.
- **`Form.js`**: Renderiza un formulario para añadir y editar tareas.

## 3. Funcionalidades del CRUD

### Crear Tarea

Al ingresar un título y descripción en el formulario y presionar "Guardar", se llama a la función `addTask` que añade una nueva tarea a `tasks` y refresca la tabla.

### Leer Tareas

Las tareas se muestran en una tabla generada dinámicamente por el componente `Table.js`.

### Editar Tarea

Al presionar el botón **Edit** en una fila de la tabla, los datos de la tarea se cargan en el formulario. Después de modificar la tarea y presionar "Guardar", se llama a `updateTask`, que actualiza la tarea en `tasks`.

### Eliminar Tarea

Al presionar el botón **Delete** en una fila, se llama a `deleteTask`, que elimina la tarea de `tasks` y refresca la tabla.

## 4. Código Ejemplo

### Código para `addTask` en `script.js`

```javascript
function addTask(task) {
    tasks.push(task); // Añadir tarea al array de tareas
    refresh();        // Refrescar la tabla para mostrar la tarea añadida
}
```

## 5. Notas Importantes

   Identificación por Título: El sistema utiliza el título como identificador único. Esto puede ser un problema si los títulos se repiten, ya que no utiliza IDs únicos.
   Modularidad: La aplicación está dividida en componentes (Formulario y Tabla), facilitando la escalabilidad y mantenibilidad del código.

## 6. Mejoras Futuras

   Implementar IDs únicos para las tareas para evitar problemas con títulos duplicados.
   Añadir mensajes de confirmación al eliminar una tarea.
   Integrar estilos CSS para mejorar la apariencia de la aplicación.

## 7. Conclusión

Este CRUD en JavaScript es un ejemplo sencillo pero funcional de cómo gestionar datos en una aplicación sin el uso de bases de datos. La estructura modular y el uso de componentes mejoran la organización del código, permitiendo futuras expansiones y personalizaciones.

# 📫 Contacto

¿Interesado en colaborar o saber más sobre mi experiencia? No dudes en contactarme:
[![Email](https://img.shields.io/badge/-Email-D14836?style=flat&logo=gmail&logoColor=white)](mailto:osoriocruzjairo@gmail.com)
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jairo-osorio-c-8461061b3/)
