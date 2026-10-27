# Almacenamiento web local en JavaScript

## ¿Qué es?

El almacenamiento web permite guardar datos en el navegador para utilizarlos después, sin necesitar una base de datos para información sencilla.

JavaScript ofrece dos opciones principales:

- **LocalStorage:** conserva los datos aunque se cierre y se vuelva a abrir el navegador, hasta que se eliminen.
- **SessionStorage:** conserva los datos durante la sesión de una pestaña; normalmente se eliminan al cerrar esa pestaña.

## Métodos principales

| Método | Función |
|---|---|
| `setItem(clave, valor)` | Guarda un dato. |
| `getItem(clave)` | Recupera un dato. |
| `removeItem(clave)` | Elimina un dato específico. |
| `clear()` | Elimina todos los datos del almacenamiento actual. |

## Ejemplo básico

```javascript
localStorage.setItem("nombre", "Harold");

const nombre = localStorage.getItem("nombre");
console.log(nombre);

localStorage.removeItem("nombre");
```

## Guardar objetos y arreglos

El almacenamiento web guarda valores como texto. Para guardar objetos o arreglos, se utiliza `JSON.stringify()` y para recuperarlos se usa `JSON.parse()`.

```javascript
const estudiante = {
    nombre: "Harold",
    curso: "Grado 11"
};

localStorage.setItem("estudiante", JSON.stringify(estudiante));

const datos = JSON.parse(localStorage.getItem("estudiante"));
console.log(datos.nombre);
```

## Diferencias entre LocalStorage y SessionStorage

| LocalStorage | SessionStorage |
|---|---|
| Los datos permanecen después de cerrar el navegador. | Los datos duran durante la sesión de la pestaña. |
| Se comparte entre pestañas del mismo origen. | Cada pestaña tiene su propio almacenamiento de sesión. |
| Útil para preferencias y configuraciones. | Útil para datos temporales de una sesión. |

## Ejemplo interactivo

Abre `index.html` en tu navegador. Escribe un nombre y pulsa **Guardar**. Luego recarga la página y pulsa **Mostrar** para comprobar que el dato permanece guardado.

## Ejercicio práctico: lista de tareas

Crea una página que permita:

1. Escribir una tarea y agregarla a una lista.
2. Mostrar todas las tareas guardadas.
3. Conservar las tareas después de recargar la página.
4. Eliminar una tarea individual.
5. Borrar todas las tareas.
6. Mostrar un mensaje cuando no haya tareas.

**Requisitos:** usa `localStorage`, `JSON.stringify()` y `JSON.parse()`. Organiza el código en HTML, CSS y JavaScript.

## Seguridad

No guardes contraseñas ni información sensible en LocalStorage o SessionStorage. Los datos pueden ser consultados o modificados por scripts que se ejecuten en el mismo origen y el usuario puede eliminarlos.

## Conclusión

El almacenamiento web permite que una página recuerde información sencilla en el navegador. LocalStorage conserva los datos entre visitas y SessionStorage los mantiene durante una sesión de pestaña.