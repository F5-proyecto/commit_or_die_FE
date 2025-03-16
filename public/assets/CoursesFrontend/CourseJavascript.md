Bienvenidos al curso básico de JavaScript. En este curso, aprenderás los fundamentos del lenguaje JavaScript y cómo aplicarlo para crear funcionalidades interactivas en tus páginas web.

---

## ¿Qué es JavaScript?

JavaScript es un lenguaje de programación que permite añadir interactividad y dinamismo a las páginas web. Se ejecuta en el navegador y se utiliza principalmente para manejar eventos, modificar el contenido de la página y comunicarse con servidores sin tener que recargar la página (AJAX).

---

## Sintaxis Básica

La sintaxis de JavaScript se basa en la declaración de variables, funciones, condiciones y bucles. Un ejemplo básico de sintaxis es:

```javascript
console.log("¡Hola, mundo!");
```

---

## Variables

Las variables se usan para almacenar datos que luego podemos utilizar en nuestro código. En JavaScript, se pueden declarar variables con `var`, `let` o `const`.

- **`let`**: Declara una variable cuyo valor puede cambiar.
- **`const`**: Declara una variable cuyo valor no puede cambiar después de su asignación.

Ejemplo:

```javascript
let nombre = "Juan";
const edad = 25;

console.log(nombre); // Juan
console.log(edad);   // 25
```

---

## Funciones

Las funciones son bloques de código que se pueden ejecutar cuando se llaman. Se pueden definir con la palabra clave `function`.

```javascript
function saludar(nombre) {
  return "Hola, " + nombre;
}

console.log(saludar("Ana")); // Hola, Ana
```

También podemos usar funciones anónimas o funciones flecha (Arrow Functions):

```javascript
const multiplicar = (a, b) => a * b;

console.log(multiplicar(2, 3)); // 6
```

---

## Condicionales

Las sentencias condicionales permiten ejecutar un bloque de código solo si se cumple una condición.

- **`if`**: Ejecuta el bloque si la condición es verdadera.
- **`else`**: Ejecuta el bloque si la condición es falsa.
- **`else if`**: Permite comprobar varias condiciones.

```javascript
let edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}
```

---

## Bucles

Los bucles permiten repetir un bloque de código varias veces.

- **`for`**: Repite un bloque de código un número determinado de veces.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}
```

- **`while`**: Repite un bloque de código mientras la condición sea verdadera.

```javascript
let i = 0;
while (i < 5) {
  console.log(i); // 0, 1, 2, 3, 4
  i++;
}
```

---

## Objetos

Los objetos son colecciones de propiedades y métodos. Las propiedades son valores asociados a una clave, y los métodos son funciones asociadas al objeto.

```javascript
const persona = {
  nombre: "Juan",
  edad: 25,
  saludar: function() {
    console.log("Hola, " + this.nombre);
  }
};

persona.saludar(); // Hola, Juan
```

---

## Arreglos

Un arreglo (o array) es una lista ordenada de elementos. Se puede acceder a cada elemento por su índice.

```javascript
let frutas = ["manzana", "banana", "naranja"];

console.log(frutas[0]); // manzana
console.log(frutas.length); // 3
```

---

## Eventos

JavaScript permite responder a eventos que ocurren en la página web, como clics, movimientos del mouse o teclas presionadas.

Ejemplo de cómo manejar un evento `click` en un botón:

```html
<button id="miBoton">Haz clic</button>

<script>
  document.getElementById("miBoton").addEventListener("click", function() {
    alert("¡Has hecho clic!");
  });
</script>
```

---

## Asincronía y Promesas

JavaScript permite manejar tareas asíncronas, como la carga de datos desde un servidor, mediante el uso de **promesas** y `async/await`.

### **Promesa:**
```javascript
let promesa = new Promise((resolve, reject) => {
  let exito = true;
  if (exito) {
    resolve("¡Operación exitosa!");
  } else {
    reject("Ocurrió un error");
  }
});

promesa.then(result => console.log(result)).catch(error => console.log(error));
```

### **Async/Await:**
```javascript
async function obtenerDatos() {
  let respuesta = await fetch("https://api.example.com");
  let datos = await respuesta.json();
  console.log(datos);
}

obtenerDatos();
```

---

## Conclusión

JavaScript es un lenguaje poderoso que permite crear aplicaciones interactivas y dinámicas en la web. Este curso cubre los aspectos fundamentales, pero la clave es seguir practicando y explorando nuevas funciones y características del lenguaje.

¡Sigue aprendiendo y diviértete programando!
