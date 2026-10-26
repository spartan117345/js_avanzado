# ARRAYS EN JAVASCRIPT

## 1. ¿Qué son los Arrays?

Los Arrays son estructuras que permiten guardar varios datos en una sola variable, como nombres, números o frutas.

Ejemplo:

```javascript
let frutas = ["Manzana", "Pera", "Uva"];
console.log(frutas);
```

## 2. ¿Cómo funcionan los índices?

Los índices indican la posición de cada elemento. En JavaScript, empiezan desde el número 0.

```javascript
console.log(frutas[0]); // Manzana
console.log(frutas[1]); // Pera
```

## 3. Métodos principales

| Método | Función |
|---|---|
| `length` | Cuenta los elementos. |
| `push()` | Agrega un elemento al final. |
| `pop()` | Elimina el último elemento. |
| `unshift()` | Agrega un elemento al inicio. |
| `shift()` | Elimina el primer elemento. |
| `includes()` | Comprueba si existe un elemento. |
| `indexOf()` | Busca la posición de un elemento. |

## 4. Ejemplo práctico

```javascript
let videojuegos = ["Minecraft", "FIFA", "Roblox"];

videojuegos.push("Mario");
console.log(videojuegos);

videojuegos.pop();
console.log(videojuegos);

console.log(videojuegos.length);
console.log(videojuegos.includes("FIFA"));
```

En este ejemplo, creamos una lista de videojuegos, agregamos uno, eliminamos el último y consultamos cuántos elementos hay y si existe uno específico.

## 5. Ejercicio para los compañeros

Crea un Array con cinco videojuegos y realiza lo siguiente:

1. Muestra la lista en la consola.
2. Agrega un videojuego con `push()`.
3. Elimina el último con `pop()`.
4. Muestra la cantidad con `length`.
5. Comprueba si existe `"Roblox"` con `includes()`.

## 6. Conclusión

Los Arrays permiten almacenar y organizar varios datos en una sola variable. Sus métodos facilitan agregar, eliminar y buscar elementos, lo que los hace útiles al programar.